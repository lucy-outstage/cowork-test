// Full first-draft COPY for Plansom's content pages, built one by one.
// Voice: simple, action-first, confident. [Brackets] = to confirm / fill.
// Uses the shared brand CSS classes (via fullPage from brandhtml.js) + a little inline.
const { fullPage } = require("./brandhtml.js");
const fs = require("fs");

const BLUE="#343CED", INK="#222222", GREY="#5F5F5F", LGREY="#EAEAEA", ZEBRA="#F3F3F4";

// helpers -------------------------------------------------------------
const PB = `<p class="pb" style="font-size:1pt;line-height:1pt">&nbsp;</p>`;
function pageTitle(t){return `<h1 class="ptitle">${t}</h1>`;}
function meta(url,purpose){return `<p class="lead" style="color:${GREY}"><span class="kk">${url}</span> — ${purpose}</p>`;}
function sec(t){return `<p class="seclabel">${t}</p>`;}
function p(h){return `<p class="lead">${h}</p>`;}
function ul(items){return `<ul class="subs">`+items.map(i=>`<li>${i}</li>`).join("")+`</ul>`;}
function cta(primary,secondary){return `<p class="lead"><span style="background-color:${BLUE};color:#fff;font-weight:700;padding:3px 10px">${primary}</span>${secondary?`&nbsp;&nbsp;<span style="color:${BLUE};font-weight:700">${secondary}</span>`:''}</p>`;}
function hero(pill,h1,support,body){
  return `<table class="tbox"><tr><td class="thesis" bgcolor="${LGREY}">`
    + (pill?`<p style="color:${BLUE};font-weight:700;font-size:8.5pt;letter-spacing:1px;margin:0 0 6px 0">${pill.toUpperCase()}</p>`:'')
    + `<p style="color:${INK};font-weight:700;font-size:24pt;line-height:1.02;margin:0 0 2px 0">${h1}</p>`
    + `<p style="color:${INK};font-weight:700;font-size:14pt;margin:0 0 8px 0">${support}</p>`
    + `<p class="lead" style="margin:0">${body}</p>`
    + `</td></tr></table>`;
}
function page(title,url,purpose,body){ return PB + pageTitle(title) + meta(url,purpose) + body; }
function divH(t){return `<h1 class="big" style="font-size:22pt;margin-top:6px;border-bottom:2px solid ${BLUE};padding-bottom:6px">${t}</h1>`;}

// ============================ COVER ============================
let COVER = `<p class="eyebrow">PLANSOM · CONTENT · PAGE COPY (v1)</p>`
 + `<h1 class="big">Content Page Copy</h1>`
 + `<p class="subtitle">Full first-draft copy for every content page — built one by one, in the “Simply done” voice</p>`
 + p(`Plansom is an AI-powered work simplifier. This document holds ready-to-review draft copy for the website pages, the ten use-case stories, and the campaign landing pages. Copy in <span class="kk">[brackets]</span> needs confirming (prices, names, metrics). Messaging and voice follow the Pillar 01 blueprint; page structure follows the Content OS.`)
 + p(`<span style="color:${GREY}">Contents: A) Website pages · B) Use-case stories (10) · C) Landing pages (5).</span>`);

// ============================ A. WEBSITE PAGES ============================
let A = PB + divH("A · Website pages");

// 1 Homepage
A += page("Homepage","plansom.com","Convert visitors: say what it is, prove it, start a trial.",
  hero("Works inside Microsoft Teams","Simply done.","All your work. People and agents.",
    "Plansom is an AI-powered work simplifier. Share what you want to get done — our AI turns it into a ready-to-share plan, prioritises and tracks the work, and puts AI agents to work alongside your team. So you win on repeat.")
  + cta("Try Plansom","Let’s go")
  + sec("Start box") + p("“Share what you want to get done.” &nbsp; <span class='kk'>Write a goal · Upload a file · Paste a meeting transcript</span>")
  + p(`<span style="color:${GREY}">Your data is encrypted, Azure-hosted, and never used to train LLMs. SOC 2 (Type II) · GDPR + CCPA.</span>`)
  + sec("Connect all your work") + p("Teams, Slack, Google Workspace, Outlook, Zoom, Drive, Notion, Asana, Jira, Linear, Monday.com, Salesforce, HubSpot, Fireflies.ai, Otter.ai, Google Meet, Zendesk, Confluence — plus Claude &amp; ChatGPT.")
  + sec("Trusted by Microsoft") + p("<em>“Plansom makes delegation easy. Embedding goal alignment and progress directly inside the daily workflow helps organizations focus on outcomes.”</em> — Sherry List, CTO, Microsoft for Startups. <span style='color:"+GREY+"'>Built on Foundry SDKs.</span>")
  + sec("The Simple Way") + ul(["<strong>Set a goal</strong> — a goal, a KPI, an OKR.","<strong>Share easily</strong> — the plan is built for you; just invite the team.","<strong>Smash priorities</strong> — tasks ranked to clear bottlenecks.","<strong>Let AI agents help</strong> — assign tasks to AI; see outcomes.","<strong>Make it a habit</strong> — track and repeat your successes."])
  + sec("Goodbye chaos") + p("See it on a real goal: <span class='kk'>[Preset goal 1] · [Preset goal 2] · [Preset goal 3]</span>")
  + sec("Close") + p("<strong>Smash goals, not to-do lists.</strong>") + cta("Try Plansom","")
);

