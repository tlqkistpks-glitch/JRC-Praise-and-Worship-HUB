/* =========================================================================
   SONG DATA
   -------------------------------------------------------------------------
   This is the ONLY file you need to edit to add, remove, or fix songs.
   The website (index.html / app.js) just reads this array — nothing else
   needs to change when you add a song.

   HOW TO ADD LYRICS + CHORDS TOGETHER
   ------------------------------------
   For each line of a song, write it "ChordPro style": put the chord in
   square brackets immediately before the syllable it belongs to.

     { chordpro: "[G]Amazing [C]grace, how [G]sweet the sound" }

   The chord will render above that syllable, and chords will transpose
   automatically. If a line is instrumental (just a chord progression,
   no words), use "chordLine" instead:

     { chordLine: "G  C  G  D" }

   WHY SOME SONGS HAVE NO LYRICS YET
   -----------------------------------
   Several of the source screenshots were photos of pages from published,
   copyrighted songbooks/hymnals (e.g. Bukas Palad titles, "All My Days",
   full lyric sheets for "Sino'ng Makapaghihiwalay", "Purihin ang
   Panginoon", etc). The chords and song structure below were transcribed
   exactly as shown in those screenshots, but the lyric text itself was
   intentionally left out. Paste your own lyrics into the `chordpro`
   lines using the format above (you already know the words — it's just
   a copy/paste per song) and the chord positions will keep working.

   Anywhere the original screenshot was cut off, blurry, or ambiguous,
   it is marked [UNCLEAR] rather than guessed.
   ========================================================================= */

