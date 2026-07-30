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

**Drive folder:** https://drive.google.com/drive/folders/1GuQ-7cnUf6kOt3cGbtWoAPKK0MlGghE3

| # | Document | Link |
|---|----------|------|
| 01 | Messaging & Brand System (with built-out messaging blueprint + brand guidelines) | https://docs.google.com/document/d/1M8oPnXBe8glBlFSj5onr2D8AB4drhOFYIq_fObcHnbI/edit |
| 02 | Content System (Content OS) | https://docs.google.com/document/d/1ZK5kkD00sbQE9PmaSJvC5Pa_8jPZpxbsdlJCBhzPAAQ/edit |
| 03 | Outreach System | https://docs.google.com/document/d/1-ngXwtNzhQLFy5FZ6ksPUTircRRJwLJyX08Tnl_vwho/edit |
| 04 | Spin Sell System | https://docs.google.com/document/d/1C7QSqWsROrbQLSQlolnR2WhawYEyopiFv5dl6g8ZRtk/edit |
| 05 | Customer Journey System | https://docs.google.com/document/d/1a_9NWcqAMvwuCYrzt4p3YmTj54dtFNmpVARxcYKyXvI/edit |
| 06 | Customer Advisory Board | https://docs.google.com/document/d/1bUt1FERjhA3C4-6_UlI6sKzwr7Jp13sF19aPUnzttJM/edit |
| 07 | Accelerators & Events System | https://docs.google.com/document/d/1kyz7N4sRxty7GdHVHxEDWiWFL-UepVnQj05YPjimvWE/edit |
| 08 | Partnerships & Directories System | https://docs.google.com/document/d/13nhb10BDB54nMY9GrS7R1r-yF8cbHBz6cGIOO6BIPJA/edit |
| 09 | Traffic System | https://docs.google.com/document/d/1qQ8q7K_U6rnbtGIWTo9tocdTdTZl0i8oIeQUfEujyVo/edit |
| 10 | Social Media System | https://docs.google.com/document/d/1mRdZz_gYrotC3MdWtRJC6uBGLjt-HV877cR_O7b1gA8/edit |
| — | **Combined:** Pillar Overview (all pillars) | https://docs.google.com/document/d/1Z3sS5epMyt6SaBQz7rwltRZYrzas0WAcfPCTKs-sxZ0/edit |
| — | **Combined:** Content Operating System (deep-dive) | https://docs.google.com/document/d/1UY3ZSUEXNKHakPGr7qo5AQohEikEiREb8Cy5v3S8t3U/edit |

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
