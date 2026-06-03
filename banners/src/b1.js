const sharp=require('sharp');
const {petrolSVG,palettes}=require('./bg.js');
const W=1584,H=396;
async function build(out, palette, seed, tilt){
  const bg = await sharp(Buffer.from(petrolSVG(W,H,{seed,palette,scale:95,tilt}))).png().toBuffer();
  const logoW=560; const lg = await sharp('gtmstage_white_t.png').resize({width:logoW}).toBuffer();
  const cx=905; const logoX=Math.round(cx-logoW/2); const logoY=128;

  // layer 1: dark calm field + side scrim (BEHIND logo)
  const scrim = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="dark" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#02040a" stop-opacity="0.78"/>
      <stop offset="0.55" stop-color="#02040a" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#02040a" stop-opacity="0"/>
    </radialGradient>
    <filter id="soft"><feGaussianBlur stdDeviation="30"/></filter>
  </defs>
  <ellipse cx="${cx}" cy="195" rx="560" ry="185" fill="url(#dark)" filter="url(#soft)"/>
  </svg>`;

  // layer 3: text (ON TOP of logo)
  const text = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="mint" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#9be88a"/><stop offset="1" stop-color="#d8f7cf"/>
    </linearGradient>
  </defs>
  <text x="${cx}" y="104" text-anchor="middle" font-family="Liberation Serif, FreeSerif, serif" font-style="italic" font-size="40" fill="#eef4ff" letter-spacing="1.5">all the world&#8217;s a</text>
  <rect x="${cx-235}" y="262" width="470" height="2" fill="url(#mint)" opacity="0.9"/>
  <text x="${cx}" y="300" text-anchor="middle" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="27" fill="#eef4ff" letter-spacing="0.4">I write posts on GTM in B2B tech<tspan fill="#c6f3ba">  —  for growth people.</tspan></text>
  <text x="${cx}" y="332" text-anchor="middle" font-family="Liberation Serif, serif" font-style="italic" font-size="18" fill="#a7b6c8" letter-spacing="0.5">( with apologies to Shakespeare )</text>
  <rect x="${logoX+logoW+8}" y="${logoY+16}" width="10" height="82" fill="#c6f3ba" opacity="0.95"/>
  </svg>`;

  const final = await sharp(bg).composite([
    {input:Buffer.from(scrim),left:0,top:0},
    {input:lg,left:logoX,top:logoY},
    {input:Buffer.from(text),left:0,top:0},
  ]).png().toBuffer();
  await sharp(final).toFile(out);
  console.log('wrote',out);
}
(async()=>{
  await build('banner1_v1.png',palettes.petrolBlue,11,10);
  await build('banner1_v2.png',palettes.petrolGreen,23,-8);
})();
