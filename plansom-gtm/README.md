# Plansom GTM — Pillar Documentation

Digests the *Plansom GTM Hub 2.0* plan into per-pillar documentation, organised around the core
GTM question: **"Who is ready to use Plansom today — and why?"**

## Brand system applied

These documents follow the Plansom brand guidelines:

- **Colour** — monochrome foundation (`#222222` near-black, greys, `#EAEAEA`, `#FFFFFF`) with the
  **signature blue `#343CED`** used *selectively* for the eyebrow labels, section rules, the
  readiness-thesis callout, and the CONSIDER / BUILD tags (i.e. navigation and key moments only).
- **Typography** — **Montserrat**, the native-to-Google-Docs geometric substitute for Gilroy
  (Gilroy renders for anyone who has it installed; Montserrat keeps the docs identical for everyone
  else). Heading → subheading → body → caption hierarchy mirrors the guideline.
- **Messaging** — every document carries the official positioning line: *"Plansom is an AI-powered
  planning platform that transforms ideas, tasks, and goals into clear, actionable plans."*

## Deliverables

**Primary: Google Docs** (brand-styled), in the Drive folder *"Plansom GTM — Pillar Docs"*.

- **10 per-pillar documents** — one per pillar. Each states how the pillar answers the core
  question, then lists its components, sub-components, key considerations and a build brief.
  Pillar 02 (Content System) is the detailed deep-dive.
- **2 combined documents** — the all-pillars *Pillar Overview* and the *Content Operating System*
  companion.

(Google Doc links are listed in the delivery message / the folder.)

## Source files in this folder

- `google-docs-html/` — the exact HTML uploaded to Google Docs (one file per document). These can
  be re-imported to Drive at any time (upload → open with Google Docs) to regenerate the docs.
- `generator/` — the scripts that produce the HTML from a single content source:
  - `content.js` — pillar theses + components (source of truth for pillars 1, 3–10).
  - `contentos-data.js` — the Content OS (pillar 2) component groups.
  - `brandhtml.js` — brand-styled HTML renderer (palette, Montserrat, tables).
  - `build.js` — writes all 12 HTML files. Run with `node build.js`.
- `Plansom_GTM_Pillar_Overview.docx`, `Plansom_Content_Operating_System.docx` — the earlier
  (pre-brand) Microsoft Word versions, retained as offline copies.

## Framing

Each pillar is tagged by the role it plays in answering the core question — it **defines** the
hypothesis of who is ready, **reaches** those people, **qualifies / converts** their readiness into
usage, or **expresses** the "why" so prospects can self-identify. Figures cited (cost-per-meeting,
conversion rates, trial volumes) are drawn from the funnel and channel-OS tabs of the source
workbook.
