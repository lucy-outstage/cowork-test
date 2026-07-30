// End-to-end Outbound CRM system: list building → sourcing DB → sending tools → HubSpot →
// qualified handoff → funnel. Includes first-draft comms copy, graphical flows, and the funnel
// with conversion %. Cells are RAW HTML (use &amp;). Diagrams are inline-styled tables so they
// survive HTML→Google Doc conversion.
const { fullPage } = require("./brandhtml.js");
const fs = require("fs");
const INK="#222222", BLUE="#343CED", GREY="#5F5F5F", LGREY="#EEF3F6", ZEBRA="#F3F3F4";

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

// --- diagram helpers (inline-styled tables → convert to GDoc) ---
function box(title, subtxt, fill){
  fill = fill||LGREY;
  return `<table style="border-collapse:collapse;width:100%;margin:0"><tr><td style="border:1.5px solid ${BLUE};background-color:${fill};padding:7px 11px">`
    + `<span style="font-weight:700;color:${INK};font-size:10pt">${title}</span>`
    + (subtxt?`<br><span style="color:${GREY};font-size:8.5pt">${subtxt}</span>`:'')
    + `</td></tr></table>`;
}
function arrow(lbl){
  return `<p style="margin:1px 0;color:${BLUE};font-weight:700;font-size:11pt">↓${lbl?`  <span style="color:${GREY};font-weight:400;font-size:8.5pt">${lbl}</span>`:''}</p>`;
}
function hflow(steps){ // horizontal boxes with → between
  let cells="";
  steps.forEach((st,i)=>{
    cells += `<td style="border:1.5px solid ${BLUE};background-color:${LGREY};padding:6px 8px;text-align:center;font-size:8.5pt;color:${INK}"><strong>${st.t}</strong>${st.s?`<br><span style="color:${GREY};font-size:7.5pt">${st.s}</span>`:''}</td>`;
    if(i<steps.length-1) cells += `<td style="padding:0 3px;color:${BLUE};font-weight:700;text-align:center">→</td>`;
  });
  return `<table style="border-collapse:collapse;margin:4px 0"><tr>${cells}</tr></table>`;
}

let S = "";
// ===== COVER =====
S += `<p class="eyebrow">PLANSOM · GTM · OUTBOUND CRM SYSTEM</p>`
 + `<h1 class="big">Outbound CRM System</h1>`
 + `<p class="subtitle">End to end: list building → sourcing database → outreach → HubSpot → qualified handoff → funnel</p>`
 + p(`This is the complete build for the sales-led engine that answers the core question — <em>who is ready to use Plansom today, and why?</em> — by testing named prospects at scale and converting responses into trials. HubSpot is the system of truth; cold sending runs on dedicated infrastructure; qualified people flow into HubSpot at the moment of engagement.`);

// ===== 1. ARCHITECTURE =====
S += sub("1 · System architecture");
S += p("How the pieces connect, left to right:");
S += hflow([
  {t:"Data sources",s:"Apollo · Sales Nav · signals"},
  {t:"List building",s:"ICP recipes + enrichment"},
  {t:"Sourcing DB",s:"Apollo lists"},
  {t:"Sending tools",s:"Smartlead / Instantly + LinkedIn"},
  {t:"HubSpot",s:"system of truth"},
  {t:"SDR → AE",s:"qualify + close"},
  {t:"Product",s:"trial → customer"},
]);
S += p(`<span style="color:${GREY}">Replies &amp; engagement from the sending tools sync back into HubSpot; the product syncs trial/activation events into HubSpot; Slack receives real-time alerts.</span>`);
S += label("What's connected to what");
S += table(["Connection","Direction / purpose"],[
  ["Apollo → sending tool","Push finished, enriched lists into campaign audiences"],
  ["Apollo → HubSpot","Mirror sourced contacts as non-marketing records (dedupe + suppression)"],
  ["Sending tool ↔ HubSpot","Sync sends, opens, replies, unsubscribes onto the contact timeline"],
  ["LinkedIn tool → HubSpot","Log connects/DMs as activities / tasks"],
  ["Product (Plansom) → HubSpot","Trial + activation events via API/webhook"],
  ["HubSpot → Slack","Alerts: positive reply, meeting booked, MQL, trial started"],
  ["HubSpot → ad platforms","Audience sync + offline-conversion import (Traffic pillar)"],
]);

