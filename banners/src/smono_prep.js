const sharp=require('sharp');
(async()=>{ await sharp('smono.png').trim({threshold:5}).resize({width:120}).toFile('smono_t.png');
  const m=await sharp('smono_t.png').metadata(); console.log('smono',m.width+'x'+m.height);})();
