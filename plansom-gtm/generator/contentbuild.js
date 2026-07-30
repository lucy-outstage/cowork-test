// Populated, ready-to-use content for the Content OS (Pillar 02) — appended after each
// component group's structure table. Grounded in the Messaging Blueprint (Simply done / work
// simplifier / the Simple Way / Microsoft / SOC2) and the workbook.
// Cells are RAW HTML — write "&amp;" for a literal ampersand; <strong>/<em> allowed.

const INK="#222222", ZEBRA="#F3F3F4";
function sub(t){return `<h2 class="sub">${t}</h2>`;}
function lead(h){return `<p class="lead">${h}</p>`;}
function label(t){return `<p class="seclabel">${t}</p>`;}
function ul(items){return `<ul class="subs">`+items.map(i=>`<li>${i}</li>`).join("")+`</ul>`;}
function table(headers, rows){
  const head=`<tr>`+headers.map(h=>`<td class="h" bgcolor="${INK}">${h}</td>`).join("")+`</tr>`;
  const body=rows.map((r,i)=>{const z=i%2?` bgcolor="${ZEBRA}"`:'';return `<tr>`+r.map((c,j)=>`<td${z}>${j===0?`<span class="kk">${c}</span>`:c}</td>`).join("")+`</tr>`;}).join("");
  return `<table class="grid">${head}${body}</table>`;
}
const wrap = h => `<div class="cbuild">${h}</div>`; // .cbuild adds a subtle top rule via STYLE

const CB = {};

// ---- 1. Social listening OS ----
CB["1"] = () => wrap(
  sub("Built-out: listening setup (v1)") +
  label("Keyword & topic monitors") +
  ul([
    "Category: “AI work management”, “AI project planning”, “AI agents for work”, “work simplifier”.",
    "Jobs: “turn goals into a plan”, “too many to-do lists”, “status meeting overload”, “delegate to AI”.",
    "Ecosystem: “Microsoft Teams project management”, “Teams planning app”, “Planner alternative”.",
    "Switch intent: “Asana alternative”, “Monday alternative”, “ClickUp too complex”.",
  ]) +
  label("Where to listen") +
  ul([
    "Reddit: r/projectmanagement, r/startups, r/msp, r/Notion, r/productivity.",
    "LinkedIn: Ops / RevOps / PMO groups + comment sections of category posts.",
    "Slack/Discord: operator, RevOps and founder communities.",
    "Review sites: G2 / Capterra competitor pages (mine complaints).",
  ]) +
  table(["Route","Destination"],[
    ["Hot mention (in-market)","→ Signals OS / list building (Pillar 03) within hours"],
    ["Recurring theme / phrasing","→ monthly Messaging synthesis (Pillar 01)"],
    ["Competitor complaint","→ battlecard + switch campaign"],
  ])
);

// ---- 2. Market scan OS ----
CB["2"] = () => wrap(
  sub("Built-out: what we track") +
  table(["Competitor set","Watch for"],[
    ["Asana, Monday.com, ClickUp, Wrike","Positioning, pricing, AI features"],
    ["Notion, Linear","‘All-in-one’ &amp; dev-team encroachment"],
    ["Microsoft Planner / Project","Teams-native overlap (our home turf)"],
    ["Motion &amp; other AI planners","AI-agent claims &amp; proof"],
  ]) +
  label("Cadence & outputs") +
  ul([
    "Quarterly teardown per competitor: positioning, pricing, GTM, AI claims, gaps.",
    "Win/loss capture from every Spin Sell deal → monthly synthesis.",
    "Pricing/packaging benchmark → feeds pricing page + ROI logic.",
    "Feature-gap map → routed to Product + battlecards.",
  ])
);

// ---- 3. Website ----
CB["3"] = () => wrap(
  sub("Built-out: page copy & outlines (v1)") +
  label("Homepage") +
  table(["Block","Copy / spec"],[
    ["Hero","<strong>Simply done.</strong> All your work. People and agents.<br>“Plansom is an AI-powered work simplifier — share a goal and our AI turns it into a ready-to-share plan, prioritises and tracks the work, and puts AI agents to work with your team.”  CTA: <strong>Try Plansom</strong> · secondary: <em>Let’s go</em>"],
    ["Input box","“Share what you want to get done.” — write a goal · upload a file · paste a meeting transcript. Data note: encrypted, Azure-hosted, never used to train LLMs."],
    ["Connectivity","“Connect all your work.” Teams, Slack, Google Workspace, Outlook, Salesforce, HubSpot… + Claude &amp; ChatGPT."],
    ["Microsoft credibility","Sherry List quote + “Built with Microsoft for Startups on Foundry SDKs.”"],
    ["The Simple Way","The 5 steps (set a goal → share → smash priorities → AI agents → make it a habit)."],
    ["Proof / security","SOC 2 (Type II) · GDPR + CCPA · Azure."],
    ["Close","“Smash goals, not to-do lists.” CTA: Try Plansom."],
  ]) +
  label("Key pages — headline + angle") +
  table(["Page","Headline / spec"],[
    ["Use-case pages","One per segment: “Planning that lives in Microsoft Teams”, “The Asana alternative that plans itself”, “Goals in, plan out for scaling teams”."],
    ["Skills / playbooks","Library of agent skills, each framed by the outcome it delivers."],
    ["Product / Features","Grouped by job: Set goals · Auto-plan · Prioritise · AI agents · Track &amp; repeat."],
    ["Pricing","Simple tiers around a ~10-seat team + FAQ + Try Plansom. Reflect ROI logic."],
    ["About","“We’re on a mission to make work simply done.” Founder story + Microsoft."],
    ["FAQ","Security/data, how it works, integrations, pricing, Teams."],
    ["Blog","Hub-and-spoke by the SEO themes (Pillar 09)."],
    ["Security / compliance","SOC 2 (Type II), GDPR/CCPA, Azure hosting, no-LLM-training statement."],
    ["Investors / Hiring / Cookies","Metrics + vision · values + roles · policy + consent."],
  ])
);

