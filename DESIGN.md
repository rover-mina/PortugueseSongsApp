Portuguese Songs App Design Decisions

Purpose

This document records important design decisions and the reasons behind them.

The goal is to make future development easier by remembering why certain choices were made.

⸻

Guiding Philosophy

This app is designed to help people learn Portuguese through music.

Technology is used to support learning, not to become the focus.

⸻

Design Decisions

1. Portuguese appears first

Reason:

The learner’s focus should always be on Portuguese.

The translation exists to help understanding, not replace reading Portuguese.

⸻

2. Translation immediately follows each lyric

Reason:

Reading one Portuguese line followed immediately by its translation is much easier than reading an entire Portuguese song followed by an entire translated song.

⸻

3. Lyric pairs are displayed as cards

Reason:

Cards improve readability on phones.

They also make future features easier, including:

* personal notes
* hiding translations
* favorites
* highlighting

⸻

4. Mobile-first design

Reason:

The primary device for this project is an iPhone.

Desktop support is important, but secondary.

⸻

5. Content is separated from presentation

Reason:

Song data should not be written directly in HTML.

The interface should be generated automatically from song data.

This makes the application easier to maintain and expand.

⸻

6. Manual work should be minimized

Long-term goal:

The user should be able to paste raw Portuguese lyrics and let the application perform as much of the formatting and translation work as possible.

⸻

Future Direction

The application should eventually support:

* importing songs from raw text
* AI-assisted translation
* choosing the translation language
* embedded YouTube playback
* personal study notes
* vocabulary explanations
* search across songs