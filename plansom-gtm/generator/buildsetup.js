// "Build & Setup" — the operational layer to actually stand up each pillar.
// Pillar 03 (Outreach) is the fully-worked exemplar: a from-scratch HubSpot journey with every
// funnel stage, property, list, sequence, workflow, dashboard and a setup checklist.
// Other pillars get their equivalent operational build. Cells are RAW HTML (use &amp;).
const { fullPage } = require("./brandhtml.js");
const fs = require("fs");
const INK="#222222", GREY="#5F5F5F", ZEBRA="#F3F3F4";

function sub(t){return `<h2 class="sub">${t}</h2>`;}
function label(t){return `<p class="seclabel">${t}</p>`;}
function p(h){return `<p class="lead">${h}</p>`;}
function ul(items){return `<ul class="subs">`+items.map(i=>`<li>${i}</li>`).join("")+`</ul>`;}
function ol(items){return `<ol class="subs" style="padding-left:18px">`+items.map(i=>`<li>${i}</li>`).join("")+`</ol>`;}
function table(headers, rows){
  const head=`<tr>`+headers.map(h=>`<td class="h" bgcolor="${INK}">${h}</td>`).join("")+`</tr>`;
  const body=rows.map((r,i)=>{const z=i%2?` bgcolor="${ZEBRA}"`:'';return `<tr>`+r.map((c,j)=>`<td${z}>${j===0?`<span class="kk">${c}</span>`:c}</td>`).join("")+`</tr>`;}).join("");
  return `<table class="grid">${head}${body}</table>`;
}
const PB = `<p class="pb" style="font-size:1pt;line-height:1pt">&nbsp;</p>`;
function header(n,name,role,intro){
  return `<p class="eyebrow">PLANSOM · GTM PILLAR ${n} · BUILD &amp; SETUP</p>`
    + `<h1 class="ptitle">Pillar ${n} — ${name}</h1>`
    + `<p class="prod">${role}</p>`
    + p(intro);
}

const DOCS = [];
const add = (n,key,name,role,intro,body)=>DOCS.push({n,key,title:`Plansom GTM · Pillar ${n} — ${name}: Build & Setup`, inner: header(n,name,role,intro)+body});

