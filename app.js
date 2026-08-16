/* =========================================================================
   Worship Song Library — app logic
   Reads song data from data.js (the SONGS array). No song content lives
   in this file — only behavior.
   ========================================================================= */

/* ---------------------------- storage helpers --------------------------- */

const LS = {
  get(key, fallback) {
    try {
      const v = localStorage.getItem(key);
      return v === null ? fallback : JSON.parse(v);
    } catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  },
};

const FAVORITES_KEY = "worship_favorites";
const THEME_KEY = "worship_theme";
const TRANSPOSE_KEY_PREFIX = "worship_transpose_";
const SET_KEY = "worship_set"; // current worship set (array of song ids)
const SET_INDEX_KEY = "worship_set_index";

function getFavorites() { return new Set(LS.get(FAVORITES_KEY, [])); }
function saveFavorites(set) { LS.set(FAVORITES_KEY, Array.from(set)); }
function isFavorite(id) { return getFavorites().has(id); }
function toggleFavorite(id) {
  const f = getFavorites();
  if (f.has(id)) f.delete(id); else f.add(id);
  saveFavorites(f);
  return f.has(id);
}

function getWorshipSet() { return LS.get(SET_KEY, []); }
function saveWorshipSet(arr) { LS.set(SET_KEY, arr); }
function isInSet(id) { return getWorshipSet().includes(id); }
function toggleInSet(id) {
  const set = getWorshipSet();
  const idx = set.indexOf(id);
  if (idx >= 0) set.splice(idx, 1); else set.push(id);
  saveWorshipSet(set);
  return set.includes(id);
}

/* ------------------------------ theme ----------------------------------- */

function applyTheme() {
  const theme = LS.get(THEME_KEY, "light");
  document.documentElement.setAttribute("data-theme", theme);
}
function toggleTheme() {
  const current = LS.get(THEME_KEY, "light");
  const next = current === "light" ? "dark" : "light";
  LS.set(THEME_KEY, next);
  applyTheme();
}

/* -------------------------- chord transposition -------------------------- */

const NOTES_SHARP = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const NOTES_FLAT  = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
const NOTE_INDEX = {
  C:0, "C#":1, Db:1, D:2, "D#":3, Eb:3, E:4, F:5, "F#":6, Gb:6,
  G:7, "G#":8, Ab:8, A:9, "A#":10, Bb:10, B:11,
};

// Matches: root note, optional accidental, arbitrary suffix, optional /bass
const CHORD_RE = /^([A-G])(#|b)?([^\/\s]*)(\/([A-G])(#|b)?)?$/;

function isChordToken(token) {
  return CHORD_RE.test(token);
}

function transposeToken(token, semitones) {
  if (semitones === 0) return token;
  const m = token.match(CHORD_RE);
  if (!m) return token;
  const [, root, acc, suffix, , bassRoot, bassAcc] = m;
  const useFlats = (acc === "b") || (bassAcc === "b");
  const newRoot = transposeNote(root + (acc || ""), semitones, useFlats);
  let result = newRoot + (suffix || "");
  if (bassRoot) {
    const newBass = transposeNote(bassRoot + (bassAcc || ""), semitones, useFlats);
    result += "/" + newBass;
  }
  return result;
}

function transposeNote(note, semitones, useFlats) {
  const idx = NOTE_INDEX[note];
  if (idx === undefined) return note;
  const newIdx = ((idx + semitones) % 12 + 12) % 12;
  return (useFlats ? NOTES_FLAT : NOTES_SHARP)[newIdx];
}

function transposeChordLine(line, semitones) {
  return line.split(/(\s+)/).map(part => {
    if (/^\s+$/.test(part)) return part;
    return isChordToken(part) ? transposeToken(part, semitones) : part;
  }).join("");
}

function transposeChordProLine(line, semitones) {
  return line.replace(/\[([^\]]+)\]/g, (whole, chord) => {
    const transposed = isChordToken(chord) ? transposeToken(chord, semitones) : chord;
    return `[${transposed}]`;
  });
}