// ===== 2. LIST BUILDING =====
S += PB + sub("2 · List building — where it happens");
S += p("Lists are built in <strong>Apollo</strong> (records + enrichment) and <strong>LinkedIn Sales Navigator</strong> (social + InMail), from filters that map 1:1 to the Messaging segments and their triggers.");
S += table(["List","Filter (who)","Trigger (why now)"],[
  ["A · Teams-native","50–500 staff · uses Microsoft Teams/M365 · Ops, PMO, RevOps, CoS","Work already lives in Teams"],
  ["B · Funded scale-ups","Raised &lt; 6 months · 20–200 staff · Founder/COO/CoS","Scaling; coordination breaking"],
  ["C · Tool-switchers","Runs a competing PM/OKR tool · PMO/Head of Ops","Tool sprawl; open to simpler"],
]);
S += label("List-building process");
S += ol([
  "Define the filter set per list (ICP + trigger) in Apollo / Sales Nav.",
  "Enrich: email, role, company size, funding, tech-stack, Uses-Teams flag.",
  "QA: valid email (verify), role match, dedupe against HubSpot + suppression.",
  "Tag each record with ICP segment + trigger + source before it leaves Apollo.",
  "Cap volume to channel capacity (5 LinkedIn accounts; 170 inboxes).",
]);
S += label("Where the database is listed (systems of record)");
S += table(["Layer","System","Holds"],[
  ["Sourcing DB","Apollo","All sourced + enriched prospects; the raw pool"],
  ["Campaign audience","Sending tool (Smartlead/Instantly) + Sales Nav","Contacts actively in a cadence"],
  ["System of truth","HubSpot","Canonical record; engagement, deals, lifecycle, attribution"],
]);
S += p(`<strong>Recommended model:</strong> mirror every sourced contact into HubSpot as a <em>non-marketing</em> contact (free) so suppression, dedupe and attribution are centralised — but a contact only becomes a <em>marketing</em> contact / enters the deal pipeline once engaged (see §5).`);

// ===== 3. OUTREACH EXECUTION =====
S += PB + sub("3 · How the database is used for outreach");
S += p("Finished lists flow from Apollo into the sending tools; each contact runs a two-channel cadence tied to its segment.");
S += table(["Channel","Infra","Monthly capacity → output"],[
  ["Email","170 inboxes on dedicated domains · warmed · 30 sends/day × 20 days · 3 follow-ups","~34k sends → ~102 meetings"],
  ["LinkedIn","5 accounts · Sales Nav + agency tool · 750 connects + 150 InMails / account","~125 meetings"],
]);
S += p(`<span style="color:${GREY}">Cold sending stays off the primary domain to protect deliverability. Replies sync to HubSpot in real time; a positive reply or booked meeting triggers the handoff in §5.</span>`);

// ===== 4. COMMUNICATIONS — FIRST COPY =====
S += PB + sub("4 · Communications — first-draft copy");
S += p("Core copy (swap the bracketed trigger line per segment A/B/C). Voice: simple, action-first, confident.");
S += label("Email sequence (4 steps)");
S += table(["Step","Subject → message"],[
  ["E1 · Hook","<strong>“goals in, plan out”</strong><br>“Hi {first} — {trigger: scaling {company}?}. Most teams we meet lose the week to to-do lists and status updates. Plansom turns a goal into a ready-to-share plan and puts AI agents on the work — right inside Teams. Worth a 15-min look?”"],
  ["E2 · Bump (+2d)","<strong>“quick nudge”</strong><br>“Floating this back up, {first} — happy to send a 60-sec demo instead of a meeting if easier.”"],
  ["E3 · Proof (+3d)","<strong>“why Microsoft backs this”</strong><br>“{first}, in case it helps: <em>‘Plansom makes delegation easy…’</em> — Sherry List, CTO, Microsoft for Startups. SOC 2, GDPR, and we never train on your data. Demo: {link}”"],
  ["E4 · Break-up (+3d)","<strong>“close the loop?”</strong><br>“If now’s not the time I’ll stop here — want me to send the walkthrough for later?”"],
]);
S += label("LinkedIn sequence (4 steps)");
S += table(["Step","Copy"],[
  ["Connect","“Hi {first} — watching {company} scale. Curious how your team keeps goals and delivery in one place. Open to connecting?”"],
  ["DM 1 (on accept)","“Thanks {first}. Plansom turns a goal into a ready-to-share plan and lets AI agents do some of the work — inside Teams. Worth a quick look?”"],
  ["DM 2 (value, +3d)","“Sharing ‘Simply done’ in 60 secs: {link}. Built with Microsoft for Startups.”"],
  ["Break-up (+4d)","“No worries if it’s not a fit right now — I’ll leave it with you.”"],
]);
S += label("Post-meeting & trial nurture (hand to Journey pillar)");
S += table(["When","Message"],[
  ["Day 0","Recap + trial link + one proof point (within the hour)."],
  ["Day 2","“Set your first goal / invite the team.”"],
  ["Day 5","Segment-matched case study."],
  ["Day 9 / 14","ROI recap → decision + bring in the buyer."],
]);