// ==================================================================
// PILLAR 03 — OUTREACH · HubSpot build from scratch (EXEMPLAR)
// ==================================================================
add("03","build-03-outreach-hubspot","Outreach System","CRM: HubSpot (Sales Hub + Marketing Hub). The single source of truth for the sales-led motion.",
`Everything below is a from-scratch HubSpot build for the outreach engine — the data model, the funnel, the automation and the reporting needed to run ~227 meetings/mo into trials, cleanly attributed and compliant.`,
  sub("1 · Architecture & objects") +
  ul([
    "<strong>HubSpot as source of truth</strong> for Contacts, Companies, Deals, Activities. Sales Hub (sequences, deals, tasks) + Marketing Hub (lists, scoring, forms).",
    "<strong>Sending stays outside HubSpot</strong> for cold outbound (dedicated domains/inboxes via Smartlead/Instantly) — replies + engagement sync back to HubSpot. HubSpot sends warm/1:1 and marketing email only (protects the primary domain).",
    "<strong>Connected tools:</strong> LinkedIn (Sales Nav + agency tool), Apollo (enrichment), calendar via HubSpot Meetings, product trial events via API/webhook, Slack for alerts.",
  ]) +
  sub("2 · Lifecycle stages (contact/company level)") +
  table(["Lifecycle stage","Definition","Set by"],[
    ["Subscriber","Known email, no intent yet","Import / form"],
    ["Lead","In an ICP list, not yet engaged","List membership"],
    ["MQL","Fit + engagement score ≥ threshold","Scoring workflow"],
    ["SQL","Positive reply or booked meeting","Reply/meeting workflow"],
    ["Opportunity","Open deal in the pipeline","Deal create"],
    ["Customer","Closed-won / paid","Deal won"],
    ["Evangelist","Advocate / Advisory Board","Manual / CS"],
  ]) +
  sub("3 · Deal pipeline — “Outbound Sales”") +
  table(["Stage","Entry criteria → exit","Prob."],[
    ["1 Targeted","In ICP list, enriched, owner assigned → enrolled in a sequence","5%"],
    ["2 Sequenced","Active in an email/LinkedIn sequence → any positive reply","10%"],
    ["3 Engaged","Positive reply / interest → meeting proposed","25%"],
    ["4 Meeting booked","Calendar invite accepted → meeting occurs","40%"],
    ["5 Discovery held (SQL)","Qualified via SPIN (Pillar 04) → trial agreed","55%"],
    ["6 Trial started","Product trial activated → evaluation","70%"],
    ["7 Evaluation","Using product / buyer engaged → decision","85%"],
    ["8 Closed Won / Lost","Paid (seats set) / lost with reason","100% / 0%"],
  ]) +
  p(`<span style="color:${GREY}">Gate each stage with a required field (e.g. can’t reach ‘Discovery held’ without a completed qualification property). Probabilities feed the forecast.</span>`) +
  sub("4 · Custom properties to create") +
  label("Contact") +
  table(["Property","Type / values"],[
    ["ICP segment","Dropdown: A Teams-native · B Funded scale-up · C Tool-switcher"],
    ["Trigger / signal","Dropdown: Funding · Hiring · Teams adoption · Leader change · Competitor install"],
    ["Persona","Dropdown: Founder · COO/CoS · Ops/PMO · RevOps · Other"],
    ["Outreach channel","Dropdown: LinkedIn · Email · Both"],
    ["Sequence / campaign","Text / dropdown"],
    ["Reply sentiment","Dropdown: Positive · Neutral · Negative · OOO"],
    ["Meeting source","Dropdown: LinkedIn · Email · InMail · Referral"],
  ]) +
  label("Company") +
  table(["Property","Type / values"],[
    ["Uses Microsoft Teams","Boolean (from enrichment / signal)"],
    ["ICP tier","Dropdown: Tier 1 / 2 / 3"],
    ["Employee count · Funding stage · Funding date","Number · Dropdown · Date"],
    ["Tech stack (PM/OKR tool)","Text (from enrichment)"],
  ]) +
  label("Deal") +
  table(["Property","Type / values"],[
    ["Channel","Dropdown: LinkedIn · Email"],
    ["Meeting held date · Trial start date","Date"],
    ["Seats (expected)","Number (default 10)"],
    ["Qualification (BANT/MEDDIC-lite)","Group of fields — required to reach Discovery-held"],
    ["Disqualification reason","Dropdown (for Closed Lost)"],
  ]) +
  sub("5 · Segmentation (active lists)") +
  ul([
    "ICP List A / B / C (mirror the outreach list recipes; auto-membership from properties).",
    "Signal lists (funding, Teams-adoption, competitor-install) → feed sequences.",
    "‘Engaged, no meeting’ · ‘Meeting no-show’ · ‘Trial not converted’ · ‘Closed-lost 90-day re-engage’.",
    "Suppression list (unsubscribed, competitors, current customers, do-not-contact).",
  ]) +
  sub("6 · Lead scoring (fit + engagement)") +
  table(["Signal","Points"],[
    ["Fit: ICP tier 1 · uses Teams · 20–200 staff · recent funding","+10 each"],
    ["Engagement: email reply (+15) · positive reply (+30) · meeting booked (+40)","varies"],
    ["Negative: unsubscribed · bounced · competitor","disqualify"],
    ["MQL threshold","≥ 50 → Lifecycle MQL + rep task"],
  ]) +
  sub("7 · Sequences (Sales Hub / sending tool)") +
  ul([
    "Email 4-step + LinkedIn 4-step (copy in the Outreach pillar doc) built as sequences; LinkedIn steps as manual tasks.",
    "Enrollment: on entering an ICP/signal list. Auto-unenroll: on reply, meeting booked, unsubscribe.",
    "Per-segment variants (A/B/C) with the segment’s trigger language.",
  ]) +
  sub("8 · Workflows / automation") +
  table(["Workflow","Trigger → actions"],[
    ["Enrichment & tiering","Contact created → enrich (Apollo) → set ICP segment/tier, Uses-Teams; add to ICP list"],
    ["Owner rotation","Enter ICP list → round-robin assign owner + create ‘start sequence’ task"],
    ["MQL handoff","Score ≥ 50 → Lifecycle = MQL → Slack + task to owner"],
    ["Positive reply","Reply sentiment = Positive → create/advance Deal to ‘Engaged’ + task ‘propose meeting’"],
    ["Meeting booked","Meeting scheduled → Lifecycle = SQL, Deal → ‘Meeting booked’, set source"],
    ["No-show / re-book","Meeting outcome = no-show → task + 2-step re-book sequence"],
    ["Trial started","Product webhook: trial=true → Deal → ‘Trial started’, notify owner + start CS handoff (Pillar 05)"],
    ["Closed-lost nurture","Closed Lost → wait 90 days → re-enrol in light nurture"],
    ["Data hygiene","Daily: dedupe, standardise job titles/countries, flag missing required fields"],
    ["Compliance","Unsubscribe/DSAR → add to suppression, stop all sequences"],
  ]) +
  sub("9 · Tasks, queues & SLAs") +
  ul([
    "Task queues per rep: ‘LinkedIn steps’, ‘Call/positive replies’, ‘Meeting prep’.",
    "SLA: positive reply worked < 2 business hours; MQL actioned same day; meeting recap logged < 1 hour.",
  ]) +
  sub("10 · Integrations") +
  table(["Tool","Role / sync"],[
    ["Smartlead / Instantly","Cold sending on dedicated domains → sync sends, opens, replies to HubSpot"],
    ["LinkedIn (Sales Nav + tool)","Log connects/DMs; LinkedIn steps as HubSpot tasks"],
    ["Apollo","Enrichment + list building → HubSpot"],
    ["Product (Plansom)","Trial/activation events → HubSpot via API/webhook"],
    ["Slack","Real-time alerts (MQL, positive reply, meeting, trial)"],
  ]) +
  sub("11 · Reporting dashboards") +
  ul([
    "<strong>Outbound funnel</strong> — contacts by lifecycle + deals by stage; conversion each step.",
    "<strong>Channel performance</strong> — meetings + cost per meeting (LinkedIn ~$43 / email ~$49) vs target.",
    "<strong>Sequence performance</strong> — reply %, positive %, meeting % per sequence/segment.",
    "<strong>Meeting → trial → win</strong> — with the 50% / 20% targets.",
    "<strong>Rep activity &amp; SLAs</strong> — tasks, response times.",
  ]) +
  sub("12 · Data hygiene & compliance considerations") +
  ul([
    "Deliverability: dedicated cold domains + warmup; keep the primary domain for warm/marketing only.",
    "GDPR/CCPA: lawful basis for outreach, one-click unsubscribe, honour DSARs via suppression; log consent.",
    "Property governance: one owner for the property library; no free-text where a dropdown belongs.",
    "Required fields as stage gates prevent ‘ghost’ pipeline.",
  ]) +
  sub("13 · Setup checklist (in order)") +
  ol([
    "Connect domains/inboxes + calendar; verify sending/deliverability.",
    "Create the property library (contact/company/deal) above.",
    "Build the ‘Outbound Sales’ pipeline + stages + probabilities + gates.",
    "Import + enrich ICP lists A/B/C; build active lists + suppression.",
    "Configure lead scoring + MQL threshold.",
    "Build sequences (email + LinkedIn tasks), per-segment variants.",
    "Build the 10 workflows; connect Slack + product webhook.",
    "Build the dashboards.",
    "QA with 10 test contacts end-to-end; check attribution + compliance.",
    "Go live; review KPIs weekly (Scheduled Collaboration).",
  ]) +
  sub("14 · Ownership") +
  p("RevOps owns the HubSpot build + hygiene; SDR/agency owns sequences + tasks; AE owns deals from ‘Meeting booked’. Weekly review in the Marketing/Outreach check-in.")
);

