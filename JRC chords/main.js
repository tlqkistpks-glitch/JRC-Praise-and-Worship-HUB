/* =========================================================================
   Worship Songs — UI wiring
   ========================================================================= */

applyTheme();

const els = {
  libraryView: document.getElementById("view-library"),
  songView: document.getElementById("view-song"),
  setplayView: document.getElementById("view-setplay"),

  themeToggleLib: document.getElementById("theme-toggle-lib"),
  searchInput: document.getElementById("search-input"),
  tabs: document.querySelectorAll(".tab"),
  songList: document.getElementById("song-list"),
  setBuilder: document.getElementById("set-builder"),
  setCount: document.getElementById("set-count"),
  setList: document.getElementById("set-list"),
  clearSetBtn: document.getElementById("clear-set-btn"),
  startSetBtn: document.getElementById("start-set-btn"),

  backBtn: document.getElementById("back-btn"),
  songTitle: document.getElementById("song-title"),
  songSubtitle: document.getElementById("song-subtitle"),
  favBtn: document.getElementById("fav-btn"),
  transposeDown: document.getElementById("transpose-down"),
  transposeUp: document.getElementById("transpose-up"),
  currentKey: document.getElementById("current-key"),
  textSmaller: document.getElementById("text-smaller"),
  textBigger: document.getElementById("text-bigger"),
  addToSetBtn: document.getElementById("add-to-set-btn"),
  songBody: document.getElementById("song-body"),
  songNote: document.getElementById("song-note"),
  prevBtn: document.getElementById("prev-btn"),
  libraryBtn: document.getElementById("library-btn"),
  nextBtn: document.getElementById("next-btn"),

  setplayBackBtn: document.getElementById("setplay-back-btn"),
  setplayTitle: document.getElementById("setplay-title"),
  setplayProgress: document.getElementById("setplay-progress"),
  setplayTransposeDown: document.getElementById("setplay-transpose-down"),
  setplayTransposeUp: document.getElementById("setplay-transpose-up"),
  setplayCurrentKey: document.getElementById("setplay-current-key"),
  setplayBody: document.getElementById("setplay-body"),
  setplayNote: document.getElementById("setplay-note"),
  setplayPrevBtn: document.getElementById("setplay-prev-btn"),
  setplayExitBtn: document.getElementById("setplay-exit-btn"),
  setplayNextBtn: document.getElementById("setplay-next-btn"),
};

let activeTab = "all";
let currentListSnapshot = sortedSongs(SONGS); // used for prev/next in song view

const FONT_SIZE_KEY = "worship_font_size";
function getFontSize() { return LS.get(FONT_SIZE_KEY, 19); }
function setFontSize(px) {
  const clamped = Math.max(14, Math.min(30, px));
  LS.set(FONT_SIZE_KEY, clamped);
  document.documentElement.style.setProperty("--lyric-size", clamped + "px");
}
setFontSize(getFontSize());

/* --------------------------------- routing -------------------------------- */

function showView(name) {
  els.libraryView.hidden = name !== "library";
  els.songView.hidden = name !== "song";
  els.setplayView.hidden = name !== "setplay";
  window.scrollTo(0, 0);
}