// ---- 4. Core use-case stories ----
CB["4"] = () => wrap(
  sub("Built-out: the 10 use-case stories (v1)") +
  lead("Each follows <strong>trigger → pain → Plansom → outcome</strong>. Prioritised by segment readiness; pair each with a website use-case page and a landing page.") +
  table(["#","Use case — headline & story","Segment"],[
    ["1","<strong>Turn company OKRs into team plans.</strong> Leadership sets goals but they stall in a deck — Plansom turns each objective into a live, owned plan.","Leadership"],
    ["2","<strong>Kill the status meeting.</strong> Ops chases updates all week — Plansom tracks progress live so the meeting becomes a glance.","Ops / PMO"],
    ["3","<strong>Goal to roadmap, drafted by agents.</strong> A product goal becomes a prioritised plan with agents drafting the tasks.","Product"],
    ["4","<strong>Campaign in a click.</strong> A marketing goal becomes a plan with agents doing first drafts.","Marketing"],
    ["5","<strong>Hit the number.</strong> A quarterly target becomes account plans with clear next actions.","Sales / RevOps"],
    ["6","<strong>30-60-90 that runs itself.</strong> A new hire or team gets an instant onboarding plan.","People / managers"],
    ["7","<strong>Cross-functional, inside Teams.</strong> A project spanning teams stays aligned where work already happens.","Teams-native"],
    ["8","<strong>Deliver client work on repeat.</strong> Agencies turn each engagement into a repeatable, shareable plan.","Agencies (Partner)"],
    ["9","<strong>Renewals &amp; QBRs, planned.</strong> CS turns account goals into tracked success plans.","Customer Success"],
    ["10","<strong>Smash goals, not to-do lists.</strong> A manager runs the week on outcomes, not tasks.","Individual / manager"],
  ]) +
  lead("<span style='color:#5F5F5F'>Main use-case page routes each visitor to their story by role/trigger.</span>")
);

// ---- 5. Growth enablement ----
CB["5"] = () => wrap(
  sub("Built-out: enablement assets (v1)") +
  label("Clarity check (apply before publishing anything)") +
  ul(["Is the ‘who’ obvious in 5 seconds?","Is there one clear ‘why now’?","One primary CTA?","At least one proof point?","Brand voice: simple, action-first, confident?"]) +
  label("Story deck — 10-slide outline") +
  ul(["1 Chaos (tools + to-do lists) · 2 The cost · 3 Simply done · 4 The Simple Way (5 steps) · 5 AI agents at work · 6 Inside Teams + integrations · 7 Microsoft proof · 8 Security · 9 ROI · 10 Try Plansom."]) +
  label("ROI calculator — logic & copy") +
  table(["Input","→ Output"],[
    ["Team size · hours/week on planning &amp; status · avg loaded salary","Hours &amp; $ reclaimed per month"],
    ["# goals per quarter · current hit-rate","Extra goals hit with Plansom"],
    ["Copy","“See what your team gets back.” Result: “~X hours and $Y a month back — and Z more goals hit.”"],
  ]) +
  label("Battlecards") +
  table(["vs.","When we win / one-liner"],[
    ["Asana / Monday","Blank boards you must build vs. <em>goal-in, plan-out</em>. “Stop building boards. Set a goal.”"],
    ["Notion","Flexible docs vs. <em>a plan that runs itself + agents</em>. “Notion stores it; Plansom does it.”"],
    ["Microsoft Planner","Basic tasks vs. <em>AI planning + agents inside Teams</em>. “The AI upgrade to Planner.”"],
  ]) +
  lead("<span style='color:#5F5F5F'>One-pagers = per-segment cut of the story deck. Sales scripts, objection-handling and sequences are owned in Pillars 03–04 and referenced here. Proposal/quote = standard template with configurable seat pricing.</span>")
);