// ==================================================================
// PILLAR 04 — SPIN SELL · build
// ==================================================================
add("04","build-04-spinsell","Spin Sell System","Runs on the same HubSpot deals; adds discovery, playbooks, and forecasting.",
`Operational build for the human selling motion — how HubSpot deals, playbooks, call tooling and forecasting are set up so every meeting is qualified and moved consistently.`,
  sub("Tooling") + ul([
    "HubSpot Sales Hub: Deals (from ‘Meeting booked’ onward), Playbooks, Meetings scheduler, Quotes, Sequences (post-meeting).",
    "Call recording/notes: Fireflies/Otter (already in the stack) → log to the deal.",
    "Docs: story deck, ROI calculator, battlecards (Content OS) linked on the deal record.",
  ]) +
  sub("Qualification data model (required at each gate)") +
  table(["Field","Purpose"],[
    ["Trigger","The ‘why now’ (mirrors outreach signal)"],
    ["Pain owner / authority","Who feels it / can buy"],
    ["Metrics (implication)","Quantified cost of the problem"],
    ["Timeline","When they’d start / decide"],
    ["Champion","Internal advocate"],
  ]) +
  sub("HubSpot Playbooks (SPIN)") + p("Create a ‘Discovery — SPIN’ playbook with the Situation/Problem/Implication/Need-payoff question bank (Pillar 04 doc). Reps run it on the call; answers save to deal properties.") +
  sub("Workflows") + table(["Workflow","Trigger → actions"],[
    ["Discovery prep","Meeting booked → create prep task + attach deck/battlecard"],
    ["Stage tasks","On each deal stage → create the next task (recap, trial nudge, ROI, proposal)"],
    ["Stalled deal","No activity 7 days → alert owner + suggested next step"],
    ["Proposal/quote","Enter ‘Evaluation’ → generate quote from template (seats × price)"],
  ]) +
  sub("Forecasting & dashboards") + ul(["Weighted pipeline by stage probability; meeting→trial and trial→win vs targets; win/loss reasons (feed Market scan).","Objection tracker — tag objections on deals → feed FAQ + battlecards."]) +
  sub("Setup checklist") + ol(["Add qualification properties + stage gates.","Build the SPIN playbook + snippets/templates.","Build post-meeting sequence + stage-task workflows.","Set up quotes + product/price library.","Build the forecast + win/loss dashboard.","QA on 3 live deals."])
);