function parseHash() {
  const h = window.location.hash.replace(/^#\/?/, "");
  if (h.startsWith("song/")) return { route: "song", id: decodeURIComponent(h.slice(5)) };
  if (h.startsWith("setplay/")) return { route: "setplay", index: parseInt(h.slice(8), 10) || 0 };
  return { route: "library" };
}

function navigate(hash) {
  window.location.hash = hash;
}

window.addEventListener("hashchange", render);

function render() {
  const r = parseHash();
  if (r.route === "song") {
    const song = findSong(r.id);
    if (!song) { navigate("#/"); return; }
    renderSongView(song);
    showView("song");
  } else if (r.route === "setplay") {
    renderSetPlayView(r.index);
    showView("setplay");
  } else {
    renderLibrary();
    showView("library");
  }
}

/* -------------------------------- library view ----------------------------- */

function currentQuery() { return els.searchInput.value || ""; }

function listForActiveTab() {
  const base = searchSongs(currentQuery());
  if (activeTab === "favorites") {
    const favs = getFavorites();
    return base.filter(s => favs.has(s.id));
  }
  return base; // "all" and "set" both browse the full catalog to build/pick from
}

function renderLibrary() {
  els.songList.hidden = activeTab === "set";
  els.setBuilder.hidden = activeTab !== "set";

  const favs = getFavorites();
  const setIds = getWorshipSet();
  els.setCount.textContent = setIds.length ? ` (${setIds.length})` : "";

  if (activeTab === "set") {
    renderSetBuilder();
    return;
  }

  const list = listForActiveTab();
  currentListSnapshot = list;
  els.songList.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = activeTab === "favorites"
      ? "No favorites yet. Open a song and tap the star to add it here."
      : "No songs match your search.";
    els.songList.appendChild(empty);
    return;
  }

  list.forEach(song => {
    const card = document.createElement("div");
    card.className = "song-card";

    const main = document.createElement("div");
    main.className = "song-card-main";
    const title = document.createElement("h2");
    title.className = "song-card-title";
    title.textContent = song.title;
    const meta = document.createElement("div");
    meta.className = "song-card-meta";
    meta.textContent = [song.key ? `Key ${song.key}` : null, song.composer || null].filter(Boolean).join(" \u00B7 ");
    main.appendChild(title);
    main.appendChild(meta);
    main.addEventListener("click", () => navigate(`#/song/${encodeURIComponent(song.id)}`));

    const actions = document.createElement("div");
    actions.className = "song-card-actions";

    const setBtn = document.createElement("button");
    setBtn.className = "chip-btn" + (setIds.includes(song.id) ? " set-active" : "");
    setBtn.textContent = setIds.includes(song.id) ? "\u2713" : "+";
    setBtn.setAttribute("aria-label", "Add to worship set");
    setBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleInSet(song.id);
      renderLibrary();
    });

    const favBtn = document.createElement("button");
    favBtn.className = "chip-btn" + (favs.has(song.id) ? " active" : "");
    favBtn.innerHTML = favs.has(song.id) ? "\u2605" : "\u2606";
    favBtn.setAttribute("aria-label", "Toggle favorite");
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(song.id);
      renderLibrary();
    });

    actions.appendChild(setBtn);
    actions.appendChild(favBtn);

    card.appendChild(main);
    card.appendChild(actions);
    els.songList.appendChild(card);
  });
}

function renderSetBuilder() {
  const setIds = getWorshipSet();
  els.setList.innerHTML = "";
  if (setIds.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Your worship set is empty. Switch to \u201cAll Songs\u201d and tap + on the songs you want to add.";
    els.setBuilder.insertBefore(empty, els.setList);
    return;
  }
  setIds.forEach((id, i) => {
    const song = findSong(id);
    if (!song) return;
    const li = document.createElement("li");
    li.className = "set-item";

    const num = document.createElement("span");
    num.className = "set-item-num";
    num.textContent = i + 1;

    const title = document.createElement("span");
    title.className = "set-item-title";
    title.textContent = song.title;

    const up = document.createElement("button");
    up.className = "set-item-move";
    up.textContent = "\u2191";
    up.setAttribute("aria-label", "Move up");
    up.disabled = i === 0;
    up.addEventListener("click", () => {
      const arr = getWorshipSet();
      [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      saveWorshipSet(arr);
      renderSetBuilder();
    });

    const down = document.createElement("button");
    down.className = "set-item-move";
    down.textContent = "\u2193";
    down.setAttribute("aria-label", "Move down");
    down.disabled = i === setIds.length - 1;
    down.addEventListener("click", () => {
      const arr = getWorshipSet();
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      saveWorshipSet(arr);
      renderSetBuilder();
    });

    const remove = document.createElement("button");
    remove.className = "set-item-remove";
    remove.textContent = "\u2715";
    remove.setAttribute("aria-label", "Remove from set");
    remove.addEventListener("click", () => {
      const arr = getWorshipSet().filter(x => x !== id);
      saveWorshipSet(arr);
      renderSetBuilder();
      els.setCount.textContent = arr.length ? ` (${arr.length})` : "";
    });

    li.appendChild(num);
    li.appendChild(title);
    li.appendChild(up);
    li.appendChild(down);
    li.appendChild(remove);
    els.setList.appendChild(li);
  });
}

els.clearSetBtn.addEventListener("click", () => {
  saveWorshipSet([]);
  renderLibrary();
});

els.startSetBtn.addEventListener("click", () => {
  const arr = getWorshipSet();
  if (arr.length === 0) return;
  LS.set(SET_INDEX_KEY, 0);
  navigate("#/setplay/0");
});

els.tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    els.tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    activeTab = tab.dataset.tab;
    renderLibrary();
  });
});

els.searchInput.addEventListener("input", () => {
  if (activeTab === "set") return;
  renderLibrary();
});

els.themeToggleLib.addEventListener("click", toggleTheme);