// ===== 4b. FLOWS (graphical) =====
S += PB + sub("5 · Communication flows (graphical)");
S += label("Email cadence — with reply branch");
S += box("Enrolled from ICP list","contact tagged segment + trigger","#DDE7FF");
S += arrow("day 0");
S += box("E1 · Hook","goals in, plan out");
S += arrow("wait 2 days · if reply → EXIT to HubSpot");
S += box("E2 · Bump","quick nudge");
S += arrow("wait 3 days · if reply → EXIT");
S += box("E3 · Proof","Microsoft + security");
S += arrow("wait 3 days · if reply → EXIT");
S += box("E4 · Break-up","close the loop");
S += arrow("no reply");
S += box("Exit → recycle","re-enrol after 90 days (nurture)","#F3F3F4");
S += label("Positive-reply → HubSpot handoff");
S += box("Positive reply / meeting booked","in email or LinkedIn","#DDE7FF");
S += arrow("auto-sync");
S += box("HubSpot: create Contact + Deal","Lifecycle = SQL · Deal = ‘Meeting booked’");
S += arrow("owner rotation");
S += box("SDR/AE runs SPIN discovery","qualify → trial","#DDE7FF");

// ===== 6. QUALIFIED HANDOFF =====
S += PB + sub("6 · When qualified people go to HubSpot");
S += table(["Event (in sending tool / LinkedIn)","What happens in HubSpot"],[
  ["Positive reply","Contact promoted to marketing contact · Deal created at ‘Engaged’ · task to owner"],
  ["Meeting booked","Lifecycle = SQL · Deal → ‘Meeting booked’ · meeting source set · Slack alert"],
  ["Meeting held + qualified","Deal → ‘Discovery held (SQL)’ · qualification fields required"],
  ["Trial started (product event)","Deal → ‘Trial started’ · handoff to Customer Journey pillar"],
]);
S += p(`<strong>SQL definition:</strong> a booked meeting with an ICP-fit contact whose trigger is confirmed. Everything before that stays in the sourcing/sending layer to keep HubSpot clean and costs down.`);

// ===== 7. HUBSPOT SETUP =====
S += PB + sub("7 · HubSpot setup");
S += label("Lifecycle stages");
S += table(["Stage","Set when"],[
  ["Subscriber → Lead","Sourced / in an ICP list"],
  ["MQL","Fit + engagement score ≥ 50"],
  ["SQL","Positive reply or booked meeting"],
  ["Opportunity → Customer","Open deal → closed-won"],
  ["Evangelist","Advocate / Advisory Board"],
]);
S += label("Deal pipeline — ‘Outbound Sales’");
S += table(["Stage → gate","Prob."],[
  ["1 Targeted → enrolled in sequence","5%"],
  ["2 Sequenced → positive reply","10%"],
  ["3 Engaged → meeting proposed","25%"],
  ["4 Meeting booked → meeting occurs","40%"],
  ["5 Discovery held (SQL) → trial agreed","55%"],
  ["6 Trial started → evaluation","70%"],
  ["7 Evaluation → decision","85%"],
  ["8 Closed Won / Lost","100% / 0%"],
]);
S += label("Variables (custom properties)");
S += table(["Object","Key properties"],[
  ["Contact","ICP segment (A/B/C) · Trigger · Persona · Outreach channel · Sequence · Reply sentiment · Meeting source"],
  ["Company","Uses Teams (bool) · ICP tier · Employees · Funding stage/date · PM/OKR tool"],
  ["Deal","Channel · Meeting-held date · Trial-start date · Seats (def 10) · Qualification fields · Disqual reason"],
]);
S += label("Workflows");
S += table(["Workflow","Trigger → actions"],[
  ["Enrichment & tiering","Contact created → enrich → set segment/tier/Uses-Teams → add to ICP list"],
  ["Owner rotation","Enter ICP list → round-robin owner + ‘start sequence’ task"],
  ["MQL handoff","Score ≥ 50 → Lifecycle MQL → Slack + task"],
  ["Positive reply","Sentiment = Positive → Deal ‘Engaged’ + task"],
  ["Meeting booked","Meeting scheduled → SQL + Deal ‘Meeting booked’ + source"],
  ["No-show","Outcome = no-show → re-book sequence"],
  ["Trial started","Product webhook → Deal ‘Trial started’ + CS handoff"],
  ["Closed-lost nurture","Lost → wait 90d → re-enrol light nurture"],
  ["Data hygiene","Daily dedupe / standardise / flag missing required fields"],
  ["Compliance","Unsubscribe/DSAR → suppression + stop sequences"],
]);
S += label("Also configure");
S += ul([
  "Lead scoring (fit + engagement; MQL ≥ 50).",
  "Active lists (ICP A/B/C, signal, engaged-no-meeting, trial-not-converted, suppression).",
  "Task queues + SLAs (positive reply &lt; 2h; recap &lt; 1h).",
  "Dashboards: outbound funnel · channel CPM · sequence performance · meeting→trial→win · rep activity.",
]);

