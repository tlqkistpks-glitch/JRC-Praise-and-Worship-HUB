# Worship Songs — your song library website

## Opening it
Double-click `index.html` to open it in your phone or computer's browser.
It works fully offline once opened — no install needed. To use it as a
"real" website (a link you can bookmark), upload the whole folder to any
free static host (GitHub Pages, Netlify, Vercel, etc.) — all five files
need to stay in the same folder.

## Files
- `index.html` — page structure (library, song view, worship-set player)
- `style.css` — all visual styling, light/dark mode
- `app.js` — chord transposition engine + rendering logic
- `main.js` — screen navigation, search, favorites, worship sets
- `data.js` — **your songs live here.** This is the only file you'll
  normally need to touch.

## Adding a new song
Open `data.js` in any text editor and copy one of the existing song
blocks as a template. Each song looks like this:

```js
{
  id: "my-song-id",        // unique, no spaces
  title: "My Song Title",
  key: "G",                 // original key, for the key display
  favorite: false,
  sections: [
    { label: "Verse 1", lines: [
      { chordpro: "[G]Amazing [C]grace how [G]sweet the sound" },
      { chordpro: "[G]That saved a [D]wretch like [G]me" },
    ]},
    { label: "Chorus", lines: [
      { chordLine: "G  C  G  D" }  // use this for instrumental/chord-only lines
    ]},
  ],
},
```

Put the chord immediately before the syllable it lands on, in square
brackets: `[G]Amazing`. That's it — the site handles the layout and
transposition automatically. Add the new block anywhere inside the
`SONGS = [ ... ]` array (order doesn't matter — the library sorts
alphabetically).

## About the songs already in data.js
Your screenshots were a mix of two kinds of sources:

1. **Personal chat notes** with chord progressions only (no lyrics) —
   those are transcribed in full, chords and all.
2. **Photos of pages from published songbooks/hymnals** (e.g. Bukas
   Palad titles, Dan Schutte's "All My Days" and "Glory and Praise to
   our God," and a few full lyric/chord tabs) — for these, the chords
   and section structure were transcribed exactly as shown, but the
   lyric text itself was deliberately left out, since reproducing full
   copyrighted lyrics isn't something I can do. Each of those songs has
   a `note` explaining this and is ready for you to paste the lyrics in
   using the `[Chord]lyric` format above.

Anywhere a screenshot was cut off, blurry, or genuinely hard to read,
the chord chart says `[UNCLEAR]` instead of guessing — worth
double-checking against your original notes.

## Features included
- Searchable, alphabetical song library
- Song pages with chords positioned above lyrics, large readable type
- Transpose up/down, with the current key always shown (handles chords
  like `G/B`, `Cadd9`, `Am7`, slash chords, sharps and flats)
- Adjustable text size
- Light/dark mode (remembered between visits)
- Favorites (star icon)
- Previous / Next song navigation, and a "Library" button
- Worship Sets: pick songs, reorder them, then step through them one at
  a time during the service with the same transpose controls