// ==================================================================
// PILLAR 05 — CUSTOMER JOURNEY · build
// ==================================================================
add("05","build-05-journey","Customer Journey System","Product analytics + HubSpot lifecycle + lifecycle automation.",
`Operational build for turning trials into activated, paying, expanding customers — event tracking, onboarding automation, health scoring and the plan-sharing loop.`,
  sub("Tooling") + ul([
    "Product analytics: PostHog or Amplitude (define + track events); or HubSpot custom behavioural events.",
    "HubSpot: lifecycle (Trial→Customer), CS/onboarding workflows, marketing email for lifecycle comms.",
    "In-app: onboarding checklist + nudges; email for the 14-day sequence.",
  ]) +
  sub("Instrument these events (the data model)") + table(["Event","Why it matters"],[
    ["signup / trial_started","Enters trial lifecycle"],
    ["goal_created · plan_generated","First value"],
    ["team_invited","Activation + viral loop (coefficient 0.2)"],
    ["agent_task_run","Core ‘aha’"],
    ["weekly_active","Retention signal"],
    ["purchase · seats_added","Conversion / expansion"],
  ]) +
  p("<strong>Activation event</strong> = goal→plan + team_invited + agent_task_run within 48h. Everything optimises toward it.") +
  sub("Workflows") + table(["Workflow","Trigger → actions"],[
    ["Onboarding sequence","trial_started → 14-day email + in-app steps (Content OS copy)"],
    ["Activation nudges","No plan / no invite / no agent → targeted nudge"],
    ["Health score","Weekly recompute (plans, invites, agent tasks, WAU) → Green/Yellow/Red"],
    ["Convert","Activated + day ≥ 12 → conversion offer + AE task if high-fit"],
    ["Churn risk","Red health / usage drop → CS alert + rescue play"],
    ["Expansion","Seat limit near / multi-team usage → expansion play"],
  ]) +
  sub("Dashboards") + ul(["Activation rate + time-to-activate; trial→paid (target 20%); expansion; churn; <strong>plan-sharing coefficient</strong>."]) +
  sub("Setup checklist") + ol(["Agree the activation definition + event schema.","Instrument events; pipe to HubSpot.","Build onboarding sequence (in-app + email).","Build nudge + health + churn + expansion workflows.","Build the activation/retention dashboard.","QA a full trial cohort."])
);

