const fs = require("fs");
const { perPillar, combined, fullPage } = require("./brandhtml.js");
const OUT = __dirname + "/html";
fs.mkdirSync(OUT, { recursive: true });

const all = [...perPillar.map(d=>({key:d.key, ttl:d.ttl, inner:d.inner})), ...combined];
all.forEach(d=>{
  fs.writeFileSync(`${OUT}/${d.key}.html`, fullPage(d.inner));
});
console.log("wrote", all.length, "html files to", OUT);
all.forEach(d=>console.log("  -", d.key, "|", d.ttl));
