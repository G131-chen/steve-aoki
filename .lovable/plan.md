
## Concept

A single scroll — one long collector's booklet. Charcoal `#111111` throughout. Each track is a full-viewport "spread" with its own colored atmosphere bleeding through the black. Feels like flipping vinyl liner notes, not clicking slides.

Reference DNA: Dim Mak liner notes × Highsnobiety editorial × Teenage Engineering restraint × Apple microsite pacing.

## Structure

Single route at `/`. One vertical scroll:

```text
[00] Cover        — Album title, artist mark, side A/B, catalog no.
[01] Purple Smoke
[02] Orange Paint
[03] Electric Blue
[04] Neon Purple
[05] Gradient Sunset
[06] Purple Fog
[07] Orange Glow
[Colophon]        — credits, pressing info, catalog stamp
```

Fixed side rail: track index 01–07 with scroll-linked active state. Fixed footer strip: side A/B, timestamp of active track, catalog no.

## Track spread anatomy

Each spread asymmetrical, no two alike. Ingredients rotated so nothing repeats:

- Oversized track number bleeding off the edge, sometimes outlined only.
- Track title in display face, huge, broken across lines with intentional breaks.
- One colored atmosphere — slow drifting radial gradient / smoke layer owning the negative space.
- 1–2 generated hero images framed as polaroids (white border, subtle rotation, drop shadow, tape strip).
- Handwritten marker note — lyric fragment, "recorded 3am Tokyo," doodle arrow.
- Tiny mono metadata block (BPM, key, length, producer, sample credit).
- Editorial pull-quote in serif.
- Tape strips, torn paper edges, ink smudges, sticker scribbles.

Layout variants rotate: left-hero+right-type / full-bleed type with polaroid overlay / split diagonal / centered mono with polaroids kicked to corners.

## Color atmospheres

| # | Name | Palette |
|---|---|---|
| 01 | Purple Smoke | deep violet fog, magenta bloom |
| 02 | Orange Paint | burnt orange splash, cadmium drips |
| 03 | Electric Blue | cyan glow, electric ultramarine |
| 04 | Neon Purple | hot neon violet, pink bleed |
| 05 | Gradient Sunset | coral → magenta → indigo band |
| 06 | Purple Fog | dusty lavender haze, low contrast |
| 07 | Orange Glow | amber lantern warmth, ember dots |

All bloom over `#111111` — never dominate.

## Motion (restrained)

- Slow drifting smoke/gradient blobs (30–60s loops, transform+opacity only).
- Text reveals on scroll (fade + slight y-translate, single pass).
- Polaroid tilt-in on enter.
- Fixed track index highlights active track.
- No parallax carousels, no hover explosions, no scroll-jacking.

Framer Motion + IntersectionObserver.

## Typography

Loaded via `@fontsource` in `src/main.tsx`, registered as `--font-*` tokens in `src/styles.css`:

- Display: **Anton** — huge numbers, headers.
- Editorial serif: **Instrument Serif** — pull quotes, alt titles.
- Mono: **JetBrains Mono** — metadata, catalog, timestamps.
- Marker: **Permanent Marker** + **Caveat** — handwritten notes.

## Content (invented, Steve Aoki universe)

I'll write album title, catalog no., fake pressing info, 7 evocative track titles, and per-track BPM / key / runtime / producer / feature / lyric fragment / handwritten note. Plus colophon credits.

## Generated imagery

Per track: 1–2 polaroids via agent-side `generate_image` (fast tier) into `src/assets/tracks/`. Prompts match each atmosphere (purple smoke stage silhouette, orange paint splash on concrete, neon-lit Tokyo alley, neon purple crowd blur, sunset LA rooftop, foggy purple forest, amber lantern crowd). Plus one album cover hero. ~10 images total.

## Technical

- Replace `src/routes/index.tsx` placeholder; update `head()` (title, description, og image = album cover).
- Components (`src/components/album/`): `AlbumCover`, `TrackSpread` (layout variant prop), `TrackIndex` (fixed rail), `Footer` (fixed strip), `Colophon`, `Polaroid`, `MarkerNote`, `TapeStrip`, `SmokeAtmosphere`, `AtmosphereGradient`, `RevealOnScroll`.
- Tailwind v4: add `--color-ink` (#111111) and font tokens in `src/styles.css`. No glassmorphism, no cards.
- Deps: `framer-motion`, `@fontsource/anton`, `@fontsource/instrument-serif`, `@fontsource/jetbrains-mono`, `@fontsource/permanent-marker`, `@fontsource/caveat`.
- Textures (tape, ink smudge, torn edge) authored inline as SVG — no external assets beyond generated photos.

## Out of scope

No audio playback, no backend, no auth, no CMS — pure static editorial front-end.