// ==================================================================
// PILLAR 06 — ADVISORY BOARD · build
// ==================================================================
add("06","build-06-advisory","Customer Advisory Board","Lightweight ops in HubSpot + a comms channel + a feedback repo.",
`Operational build to run the board without overhead — how members are tracked, sessions run, and insights routed to action.`,
  sub("Tooling") + ul([
    "HubSpot: ‘Advisory Board’ contact property + active list; tasks for session logistics.",
    "Comms: a private Slack/Teams channel or community space; scheduling via HubSpot Meetings.",
    "Feedback repo: a shared board (Notion/HubSpot) for quotes, insights, roadmap asks.",
  ]) +
  sub("Process & workflows") + table(["Step","How"],[
    ["Recruit","List of fast-activating customers → invite sequence → set Advisory-Board = true"],
    ["Cadence","Quarterly session on the calendar; auto reminders"],
    ["Capture","Session notes → tag as Readiness / Roadmap / Advocacy in the repo"],
    ["Route","Readiness → Messaging · Roadmap → Product tasks · Advocacy → Pillar 08 reviews / Pillar 02 case studies"],
    ["Close loop","Post-session email: ‘what we changed’"],
  ]) +
  sub("Setup checklist") + ol(["Create the property + list + invite sequence.","Stand up the channel + scheduling.","Create the insight repo + tagging.","Book the first cohort’s quarterly sessions.","Wire routing to Messaging/Product/Content."])
);

// ==================================================================
// PILLAR 07 — ACCELERATORS & EVENTS · build
// ==================================================================
add("07","build-07-events","Accelerators & Events System","HubSpot campaigns + ABM + event capture & follow-up automation.",
`Operational build to run accelerators and events as a repeatable, measurable motion inside HubSpot.`,
  sub("Tooling & data model") + ul([
    "HubSpot Campaigns: one campaign per event/accelerator (spend, UTMs, assets, ROI).",
    "Original source + ‘Event name’ property on contacts; pre/post lists per event.",
    "ABM: HubSpot Target Accounts, buying roles, account-based lists + alerts.",
    "Capture: HubSpot forms / QR / scanner at events → contacts tagged to the campaign.",
  ]) +
  sub("Workflows") + table(["Workflow","Trigger → actions"],[
    ["Pre-event","Added to event list → invite + ‘book a meeting’ sequence"],
    ["Capture → MQL","Form/scan at event → set source + campaign → score → route"],
    ["Post-event 48h","Attended → personal follow-up + trial link + nurture enrol"],
    ["ABM alert","Target-account contact engages → notify owner"],
  ]) +
  sub("Dashboards") + ul(["Per-campaign: leads, meetings, trials, cost, ROI; ABM account engagement."]) +
  sub("Setup checklist") + ol(["Create campaign + property + pre/post lists.","Build capture forms/QR.","Build pre/post + ABM workflows.","Set up the accelerator ABM target-account list.","Build the campaign ROI dashboard.","Templatise for repeat events."])
);