// 2 Use-case hub
A += page("Use-case hub","plansom.com/use-cases","Route each visitor to their own story.",
  hero("","One place for every goal.","However your team works, it starts with a goal.",
    "Pick the way you work — see how Plansom turns your goal into a plan your team (and its agents) can run.")
  + sec("Find yours")
  + ul(["<strong>Leadership</strong> — turn company OKRs into team plans.","<strong>Ops / PMO</strong> — kill the status meeting.","<strong>Product</strong> — goal to roadmap, drafted by agents.","<strong>Marketing</strong> — campaign in a click.","<strong>Sales / RevOps</strong> — hit the number.","<strong>People &amp; managers</strong> — 30-60-90 that runs itself.","<strong>Teams-native</strong> — cross-functional work inside Microsoft Teams.","<strong>Agencies</strong> — deliver client work on repeat.","<strong>Customer Success</strong> — renewals &amp; QBRs, planned.","<strong>Individuals</strong> — smash goals, not to-do lists."])
  + cta("Try Plansom","")
);

// 3-5 segment use-case pages
A += page("Use-case page · Teams-native","plansom.com/microsoft-teams","Win the Teams-native segment.",
  hero("Works inside Microsoft Teams","Planning that lives in Teams.","Goals and delivery, where your team already works.",
    "Stop switching tabs. Plansom turns a goal into a shared plan right inside Microsoft Teams, tracks progress, and lets AI agents take on tasks — no new home for your team to learn.")
  + sec("Why teams switch") + ul(["Goals, tasks and progress inside Teams — not another app.","AI builds the plan; agents do real work.","Backed by Microsoft; built on Foundry SDKs."])
  + sec("Proof") + p("<em>“Plansom makes delegation easy…”</em> — Sherry List, CTO, Microsoft for Startups.")
  + cta("Try Plansom in Teams","")
);
A += page("Use-case page · Scaling teams","plansom.com/scale","Win recently funded scale-ups.",
  hero("For teams growing fast","Scale without the chaos.","New goals every week. One place to run them.",
    "Just raised or growing fast? Coordination breaks first. Share a goal and Plansom builds the plan, prioritises the work, and puts agents on the busywork — so the team stays focused on outcomes.")
  + sec("Made for scale") + ul(["Goal-in, plan-out — no blank boards to build.","Priorities ranked so bottlenecks clear.","Agents absorb the growing task load."])
  + cta("Try Plansom","")
);
A += page("Use-case page · Tool-switchers","plansom.com/asana-alternative","Win teams leaving heavy PM tools.",
  hero("Asana / Monday alternative","The plan builds itself.","Less tool. More done.",
    "Tired of maintaining boards? Plansom starts from a goal and builds the plan for you, then agents help do the work. It’s the simpler way — and it connects to the tools you keep.")
  + sec("Why we win") + ul(["Boards you build vs. a plan that builds itself.","AI agents that do work, not just chat.","Migrate in minutes; keep your integrations."])
  + cta("Try Plansom","")
);

// 6 Product / Features
A += page("Product / Features","plansom.com/product","Explain the product by outcome, not spec.",
  hero("","Set a goal. Plansom does the rest.","",
    "Everything in Plansom serves one loop: goal in, plan out, work done, repeated.")
  + sec("What you get")
  + ul([
    "<strong>Set goals</strong> — start from a goal, KPI or OKR (or a file / transcript).",
    "<strong>Auto-plan</strong> — a ready-to-share plan: goals, tasks, timelines, owners.",
    "<strong>Prioritise</strong> — tasks ranked to clear bottlenecks.",
    "<strong>AI agents</strong> — assign tasks to agents; see outcomes and progress.",
    "<strong>Track &amp; repeat</strong> — live progress; repeat what works.",
    "<strong>Connect</strong> — inside Microsoft Teams and across your stack.",
  ])
  + cta("Try Plansom","")
);