const SONGS = [

  // ---------------------------------------------------------------------
  {
    id: "sa-krus",
    title: "Sa Krus",
    key: "C",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "C  Am  B" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "Em  D  Em  C  Am  B" },
        { chordLine: "Am  D  G  C  Am  B  Esus  E7" },
        { chordLine: "Am  D  G  C  Am  B  Esus  Em" },
      ]},
      { label: "Chorus (\u201caming ipinahahayag\u2026\u201d)", lines: [
        { chordLine: "C  D" },
        { chordLine: "G  C  G  Em  A  D" },
        { chordLine: "C  D  Bm  E  Am  D  Esus  E7" },
        { chordLine: "C  D  G" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "aleluya-antipolo",
    title: "Aleluya (Antipolo)",
    key: "D",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "D  A  G  A  (2x)" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "D  A  G  D  G  D  A  A    F#  Bm  A  D  G  D  A  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "ama-namin",
    title: "Ama Namin",
    key: "C",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "C  Dm  G  C" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "C  G  Am  Am7  F   G  C  E7  Am  Am7  F  C  Dm  Dm7  G" },
        { chordLine: "C  G  Am  Am7  F  G  C  E7  Am  Am7  F  Dm  Dm7  G  /  #G" },
        { chordLine: "Am  Am7  F  G  C  E7  Am  Fm" },
        { chordLine: "C  C  F  G  C  C  F  G  C  G  C" },
      ]},
      { label: "Sapagkat (\u201cFor thine is\u2026\u201d)", lines: [
        { chordLine: "Intro:  C  G" },
        { chordLine: "C  Em  F  G" },
        { chordLine: "C  E7  Am  Fm  C  Am  Dm  Dm7  (C)  G  C" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "our-father-english",
    title: "Our Father",
    key: "Am",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "Am  Em  C  D  Em" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "Em  C  D  Em" },
        { chordLine: "Em  C  D  Em" },
        { chordLine: "D  G  D  G  Am  Em  C  D" },
        { chordLine: "Am  C  D  Em" },
      ]},
      { label: "For the Kingdom", lines: [
        { chordLine: "Intro:  Em  Em  Em" },
        { chordLine: "D  G  D  G  Am  B  E" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "lamb-of-god-joel-echo",
    title: "Lamb of God",
    composer: "Joel Echo",
    key: "G",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "G  F  C  D  D7" },
      ]},
      { label: "Verse / Chorus", lines: [
        { chordLine: "G  C  B  Em  F  C  D" },
        { chordLine: "G  C  B  Em  F  C  D  B7" },
        { chordLine: "Em  F  C  D  Bb  F  G" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "kordero",
    title: "Kordero (Lamb of God)",
    key: "Em",
    favorite: false,
    sections: [
      { label: "Part 1 \u2013 \u201cKordero Delgado\u201d (Em)", lines: [
        { chordLine: "Intro:  Em  D  C  B" },
        { chordLine: "Em  D  C" },
        { chordLine: "Em  D  Gsus  G  Am  Bm7" },
        { chordLine: "Em  D  C  B  (2x)" },
        { chordLine: "Em  D  C  D7" },
        { chordLine: "Gm  F  Eb" },
        { chordLine: "Gm  F  Bbsus  Bb" },
        { chordLine: "Cm  Dm  Gm  F  Eb  Dm  Gm  F  Eb  Dm" },
        { chordLine: "Gsus  G" },
      ]},
      { label: "Part 2 \u2013 \u201cKordero\u201d (A)", lines: [
        { chordLine: "Intro:  A  Bm7  A  Bm7  A  Bm7  A  Bm7" },
        { chordLine: "A  Bm7  A  Bm7  A  A7  D  E  C#m  F#m  Bm  Bm7  E" },
        { chordLine: "(2x)" },
        { chordLine: "D  E  C#m  F#m  D  E  C#m  F#m" },
        { chordLine: "Bm  A  D  A  Bm  Bm7  E  A" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "love-and-faith",
    category: "Communion",
    title: "Love and Faith",
    key: "F",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "Cm  D7  Gm  Bbm  F  C  F  (Bb  C)" },
        { chordLine: "F  Bb  C  F" },
        { chordLine: "F  Bb  Gm  C  (2x)" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "F  Am  Bb  Gm  C  F" },
        { chordLine: "Cm7  D7  Gm  Bbm  F  C  F  (Bb  C)" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "F  Bb  C  F" },
        { chordLine: "F  Bb  Gm  C" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "F  Am  Bb  Gm  C  F" },
        { chordLine: "Cm7  D7  Gm  Bbm  F  C  F  (D)" },
      ]},
      { label: "Verse (change chord)", lines: [
        { chordLine: "G  Bm  C  Am  D  G" },
        { chordLine: "Dm  E  Am  Cm  G  D  G" },
      ]},
      { label: "Ending", lines: [
        { chordLine: "Am  D  G" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "in-him-alone",
    category: "Communion",
    title: "In Him Alone",
    key: "Em",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "Em  Em+M7  Em7  Em+6  C  Am  D" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "G  C  G   G  C  Am  B7" },
        { chordLine: "Em  Em7  C  G  Am  D  G" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "G  D  Em  Am  D  G" },
        { chordLine: "Em  Em+M7  Em7  Em6" },
        { chordLine: "C  Am  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "anima-christi",
    category: "Communion",
    title: "Anima Christi",
    key: "D",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "D  G  D  G  D  G  (2x)" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "D  A  G  A   D  A  G  A  Am7" },
        { chordLine: "D7  GM7  F#m  Bm  Em7" },
        { chordLine: "A  D  Am7  D7" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "GM7  F#m  Bm  CM7  Asus  A" },
        { chordLine: "D  F#m  G  A" },
        { chordLine: "D  F#m  G   G  D  A  A7  D" },
        { chordLine: "(intro once, back to verse 1, then \u2026)" },
      ]},
      { label: "Last Chorus", lines: [
        { chordLine: "GM7  F#m  Bm  CM7  Asus  Bb" },
        { chordLine: "F  Am7  Bb  C" },
        { chordLine: "F  Am7  Bb  Bb  F" },
        { chordLine: "Csus  C  F" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "psalm-23-panginoon-pastol",
    category: "Communion",
    title: "Psalm 23: Ang Panginoon, Ang Aking Pastol",
    key: "E",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "E  B  C#m  A  B  E  B" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "E  B  C#m  G#m  A  B  E  B" },
        { chordLine: "E  B  C#m  G#m  A  B  E  E7" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "A  B  E  C#m  A  B  E  E7" },
        { chordLine: "A  B  G#m  C#m  Am  C  B" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "wag-kang-mangamba",
    category: "Communion",
    title: "Wag Kang Mangamba",
    key: "Bm",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "Bm  F#m  Em  Em7  A7" },
        { chordLine: "D  A  Bm  Bm7  G  D  Em  A  D  A  Bm" },
        { chordLine: "Bm7  G  F#  Bm  F#m  G  Bb" },
        { chordLine: "D  A  Bm  Bm7  G  A  D" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "Bm  A  D" },
        { chordLine: "Em  A  D" },
        { chordLine: "Bm  Bm7/G  F#m  Bm" },
        { chordLine: "Em  Em7  A" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "pananagutan",
    category: "Finale",
    title: "Pananagutan",
    key: "D",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "G  A  D  Bm  Em  A  D  A" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "D  G  A  D   D  G  A  D" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "G  D  A  D   G  D  Bm  Em  A  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "all-i-ask-of-you",
    title: "All I Ask of You",
    key: "D (Capo 3)",
    favorite: false,
    sections: [
      { label: "Intro (Capo 3)", lines: [
        { chordLine: "D  F#m7  Bm  D  G  A7  D" },
      ]},
      { label: "Refrain", lines: [
        { chordpro: "[D]" },
        { chordpro: "[F#m7]" },
        { chordpro: "[Bm]" },
        { chordLine: "(chords: D F#m7 Bm D | G A7 D)" },
      ]},
      { label: "Verse 1\u20133", lines: [
        { chordLine: "D  E7  A7  D" },
        { chordLine: "G  A7" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "all-my-days",
    title: "All My Days",
    composer: "Dan Schutte \u2013 Jim Murray, SJ (based on Psalm 8)",
    key: "F",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "F  Gm7  A  Bb  Am  Gm7  F" },
      ]},
      { label: "Refrain", lines: [
        { chordpro: "[F]" },
        { chordpro: "[Gm7]" },
        { chordpro: "[A]" },
        { chordpro: "[Bb]" },
        { chordLine: "(chords: F Gm7 A Bb | Am Gm7 F)" },
      ]},
      { label: "Verse 1", lines: [
        { chordLine: "F  Gm7" },
        { chordLine: "Bb  F" },
        { chordLine: "Dm  Bb  A  Bb  Gm7  C  C7" },
      ]},
      { label: "Verse 2\u20134", lines: [
        { chordLine: "(same chord pattern as Verse 1)" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "give-thanks",
    category: "Finale",
    title: "Give Thanks",
    composer: "Henry Smith",
    key: "Bb",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "Bb  Am  A/C#  Dm  Bb  F  C  F" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "F  C  Bb  C   F  C  Bb  Cm  (F7)" },
        { chordLine: "Bb  Am  A/C#  Dm  Bbm" },
        { chordLine: "F  C  F  (D)" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "G  D  C  D   G  D  C  Dm  (G7)" },
        { chordLine: "C  Bm  B/Eb  Em  Cm" },
        { chordLine: "G  D  G  Cm   G  D  G  G" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "sinong-makapaghihiwalay",
    category: "Finale",
    title: "Sino\u2019ng Makapaghihiwalay",
    subtitle: "(Nothing Shall Separate)",
    key: "E",
    favorite: false,
    sections: [
      { label: "Chorus", lines: [
        { chordLine: "E  A   B7  E  E7" },
        { chordLine: "A  Am  E  C#m" },
        { chordLine: "F#m  B7  E  B7" },
      ]},
      { label: "Verse 1", lines: [
        { chordLine: "E   A" },
        { chordLine: "B7  E" },
        { chordLine: "A  E  C#m" },
        { chordLine: "F#m  B7  E  B7" },
      ]},
      { label: "Verse 2", lines: [
        { chordLine: "E   A" },
        { chordLine: "B7  E" },
        { chordLine: "A  E  C#m" },
        { chordLine: "F#m  B7  E  B7" },
      ]},
      { label: "Verse 3", lines: [
        { chordLine: "E   A" },
        { chordLine: "B7  E" },
        { chordLine: "A  E  C#m" },
        { chordLine: "F#m  B7  E" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "purihin-ang-panginoon",
    category: "Entrance",
    title: "Purihin ang Panginoon",
    key: "D",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "G  A7  D  Bm  Em  A7  F#7  B7  Em  A7  D" },
      ]},
      { label: "Refrain", lines: [
        { chordLine: "D  A7  Bm  D7  G   B7  Em" },
        { chordLine: "G  A7   D  Bm   Em  A7   F#7  B7" },
        { chordLine: "Em  A7  D" },
      ]},
      { label: "Verse 1\u20133", lines: [
        { chordLine: "Am7  D7   G  Em  Am7   D7   G" },
        { chordLine: "Bb  C7   F  Dm   Gm   Asus4  A  A9  A7" },
      ]},
      { label: "Coda", lines: [
        { chordLine: "G  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "bawat-sandali",
    title: "Bawat Sandali",
    composer: "Philip Gan \u2013 Manoling Francisco, SJ",
    key: "Dm",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "Dm7  C#m7  Bm7  E" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "Dm7  C#m7  Bm7  Am7  Dm7  F#m7  Bm7  E" },
        { chordLine: "Dm7  C#m7  Bm7  Am7" },
        { chordLine: "Dm7  A/C#  Bm7  E  (Ulitin / repeat)" },
        { chordLine: "Am7" },
        { chordLine: "Dm7  C#m7  Bm7  BbM7" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "bayan-magsiawit-na",
    category: "Entrance",
    title: "Bayan, Magsiawit Na!",
    composer: "Arnel Aquino, SJ",
    key: "E",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "E  A  E" },
      ]},
      { label: "Koro (Chorus)", lines: [
        { chordLine: "E  A/E  B  C#m   Bm7  E7" },
        { chordLine: "A  B7/A  G#m  C#m   F#m7  B  E" },
      ]},
      { label: "Verse 1", lines: [
        { chordLine: "C  D/C  G/B  Am7   D  E" },
        { chordLine: "Am7  B   Em  Em7/D  Am7  Am7/F#   Bsus  B7" },
      ]},
      { label: "Verse 2\u20133", lines: [
        { chordLine: "(same chord pattern as Verse 1, then Koro repeats)" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "glory-and-praise",
    category: "Entrance",
    title: "Glory and Praise to our God",
    composer: "Dan Schutte",
    key: "G",
    favorite: false,
    sections: [
      { label: "Chorus", lines: [
        { chordLine: "G  D  Em  G  D" },
        { chordLine: "Am  C  G  Bm  C  D  G" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "Dm  C  Am  D  G" },
        { chordLine: "Dm  C  Bm  Em  A  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "banal-na-templo",
    category: "Entrance",
    title: "Banal na Templo",
    key: "G",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "G  G  G  Am  D  G  G" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "G  D  Em  D  C  Bm  Am  D" },
        { chordLine: "Em  D  C  Am  D  G" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "Eb  F  G  C  D  G" },
        { chordLine: "F  Em  F  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "lord-have-mercy",
    title: "Lord Have Mercy",
    subtitle: "Panginoon, Kaawaan Mo Kami (Kyrie)",
    key: "D",
    favorite: false,
    sections: [
      { label: "English \u2013 Intro", lines: [
        { chordLine: "(keyboard)  D  A  G  A" },
        { chordLine: "D  A  G  A" },
        { chordLine: "D  A  G  A" },
        { chordLine: "Bm  F#m  G  D  (2x)" },
        { chordLine: "Em  E7  A" },
        { chordLine: "D  A  G  A" },
        { chordLine: "D  A  G  A  A7  D" },
      ]},
      { label: "Tagalog \u2013 \u201cPanginoon, Kaawaan Mo Kami\u201d", lines: [
        { chordLine: "Intro:  D  A  G  A" },
        { chordLine: "D  A  G  A  (2x)  (F#)" },
        { chordLine: "Bm  A  G  A  (F#)" },
        { chordLine: "Bm  A  G  A  B7" },
        { chordLine: "E  B  A  B   E  B  A  B  E" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "luwalhati",
    title: "Luwalhati",
    subtitle: "(Gloria)",
    key: "C",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "C  A7  Dm  G  Am  Am7  C  G  Csus  C" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "C  Em  Gm  A  Dm  G  C  Am  D7  G  G  C  G" },
        { chordLine: "C  Em  Dm  G  C  Am  F  C  Am  D  G" },
        { chordLine: "F  Em  Dm  G  C  Am  F  C  Am  D  G  Dm  G  C" },
        { chordLine: "G#  Bb  Eb  G#  Bb" },
        { chordLine: "C  F  E  Am  Dm  G  C  Bb  C" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "glory-to-god-in-the-highest",
    title: "Glory to God in the Highest",
    subtitle: "(Gloria)",
    key: "Bb",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "Bb  F  Bb  Gm  Eb  Bb  Cm  F" },
      ]},
      { label: "Chorus 1", lines: [
        { chordLine: "Bb  F  Bb  Gm  Eb  Bb  Cm  F" },
        { chordLine: "Bb  F  Bb  Gm  Eb  Cm  F  Bb  (Bbm7  Eb  Bb  Eb  Bb)" },
      ]},
      { label: "Verse 1", lines: [
        { chordLine: "Gm  Dm7  Eb  Bb   Gm  Dm7  Eb  Bb" },
        { chordLine: "C#  Eb  Cm  F" },
        { chordLine: "Gm  Dm  Eb  Bb   C#  Cm7  F   (Bb/F  Eb/F  F)" },
      ]},
      { label: "Chorus 2", lines: [
        { chordLine: "Bb  Cm  Bb  Gm  Eb  Bb  Cm  F" },
        { chordLine: "Bb  Cm  Bb  Gm  Eb  Cm  F  Bb  (Bbm7  Eb  Bb  Eb  Bb)" },
      ]},
      { label: "Verse 2", lines: [
        { chordLine: "Gm  Dm  Eb  Bb  Cm  Cm  Bb  Eb  F" },
        { chordLine: "Gm  Dm  Eb  Bb  C#  Cm7  F  (3x)" },
        { chordLine: "C#  Cm7  F  (Bb/F  Eb/F  F)" },
      ]},
      { label: "Chorus 2 (repeat)", lines: [
        { chordLine: "Bb  Cm  Bb  Gm  Eb  Bb  Cm  F" },
        { chordLine: "Bb  Cm  Bb  Gm  Eb  Cm  F  Bb  (Bbm7  Eb  Bb  Eb  Bb)" },
      ]},
      { label: "Verse 3", lines: [
        { chordLine: "Gm  Dm  Eb  Bb  C#  Cm7  F  (2x)" },
        { chordLine: "C#  Cm7  F  C#  Cm7  F  (Bb/F  Eb/F  F)" },
      ]},
      { label: "Chorus 3", lines: [
        { chordLine: "Bb  Cm  Bb  Gm  Eb  Bb  Cm  F" },
        { chordLine: "Bb  Cm  Bb  Gm  Eb  Cm  F  Bb" },
        { chordLine: "Cm  Dm  Gm7  Eb  Cm7  F  Bb  (Bbm7  Eb  Bb  Eb  Bb)" },
      ]},
      { label: "Ending", lines: [
        { chordLine: "Bb  F#M7  Fm7  Bb" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "canticle-of-the-sun",
    title: "Canticle of the Sun",
    key: "G",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "G  C  C  G  G  C  C" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "G  C  D  G   Bb  F  Am  D" },
        { chordLine: "G  C  D  Eb  Am  Bm  C  D  Gsus  G" },
        { chordLine: "C  G  D  G  C  G  D  D7\u2026" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "aleluya-delgado",
    title: "Aleluya (Delgado)",
    key: "E",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "E  A  B  E   A  B  E  (B)" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "E  A  B  E  A  B  E  (B)" },
        { chordLine: "E  A  B  C#m  A  B  C#m  (A)" },
        { chordLine: "F#m  B  E" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "munting-alay-english",
    category: "Offertory",
    title: "Munting Alay",
    subtitle: "(English Version)",
    key: "F",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "F  C  Gm  C  F  (Bb  C)" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "F  C  Dm  C" },
        { chordLine: "F  C  Dm  Cm7  (F7)" },
        { chordLine: "Bb  F  Bbm  Eb  F  C  Gm  C  F" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "unang-alay",
    category: "Offertory",
    title: "Unang Alay",
    key: "C",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "C  G  Am  Am7  BbM7  G" },
      ]},
      { label: "Koro (Chorus)", lines: [
        { chordLine: "C   G   Am   C" },
        { chordLine: "FM7   C   BbM7   G" },
        { chordLine: "FM7   C  E7   Am  D7" },
        { chordLine: "C   G7   C" },
      ]},
      { label: "Verse 1", lines: [
        { chordLine: "Am   Em   F   C" },
        { chordLine: "Am   Dm   G" },
        { chordLine: "Am   Em   Dm   C" },
        { chordLine: "FM7   BbM7   G7   (Koro)" },
      ]},
      { label: "Verse 2", lines: [
        { chordLine: "Am   Em   F   C" },
        { chordLine: "Am   Dm   G7" },
        { chordLine: "(pattern continues\u2014)" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "handog-namin-sa-iyo-ama",
    category: "Offertory",
    title: "Handog Namin sa Iyo, Ama",
    key: "F",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "F  Bb  Gm  Cm  F  Bb" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "Bb  F  Gm  Eb  F  Bb  Gm  Cm  F  Bb" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "Gm  D  Eb  F  Bb" },
        { chordLine: "Gm  Gm7  Eb  C  F" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "holy-light-from-light",
    title: "Holy",
    subtitle: "(Light from Light \u2014 Sanctus)",
    key: "C",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "C  G  D  G" },
        { chordLine: "G  D/F#  Em  Em7  CM7  A  D" },
        { chordLine: "G  D/F#  Em  Em7  CM7  A  D" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "C  D  G  C  D  G" },
        { chordLine: "C  D  G  C  D  G" },
        { chordLine: "G  D/F#  Em  Em7  CM7  D" },
        { chordLine: "(repeat chorus 2x)" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "when-we-eat-this-bread",
    title: "When We Eat This Bread",
    subtitle: "(Memorial Acclamation)",
    key: "C",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "C  D  Gsus  G" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "C  G/B  Am  G" },
        { chordLine: "C  D  Em  /D" },
        { chordLine: "C  G  D  G   C  D  Gsus  G" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "amen-asua",
    title: "Amen",
    subtitle: "(New \u2014 \u201cAsua\u201d)",
    key: "A",
    favorite: false,
    sections: [
      { label: "Verse", lines: [
        { chordLine: "A  D  A  G  D  G  D  A  A" },
        { chordLine: "F#  Bm7  A  D  G  D  A  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "santo-antonio",
    title: "Santo Antonio",
    key: "Em",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "Em  D  C  B  B7" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "Em  D  C  B" },
        { chordLine: "Em  D  C  B" },
        { chordLine: "Em  D  C  Bm7  Am  Am7  B" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "E  E  A  A  E  B  E" },
        { chordLine: "F#  B  F#  B" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "elim-is-my-home",
    title: "Elim Is My Home",
    key: "G",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "G  D  G  D" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "G  D  G  D  Em  A" },
        { chordLine: "F#m  G  F#m  G  A" },
      ]},
      { label: "Refrain", lines: [
        { chordLine: "F#m  Bm7  Em  A" },
        { chordLine: "F#m  Bm7  E" },
        { chordLine: "F#m  Bm  Em  A   F#  Bm  Bm7  E  A  D" },
      ]},
      { label: "Verse (8 counts)", lines: [
        { chordLine: "G  D  G  D  G  D  Em  A" },
        { chordLine: "F#m  G  F#m  G  A" },
      ]},
      { label: "Refrain (2x)", lines: [
        { chordLine: "F#m  Bm7  Em  A" },
        { chordLine: "F#m  Bm7  E" },
        { chordLine: "F#m  Bm  Em  A   F#  Bm  Bm7  E  A  D" },
      ]},
      { label: "Ending", lines: [
        { chordLine: "Bm  Bm7  Em  A  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "come-holy-spirit-fall-on-me",
    title: "Come Holy Spirit",
    subtitle: "(\u201cFall on Me Now\u201d \u2014 City Harvest Church)",
    key: "G",
    favorite: false,
    sections: [
      { label: "Verse", lines: [
        { chordLine: "G  Em  C  D  (2x)" },
        { chordLine: "C  D" },
        { chordLine: "Bm  Em" },
        { chordLine: "Am  A  D" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "G" },
        { chordLine: "Em" },
        { chordLine: "C" },
        { chordLine: "D" },
        { chordLine: "Am  B" },
        { chordLine: "Em  D  A" },
        { chordLine: "Am  D  G" },
      ]},
      { label: "Alternate team arrangement (key of E)", lines: [
        { chordLine: "E  A   E  A   F#m  B  G#m  C#m  F#m  A  B  (repeat)" },
        { chordLine: "Chorus:  E  C#m  A  F#m  B" },
        { chordLine: "G#sus  G#  C#m  (Bb  Bb)  F#  B  E" },
        { chordLine: "Key change:  C7  F  Dm  Bb  Gm  C  Asus  A  Dm  (C  B)" },
        { chordLine: "Bb  C  Dm  Bb  Csus  F" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "welcome-to-the-family",
    title: "Welcome to the Family",
    key: "G",
    favorite: false,
    sections: [
      { label: "Intro / Chorus", lines: [
        { chordLine: "G  Am  D  G  Am  C  D  (2x)" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "Am  D  G   Am  D  G" },
        { chordLine: "Am  D  G  Em  Am  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "we-will-serve-the-lord",
    title: "We Will Serve the Lord",
    key: "C",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "F  G  F  C  /  G7" },
      ]},
      { label: "Verse 1", lines: [
        { chordLine: "C" },
        { chordLine: "G" },
        { chordLine: "Am" },
        { chordLine: "Em" },
        { chordLine: "F" },
        { chordLine: "C" },
        { chordLine: "Dm" },
        { chordLine: "G  G7" },
      ]},
      { label: "Verse 2", lines: [
        { chordLine: "(same chord pattern as Verse 1)" },
        { chordLine: "ends on:  Dm  G  C  C7" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "F  G  Em  Am" },
        { chordLine: "F  G  C  C7" },
        { chordLine: "F  G  Em  Am" },
        { chordLine: "F  G  F  C" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "lord-i-lift-your-name-on-high",
    title: "Lord, I Lift Your Name on High",
    key: "G",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "G  C  D  C  (6x)" },
      ]},
      { label: "Bridge", lines: [
        { chordLine: "G  C  D  B7  Em  Am  D  G  (C  D)" },
      ]},
      { label: "Ending", lines: [
        { chordLine: "G  Em  Am  D   G  Em  Am  D  G" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "you-are-holy",
    title: "You Are Holy",
    composer: "Michael W. Smith",
    key: "G",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "G  -  -  C  -  D   (2x)" },
      ]},
      { label: "Verse 1", lines: [
        { chordLine: "G" },
        { chordLine: "C" },
        { chordLine: "Am" },
        { chordLine: "D" },
      ]},
      { label: "Verse 2", lines: [
        { chordLine: "G" },
        { chordLine: "C" },
        { chordLine: "Am" },
        { chordLine: "D - D  G - G   D - D  G - G" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "C   D   Em   G/B" },
        { chordLine: "C   D   Em   G/B" },
        { chordLine: "C   D   Em   G/B" },
        { chordLine: "C   D   Em   A" },
        { chordLine: "C   D  (pause \u2192 Intro)" },
      ]},
      { label: "Structure notes", lines: [
        { chordLine: "Repeat Verses 1 & 2 \u2192 Repeat Chorus \u2192 Interlude (Intro in G only) \u2192 Repeat Chorus (build up) \u2192 C  D (long pause)" },
      ]},
      { label: "Outro", lines: [
        { chordLine: "Em  D/F#  C  G-G  C-C  (x4)" },
      ]},
      { label: "Ending", lines: [
        { chordLine: "D-D  G-G" },
      ]},
      { label: "Alternate team arrangement", lines: [
        { chordLine: "Intro:  G  G  C  D  (2x, pause)" },
        { chordLine: "G  C  Am  D" },
        { chordLine: "G  C  Am  G" },
        { chordLine: "C  D  Em  Bm  (3x)" },
        { chordLine: "C  D  Em  Am7  C  D  G" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "i-will-sing-forever",
    title: "I Will Sing Forever",
    key: "F",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "F  Bb  F  F  C  Bb  C  F  C  Bb  C  F" },
        { chordLine: "C  Bb  C  F  (2x)" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "F  C  Bb  C  Dm  Am  Bb  F  Bb  C  F" },
        { chordLine: "(F  Bb  F  Bb)" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "F  C  Bb  C  F  Dm  Am  Bb  F  Bb  C  F  (D)" },
      ]},
      { label: "Bridge / Tag", lines: [
        { chordLine: "G  D  C  D  G  Em  Bm  C  G  C  G  Am  D" },
        { chordLine: "C  Bm  Am  Am7  D   C  Bm  Am  Am7  D" },
        { chordLine: "G  D  C  D  G  D  C  D  G" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "buhay-pagmamahal",
    title: "Buhay Pagmamahal",
    subtitle: "Awit sa Paghahanda ng mga Alay",
    composer: "Titik ni Crispulo Pangilinan \u2014 Musika ni Fr. Eduardo P. Hontiveros, SJ",
    key: "Gm",
    favorite: false,
    sections: [
      { label: "Part 1", lines: [
        { chordLine: "Gm  Cm/G  Gm  Eb  F  Bb/F" },
      ]},
      { label: "Part 2", lines: [
        { chordLine: "Cm6  D7  D/F#  Gm  Cm6  Gm/D  D7  Gm" },
      ]},
      { label: "Verse 1\u20133", lines: [
        { chordLine: "F7  Bb  F7  Bb  D7" },
        { chordLine: "Gm  A7  D7" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "goodbye-yesterday",
    title: "Goodbye Yesterday",
    composer: "Elevation Rhythm",
    key: "G (original G#, capo 1)",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "G  (4x)   C  (4x)" },
      ]},
      { label: "Verse 1\u20133", lines: [
        { chordLine: "G" },
        { chordLine: "G  (or C, or G/B \u2014 varies by verse)" },
        { chordLine: "G  (or G/B)" },
        { chordLine: "C  G  G" },
      ]},
      { label: "Chorus 1", lines: [
        { chordLine: "G" },
        { chordLine: "C" },
        { chordLine: "G/B" },
        { chordLine: "C" },
      ]},
      { label: "Chorus 2 (2x)", lines: [
        { chordLine: "C  D  Em" },
        { chordLine: "C  D  Em" },
        { chordLine: "C  D  Em" },
        { chordLine: "Am  D" },
      ]},
      { label: "Interlude", lines: [
        { chordLine: "G  (4x)" },
      ]},
      { label: "Bridge (4x)", lines: [
        { chordLine: "G \u2013 Am" },
        { chordLine: "G \u2013 Am" },
        { chordLine: "G \u2013 Am" },
        { chordLine: "Em  D  C" },
      ]},
      { label: "Tag (2x)", lines: [
        { chordLine: "G" },
        { chordLine: "G" },
        { chordLine: "G" },
        { chordLine: "Em  D  C" },
      ]},
      { label: "Outro", lines: [
        { chordLine: "G  (4x, then G \u2013 Am \u2013 G/B \u2013 C)" },
        { chordLine: "Em  D  C  C" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "tribes",
    title: "Tribes",
    composer: "Every Nation Music",
    key: "D (original Eb, capo 1)",
    favorite: false,
    sections: [
      { label: "Intro", lines: [
        { chordLine: "D  G  D  G" },
      ]},
      { label: "Verse 1", lines: [
        { chordLine: "D  G" },
        { chordLine: "D  G" },
        { chordLine: "D  G" },
        { chordLine: "Bm7  G" },
      ]},
      { label: "Pre-chorus", lines: [
        { chordLine: "A  Bm7" },
        { chordLine: "A" },
        { chordLine: "G" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "D" },
        { chordLine: "G" },
        { chordLine: "Bm" },
        { chordLine: "G" },
      ]},
      { label: "Bridge 1 (2x)", lines: [
        { chordLine: "D  G" },
      ]},
      { label: "Bridge 2", lines: [
        { chordLine: "D  G  D  G  (English)" },
        { chordLine: "D  G  D  G  (Tagalog / Spanish, same chords)" },
      ]},
      { label: "Outro (4x)", lines: [
        { chordLine: "D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "praise",
    title: "Praise",
    composer: "Steven Furtick, Chandler Moore, Brandon Lake, Pat Barrett, Cody Carnes, Chris Brown (Elevation Worship)",
    key: "A",
    favorite: false,
    sections: [
      { label: "Vamp", lines: [
        { chordLine: "(no chords given \u2014 vocal only)" },
      ]},
      { label: "Verse 1\u20132", lines: [
        { chordLine: "A" },
        { chordLine: "D/A  A" },
        { chordLine: "E/A" },
        { chordLine: "D/A  A" },
        { chordLine: "A" },
        { chordLine: "D/A  A" },
        { chordLine: "E/G#  D/A" },
        { chordLine: "A" },
      ]},
      { label: "Pre-chorus", lines: [
        { chordLine: "E" },
        { chordLine: "D" },
      ]},
      { label: "Chorus 1\u20132", lines: [
        { chordLine: "F#m  D  A" },
        { chordLine: "E" },
        { chordLine: "F#m  D  A" },
        { chordLine: "E" },
      ]},
      { label: "Bridge 1\u20132", lines: [
        { chordLine: "A  (x6)" },
        { chordLine: "Bridge 2 uses:  A  Bm  F#m  D" },
      ]},
      { label: "Instrumental", lines: [
        { chordLine: "F#m  /  D  /  A  /  E  (2x)" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "same-god",
    title: "Same God",
    composer: "Steven Furtick, Brandon Lake, Pat Barrett, Chris Brown (Elevation Worship)",
    key: "Db",
    favorite: false,
    sections: [
      { label: "Intro (2x)", lines: [
        { chordLine: "Db   Gb/Db  Db" },
      ]},
      { label: "Verse 1\u20132", lines: [
        { chordLine: "Db  Gb/Db  Db  (x2)" },
        { chordLine: "Bbm  Gb  (or Bbm  Ab  Gb)" },
        { chordLine: "Db  Gb/Db  Db  (x2)" },
        { chordLine: "Bbm  Gb" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "Db  Ab/C" },
        { chordLine: "Bbm  Ab  Gb" },
        { chordLine: "Db/F  Gb  Ab" },
        { chordLine: "Db  Ab/C" },
        { chordLine: "Bbm  Ab  Gb  Db/F" },
      ]},
      { label: "Bridge 1\u20132 (\u201cthen / now\u201d pattern)", lines: [
        { chordLine: "Db" },
        { chordLine: "Bbm" },
        { chordLine: "Gb  (or Gb  Db/F)" },
        { chordLine: "Gb  Ab   (repeats through several \u201cthen/now\u201d couplets)" },
      ]},
      { label: "Verse 3", lines: [
        { chordLine: "Db  Gb/Db  Db" },
        { chordLine: "Db  Gb/Bb  Db/Ab  Gb  Db/F  Db" },
      ]},
      { label: "Tag", lines: [
        { chordLine: "Gb/Bb  Db/Ab  Gb  Db/F  Db  (2x)" },
      ]},
      { label: "Instrumentals", lines: [
        { chordLine: "Db  /  Gb/Db Db   |  Bbm  /  Gb  /  Gb/Ab" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "washed",
    title: "Washed",
    composer: "Elevation Rhythm (Joe L. Barnes, Josh Holiday, Mitch Wong, Steven Furtick)",
    key: "B",
    favorite: false,
    sections: [
      { label: "Turn 1", lines: [
        { chordLine: "B/D#  E     F#/A#  G#m     B/D#  E     F#/A#  G#m" },
      ]},
      { label: "Verse 1\u20132", lines: [
        { chordLine: "B/D#  E  F#/A#  G#m   B/D#  E" },
        { chordLine: "F#/A#  G#m   B/D#  E  F#/A#  G#m  C#m" },
        { chordLine: "F#sus   B/D#  E  F#/A#  G#m   B/D#  E" },
        { chordLine: "F#/A#  G#m   B/D#  E  F#/A#  G#m  C#m" },
        { chordLine: "F#sus" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "B   E" },
        { chordLine: "G#m   F#sus" },
        { chordLine: "B   E" },
        { chordLine: "G#m   F#sus" },
      ]},
      { label: "Turn 2", lines: [
        { chordLine: "B  B" },
      ]},
      { label: "Bridge 1 (4x)", lines: [
        { chordLine: "B   E" },
        { chordLine: "G#m   E" },
      ]},
      { label: "Bridge 2", lines: [
        { chordLine: "B   E" },
        { chordLine: "G#m   E" },
      ]},
      { label: "Turn 3 (2x)", lines: [
        { chordLine: "B/D#  E  F#/A#  G#m   B/D#  E  F#/A#  G#m" },
        { chordLine: "B/D#  E  F#/A#  G#m   C#m   F#sus" },
      ]},
      { label: "End", lines: [
        { chordLine: "B" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "nothing-is-impossible",
    title: "Nothing Is Impossible",
    composer: "Planetshakers",
    key: "C",
    favorite: false,
    sections: [
      { label: "Chorus", lines: [
        { chordLine: "C" },
        { chordLine: "F" },
        { chordLine: "C  G  Am" },
        { chordLine: "F" },
      ]},
      { label: "Interlude", lines: [
        { chordLine: "F  C  Dm  F  (2x)" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "C  Dm  F" },
        { chordLine: "Am  G  F" },
      ]},
      { label: "Pre-Chorus", lines: [
        { chordLine: "Am  G  F" },
        { chordLine: "Am  G  Dm  F" },
      ]},
      { label: "Chorus (repeat)", lines: [
        { chordLine: "C" },
        { chordLine: "F" },
        { chordLine: "C  G  Am" },
        { chordLine: "F" },
      ]},
      { label: "Interlude (repeat)", lines: [
        { chordLine: "F  C  Dm  F  (2x)" },
      ]},
      { label: "Verse (repeat)", lines: [
        { chordLine: "C  Dm  F" },
        { chordLine: "Am  G  F" },
      ]},
      { label: "Pre-Chorus (repeat)", lines: [
        { chordLine: "Am  G  F" },
        { chordLine: "Am  G  Dm  F" },
      ]},
      { label: "Chorus (repeat)", lines: [
        { chordLine: "C" },
        { chordLine: "F" },
        { chordLine: "C  G  Am" },
        { chordLine: "F" },
      ]},
      { label: "Interlude", lines: [
        { chordLine: "F  C  Dm  F" },
      ]},
      { label: "Bridge", lines: [
        { chordLine: "F  C" },
        { chordLine: "Dm  F" },
        { chordLine: "F  C" },
        { chordLine: "Dm  F" },
      ]},
      { label: "Chorus (repeat)", lines: [
        { chordLine: "C" },
        { chordLine: "F" },
        { chordLine: "C  G  Am" },
        { chordLine: "F" },
      ]},
      { label: "Bridge (repeat)", lines: [
        { chordLine: "F  C" },
        { chordLine: "Dm  F" },
        { chordLine: "F  C" },
        { chordLine: "Dm  F" },
      ]},
      { label: "Ending", lines: [
        { chordLine: "F" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "goodness-of-god",
    title: "Goodness of God",
    composer: "Bethel Music",
    key: "A",
    favorite: false,
    note: "Published, copyrighted worship song. Chords and structure transcribed from the chart you sent; lyrics intentionally left out \u2014 please add them yourself using the [Chord]lyric format.",
    sections: [
      { label: "Intro", lines: [
        { chordLine: "A  Asus4  A  Asus4" },
      ]},
      { label: "Verse 1", lines: [
        { chordLine: "A" },
        { chordLine: "D  A" },
        { chordLine: "E/G#  F#m  D  E" },
        { chordLine: "F#m  D" },
        { chordLine: "A  E/G#  F#m" },
        { chordLine: "D  E  A" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "D  A" },
        { chordLine: "D  A  E" },
        { chordLine: "D  A  E/G#  F#m" },
        { chordLine: "D  E  A" },
      ]},
      { label: "Verse 2", lines: [
        { chordLine: "A" },
        { chordLine: "D  A" },
        { chordLine: "E/G#  F#m  D  E" },
        { chordLine: "F#m  D" },
        { chordLine: "A  E/G#  F#m" },
        { chordLine: "D  E  A" },
      ]},
      { label: "Chorus (repeat)", lines: [
        { chordLine: "D  A" },
        { chordLine: "D  A  E" },
        { chordLine: "D  A  E/G#  F#m" },
        { chordLine: "D  E  A" },
      ]},
      { label: "Bridge", lines: [
        { chordLine: "A/C#  D" },
        { chordLine: "E  A" },
        { chordLine: "A/C#  D" },
        { chordLine: "E  A" },
        { chordLine: "A/C#  D" },
        { chordLine: "E  F#m" },
        { chordLine: "A/C#  D" },
        { chordLine: "E  A" },
        { chordLine: "(repeat bridge 2x total, then \u2192 Chorus)" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "be-not-afraid",
    title: "Be Not Afraid",
    key: "C",
    favorite: false,
    note: "Chords only, transcribed as noted. Includes a key change section.",
    sections: [
      { label: "Intro", lines: [
        { chordLine: "C  F  C  F  Dm   Bb   G" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "C  F  C  F  E7  Am  Am7  F   G  Em  Dm  G  C" },
        { chordLine: "C  F  C  F  C  Ddim  E  Am  Am7  F" },
        { chordLine: "Dm  G" },
      ]},
      { label: "Key Change (to A)", lines: [
        { chordLine: "D  G  D  G  F#  Bm  Bm7  G  Em  A  F#m  Bm" },
        { chordLine: "Em  A  D" },
      ]},
    ],
  },

  // ---------------------------------------------------------------------
  {
    id: "pagkaka-ibigan",
    title: "Pagkaka Ibigan",
    key: "E",
    favorite: false,
    note: "Chords only, transcribed as noted. Includes a key change section.",
    sections: [
      { label: "Intro", lines: [
        { chordLine: "E  A  F#m  B" },
      ]},
      { label: "Verse", lines: [
        { chordLine: "E  B  C#m  A  F#m  B" },
        { chordLine: "E  B  C#m  A  F#m  B" },
      ]},
      { label: "Chorus", lines: [
        { chordLine: "E  E  A  F#m  B  E  (D  E)" },
        { chordLine: "A  B  G#m  C#m  F#m  B  E" },
        { chordLine: "A  F#m  B" },
      ]},
      { label: "Key Change (to F)", lines: [
        { chordLine: "C7" },
        { chordLine: "F  C  Dm  Dm7  Bb  Gm  C" },
        { chordLine: "F  C  Dm  Dm7  Gm  C" },
      ]},
      { label: "Chorus (in F)", lines: [
        { chordLine: "F  F  Bb  Gm  C  F  (Eb  F)" },
        { chordLine: "Bb  C  Am  Dm  Gm  C  F" },
      ]},
      { label: "Outro", lines: [
        { chordLine: "Bb  Gm  C" },
      ]},
    ],
  },

];
