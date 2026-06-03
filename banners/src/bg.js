const sharp=require('sharp');
function petrolSVG(W,H,opts){
  const {seed=7, palette, baseFreq='0.0045 0.010', scale=90, tilt=10, iriOpacity=0.8, spec=0.85, vignette=0.82, surfaceScale=8} = opts;
  const O=360;
  const stops = palette.map((c,i)=>`<stop offset="${(i/(palette.length-1)).toFixed(3)}" stop-color="${c}"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <linearGradient id="base" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#04050a"/><stop offset="0.5" stop-color="#080b12"/><stop offset="1" stop-color="#030409"/>
  </linearGradient>
  <linearGradient id="iri" x1="0" y1="0" x2="1" y2="0.5" gradientTransform="rotate(${tilt} .5 .5)">${stops}</linearGradient>
  <!-- warp the iridescent gradient into flowing ribbons -->
  <filter id="warp" x="-60%" y="-60%" width="220%" height="220%">
    <feTurbulence type="fractalNoise" baseFrequency="${baseFreq}" numOctaves="5" seed="${seed}" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="${scale}" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <!-- glossy specular shine from a turbulence height-field -->
  <filter id="shine" x="-20%" y="-20%" width="140%" height="140%">
    <feTurbulence type="fractalNoise" baseFrequency="0.006 0.013" numOctaves="4" seed="${seed+9}" result="bump"/>
    <feSpecularLighting in="bump" surfaceScale="${surfaceScale}" specularConstant="1" specularExponent="22" lighting-color="#eaf2ff" result="spec">
      <feDistantLight azimuth="235" elevation="58"/>
    </feSpecularLighting>
    <feComponentTransfer in="spec" result="spec2"><feFuncA type="linear" slope="${spec}" intercept="0"/></feComponentTransfer>
    <feComposite in="spec2" in2="SourceAlpha" operator="in"/>
  </filter>
  <radialGradient id="vig" cx="0.5" cy="0.46" r="0.78">
    <stop offset="0.4" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="${vignette}"/>
  </radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="url(#base)"/>
<g opacity="${iriOpacity}"><rect x="${-O}" y="${-O}" width="${W+2*O}" height="${H+2*O}" fill="url(#iri)" filter="url(#warp)"/></g>
<g opacity="0.9"><rect width="${W}" height="${H}" fill="#000" filter="url(#shine)"/></g>
<rect width="${W}" height="${H}" fill="url(#vig)"/>
</svg>`;
}
module.exports={petrolSVG};
const palettes={
  petrolBlue:['#0a0a12','#13314e','#0f3a48','#2a1850','#3a1450','#0c4a44','#071f1a','#05060c'],
  petrolGreen:['#06120d','#0b3a2c','#16614a','#243d31','#3f5b2a','#0c2a44','#191045','#04100a'],
};
module.exports.palettes=palettes;
if(require.main===module){
  (async()=>{
    await sharp(Buffer.from(petrolSVG(1584,396,{seed:11,palette:palettes.petrolBlue,scale:95,tilt:10}))).png().toFile('bg_blue.png');
    await sharp(Buffer.from(petrolSVG(1584,396,{seed:23,palette:palettes.petrolGreen,scale:95,tilt:-8}))).png().toFile('bg_green.png');
    console.log('bg done');
  })();
}
