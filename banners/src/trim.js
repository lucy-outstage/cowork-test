const sharp=require('sharp');
(async()=>{
  for(const f of ['gtmstage_white','gtmstage_mint']){
    await sharp(f+'.png').trim({threshold:10}).toFile(f+'_t.png');
    const m=await sharp(f+'_t.png').metadata(); console.log(f, m.width+'x'+m.height);
  }
})();