// ==================================================================
// PILLAR 08 — PARTNERSHIPS & DIRECTORIES · build
// ==================================================================
add("08","build-08-partnerships","Partnerships & Directories System","PartnerStack + HubSpot attribution + marketplace/review setup.",
`Operational build for partner-sourced pipeline and directory presence — clean attribution, onboarding and review generation.`,
  sub("Tooling & data model") + ul([
    "PartnerStack: recruitment, partner onboarding, tracking, commissions.",
    "HubSpot: ‘Partner-sourced’ + ‘Partner name’ on contacts/deals; deal source = Partner; deal-reg pipeline/stage.",
    "Directories: Microsoft AppSource (Teams app), G2, Capterra, Product Hunt.",
  ]) +
  sub("Workflows") + table(["Workflow","Trigger → actions"],[
    ["Partner-sourced routing","PartnerStack lead → HubSpot contact, set source + partner → route to owner"],
    ["Deal registration","Partner submits deal → approval task → protect attribution"],
    ["Partner onboarding","New partner → onboarding sequence + enablement kit (Content OS)"],
    ["Review request","Customer reaches ‘happy’ (health green / Advisory Board) → G2/Capterra review ask"],
  ]) +
  sub("Directory setup steps") + ol(["Publish + optimise the Microsoft AppSource Teams-app listing.","Claim + complete G2 / Capterra / GetApp profiles.","Run a review campaign to advocates (Pillar 06).","Plan a Product Hunt launch on a milestone."]) +
  sub("Dashboards & checklist") + ul(["Partner-sourced pipeline, trials (~118/mo), cost/trial (~$47), review volume &amp; rating."]) +
  ol(["Set up PartnerStack + HubSpot sync + attribution properties.","Build routing + deal-reg + onboarding + review workflows.","Publish directory listings.","Build the partner dashboard."])
);

// ==================================================================
// PILLAR 09 — TRAFFIC · build
// ==================================================================
add("09","build-09-traffic","Traffic System","Tracking-first: GA4 + product analytics + HubSpot + ad platforms + consent.",
`Operational build for paid + organic traffic — the tracking plan comes first, then the automation that turns visits into attributed trials.`,
  sub("Tooling") + ul([
    "GA4 + Google Tag Manager; product analytics; a consent/cookie tool.",
    "HubSpot forms + tracking code on all pages/landing pages.",
    "Ad platforms: LinkedIn, Meta, Google (+ offline-conversion import from HubSpot).",
  ]) +
  sub("Tracking plan (build this before scaling spend)") + table(["Element","Spec"],[
    ["UTM governance","Enforced source/medium/campaign/content on every paid + social link"],
    ["Conversion events","visit → signup → activation → paid (client + server-side)"],
    ["Attribution","First + last touch in HubSpot; self-reported ‘how did you hear’ at signup"],
    ["Consent","Banner + regional rules; suppress tracking pre-consent"],
  ]) +
  sub("Workflows") + table(["Workflow","Trigger → actions"],[
    ["Inbound capture","Form fill → contact, set source/UTMs → Lifecycle Lead → score"],
    ["Inbound MQL","High-intent page/keyword + form → MQL + owner task"],
    ["Audience sync","HubSpot lists → LinkedIn/Meta custom audiences (ABM + retargeting)"],
    ["Offline conversions","Trial/paid → import back to ad platforms to optimise bidding"],
  ]) +
  sub("Dashboards") + ul(["CAC per channel (LinkedIn ~$480 / Meta ~$233 / Google ~$260) vs target; funnel by source; SEO/GEO traffic + rankings + AI-referrals."]) +
  sub("Setup checklist") + ol(["GTM + GA4 + consent live; verify events.","HubSpot tracking + forms on all pages.","UTM template + naming convention.","Ad pixels + offline-conversion import.","Audience-sync + inbound workflows.","Channel CAC dashboard; then scale spend."])
);

