const sharp=require('sharp');
const {petrolSVG,palettes}=require('./bg.js');
const W=1584,H=396;
const companies=['conferma','bitpanda','sabre','vonage','visa','iwoca','concur','mastercard','koerber','outrun','intuit','ripple','credissimo','hotelhub','kintec','untile','grapevine','getvocal','acorn','kiin'];

async function build(out, palette, seed, tilt){
  const bg = await sharp(Buffer.from(petrolSVG(W,H,{seed,palette,scale:90,tilt}))).png().toBuffer();

  // logo wall geometry (kept clear of bottom-left profile zone)
  const gx0=600, gx1=1505, cols=5, rows=4;
  const gy0=176, gy1=356;
  const colW=(gx1-gx0)/cols, rowH=(gy1-gy0)/rows;
  let cells='';
  let grid='';
  for(let i=0;i<cols;i++){ // vertical hairlines
    const x=gx0+i*colW; if(i>0) grid+=`<line x1="${x}" y1="${gy0-6}" x2="${x}" y2="${gy1+6}" stroke="#c6f3ba" stroke-opacity="0.12"/>`;
  }
  for(let j=0;j<=rows;j++){ const y=gy0+j*rowH; grid+=`<line x1="${gx0-6}" y1="${y}" x2="${gx1+6}" y2="${y}" stroke="#c6f3ba" stroke-opacity="${j===0||j===rows?0.22:0.10}"/>`; }
  companies.forEach((name,idx)=>{
    const r=Math.floor(idx/cols), c=idx%cols;
    const cx=gx0+c*colW+colW/2, cy=gy0+r*rowH+rowH/2+8;
    cells+=`<text x="${cx}" y="${cy}" text-anchor="middle" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-weight="600" font-size="23" letter-spacing="0.3" fill="#d7e0ec" opacity="0.92">${name}</text>`;
  });

  // dark scrim band behind everything in the content zone for legibility
  const scrim=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="sc" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#02040a" stop-opacity="0.55"/><stop offset="0.5" stop-color="#02040a" stop-opacity="0.40"/><stop offset="1" stop-color="#02040a" stop-opacity="0.62"/></linearGradient>
    <radialGradient id="wf" cx="0.66" cy="0.62" r="0.55"><stop offset="0" stop-color="#02040a" stop-opacity="0.6"/><stop offset="1" stop-color="#02040a" stop-opacity="0"/></radialGradient>
    <filter id="b"><feGaussianBlur stdDeviation="34"/></filter></defs>
  <rect width="${W}" height="${H}" fill="url(#sc)"/>
  <ellipse cx="${(gx0+gx1)/2}" cy="266" rx="520" ry="160" fill="url(#wf)" filter="url(#b)"/>
  </svg>`;

  const text=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="mint" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#9be88a"/><stop offset="1" stop-color="#d8f7cf"/></linearGradient></defs>
  <!-- category kicker -->
  <text x="122" y="62" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-weight="700" font-size="20" letter-spacing="2.2" fill="#c6f3ba">FINTECH&#160;&#160;·&#160;&#160;TRAVEL TECH&#160;&#160;·&#160;&#160;COMMS SAAS&#160;&#160;·&#160;&#160;B2B CONSULTING</text>
  <!-- headline -->
  <text x="120" y="112" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-weight="800" font-size="44" letter-spacing="0.2" fill="#f1f6ff">&amp; I build <tspan fill="#c6f3ba">pipeline</tspan> for B2B SaaS brands like —</text>
  <!-- grid + cells -->
  ${grid}
  ${cells}
  </svg>`;

  const smono = await sharp('smono_t.png').resize({width:46}).toBuffer();
  const final = await sharp(bg).composite([
    {input:Buffer.from(scrim),left:0,top:0},
    {input:Buffer.from(text),left:0,top:0},
    {input:smono,left:1505,top:36},
  ]).png().toBuffer();
  await sharp(final).toFile(out);
  console.log('wrote',out);
}
(async()=>{
  await build('banner2_v1.png',palettes.petrolGreen,17,-8);
  await build('banner2_v2.png',palettes.petrolBlue,29,9);
})();