/* --------------------------------- song view ------------------------------- */

let currentSongId = null;

function renderSongView(song) {
  currentSongId = song.id;
  els.songTitle.textContent = song.title;
  els.songSubtitle.textContent = song.subtitle || song.composer || "";
  els.favBtn.classList.toggle("fav-active", isFavorite(song.id));
  updateKeyDisplay(song);
  renderSongBody(song, els.songBody);

  els.songNote.hidden = !song.note;
  els.songNote.textContent = song.note || "";

  const list = currentListSnapshot.length ? currentListSnapshot : sortedSongs(SONGS);
  const idx = list.findIndex(s => s.id === song.id);
  els.prevBtn.disabled = idx <= 0;
  els.nextBtn.disabled = idx === -1 || idx >= list.length - 1;
  els.prevBtn.onclick = () => { if (idx > 0) navigate(`#/song/${encodeURIComponent(list[idx - 1].id)}`); };
  els.nextBtn.onclick = () => { if (idx < list.length - 1) navigate(`#/song/${encodeURIComponent(list[idx + 1].id)}`); };
}

function updateKeyDisplay(song) {
  const semis = getTransposeAmount(song.id);
  els.currentKey.textContent = song.key ? displayKey(song.key, semis) : "\u2014";
}

els.backBtn.addEventListener("click", () => navigate("#/"));
els.libraryBtn.addEventListener("click", () => navigate("#/"));

els.favBtn.addEventListener("click", () => {
  if (!currentSongId) return;
  const active = toggleFavorite(currentSongId);
  els.favBtn.classList.toggle("fav-active", active);
});

els.addToSetBtn.addEventListener("click", () => {
  if (!currentSongId) return;
  const inSet = toggleInSet(currentSongId);
  els.addToSetBtn.textContent = inSet ? "\u2713 In Set" : "+ Set";
  setTimeout(() => { els.addToSetBtn.textContent = "+ Set"; }, 1200);
});

els.transposeDown.addEventListener("click", () => {
  if (!currentSongId) return;
  const amt = getTransposeAmount(currentSongId) - 1;
  setTransposeAmount(currentSongId, amt);
  const song = findSong(currentSongId);
  updateKeyDisplay(song);
  renderSongBody(song, els.songBody);
});
els.transposeUp.addEventListener("click", () => {
  if (!currentSongId) return;
  const amt = getTransposeAmount(currentSongId) + 1;
  setTransposeAmount(currentSongId, amt);
  const song = findSong(currentSongId);
  updateKeyDisplay(song);
  renderSongBody(song, els.songBody);
});

els.textSmaller.addEventListener("click", () => setFontSize(getFontSize() - 1));
els.textBigger.addEventListener("click", () => setFontSize(getFontSize() + 1));

/* ------------------------------ worship set player -------------------------- */

function renderSetPlayView(index) {
  const setIds = getWorshipSet();
  if (setIds.length === 0) { navigate("#/"); return; }
  const clamped = Math.max(0, Math.min(index, setIds.length - 1));
  LS.set(SET_INDEX_KEY, clamped);
  const song = findSong(setIds[clamped]);
  if (!song) { navigate("#/"); return; }

  els.setplayTitle.textContent = song.title;
  els.setplayProgress.textContent = `Song ${clamped + 1} of ${setIds.length}`;
  const semis = getTransposeAmount(song.id);
  els.setplayCurrentKey.textContent = song.key ? displayKey(song.key, semis) : "\u2014";
  renderSongBody(song, els.setplayBody);
  els.setplayNote.hidden = !song.note;
  els.setplayNote.textContent = song.note || "";

  els.setplayPrevBtn.disabled = clamped === 0;
  els.setplayNextBtn.disabled = clamped === setIds.length - 1;

  els.setplayPrevBtn.onclick = () => navigate(`#/setplay/${clamped - 1}`);
  els.setplayNextBtn.onclick = () => navigate(`#/setplay/${clamped + 1}`);

  els.setplayTransposeDown.onclick = () => {
    const amt = getTransposeAmount(song.id) - 1;
    setTransposeAmount(song.id, amt);
    renderSetPlayView(clamped);
  };
  els.setplayTransposeUp.onclick = () => {
    const amt = getTransposeAmount(song.id) + 1;
    setTransposeAmount(song.id, amt);
    renderSetPlayView(clamped);
  };
}

els.setplayBackBtn.addEventListener("click", () => navigate("#/"));
els.setplayExitBtn.addEventListener("click", () => navigate("#/"));

/* ---------------------------------- boot ------------------------------------ */

render();
