// Populated Messaging Blueprint + Brand Guidelines for GTM Pillar 01.
// Content extracted/synthesised from Plansom's live home-page copy doc and brand system (3.1 colour, 4.2 type).
// Relies on the CSS classes defined in brandhtml.js STYLE (plus .sub, .lead, .kk added there).

function esc(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");}
const INK="#222222", BLUE="#343CED", ZEBRA="#F3F3F4";

function sub(t){return `<h2 class="sub">${esc(t)}</h2>`;}
function lead(html){return `<p class="lead">${html}</p>`;}

// 2-col key/value table
function kv(h1,h2,rows){
  const head=`<tr><td class="h" bgcolor="${INK}">${esc(h1)}</td><td class="h" bgcolor="${INK}">${esc(h2)}</td></tr>`;
  const body=rows.map((r,i)=>{const z=i%2?` bgcolor="${ZEBRA}"`:'';return `<tr><td${z}><span class="kk">${esc(r[0])}</span></td><td${z}>${r[1]}</td></tr>`;}).join("");
  return `<table class="grid">${head}${body}</table>`;
}

// bullet list
function ul(items){return `<ul class="subs">`+items.map(i=>`<li>${i}</li>`).join("")+`</ul>`;}

// ---------- MESSAGING BLUEPRINT ----------
function messaging(){
  let s = sub("Messaging blueprint");
  s += lead(`<strong>Status:</strong> v1, extracted from Plansom’s live home-page copy and brand system. The primary positioning is <strong>“AI-powered work simplifier.”</strong> Where drafts vary, the recommended standard is noted.`);

  s += `<p class="seclabel">Brand lines &amp; hierarchy</p>`;
  s += kv("Element","Approved copy",[
    ["Category","AI-powered work simplifier — planning + execution for teams."],
    ["Signature line","“Simply done.”"],
    ["Support line","“All your work. People and agents.”  <span style='color:#5F5F5F'>(standardise on “People”; some drafts use “Humans”)</span>"],
    ["One-liner","“Plansom is an AI-powered work simplifier.”"],
    ["Elevator","“Share what you want to get done, and Plansom’s AI turns it into a ready-to-share plan, prioritises and tracks the work, and involves AI agents — so your team focuses on outcomes, not to-do lists.”"],
    ["Full narrative","“Work gets lost between scattered tools and endless to-do lists. Plansom replaces that with one simple loop: share a goal and our AI turns it into a ready-to-share plan — goals, tasks, timelines and owners — then prioritises the work, tracks progress, and puts AI agents to work alongside your team. Because it lives inside Microsoft Teams and connects to the tools you already use, teams focus on outcomes instead of admin, and repeat what works. Simply done.”"],
  ]);

  s += `<p class="seclabel">The Plansom promise — “The Simple Way”</p>`;
  s += lead(`<strong>Set a goal → get a ready-to-share plan → smash priorities → let AI agents help → make it a habit.</strong>`);
  s += kv("Step","What happens",[
    ["01 · Set a goal","Start with what you want to achieve — a goal, a KPI, an OKR."],
    ["02 · Share easily","The plan is built for you — goals, tasks, timelines, hours. Just invite the team."],
    ["03 · Smash priorities","Tasks ranked to clear bottlenecks. Focus where it matters."],
    ["04 · Let AI agents help","Assign tasks to AI; see outcomes and progress as the agents work for you."],
    ["05 · Make it a habit","Track and repeat your successes. Make the simple way yours."],
  ]);

  s += `<p class="seclabel">Audience &amp; “ready-now” triggers</p>`;
  s += kv("Who is ready","The trigger that makes them ready now",[
    ["Founders & team leads scaling fast","New funding or fast headcount growth — coordination starts breaking down."],
    ["Ops / PMO / Chiefs of Staff","Tool sprawl and status-chasing; they need one source of truth for outcomes."],
    ["Microsoft Teams organisations","Already living in Teams; want goals and progress inside the daily workflow."],
    ["Teams adopting AI agents","Want agents that <em>do the work</em>, not just chat."],
    ["Goal / OKR-driven teams","Missed or unclear goals last cycle; need prioritisation and tracking."],
  ]);

  s += `<p class="seclabel">Pain → value map</p>`;
  s += kv("The pain","How Plansom answers it",[
    ["Work scattered across tools and to-do lists","One place: a goal in, a ready-to-share plan out. <em>Simply done.</em>"],
    ["Planning and status-chasing eat the week","AI builds the plan and tracks progress automatically."],
    ["Delegation is hard; things slip","Clear owners plus AI agents that do the work. <em>“Plansom makes delegation easy.” — Microsoft.</em>"],
    ["Busywork crowds out real goals","Tasks ranked by impact — <em>smash goals, not to-do lists.</em>"],
    ["New AI tools feel risky with company data","Azure-hosted, encrypted, never used to train LLMs; SOC 2 (Type II), GDPR/CCPA."],
  ]);

  s += `<p class="seclabel">Proof points</p>`;
  s += ul([
    "<strong>Trusted by Microsoft</strong> — built with Microsoft for Startups on Foundry SDKs; brings result management into Microsoft Teams.",
    "<em>“Plansom makes delegation easy. Embedding goal alignment and progress directly inside the daily workflow helps organizations focus on outcomes.”</em> — Sherry List, CTO, Microsoft for Startups.",
    "<strong>Security &amp; compliance</strong> — SOC 2 (Type II), GDPR + CCPA, Azure-hosted and encrypted, never used to train LLMs.",
    "<strong>Connectivity</strong> — Teams, Slack, Google Workspace, Outlook, Zoom, Drive, Notion, Asana, Jira, Linear, Monday.com, Salesforce, HubSpot, Fireflies.ai, Otter.ai, Google Meet, Zendesk, Confluence; plus Claude &amp; ChatGPT.",
  ]);

  s += `<p class="seclabel">Differentiators</p>`;
  s += ul([
    "<strong>Goal-in, plan-out</strong> — not a blank project tool you have to build yourself.",
    "<strong>Agents that do the work</strong> and show outcomes — not just a chatbot.",
    "<strong>Lives where work happens</strong> — inside Microsoft Teams and your existing stack.",
    "<strong>Outcome-centric</strong> — goals, KPIs and OKRs, tracked and repeatable (“win on repeat”).",
    "<strong>Enterprise-safe by default</strong> — Azure, encrypted, SOC 2, GDPR/CCPA, no LLM training on your data.",
  ]);

  s += `<p class="seclabel">Calls to action</p>`;
  s += kv("Context","CTA",[
    ["Primary","“Try Plansom”"],
    ["In-product / hero","“Let’s go”"],
    ["Campaign / punchy","“Smash a goal” · “Smash goals, not to-do lists” · “Let Plansom help you”"],
  ]);

  s += `<p class="seclabel">Boilerplate (approved descriptions)</p>`;
  s += kv("Length","Copy",[
    ["Short (~25 words)","Plansom is an AI-powered work simplifier. Share a goal and Plansom turns it into a ready-to-share plan, prioritises and tracks the work, and puts AI agents to work alongside your team — so you win on repeat."],
    ["Medium (~50 words)","Plansom is an AI-powered work simplifier. Share a goal and Plansom builds a ready-to-share plan, prioritises and tracks the work, and puts AI agents to work with your team. It lives inside Microsoft Teams and connects to Slack, Google Workspace, Salesforce, HubSpot and more. Trusted by Microsoft for Startups; SOC 2 (Type II) and GDPR/CCPA compliant."],
  ]);

  s += `<p class="seclabel">Voice &amp; tone</p>`;
  s += ul([
    "<strong>Simple &amp; clear</strong> — plain language, no jargon; one idea per line.",
    "<strong>Action-first</strong> — imperative, outcome verbs: <em>simply done, smash goals, win on repeat</em>.",
    "<strong>Confident, not hypey</strong> — back every claim with proof (Microsoft, SOC 2).",
    "<strong>Benefit before feature.</strong>",
    "<strong>Words we use:</strong> simply, done, goal, plan, prioritise, track, agents, outcomes, on repeat, smash, share.",
    "<strong>Avoid:</strong> corporate filler, feature dumps, unproven superlatives, and “to-do list” language except to position against it.",
  ]);
  return s;
}

// ---------- BRAND GUIDELINES ----------
const PALETTE=[
  ["#222222","34 / 34 / 34","0 / 0 / 0 / 94","Primary near-black — text &amp; UI foundation"],
  ["#404040","64 / 64 / 64","0 / 0 / 0 / 88","Dark grey"],
  ["#5F5F5F","95 / 95 / 95","0 / 0 / 0 / 80","Grey — secondary text"],
  ["#7D7D7D","125 / 125 / 125","0 / 0 / 0 / 64","Mid grey"],
  ["#9A9A9A","154 / 154 / 154","0 / 0 / 0 / 53","Grey"],
  ["#CCCCCC","204 / 204 / 204","0 / 0 / 0 / 29","Light grey — borders &amp; dividers"],
  ["#EAEAEA","234 / 234 / 234","0 / 0 / 0 / 9","Off-white — surfaces &amp; backgrounds"],
  ["#FFFFFF","255 / 255 / 255","0 / 0 / 0 / 0","White — canvas"],
  ["#343CED","52 / 60 / 237","100 / 84 / 0 / 0","Signature blue — navigation, primary actions &amp; key brand moments (use selectively)"],
];
const TYPE=[
  ["Heading 1","Gilroy Semibold","Main titles &amp; key messages; largest size; tight line-spacing 90–100%."],
  ["Subheading 1","Gilroy Medium / Semibold","Section titles &amp; secondary headlines; 50–70% smaller than Heading 1."],
  ["Subheading 2","Gilroy Medium","Supporting headings inside layouts; 30–50% smaller than Subheading 1."],
  ["Body","Gilroy Regular / Medium","Descriptions &amp; longer text; 30–50% smaller than Subheading 2; 120% line-spacing."],
  ["Caption","Gilroy Regular / Medium","Labels, notes &amp; secondary information; smallest size."],
];

function brand(){
  let s = sub("Brand guidelines");
  s += lead(`<strong>Brand essence:</strong> simplicity and clarity. A neutral monochrome foundation creates a clean, distraction-free experience; the vibrant signature blue is used selectively to highlight navigation, primary actions and key brand moments.`);

  s += `<p class="seclabel">Colour palette</p>`;
  let ph=`<tr><td class="h" bgcolor="${INK}">Swatch</td><td class="h" bgcolor="${INK}">Hex</td><td class="h" bgcolor="${INK}">RGB</td><td class="h" bgcolor="${INK}">CMYK</td><td class="h" bgcolor="${INK}">Role</td></tr>`;
  let pb=PALETTE.map((c,i)=>{const z=i%2?` bgcolor="${ZEBRA}"`:'';return `<tr><td bgcolor="${c[0]}">&nbsp;</td><td${z}><span class="kk">${c[0]}</span></td><td${z}>${c[1]}</td><td${z}>${c[2]}</td><td${z}>${c[3]}</td></tr>`;}).join("");
  s += `<table class="grid">${ph}${pb}</table>`;
  s += lead(`<span style="color:#5F5F5F">Usage: keep 90%+ of any layout monochrome; reserve <strong style="color:${BLUE}">#343CED</strong> for a single primary action, active navigation, or a deliberate brand moment. Never use blue as a background wash.</span>`);

  s += `<p class="seclabel">Typography</p>`;
  let th=`<tr><td class="h" bgcolor="${INK}">Level</td><td class="h" bgcolor="${INK}">Font</td><td class="h" bgcolor="${INK}">Use &amp; sizing</td></tr>`;
  let tb=TYPE.map((t,i)=>{const z=i%2?` bgcolor="${ZEBRA}"`:'';return `<tr><td${z}><span class="kk">${t[0]}</span></td><td${z}>${t[1]}</td><td${z}>${t[2]}</td></tr>`;}).join("");
  s += `<table class="grid">${th}${tb}</table>`;
  s += lead(`<span style="color:#5F5F5F">Typeface is <strong>Gilroy</strong>. These GTM documents are set in <strong>Montserrat</strong>, a native-to-Google-Docs geometric substitute, so they render consistently for viewers without Gilroy installed.</span>`);

  s += `<p class="seclabel">Logo</p>`;
  s += lead(`<span style="color:#5F5F5F">Logo lock-ups, clear-space and minimum-size rules were not included in the shared materials — <strong>TBC</strong>. Add the primary/secondary marks and mono/reverse variants here.</span>`);

  s += `<p class="seclabel">Do / don’t</p>`;
  s += kv("Do","Don’t",[
    ["Keep layouts clean and spacious; let the monochrome breathe.","Fill space or add decoration for its own sake."],
    ["Use blue for one clear action per view.","Scatter blue across multiple elements."],
    ["Maintain the type hierarchy and generous line-spacing.","Mix weights arbitrarily or crowd headings."],
    ["Pair copy with proof (Microsoft, SOC 2).","Make unproven claims or dump features."],
  ]);
  return s;
}

// full build-out (standalone Pillar 01)
function full(){ return messaging() + brand(); }

// compact build-out (combined overview Pillar 01 section)
function compact(){
  let s = sub("Messaging blueprint (v1) — extracted");
  s += kv("Element","Copy",[
    ["Positioning","AI-powered work simplifier (planning + execution for teams)."],
    ["Signature","“Simply done.”  ·  Support: “All your work. People and agents.”"],
    ["One-liner","“Plansom is an AI-powered work simplifier.”"],
    ["Promise","Set a goal → Plansom builds a ready-to-share plan, prioritises and tracks the work, and puts AI agents to work with your team — so you win on repeat."],
    ["Proof","Trusted by Microsoft · SOC 2 (Type II) · GDPR + CCPA · never trains LLMs on your data."],
    ["Voice","Simple, action-first, confident: “smash goals, not to-do lists.”"],
  ]);
  s += sub("Brand snapshot");
  let ph=`<tr>`+PALETTE.map(c=>`<td bgcolor="${c[0]}">&nbsp;</td>`).join("")+`</tr><tr>`+PALETTE.map((c,i)=>`<td${i%2?` bgcolor="${ZEBRA}"`:''}><span class="kk" style="font-size:7pt">${c[0]}</span></td>`).join("")+`</tr>`;
  s += `<table class="grid">${ph}</table>`;
  s += lead(`Monochrome foundation + <strong style="color:${BLUE}">#343CED</strong> used selectively · Typeface <strong>Gilroy</strong> (set in Montserrat here) · Essence: simplicity &amp; clarity. <span style="color:#5F5F5F">Full detail in the standalone Pillar 01 document.</span>`);
  return s;
}

module.exports = { full, compact };