// ===== 8. PROCESSES =====
S += PB + sub("8 · Processes & ownership");
S += table(["Cadence","What"],[
  ["Daily","Reps clear task queues (LinkedIn steps, positive replies, meeting prep); hygiene workflow runs"],
  ["Weekly","Outreach review: funnel + CPM vs target; deliverability health; list replenishment"],
  ["Monthly","Messaging synthesis from replies; sequence A/B review; win/loss"],
]);
S += table(["Role","Owns"],[
  ["RevOps","HubSpot build, properties, workflows, hygiene, dashboards"],
  ["SDR / agency","List loading, sequences, replies, booking meetings"],
  ["AE","Deals from ‘Meeting booked’ → close"],
  ["Marketing","Messaging, copy, offers"],
]);

// ===== 9. FUNNEL =====
S += PB + sub("9 · The full funnel (sales-led)");
S += p("Monthly, with the workbook’s conversion rates. Volumes are steady-state targets.");
S += box("Outbound touches","~34k emails + LinkedIn activity (5 accts)","#DDE7FF");
S += arrow("reply + positive-reply rates");
S += box("Meetings booked","~227 / mo  (email ~102 · LinkedIn ~125)");
S += arrow("~50% meeting → trial");
S += box("Trials","~114 / mo");
S += arrow("~20% trial → purchase");
S += box("New customers","~23 / mo");
S += arrow("× ~10 licences / customer");
S += box("New users","~227 / mo","#DDE7FF");
S += arrow("+ ~20% plan-sharing (viral)");
S += box("Shared-plan users","+~45 / mo","#F3F3F4");
S += label("Funnel table");
S += table(["Stage","Volume / mo","Conversion","Cost"],[
  ["Meetings booked","~227","—","~$85 / meeting (blended)"],
  ["Trials","~114","50% meeting→trial","~$170 / trial"],
  ["New customers","~23","20% trial→purchase","~$850 / customer"],
  ["New users (seats)","~227","×10 seats","~$85 / user"],
  ["Plan-sharing uplift","+~45","20% viral","—"],
  ["[Your extra %]","[TBC]","<span style='color:"+BLUE+"'>[slot for the additional percentage]</span>","[TBC]"],
]);
S += p(`<span style="color:${GREY}">Figures from the workbook’s Simple-funnel + channel-OS tabs. Meeting→trial 50%, trial→purchase 20%, ~10 seats/customer, ~20% plan-sharing. Tell me the additional percentage you had in mind (e.g. meeting-held rate, or SQL→trial) and it slots into the row above and re-flows the totals.</span>`);

// ===== 10. CHECKLIST =====
S += PB + sub("10 · End-to-end setup checklist");
S += ol([
  "Stand up sending infra (domains, 170 inboxes, warmup) + 5 LinkedIn accounts.",
  "Build ICP lists A/B/C in Apollo/Sales Nav; enrich + QA + tag.",
  "Connect Apollo → sending tool; Apollo → HubSpot (non-marketing mirror).",
  "Build HubSpot: properties, pipeline + gates, lifecycle, scoring, lists.",
  "Build the 10 workflows; connect Slack + product webhook + sending-tool sync.",
  "Load sequences (email + LinkedIn) with the §4 copy; set enrol/unenrol rules.",
  "Build dashboards; set task queues + SLAs.",
  "QA 10 test contacts end-to-end (source → cadence → reply → SQL → deal → trial).",
  "Go live; review weekly against the §9 funnel.",
]);

fs.writeFileSync(__dirname+"/html/outbound-crm-system.html", fullPage(S));
console.log("wrote outbound-crm-system.html");