// ==================================================================
// PILLAR 10 — SOCIAL · build
// ==================================================================
add("10","build-10-social","Social Media System","Scheduling + UTM tracking + DM-to-CRM + listening.",
`Operational build to run founder-led + brand social as a measurable pipeline source, not a vanity channel.`,
  sub("Tooling") + ul([
    "Scheduling: Buffer / Hootsuite / HubSpot Social (company + founder accounts).",
    "Tracking: UTMs on every outbound link; HubSpot ‘Social’ source.",
    "Listening: the Social Listening OS (Content OS) feeds signals to Outreach.",
  ]) +
  sub("Workflows & process") + table(["Workflow","Trigger → actions"],[
    ["Calendar & approval","Weekly content plan (5 pillars) → draft → approve → schedule"],
    ["DM → CRM","Inbound DM / profile lead → create HubSpot contact + task (warm pipeline)"],
    ["Link tracking","All links UTM-tagged → attribute social → trial"],
    ["Amplify","New customer win / plan shared → repurpose to social (viral loop)"],
  ]) +
  sub("Dashboards & checklist") + ul(["Reach → profile visits → trials by channel/account; founder vs brand performance; pipeline from social."]) +
  ol(["Connect accounts + scheduler.","Set UTM convention + HubSpot source.","Build the DM→CRM + amplify workflows.","Stand up the content calendar (5 pillars).","Build the social→pipeline dashboard."])
);

// ==================================================================
// PILLAR 01 & 02 — governance / ops (concise)
// ==================================================================
add("01","build-01-messaging","Messaging & Brand System","Governance: source of truth, versioning, and enforcement.",
`Operational build to keep messaging + brand consistent as the team scales.`,
  sub("Set-up") + ul([
    "Single source of truth: the Messaging Blueprint + Brand Guidelines (Pillar 01 doc) in a locked, versioned home.",
    "DRI for messaging; change-log + quarterly review cadence (in the Marketing check-in).",
    "Enforcement: clarity-check gate before any asset publishes (Content OS); brand kit in Figma/Canva.",
    "Feedback loops in: Outreach reply data, win/loss (Spin Sell), Advisory Board verbatim.",
  ]) +
  sub("Checklist") + ol(["Lock + version the blueprint & guidelines.","Assign the DRI + review cadence.","Add the clarity-check gate to the publish workflow.","Wire the quarterly inputs (reply data, win/loss, board)."])
);
add("02","build-02-content-ops","Content System","Content operations: CMS, workflow, SEO/GEO tooling, governance.",
`Operational build to run the Content OS as a machine (full content is in the Content OS + Content Page Copy docs).`,
  sub("Set-up") + ul([
    "CMS/website stack + component library for the page templates (Content Page Copy doc).",
    "Content workflow: brief → draft → clarity-check → SEO/GEO check → publish → repurpose (tracked in a board).",
    "SEO/GEO tooling: keyword/rank tracking, technical SEO, schema/structured data for AI citation.",
    "Asset library + naming/versioning; brand kit; DRI per content group.",
  ]) +
  sub("Checklist") + ol(["Stand up CMS + page templates.","Create the content workflow board + clarity/SEO gates.","Set up SEO/GEO tooling + tracking.","Organise the asset library + governance."])
);

// ---- render ----
DOCS.forEach(d=>{ fs.writeFileSync(`${__dirname}/html/${d.key}.html`, fullPage(d.inner)); });
console.log("wrote", DOCS.length, "build & setup docs:");
DOCS.forEach(d=>console.log("  -", d.key, "|", d.title));
module.exports = { DOCS };