// ---- 6. Lead generation ----
CB["6"] = () => wrap(
  sub("Built-out: landing pages & lead magnets (v1)") +
  table(["Landing page","Headline → CTA"],[
    ["LP1 · Teams-native","“Planning that lives in Microsoft Teams.” → Try Plansom"],
    ["LP2 · Switcher","“The Asana alternative that plans itself.” → Try Plansom"],
    ["LP3 · AI agents","“Put AI agents to work — not just to chat.” → Try Plansom"],
    ["LP4 · OKRs","“OKRs that actually get done.” → Try Plansom"],
    ["LP5 · Webinar/event","“Join the Simply Done masterclass.” → Register"],
  ]) +
  table(["Lead magnet","Format / who"],[
    ["The Simple Way playbook","Goal→plan template + guide · all segments"],
    ["10 tasks to delegate to AI agents today","Checklist · AI-curious teams"],
    ["Team planning template for Microsoft Teams","Template · Teams-native"],
    ["OKR → plan worksheet","Interactive worksheet · goal-driven teams"],
    ["Status-meeting cost calculator","Tool · ops leaders (pairs with ROI logic)"],
  ])
);

// ---- 7. Product communication ----
CB["7"] = () => wrap(
  sub("Built-out: product comms (v1)") +
  label("Onboarding guide — spine") +
  ul(["Set your first goal → 2) Get your plan → 3) Invite the team → 4) Run an AI agent → 5) Track &amp; repeat. Delivered in-app + the 14-day email sequence (Pillar 05)."]) +
  table(["Asset","Spec"],[
    ["Release notes / launches","Monthly cadence · in-app + email + social · format: what shipped · why it matters · try it."],
    ["Product guides","Per feature area, searchable; outcome-led headings."],
    ["How-to guides","One per activation-critical workflow (create plan, invite, run agent, track)."],
    ["Video walkthroughs","5 × 60–90s scripts: (1) goal→plan in 60s (2) share with the team (3) run an AI agent (4) track progress (5) inside Teams."],
  ])
);

// ---- 8. Partner enablement ----
CB["8"] = () => wrap(
  sub("Built-out: partner assets (v1)") +
  table(["Asset","Key content"],[
    ["Partner one-pager","What Plansom is (work simplifier) · ideal client · how to refer · commercials."],
    ["Co-sell deck","Joint value + ‘better together’ (esp. Microsoft/Teams) + proof + next step."],
    ["Joint value prop","“Plansom + Microsoft Teams: goals and delivery where your clients already work.”"],
    ["Onboarding kit + FAQ","Step-by-step ramp + commercials/process/product Q&amp;A."],
    ["Deal-reg / referral","Clean attribution flow (ties to PartnerStack + CRM)."],
    ["Co-branded case study","Template sourced from Advisory-Board customers (Pillar 06)."],
    ["Enablement training + portal","Short cert per tier + a self-serve asset library."],
    ["Co-marketing guidelines","Light brand + campaign playbook for partners."],
  ])
);

// ---- 9. Discovery content ----
CB["9"] = () => wrap(
  sub("Built-out: discovery engine (v1)") +
  label("Content pillars") +
  ul(["Simply-done philosophy (goals not to-do lists) · Build-in-public (Plansom + Microsoft) · Customer outcomes · AI agents at work · How-to / templates."]) +
  label("12-week starter calendar (rotating formats)") +
  table(["Weeks","Focus / format"],[
    ["1–3","Founder POV posts on ‘the Simple Way’ + 1 short-form demo/wk"],
    ["4–6","Customer outcome story + newsletter #1 + guest post pitch"],
    ["7–9","AI-agents-at-work video series + co-hosted webinar"],
    ["10–12","Category/SEO blog cluster + Product Hunt tease + solo webinar"],
  ]) +
  label("Starter blog titles (mapped to SEO themes)") +
  ul([
    "“Stop managing to-do lists. Start hitting goals.”",
    "“How to turn a goal into a plan in 60 seconds.”",
    "“Asana vs Plansom: boards you build vs plans that build themselves.”",
    "“Project management inside Microsoft Teams: a simpler way.”",
    "“10 tasks you can delegate to AI agents today.”",
  ]) +
  table(["Channel","Starter concept"],[
    ["Newsletter","“Simply Done” — a weekly note: one idea, one template, one customer win."],
    ["Founder posts","Sample: “We used to run on to-do lists. Then we set one goal and let Plansom build the plan. Here’s what changed…”"],
    ["Webinars","Co-hosted: ‘Run your team on goals’ · Solo: ‘The Simple Way’ · Influencer/user: ‘AI agents at work’."],
    ["YouTube / short-form","‘60-second Simply Done’ demos + longer walkthroughs &amp; talks."],
  ])
);

// ---- 10. Events & workshops ----
CB["10"] = () => wrap(
  sub("Built-out: signature formats (v1)") +
  table(["Format","Thesis / outline"],[
    ["TED-style talk","<strong>“Stop managing to-do lists. Start hitting goals.”</strong> Beats: the busywork trap → why goals get lost → the shift to goal-first + agents → a live demo → a call to simplify."],
    ["Masterclass","<strong>“The Simple Way to run a team on goals.”</strong> 5 modules: set the goal · build the plan · prioritise · delegate to agents · make it a habit. Registration → lead gen."],
    ["Workshop","90-min hands-on for a cohort/account: bring a real goal → leave with a live plan + an agent running a task."],
  ])
);

function section(num){ return CB[num] ? CB[num]() : ""; }
module.exports = { section };