function getTransposeAmount(songId) {
  return LS.get(TRANSPOSE_KEY_PREFIX + songId, 0);
}
function setTransposeAmount(songId, amount) {
  LS.set(TRANSPOSE_KEY_PREFIX + songId, amount);
}

// Estimate a display "current key" given an original key label and semitone shift
function displayKey(originalKey, semitones) {
  if (!originalKey) return "";
  // originalKey may include extra text like "D (Capo 3)" or be like "Am"
  const m = originalKey.match(/^([A-G])(#|b)?(.*)$/);
  if (!m) return originalKey;
  const [, root, acc, rest] = m;
  const useFlats = acc === "b";
  const newRoot = transposeNote(root + (acc || ""), semitones, useFlats);
  return newRoot + rest;
}

/* ------------------------------ rendering -------------------------------- */

function renderChordLine(text) {
  const span = document.createElement("div");
  span.className = "chord-only-line";
  span.textContent = text;
  return span;
}

function renderChordProLine(text) {
  const row = document.createElement("div");
  row.className = "lyric-row";

  // Split into segments: [chord]lyricUntilNextChord
  const regex = /\[([^\]]+)\]([^\[]*)/g;
  let match;
  let hasChord = false;
  let idx = regex.lastIndex;
  let firstIdx = text.indexOf("[");

  // leading text with no chord before it
  if (firstIdx > 0) {
    const word = document.createElement("span");
    word.className = "chord-word";
    const c = document.createElement("span");
    c.className = "chord";
    c.textContent = "\u00A0";
    const l = document.createElement("span");
    l.className = "lyric";
    l.textContent = text.slice(0, firstIdx);
    word.appendChild(c);
    word.appendChild(l);
    row.appendChild(word);
  }

  while ((match = regex.exec(text)) !== null) {
    hasChord = true;
    const [, chord, lyricPart] = match;
    const word = document.createElement("span");
    word.className = "chord-word";
    const c = document.createElement("span");
    c.className = "chord";
    c.textContent = chord;
    const l = document.createElement("span");
    l.className = "lyric";
    l.textContent = lyricPart || "\u00A0";
    word.appendChild(c);
    word.appendChild(l);
    row.appendChild(word);
  }

  if (!hasChord && firstIdx === -1) {
    // plain lyric line, no chords at all
    const word = document.createElement("span");
    word.className = "chord-word";
    const c = document.createElement("span");
    c.className = "chord";
    c.textContent = "\u00A0";
    const l = document.createElement("span");
    l.className = "lyric";
    l.textContent = text;
    word.appendChild(c);
    word.appendChild(l);
    row.appendChild(word);
  }

  return row;
}

function renderSongBody(song, container) {
  container.innerHTML = "";
  const semitones = getTransposeAmount(song.id);

  song.sections.forEach(section => {
    const secEl = document.createElement("section");
    secEl.className = "song-section";

    const heading = document.createElement("h3");
    heading.className = "section-label";
    heading.textContent = section.label;
    secEl.appendChild(heading);

    const body = document.createElement("div");
    body.className = "section-body";

    section.lines.forEach(line => {
      if (line.chordLine !== undefined) {
        body.appendChild(renderChordLine(transposeChordLine(line.chordLine, semitones)));
      } else if (line.chordpro !== undefined) {
        body.appendChild(renderChordProLine(transposeChordProLine(line.chordpro, semitones)));
      }
    });

    secEl.appendChild(body);
    container.appendChild(secEl);
  });
}

/* -------------------------------- utils ---------------------------------- */

function findSong(id) {
  return SONGS.find(s => s.id === id);
}

function sortedSongs(list) {
  return [...list].sort((a, b) => a.title.localeCompare(b.title));
}

function searchSongs(query) {
  const q = query.trim().toLowerCase();
  if (!q) return sortedSongs(SONGS);
  return sortedSongs(SONGS.filter(s => {
    return s.title.toLowerCase().includes(q) ||
      (s.subtitle && s.subtitle.toLowerCase().includes(q)) ||
      (s.composer && s.composer.toLowerCase().includes(q));
  }));
}
