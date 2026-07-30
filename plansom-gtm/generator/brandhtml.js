// Brand-styled HTML generator for Plansom GTM pillar docs (class-based CSS + bgcolor attrs
// for reliable HTML -> Google Doc conversion). Montserrat (Gilroy substitute native to GDocs).
const { pillars, contentGroups, coverList } = require("./content.js");
const { groups: contentOsGroups } = require("./contentos-data.js");
const MB = require("./msgbrand.js");

const BLUE = "#343CED", INK = "#222222", LGREY = "#EAEAEA", ZEBRA = "#F3F3F4";
const PRODUCT = "Plansom is an AI-powered planning platform that transforms ideas, tasks, and goals into clear, actionable plans.";
const COREQ = "Who is ready to use Plansom today — and why?";
const THESIS_LABEL = `How this answers “${COREQ}”`;

const STYLE = `
body{font-family:Montserrat,'Helvetica Neue',Arial,sans-serif;color:#222222;font-size:11pt;line-height:1.35;margin:0}
h1,h2,p,ul{margin:0}
.eyebrow{color:#343CED;font-weight:700;font-size:9pt;letter-spacing:1.5px;margin-bottom:4px}
h1.ptitle{color:#222222;font-weight:700;font-size:26pt;line-height:1.03;margin-bottom:6px;border-bottom:2px solid #343CED;padding-bottom:7px}
h1.big{color:#222222;font-weight:700;font-size:32pt;line-height:1.02;margin-bottom:4px}
.prod{color:#5F5F5F;font-size:10.5pt;margin-bottom:12px}
.subtitle{color:#5F5F5F;font-style:italic;font-size:12pt;border-bottom:3px solid #343CED;padding-bottom:10px;margin-bottom:8px}
.seclabel{color:#222222;font-weight:700;font-size:10pt;letter-spacing:.5px;margin:16px 0 6px 0}
table.tbox{border-collapse:collapse;width:100%;margin-bottom:4px}
td.thesis{padding:12px 15px;border-left:4px solid #343CED}
.tlabel{color:#343CED;font-weight:700;font-size:9.5pt;letter-spacing:.4px;margin-bottom:6px}
.tp{color:#222222;font-size:10.5pt;line-height:1.38;margin-bottom:7px}
.qlabel{color:#343CED;font-weight:700;font-size:9.5pt;margin-bottom:6px}
.qbig{color:#222222;font-weight:700;font-size:17pt;line-height:1.1;margin-bottom:8px}
table.grid{border-collapse:collapse;width:100%;margin-bottom:8px}
table.grid td{border:1px solid #CCCCCC;padding:6px 9px;vertical-align:top;font-size:9.5pt;color:#222222}
table.grid td.h{color:#FFFFFF;font-weight:700;font-size:9.5pt}
.comp{font-weight:700;font-size:10pt;color:#222222}
.tag{color:#5F5F5F;font-style:italic;font-size:8pt;margin-top:2px}
ul.subs{padding-left:15px}
ul.subs li{font-size:9.5pt;margin-bottom:2px;color:#222222}
.brief{font-size:9.5pt;margin-bottom:4px;color:#222222}
.lbl{color:#343CED;font-weight:700;font-size:8pt}
h2.gh{font-size:15pt;font-weight:700;color:#222222;margin:16px 0 3px 0}
.gn{color:#343CED}
.gc{color:#5F5F5F;font-style:italic;font-size:10pt;font-weight:400}
.gp{font-size:9.5pt;border-bottom:1px solid #CCCCCC;padding-bottom:6px;margin-bottom:7px;color:#222222}
.gpl{color:#343CED;font-weight:700}
.plabel{color:#343CED;font-weight:700}
.plist-n{color:#343CED;font-weight:700;font-size:10.5pt}
.plist-nm{color:#222222;font-weight:700;font-size:10.5pt}
.plist-rl{color:#5F5F5F;font-size:9pt;text-align:right}
.note{color:#5F5F5F;font-size:9pt;margin-top:10px}
.arrow{color:#343CED;font-style:italic;font-size:9.5pt;margin-top:8px}
h2.sub{font-size:15pt;font-weight:700;color:#222222;margin:20px 0 6px 0;border-bottom:2px solid #343CED;padding-bottom:4px}
.lead{color:#222222;font-size:10pt;margin:0 0 8px 0;line-height:1.4}
.kk{font-weight:700;color:#222222;font-size:9.5pt}
.pb{page-break-before:always}
`;

function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
function md(s){
  let muted=false; if(s.startsWith("@")){muted=true;s=s.slice(1);}
  let h=esc(s).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>");
  return muted?`<span style="color:#5F5F5F">${h}</span>`:h;
}
const PB = `<p class="pb" style="font-size:1pt;line-height:1pt">&nbsp;</p>`;