// 7 Pricing
A += page("Pricing","plansom.com/pricing","Reduce friction to trial; frame ~10-seat teams.",
  hero("","Simple pricing for teams.","Start free. Scale when it’s working.",
    "Pricing is per seat, built around a typical ~10-seat team. <span class='kk'>[Confirm tiers &amp; prices.]</span>")
  + table3(["Plan","For","Price"],[
    ["Free","Try it on one goal","[£0]"],
    ["Team","Small teams running goals","[£X / seat / mo]"],
    ["Business","Multiple teams + admin/security","[£Y / seat / mo]"],
  ])
  + sec("FAQ") + ul(["Is my data safe? Yes — encrypted, Azure-hosted, never used to train LLMs; SOC 2, GDPR/CCPA.","Do I need Microsoft Teams? No — it works standalone and integrates widely.","Can I change plans? Yes, anytime."])
  + cta("Try Plansom","Talk to us")
);

// 8 About
A += page("About","plansom.com/about","Build trust; founder-led story.",
  hero("","We’re making work simply done.","",
    "Work gets lost between scattered tools and endless to-do lists. We started Plansom to replace that with one simple loop: set a goal, and let AI — and your team — get it done.")
  + sec("Our story") + p("<span class='kk'>[Founder story — origin, why now.]</span> Built with Microsoft for Startups on Foundry SDKs.")
  + sec("What we believe") + ul(["Outcomes over busywork.","Simple beats complex.","AI should do work, not just talk."])
  + sec("Team") + p("<span class='kk'>[Founders + team.]</span>")
);

// 9 FAQ
A += page("FAQ","plansom.com/faq","Pre-empt objections.",
  table2(["Question","Answer"],[
    ["What is Plansom?","An AI-powered work simplifier: share a goal, get a plan, and let AI agents help deliver it."],
    ["How does it work?","Set a goal → Plansom builds a ready-to-share plan → prioritises &amp; tracks → agents take tasks → repeat."],
    ["Is my data safe?","Encrypted, Azure-hosted, never used to train LLMs. SOC 2 (Type II), GDPR + CCPA."],
    ["Does it work in Microsoft Teams?","Yes — natively. It also works standalone and connects to your stack."],
    ["What does it integrate with?","Teams, Slack, Google Workspace, Salesforce, HubSpot, Notion, Jira and more; plus Claude &amp; ChatGPT."],
    ["Do the AI agents really do work?","Yes — they take real tasks and show outcomes, not just chat."],
    ["How do I start?","Share one goal. The plan builds itself. [Free to try.]"],
  ])
);

// 10 Security & compliance
A += page("Security & compliance","plansom.com/security","Unblock security-conscious buyers.",
  hero("","Enterprise-safe by default.","",
    "Plansom is built to be trusted with your team’s work.")
  + ul([
    "<strong>SOC 2 (Type II)</strong> and <strong>GDPR + CCPA</strong> compliant.",
    "<strong>Azure-hosted</strong>, data encrypted in transit and at rest.",
    "<strong>Never used to train LLMs.</strong> Processing protected by Microsoft terms.",
    "Data residency &amp; sub-processors: <span class='kk'>[list / TBC]</span>.",
    "SSO / access controls: <span class='kk'>[TBC]</span>.",
  ])
  + cta("Read the details","Contact security")
);

// stubs
A += page("Blog · Investors · Hiring · Cookies (stubs)","plansom.com/*","Placeholders to expand later.",
  ul([
    "<strong>Blog</strong> — hub-and-spoke by SEO theme (see Traffic pillar). First posts: “Stop managing to-do lists.”, “Goal to plan in 60 seconds.”",
    "<strong>Investors</strong> — vision, traction metrics <span class='kk'>[TBC]</span>, deck request.",
    "<strong>Hiring</strong> — “Help us make work simply done.” Values + open roles <span class='kk'>[TBC]</span>.",
    "<strong>Cookies &amp; privacy</strong> — policy + consent banner (aligns to Tracking OS).",
  ])
);

