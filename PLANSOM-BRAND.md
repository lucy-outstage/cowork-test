# Plansom Brand System

**Extracted from the AI Impact Sprint deck · 6 October 2026**
*Reference for all WPP proposal materials.*

---

## 1. Colour

Values sampled directly from the deck.

| Token | Hex | Use |
|---|---|---|
| **Ink** | `#191919` | Primary dark background. The dominant brand surface — covers ~95% of dark slides |
| **Ink Raised** | `#1D1D1D` | Slightly lifted dark panel |
| **Surface Dark** | `#242424` | Cards and containers on Ink |
| **Surface Dark Hi** | `#2D2D2D` | Nested elements, progress tracks |
| **Paper** | `#F5F5F5` | Primary light background |
| **White** | `#FFFFFF` | Type on dark, UI cards on Paper |
| **Warm White** | `#FBFBFA` | Logo knockout on Ink |
| **Brand Blue** | `#343CED` | Full-bleed statement slides. Used sparingly and at full strength |
| **Periwinkle** | `~#8B8BF0` | Single UI accent (the AI Plan send button). *Approximate — confirm from source* |

```css
:root {
  --ink:            #191919;
  --ink-raised:     #1D1D1D;
  --surface-dark:   #242424;
  --surface-dark-hi:#2D2D2D;
  --paper:          #F5F5F5;
  --white:          #FFFFFF;
  --warm-white:     #FBFBFA;
  --blue:           #343CED;
  --periwinkle:     #8B8BF0;

  --text-on-dark:        #FFFFFF;
  --text-on-dark-muted:  rgba(255,255,255,.62);
  --text-on-paper:       #191919;
  --text-on-paper-muted: rgba(25,25,25,.66);
  --rule:                rgba(25,25,25,.14);
  --rule-on-dark:        rgba(255,255,255,.12);
}
```

### How colour is actually used

**Three modes, never mixed on one surface:**

1. **Dark** (`--ink`) — section openers, product UI, emphasis. The default voice.
2. **Light** (`--paper`) — contents, method, team, price. The reading voice.
3. **Blue** (`--blue`) — full-bleed, one idea, nothing else on the slide. Used **twice in twenty-six pages**.

> **The blue is a punctuation mark, not a palette.** It appears alone, at full bleed, carrying a single statement. Using it as an accent colour, a border, or a highlight would break the system.

**Alternation is structural.** The deck alternates dark and light deliberately — dark openers, light explanation, dark product, light price. Long runs of either are avoided.

---

## 2. Typography

**Typeface:** geometric sans with a single-storey `a` and `g`, circular `o`. Consistent with **Poppins** (closest widely-available match). The logo wordmark is custom — the `P` carries a notched cut.

| Role | Treatment |
|---|---|
| **Eyebrow** | Uppercase, letterspaced ~0.08em, small (~13px), muted. `CONTENTS` · `THE PROBLEM` · `PLANSOM INTRODUCTION` · `THE OFFER` |
| **Hero** | Very large, light-to-regular weight. On dark it runs light; on light it runs medium/semibold |
| **Headline** | Large, regular-to-medium. Nearly always ends in a **full stop** |
| **Subhead** | Regular, muted, 1–2 lines, centred under a centred headline |
| **Numerals** | `01` `02` `03` — tabular, muted, set left of the item they label |
| **Body** | Regular, generous line height (~1.55), short lines |

### The full stop

**Headlines end in a period.** "Do one goal first." / "One goal." / "Simply done." / "Agents anyone can use." / "Disconnected." It is the single most recognisable verbal tic in the brand — declarative, finished, nothing pending.

---

## 3. Layout

| Principle | Detail |
|---|---|
| **Space first** | Slides are mostly empty. Content occupies a band, rarely the full canvas |
| **Two compositions** | Centred (eyebrow → headline → subhead → three columns) or **split** (headline left, numbered list right) |
| **Hairline rules** | Numbered lists separated by 1px rules at low opacity. No boxes on light surfaces |
| **Cards on dark only** | `--surface-dark`, ~16px radius, no shadow, barely-there border |
| **Threes** | Almost everything is three items. Occasionally four. Never five |
| **Bottom-left logo** | Section openers carry the wordmark bottom-left |

### The inversion

The "What is included" slide puts **two dark cards and one white card** side by side — the white card is what *you leave with*. Inverting one element to mark the payoff is a deliberate device worth reusing.

---

## 4. Voice

| Rule | Evidence |
|---|---|
| **Short declaratives** | "Plenty of AI. Not enough impact." |
| **Plain words** | "What is blocking progress, and who can unblock it?" |
| **Say the number** | "$25,000. Everything included." |
| **Name the limit** | "Go on to Phase 2, or walk away with the outputs." |
| **No adjectives for their own sake** | No "cutting-edge", "transformative", "world-class" |
| **Second person** | "You bring" / "You leave with" / "Your call" |
| **One idea per surface** | Never two arguments on one slide |

**Signature phrases:** *Simply done.* · *One goal.* · *Do one goal first.* · *Plenty of AI. Not enough impact.*

---

## 5. Applying this to the WPP materials

| Element | Treatment |
|---|---|
| Document covers | Ink, wordmark top-left, title large and light, *Simply done.* |
| Section openers | Ink, eyebrow + headline, wordmark bottom-left |
| Analysis and evidence | Paper. This is reading material |
| The one big claim | Blue, full bleed, once. Candidate: **"Creativity is free. Control is not."** |
| Data and tables | Paper, hairline rules, no fills |
| The offer | Dark cards, with the outcome card inverted to white |
| Headlines | End in a full stop |
| Groupings | Three |

---

<div align="center">

**Plansom** · *Simply done.*

</div>