function eyebrow(t){return `<p class="eyebrow">${esc(String(t).toUpperCase())}</p>`;}
function ptitle(t){return `<h1 class="ptitle">${esc(t)}</h1>`;}
function productLine(){return `<p class="prod">${esc(PRODUCT)}</p>`;}
function seclabel(t){return `<p class="seclabel">${esc(String(t).toUpperCase())}</p>`;}

function thesisBox(paras){
  const inner=`<p class="tlabel">${esc(THESIS_LABEL)}</p>`+paras.map(p=>`<p class="tp">${md(p)}</p>`).join("");
  return `<table class="tbox"><tr><td class="thesis" bgcolor="${LGREY}">${inner}</td></tr></table>`;
}

function th(t){return `<td class="h" bgcolor="${INK}">${esc(t)}</td>`;}
function cell(html,z){return `<td${z?` bgcolor="${ZEBRA}"`:''}>${html}</td>`;}

function componentsTable(rows){
  const head=`<tr>${th("Component")}${th("Sub-components")}${th("Key considerations & build brief")}</tr>`;
  const body=rows.map((r,i)=>{const z=i%2;
    const comp=`<p class="comp">${esc(r.comp)}</p>`+(r.tag?`<p class="tag">${esc(r.tag)}</p>`:"");
    const subs=`<ul class="subs">`+r.subs.map(s=>`<li>${esc(s)}</li>`).join("")+`</ul>`;
    const brief=(r.consider?`<p class="brief"><span class="lbl">CONSIDER&nbsp;&nbsp;</span>${esc(r.consider)}</p>`:"")+(r.build?`<p class="brief"><span class="lbl">BUILD&nbsp;&nbsp;</span>${esc(r.build)}</p>`:"");
    return `<tr>${cell(comp,z)}${cell(subs,z)}${cell(brief,z)}</tr>`;
  }).join("");
  return `<table class="grid">${head}${body}</table>`;
}

function detailTable(rows){
  const head=`<tr>${th("Sub-component / element")}${th("Key considerations")}${th("Build brief")}</tr>`;
  const body=rows.map((r,i)=>{const z=i%2;
    const sub=`<p class="comp">${esc(r.sub)}</p>`+(r.note?`<p class="tag">${esc(r.note)}</p>`:"");
    return `<tr>${cell(sub,z)}${cell(esc(r.consider),z)}${cell(esc(r.build),z)}</tr>`;
  }).join("");
  return `<table class="grid">${head}${body}</table>`;
}

// pillar 2 (content)
const contentThesis=[
  "Content is the connective tissue that makes the “why” legible everywhere. **It doesn’t serve one stage — it arms every pillar**: Messaging becomes assets, Outreach gets sequences, Spin Sell gets decks, ROI calculators and battlecards, the Journey gets onboarding, Partnerships get co-sell kits, Traffic gets landing pages, and Social gets discovery content.",
  "It is also the pillar that lets prospects *self-identify as ready* — a use-case page or lead magnet that names their exact trigger is often what converts a passive reader into a trial.",
];
const contentRole="EXPRESS the “why” everywhere";
const feeds=[
  ["Messaging & Brand","is the source; Content turns the blueprint into published assets."],
  ["Outreach","runs on sequences, one-pagers and use-case links from here."],
  ["Spin Sell","closes with the story deck, ROI calculator, battlecards and scripts."],
  ["Customer Journey","activates trials with onboarding, guides and walkthroughs."],
  ["Partnerships","equips partners with co-sell decks, briefs and case studies."],
  ["Traffic","converts spend via landing pages, SEO/GEO blog and lead magnets."],
  ["Social","is fed daily by the Discovery content group."],
  ["Events","are anchored by the TED talk, masterclass and workshops."],
];
function feedsTable(){
  const rows=feeds.map((f,i)=>{const z=i%2;return `<tr>${cell(`<strong>${esc(f[0])}</strong>`,z)}${cell(esc(f[1]),z)}</tr>`;}).join("");
  return `<table class="grid"><tr>${th("Pillar")}${th("What the Content OS gives it")}</tr>${rows}</table>`;
}
function groupHeading(num,ttl,count,purpose){
  return `<h2 class="gh"><span class="gn">${esc(num)}</span>&nbsp;&nbsp;${esc(ttl)}${count?` <span class="gc">${esc(count)}</span>`:''}</h2>`
    +`<p class="gp"><span class="gpl">How it answers “${esc(COREQ)}”&nbsp;&nbsp;</span>${esc(purpose)}</p>`;
}