// ============================ B. USE-CASE STORIES ============================
let B = PB + divH("B · Use-case stories (10)");
const STORIES = [
  ["01 · Turn company OKRs into team plans","Leadership","Leadership sets bold OKRs — then they stall in a slide deck.","Share each objective; Plansom turns it into a live, owned plan across the teams that deliver it.","Every objective has a plan, an owner and live progress — no more quarter-end surprises."],
  ["02 · Kill the status meeting","Ops / PMO","Half the week goes on chasing updates and prepping status decks.","Plansom tracks progress live inside Teams, so status is a glance, not a meeting.","Reclaim the status meeting; managers focus on unblocking, not reporting."],
  ["03 · Goal to roadmap, drafted by agents","Product","Turning strategy into a prioritised roadmap eats senior time.","State the product goal; Plansom drafts the plan and agents draft the tasks to review.","A first-draft roadmap in minutes; the team edits instead of starting blank."],
  ["04 · Campaign in a click","Marketing","Every campaign starts from a blank plan and manual coordination.","Set the campaign goal; Plansom builds the plan and agents do first drafts of the work.","Launch faster; spend time on ideas, not task admin."],
  ["05 · Hit the number","Sales / RevOps","The quarterly target is clear; the plan to hit it isn’t.","Turn the target into account plans with ranked next actions and agent follow-ups.","Every rep knows the next best action; the number has a plan behind it."],
  ["06 · 30-60-90 that runs itself","People / managers","New hires and new teams lose weeks finding their feet.","Plansom generates a 30-60-90 plan from the role’s goal and tracks ramp.","Faster ramp; managers coach instead of building onboarding docs."],
  ["07 · Cross-functional, inside Teams","Teams-native","Cross-team projects scatter across tools and threads.","Run the project on one shared plan inside Microsoft Teams, where work already happens.","Everyone aligned in one place; nothing lost between tools."],
  ["08 · Deliver client work on repeat","Agencies (Partner)","Each client engagement is re-planned from scratch.","Turn a delivery goal into a repeatable, shareable plan; agents handle the routine.","Consistent delivery, higher margins, easy client sharing."],
  ["09 · Renewals & QBRs, planned","Customer Success","Renewals slip when success plans live in someone’s head.","Turn each account’s goal into a tracked success plan with clear owners.","Proactive renewals; QBRs backed by real progress."],
  ["10 · Smash goals, not to-do lists","Individual / manager","The to-do list grows; the goals don’t move.","Start the week from a goal; Plansom ranks the few tasks that matter and agents clear the rest.","Focus on outcomes; end the week on goals hit, not tasks ticked."],
];
STORIES.forEach(s=>{
  B += PB + pageTitle(s[0]) + meta("plansom.com/use-cases/[slug]",`Segment: ${s[1]}`)
    + sec("The trigger &amp; pain") + p(s[2])
    + sec("How Plansom helps") + p(s[3])
    + sec("The outcome") + p("<strong>"+s[4]+"</strong>")
    + sec("Proof") + p("<span class='kk'>[Customer / metric — from Advisory Board.]</span>")
    + cta("Try Plansom","See the plan");
});

// ============================ C. LANDING PAGES ============================
let C = PB + divH("C · Landing pages (5)");
const LPS = [
  ["LP1 · Teams-native","plansom.com/lp/teams","Planning that lives in Microsoft Teams.","Goals, plans and progress — inside Teams.",["Goal-in, plan-out, right where you work","AI agents do real tasks","Backed by Microsoft"],"Try Plansom in Teams"],
  ["LP2 · Switcher","plansom.com/lp/asana-alternative","The Asana alternative that plans itself.","Less tool. More done.",["No blank boards to build","The plan builds itself from a goal","Keep your integrations"],"Try Plansom"],
  ["LP3 · AI agents","plansom.com/lp/ai-agents","Put AI agents to work — not just to chat.","Assign the task. Watch it get done.",["Agents take real tasks","See outcomes and progress","Start with one workflow"],"Try Plansom"],
  ["LP4 · OKRs","plansom.com/lp/okrs","OKRs that actually get done.","From objective to owned plan in minutes.",["Turn each OKR into a live plan","Ranked priorities clear bottlenecks","Track progress automatically"],"Try Plansom"],
  ["LP5 · Masterclass","plansom.com/lp/masterclass","Join the Simply Done masterclass.","Learn the simple way to run a team on goals.",["The 5-step Simple Way","Live goal→plan demo","Q&amp;A with the founders"],"Register free"],
];
LPS.forEach(l=>{
  C += PB + pageTitle(l[0]) + meta(l[1],"Single message match; one CTA.")
    + hero("",l[2],l[3],"")
    + sec("Why") + ul(l[4])
    + sec("Proof") + p("Trusted by Microsoft · SOC 2 (Type II) · GDPR + CCPA.")
    + cta(l[5],"")
    + p(`<span style="color:${GREY}">Form: work email → start. (Wire to Tracking OS.)</span>`);
});

// mini table helpers (2 & 3 col) reused above -------------------------
function table2(headers,rows){return tbl(headers,rows);}
function table3(headers,rows){return tbl(headers,rows);}
function tbl(headers,rows){
  const head=`<tr>`+headers.map(h=>`<td class="h" bgcolor="${INK}">${h}</td>`).join("")+`</tr>`;
  const body=rows.map((r,i)=>{const z=i%2?` bgcolor="${ZEBRA}"`:'';return `<tr>`+r.map((c,j)=>`<td${z}>${j===0?`<span class=\"kk\">${c}</span>`:c}</td>`).join("")+`</tr>`;}).join("");
  return `<table class="grid">${head}${body}</table>`;
}

const inner = COVER + A + B + C;
fs.writeFileSync(__dirname+"/html/content-page-copy.html", fullPage(inner));
console.log("wrote content-page-copy.html");
