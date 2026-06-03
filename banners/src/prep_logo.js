const sharp = require('sharp');
// Turn a black-on-white logo into a tinted, transparent PNG.
async function tint(src, out, rgb){
  const g = await sharp(src).flatten({background:'#ffffff'}).grayscale().negate().raw().toBuffer({resolveWithObject:true});
  const {data, info} = g; // single channel = our alpha (text=white=opaque)
  const W=info.width, H=info.height;
  const rgba = Buffer.alloc(W*H*4);
  for(let i=0;i<W*H;i++){
    rgba[i*4]=rgb[0]; rgba[i*4+1]=rgb[1]; rgba[i*4+2]=rgb[2]; rgba[i*4+3]=data[i];
  }
  await sharp(rgba,{raw:{width:W,height:H,channels:4}}).png().toFile(out);
  console.log('wrote',out,W+'x'+H);
}
(async()=>{
  await tint('gtmstage_src.png','gtmstage_white.png',[255,255,255]);
  await tint('gtmstage_src.png','gtmstage_mint.png',[198,243,186]);
})();