function pillarBody(p){
  return eyebrow(`PLANSOM · GTM PILLAR ${p.n} · ${p.role}`)+ptitle(p.title)+productLine()
    +thesisBox(p.thesis)+seclabel("Components, sub-components & build briefs")+componentsTable(p.rows);
}
function contentBody(){
  let s=eyebrow(`PLANSOM · GTM PILLAR 02 · ${contentRole}`)+ptitle("Content System — Content Operating System")+productLine()
    +thesisBox(contentThesis)+seclabel("How the Content OS feeds every other pillar")+feedsTable()
    +`<p class="note"><span style="color:#222222">Two foundational listening systems — </span><strong>Social listening OS</strong><span style="color:#222222"> and </span><strong>Market scan OS</strong><span style="color:#222222"> — run underneath all of the above, keeping the “who” and “why” continuously up to date.</span></p>`
    +seclabel("The ten component groups");
  contentOsGroups.forEach(g=>{ if(["3","9"].includes(g.num)) s+=PB; s+=groupHeading(g.num,g.title,g.count,g.purpose)+detailTable(g.rows); });
  return s;
}

function overviewBody(){
  let s=eyebrow("PLANSOM · GO-TO-MARKET")
    +`<h1 class="big">GTM Pillar Overview</h1>`
    +`<p class="subtitle">One page per pillar — what each pillar owns, and how it answers the core question</p>`
    +productLine()
    +`<table class="tbox"><tr><td class="thesis" bgcolor="${LGREY}">`
      +`<p class="qlabel">THE CORE GTM QUESTION</p>`
      +`<p class="qbig">“${esc(COREQ)}”</p>`
      +`<p class="tp">Every pillar exists to answer that question. Each does it in one of four ways — it <strong>defines</strong> the hypothesis of who is ready, <strong>reaches</strong> those people, <strong>qualifies / converts</strong> their readiness into usage, or <strong>expresses</strong> the “why” so they can find it themselves.</p>`
      +`</td></tr></table>`
    +seclabel("The ten pillars");
  const rows=coverList.map((o,i)=>{const z=i%2;return `<tr>`
    +`<td${z?` bgcolor="${ZEBRA}"`:''}><span class="plist-n">${esc(o[0])}</span></td>`
    +`<td${z?` bgcolor="${ZEBRA}"`:''}><span class="plist-nm">${esc(o[1])}</span></td>`
    +`<td${z?` bgcolor="${ZEBRA}"`:''}><span class="plist-rl">${esc(String(o[2]).toUpperCase())}</span></td></tr>`;}).join("");
  s+=`<table class="grid">${rows}</table>`;
  s+=`<p class="note"><strong style="color:#222222">Note on order:</strong> the Content System is the most detailed pillar, so it is placed last here and specified fully in the companion “Content Operating System” document.</p>`;
  pillars.forEach(p=>{ s+=PB+pillarBody(p)+(p.n==="01"?MB.compact():""); });
  s+=PB+eyebrow(`PLANSOM · GTM PILLAR 02 · ${contentRole}`)+ptitle("Content System — Content OS")+productLine()
    +thesisBox(contentThesis)+seclabel("Component groups (full detail in the companion document)")
    +(function(){const rows=contentGroups.map((g,i)=>{const z=i%2;return `<tr>${cell(`<strong>${esc(g[0])}</strong>`,z)}${cell(esc(g[1]),z)}</tr>`;}).join("");
      return `<table class="grid"><tr>${th("Component group")}${th("Role in answering the core question")}</tr>${rows}</table>`;})()
    +`<p class="arrow">→ See the companion “Content Operating System” document for sub-components, key considerations and a build brief for each group.</p>`;
  return s;
}

function fullPage(inner){
  return `<!doctype html><html><head><meta charset="utf-8"><style>${STYLE}</style></head><body>${inner}</body></html>`;
}

// manifest
const perPillar=[];
const ordered=[pillars.find(p=>p.n==="01"), {content:true}, ...["03","04","05","06","07","08","09","10"].map(n=>pillars.find(p=>p.n===n))];
ordered.forEach(p=>{
  if(p.content) perPillar.push({ n:"02", key:"pillar-02-content-system", title:"Plansom GTM · Pillar 02 — Content System (Content OS)", inner:contentBody() });
  else perPillar.push({ n:p.n, key:`pillar-${p.n}-${p.title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")}`, title:`Plansom GTM · Pillar ${p.n} — ${p.title}`, inner:pillarBody(p)+(p.n==="01"?MB.full():"") });
});
const combined=[
  { key:"combined-gtm-pillar-overview", title:"Plansom GTM — Pillar Overview (all pillars)", inner:overviewBody() },
  { key:"combined-content-operating-system", title:"Plansom GTM — Content Operating System (Pillar 02 deep-dive)",
    inner: eyebrow("PLANSOM · GO-TO-MARKET · PILLAR 02")+`<h1 class="big">Content Operating System</h1>`
      +`<p class="subtitle">Companion deep-dive to the GTM Pillar Overview</p>`+productLine()+contentBody() },
];

module.exports = { perPillar, combined, fullPage };
