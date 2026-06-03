# LinkedIn Banners — Lucy

Sleek, modern banners built around the **GTM STAGE** brand and a **liquid-petrol /
iridescent oil-slick** material.

## Spec (LinkedIn personal profile)
- **Size:** 1584 × 396 px (4:1)
- **Format:** PNG (also fine as JPG). Max 8 MB.
- **Safe zones respected:**
  - Bottom-left ~568 × 264 px kept clear (your profile photo + name sit there).
  - Key content kept within the central ~1350 × 220 px (mobile-safe).

## Concepts
**1. Playful — the writing** (`banner1_writing_*.png`)
> *"all the world's a **GTM STAGE**"* — a Shakespeare riff on your brand.
> Sub: "I write posts on GTM in B2B tech — for growth people."
> ( with apologies to Shakespeare ) + a blinking writing caret.

**2. Showcase — the companies** (`banner2_companies_*.png`)
> Category kicker (fintech · travel tech · comms SaaS · B2B consulting) +
> "& I build **pipeline** for B2B SaaS brands like —" over a tidy client logo wall.
> Clients: conferma, bitpanda, sabre, vonage, visa, iwoca, concur, mastercard,
> koerber, outrun, intuit, ripple, credissimo, hotelhub, kintec, untile,
> grapevine, getvocal, acorn, kiin.

`*_v1` and `*_v2` are blue-petrol vs green-petrol palette variants.

## Regenerate
```bash
cd src && npm install sharp   # renders SVG -> PNG via librsvg
node bg.js      # backgrounds (petrol oil-slick generator)
node b1.js      # banner 1 (writing)
node b2.js      # banner 2 (companies)
```
The real brand marks (GTM STAGE logo, S monogram) were extracted from the source
deck and recolored to transparent PNGs in `src/`.

## Notes
- Company names are typeset as clean monochrome wordmarks (a tasteful "trusted by"
  wall) rather than each brand's trademarked logo.
- Liquid-petrol material = SVG `feTurbulence` displacement for the iridescent
  flow + `feSpecularLighting` for the wet gloss, over near-black with a mint accent.
