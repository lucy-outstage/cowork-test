// Built-out, populated content for GTM Pillars 03–10 — the real first-draft artifacts each
// pillar owns, grounded in Plansom's messaging (work simplifier / Simply done / AI agents /
// Microsoft / SOC2) and the workbook's funnel + channel-OS economics.
// Relies on CSS classes defined in brandhtml.js STYLE (sub, lead, kk, grid, h, subs, seclabel).
// NOTE: cells are RAW HTML — write "&amp;" for a literal ampersand; <strong>/<em> allowed.

const INK="#222222", BLUE="#343CED", ZEBRA="#F3F3F4";
function sub(t){return `<h2 class="sub">${t}</h2>`;}
function lead(h){return `<p class="lead">${h}</p>`;}
function label(t){return `<p class="seclabel">${t}</p>`;}
function ul(items){return `<ul class="subs">`+items.map(i=>`<li>${i}</li>`).join("")+`</ul>`;}
function table(headers, rows){
  const head=`<tr>`+headers.map(h=>`<td class="h" bgcolor="${INK}">${h}</td>`).join("")+`</tr>`;
  const body=rows.map((r,i)=>{const z=i%2?` bgcolor="${ZEBRA}"`:'';return `<tr>`+r.map((c,j)=>`<td${z}>${j===0?`<span class="kk">${c}</span>`:c}</td>`).join("")+`</tr>`;}).join("");
  return `<table class="grid">${head}${body}</table>`;
}

const BUILD = {};

// ============================ PILLAR 03 — OUTREACH ============================
BUILD["03"] = function(){
  let s = sub("Built-out: the Outreach engine");
  s += lead(`<strong>Status:</strong> v1 plan and starter assets, sized to the workbook’s sales-led model. Purpose — put the Messaging hypotheses in front of named, high-fit prospects and convert responses into booked meetings.`);

  s += label("Monthly channel model (sales-led)");
  s += table(["Channel","Setup","Monthly output","Cost / meeting"],[
    ["LinkedIn","5 accounts · Sales Navigator + agency · 750 connects + 150 InMails per account","~125 meetings","~$43"],
    ["Email","170 inboxes · 30 sends/day · 20 active days · 3 follow-ups (~34k sends)","~102 meetings","~$49"],
    ["Blended","—","<strong>~227 meetings/mo</strong>","~$85 planning"],
  ]);
  s += lead(`Funnel: ~227 meetings → <strong>50% meeting→trial</strong> ≈ 114 trials → <strong>20% trial→purchase</strong> ≈ 23 customers → <strong>×10 licences</strong> ≈ 227 new users / month from outreach alone.`);

  s += label("Target segments & list recipes");
  s += table(["List","Filter (who)","Trigger (why now)"],[
    ["A · Teams-native orgs","50–500 staff · uses Microsoft Teams / M365 · Ops, PMO, RevOps, Chief of Staff titles","Work already lives in Teams — Plansom drops in where they are"],
    ["B · Recently funded scale-ups","Raised in last 6 months · 20–200 staff · Founder / COO / CoS","Scaling fast; coordination and goal-tracking are breaking"],
    ["C · Tool-switchers","Installed a competing PM/OKR tool · PMO / Head of Ops","Tool sprawl and status-chasing; open to a simpler way"],
  ]);
  s += lead(`<span style="color:#5F5F5F">Sources: Apollo, LinkedIn Sales Navigator, funding feeds, tech-install signals. Every list maps 1:1 to a Messaging segment + trigger.</span>`);

  s += label("Signal library (route to lists automatically)");
  s += table(["Signal","Source","Opening angle"],[
    ["New funding round","Crunchbase / Apollo","“Congrats on the raise — how are you keeping goals and delivery aligned as you scale?”"],
    ["Hiring surge (PM/ops roles)","Job boards","“Growing the ops team usually means more coordination — worth a simpler way?”"],
    ["Adopted Microsoft Teams / M365","Tech installs","“You’re in Teams — Plansom turns goals into shared plans right inside it.”"],
    ["New COO / Chief of Staff","LinkedIn","“New-leader 100-day plan — get goals and delivery in one place fast.”"],
    ["Using a competing PM/OKR tool","Tech installs / reviews","“If planning still feels manual, Plansom does the plan for you.”"],
  ]);

  s += label("Sequence copy — LinkedIn (v1, brand voice)");
  s += table(["Step","Copy"],[
    ["Connect note","“Hi {first} — watching {company} scale. Curious how your team keeps goals and delivery in one place. Open to connecting?”"],
    ["DM 1 (on accept)","“Thanks {first}. Most teams we meet drown in to-do lists and status updates. Plansom turns a goal into a ready-to-share plan and lets AI agents do some of the work — right inside Teams. Worth a 60-sec look?”"],
    ["Follow-up","“No worries if timing’s off. Here’s ‘Simply done’ in a minute: {link}. Built with Microsoft for Startups.”"],
    ["InMail (parallel)","Subject: “Goals in, plan out — inside Teams.” Body: short version of DM 1 + {link}."],
  ]);

  s += label("Sequence copy — Email (4-step)");
  s += table(["Step","Subject → message"],[
    ["E1","<strong>“goals in, plan out”</strong> — “{first}, does planning and status-chasing eat your team’s week? Plansom turns a goal into a ready-to-share plan and puts AI agents to work. 15 mins to show you?”"],
    ["E2 (bump)","<strong>“quick nudge”</strong> — “Floating this back up — worth a look for {company}?”"],
    ["E3 (proof)","<strong>“why Microsoft backs this”</strong> — Sherry List quote + “SOC 2, GDPR, never trains on your data.” + {link}"],
    ["E4 (break-up)","<strong>“should I close the loop?”</strong> — “If now’s not the time I’ll stop here — happy to send the 60-sec demo for later.”"],
  ]);

  s += label("CRM pipeline & reporting");
  s += table(["Pipeline stage","Definition"],[
    ["New → Contacted → Replied","List loaded → sequence live → positive reply"],
    ["Meeting booked → Held (SQL)","Calendar set → qualified discovery completed"],
    ["Trial started → Won / Lost","Activated in-product → converted or closed"],
  ]);
  s += table(["KPI","Target"],[
    ["LinkedIn connect / reply","50% / 13%"],
    ["Email reply / positive","1% / 30%"],
    ["Meeting → trial","50%"],
    ["Cost per meeting (LI / email)","~$43 / ~$49"],
  ]);
  return s;
};

// ============================ PILLAR 04 — SPIN SELL ============================
BUILD["04"] = function(){
  let s = sub("Built-out: the Spin Sell playbook");
  s += lead(`<strong>Status:</strong> v1 discovery playbook. Purpose — in the meeting, diagnose whether the prospect is genuinely ready and capture the “why” in their own words, then convert to an activated trial (target 50% meeting→trial).`);

  s += label("Qualification bar — “is this person ready?”");
  s += ul([
    "<strong>Trigger</strong> — an observable event is forcing the issue now (funding, new leader, tool sprawl, missed goals).",
    "<strong>Pain owner</strong> — the person feels the coordination/goal pain themselves.",
    "<strong>Authority / path</strong> — can buy or bring the buyer (≈10-seat team decision).",
    "<strong>Timing</strong> — willing to start a trial and invite a team within 2 weeks.",
  ]);

  s += label("SPIN question bank");
  s += table(["Stage","Questions"],[
    ["Situation","How does your team set and track goals today? Which tools? How big is the team, and are you in Microsoft Teams?"],
    ["Problem","Where does it break down — planning, prioritisation, status updates, delegation? How much time goes on status chasing each week?"],
    ["Implication","What does a missed or slipped goal actually cost you? What happens to focus when priorities aren’t clear? What’s a manager hour worth on admin vs outcomes?"],
    ["Need-payoff","If a goal turned into a ready-to-share plan automatically and AI agents handled some of the tasks, what would that free up? What’s hitting goals ‘on repeat’ worth to the team?"],
  ]);

  s += label("Objection handling");
  s += table(["Objection","Response"],[
    ["“We already use Asana / Jira / Monday.”","Plansom isn’t another board to maintain — it turns a goal into the plan for you and adds AI agents that do work. It sits alongside and integrates with what you have."],
    ["“Is our data safe with AI?”","Azure-hosted and encrypted, SOC 2 (Type II), GDPR + CCPA, and never used to train LLMs."],
    ["“We’re too busy to set it up.”","That’s the point — you start from a goal and the plan is built for you in minutes. Templates get you moving."],
    ["“What’s the ROI / price?”","Walk the ROI calculator: time saved on planning + status, faster delegation, goals actually hit. Sized to a ~10-seat team."],
    ["“Will the AI agents really help?”","They do real tasks and show outcomes, not just chat. Start with one agent on one workflow and expand."],
    ["“We’re not in Microsoft Teams.”","Plansom works standalone and connects to your stack; Teams is a bonus, not a requirement."],
  ]);

  s += label("Discovery → demo flow (30 min)");
  s += table(["Minutes","Focus"],[
    ["0–5","Frame + confirm the trigger and who’s in the room"],
    ["5–15","SPIN discovery — surface pain and implication"],
    ["15–25","Tailored demo: their goal → shared plan → an agent doing a task"],
    ["25–30","Confirm need-payoff, start the trial, agree activation + team invite"],
  ]);

  s += label("Post-meeting follow-up sequence");
  s += table(["When","Action"],[
    ["Day 0","Recap + trial link + one relevant proof point (send within the hour)"],
    ["Day 2","Activation nudge: “set your first goal / invite the team”"],
    ["Day 5","Case study matched to their segment"],
    ["Day 9","ROI recap + offer to bring in the buyer"],
    ["Day 14","Decision + next step"],
  ]);
  s += lead(`<span style="color:#5F5F5F">Agents remove admin so reps stay in conversations: AI note-taker, auto-CRM logging, and drafted follow-ups. Collateral (story deck, ROI calculator, battlecards) is authored in the Content OS and mapped to each stage above.</span>`);
  return s;
};

// ============================ PILLAR 05 — CUSTOMER JOURNEY ============================
BUILD["05"] = function(){
  let s = sub("Built-out: the Customer Journey");
  s += lead(`<strong>Status:</strong> v1 lifecycle + onboarding. Purpose — turn readiness into active usage and revenue, and amplify the plan-sharing viral loop.`);

  s += label("Lifecycle & activation");
  s += table(["Stage","Definition / milestone"],[
    ["Trial","Signed up; goal not yet turned into a shared plan"],
    ["Activated (the “aha”)","<strong>Within 48h:</strong> first goal → plan, ≥1 teammate invited, ≥1 AI-agent task run"],
    ["Converted","Trial → paid (~10 seats)"],
    ["Expanded","More seats / more teams"],
    ["Advocate","Refers, reviews, joins the Advisory Board"],
  ]);

  s += label("Funnel OS — targets");
  s += table(["Metric","Target"],[
    ["Meeting → trial","50%"],
    ["Trial → purchase","20%"],
    ["Licences per customer","~10"],
    ["Plan-sharing coefficient","0.2 (each cohort seeds new users)"],
  ]);

  s += label("Onboarding sequence — first 14 days");
  s += table(["When","Trigger / message"],[
    ["Day 0","Welcome → “set your first goal” (in-app + email); Plansom builds the plan"],
    ["Day 1","“Invite your team” — unlocks the shared plan (drives the viral loop)"],
    ["Day 2","“Run your first AI-agent task” — see an outcome, not just a board"],
    ["Day 5","Progress nudge: what’s moved, what’s next"],
    ["Day 7","Check-in + tip matched to their goal type"],
    ["Day 10","Value recap: hours saved / tasks done by agents"],
    ["Day 12","Convert: seat plan + ROI"],
    ["Day 14","Decision + human touch if high-fit"],
  ]);

  s += label("Behaviour-triggered nudges");
  s += table(["If the user…","Nudge"],[
    ["Created no plan","“Start with one goal — we’ll build the plan.”"],
    ["Made a plan but invited no one","“Share it — plans are better with the team.” (viral loop)"],
    ["Hasn’t used an agent","“Let an AI agent take the first task.”"],
    ["Went quiet (no WAU)","Re-engage with a relevant win + human check-in if high-fit"],
  ]);

  s += label("Health score & plays");
  s += table(["Signal (weekly)","Health → play"],[
    ["Plans created · team invited · agent tasks · WAU","Green → expansion play"],
    ["Partial activation","Yellow → targeted nudge + CS touch"],
    ["No activation","Red → onboarding rescue / disqualify"],
  ]);
  return s;
};

// ============================ PILLAR 06 — ADVISORY BOARD ============================
BUILD["06"] = function(){
  let s = sub("Built-out: the Customer Advisory Board");
  s += lead(`<strong>Status:</strong> v1 stand-up plan (pillar was TBC). Purpose — sharpen “who is ready and why” with the people who already chose Plansom, and turn them into proof and pipeline.`);

  s += label("Charter");
  s += table(["Element","Definition"],[
    ["Purpose","Validate the readiness profile, pressure-test the roadmap, and generate advocacy."],
    ["Size / term","8–12 members · two 6-month cohorts per year"],
    ["Members give","Candid feedback, quarterly time, references / case studies"],
    ["Members get","Early access, roadmap influence, credits, peer network, exposure"],
    ["Confidentiality","Mutual NDA; Chatham House rule in sessions"],
  ]);

  s += label("Member selection");
  s += ul([
    "Fast activators (hit the “aha” quickly) — they embody “ready.”",
    "High, repeated usage across a real team.",
    "A spread across the priority segments (Teams-native, funded scale-ups, tool-switchers).",
    "Referenceable and willing to speak on record.",
  ]);

  s += label("Quarterly session agenda (90 min)");
  s += table(["Minutes","Focus"],[
    ["0–15","Product update + what shipped from last session"],
    ["15–45","Readiness / “why” deep-dive — capture verbatim language for Messaging"],
    ["45–75","Roadmap input — rank what matters"],
    ["75–90","Advocacy: case studies, referrals, reviews"],
  ]);

  s += label("Insight → action loop");
  s += table(["Step","Owner / output"],[
    ["Capture","Verbatim quotes + themes logged per session"],
    ["Synthesise","Top 3 readiness insights + top 3 roadmap asks"],
    ["Route","→ Messaging (language) · Product (roadmap) · Content (stories)"],
    ["Close the loop","Report back to members what changed"],
  ]);
  s += lead(`<span style="color:#5F5F5F">Advocacy outputs feed Pillar 08 (reviews on directories), Pillar 02 (case studies) and Pillar 03/04 (proof in sequences and objection handling).</span>`);
  return s;
};

// ============================ PILLAR 07 — ACCELERATORS & EVENTS ============================
BUILD["07"] = function(){
  let s = sub("Built-out: Accelerators & Events");
  s += lead(`<strong>Status:</strong> v1 target framework + candidate lists to validate. Purpose — reach dense pools of ready-now teams at the moment their trigger fires. <span style="color:#5F5F5F">Named accelerators below are candidates to confirm, not existing partnerships — except Microsoft for Startups, where a relationship already exists.</span>`);

  s += label("Accelerator targets (candidates to validate)");
  s += table(["Accelerator","Why it fits","Angle"],[
    ["Microsoft for Startups <em>(anchor — existing)</em>","Already partnered; Teams-native ecosystem","Co-market ‘result management in Teams’ to cohorts"],
    ["Y Combinator / Techstars","High-volume cohorts of scaling teams","Cohort offer + founder AMA / workshop"],
    ["Antler / EF / Seedcamp (EU)","Early teams forming operating habits","‘Set up your operating system’ workshop"],
    ["Vertical / regional accelerators","Concentrated ICP by sector/geo","Sponsored masterclass to the cohort"],
  ]);

  s += label("Event strategy");
  s += table(["Mode","Use when","Priority"],[
    ["Speak / workshop","ICP concentrates and we can teach ‘the Simple Way’","High — flagship"],
    ["Sponsor","High-density ICP event, warm follow-up plan ready","Medium"],
    ["Attend / host dinner","Named ABM accounts in one place","Targeted"],
  ]);
  s += lead(`Flagship formats are owned in the Content OS: <strong>Plansom masterclass</strong>, <strong>workshops</strong>, and a signature <strong>TED-style talk</strong>.`);

  s += label("ABM — key relationships");
  s += ul([
    "<strong>Microsoft</strong> — Foundry SDKs, Microsoft for Startups, AppSource, co-sell motions.",
    "Anchor accelerators once validated (cohort access = batched ready teams).",
    "Ecosystem/integration partners whose users match our ICP.",
  ]);

  s += label("Per-event playbook");
  s += table(["Phase","Actions"],[
    ["Pre (2–3 wks)","Build the attendee list, book meetings, tease the talk/offer"],
    ["At","Deliver value (teach, demo a goal→plan→agent), capture opt-ins"],
    ["Post (48h)","Personal follow-up + trial link; enrol into nurture; log to CRM"],
  ]);
  s += lead(`<span style="color:#5F5F5F">Each key relationship gets a one-page annual plan (goals, touch cadence, offers, success metric); each event gets this playbook with a booked-meetings target.</span>`);
  return s;
};

// ============================ PILLAR 08 — PARTNERSHIPS & DIRECTORIES ============================
BUILD["08"] = function(){
  let s = sub("Built-out: Partnerships & Directories");
  s += lead(`<strong>Status:</strong> v1 program spec + target lists, sized to the workbook’s PartnerStack model.`);

  s += label("PartnerStack program — economics");
  s += table(["Step","Monthly figure"],[
    ["Outreach","800 partner messages @ 10% reply → 80 replies"],
    ["New partners","80% fit → ~64 new + ~20 organic = <strong>~84 partners/mo</strong>"],
    ["Traffic","~20k reach/partner → capture ~0.2% → ~3,360 visits"],
    ["Trials","3.5% visit→trial → <strong>~118 trials/mo</strong>"],
    ["Cost","~$5.5k program → <strong>~$47 / trial</strong>"],
  ]);

  s += label("Ideal partner profile");
  s += ul([
    "<strong>Microsoft partners / MSPs</strong> — Teams ecosystem, natural co-sell (strongest fit).",
    "Ops / PM / digital-transformation <strong>agencies &amp; consultancies</strong> deploying to clients.",
    "Complementary SaaS (CRM, comms, meetings) via integrations.",
    "Fractional COOs and operator communities.",
  ]);

  s += label("Partner tiers & commissions");
  s += table(["Tier","Model"],[
    ["Referral","Share a lead → % of first-year revenue"],
    ["Reseller","Sells &amp; supports → margin / recurring %"],
    ["Tech / integration","Joint value + co-marketing"],
  ]);

  s += label("Directories & marketplaces (priority)");
  s += table(["Listing","Why","Action"],[
    ["Microsoft AppSource","Teams app — highest-intent, on-ecosystem","Publish + optimise the Teams app listing"],
    ["G2 / Capterra / GetApp","Buyers actively comparing tools","Claim, optimise, drive reviews from the Advisory Board"],
    ["Product Hunt","Launch spike + backlinks","Coordinated launch of a milestone"],
  ]);
  s += lead(`<span style="color:#5F5F5F">Deal-reg / referral tracking keeps attribution clean (ties to the Outreach CRM). Reviews are sourced from Pillar 06 advocates.</span>`);
  return s;
};

// ============================ PILLAR 09 — TRAFFIC ============================
BUILD["09"] = function(){
  let s = sub("Built-out: the Traffic engine");
  s += lead(`<strong>Status:</strong> v1 paid plan + tracking + SEO/GEO themes, sized to the workbook’s Ads OS.`);

  s += label("Paid ads plan (trial-led)");
  s += table(["Channel","Budget","Trials","Cost / trial","Angle"],[
    ["LinkedIn Ads","$30k","~62","~$480","ABM to Teams-native orgs &amp; funded scale-ups"],
    ["Meta Ads","$14k","~60","~$233","Founder / ops audiences; ‘Simply done’ creative"],
    ["Google Ads","$22.5k","~77","~$260","High-intent search (see themes below)"],
    ["Total","~$66.5k","<strong>~200 trials/mo</strong>","$233–$480","Kill losers fast; scale winners"],
  ]);

  s += label("Tracking OS spec");
  s += ul([
    "Analytics: GA4 + a product-analytics tool (events across visit → signup → activation → paid).",
    "UTM schema: <span class=\"kk\">source / medium / campaign / content</span> enforced on every link.",
    "Attribution: first + last touch, plus self-reported ‘how did you hear’ at signup.",
    "Consent + privacy banner aligned to the cookies/privacy page (Pillar 02).",
  ]);
  s += lead(`<strong>Build tracking before scaling spend</strong> — without it, budget is blind.`);

  s += label("SEO keyword themes");
  s += table(["Theme","Example queries","Intent"],[
    ["AI work / agents","“AI work management”, “AI agents for work”, “AI project planning”","Category — high"],
    ["Goals / OKRs","“OKR software”, “goal tracking tool for teams”","Commercial"],
    ["Microsoft Teams","“project management in Microsoft Teams”, “Teams planning app”","High-intent, on-ecosystem"],
    ["Switch / alternative","“Asana alternative”, “Monday alternative”","Bottom-funnel"],
    ["Jobs-to-be-done","“turn goals into a plan”, “delegate tasks to AI”","How-to → trial"],
  ]);

  s += label("GEO (generative engine optimisation)");
  s += ul([
    "Structure content to be cited by AI assistants: clear definitions, comparisons, and ‘how Plansom does X’.",
    "Publish comparison and category pages that answer buying questions directly.",
    "Monitor AI-referral traffic as a first-class channel as it grows.",
  ]);
  s += lead(`<span style="color:#5F5F5F">One message-matched landing page per channel/segment (owned in the Content OS), single CTA: <strong>Try Plansom</strong>.</span>`);
  return s;
};

// ============================ PILLAR 10 — SOCIAL ============================
BUILD["10"] = function(){
  let s = sub("Built-out: Social Media");
  s += lead(`<strong>Status:</strong> v1 channel + content plan (pillar was TBC). Purpose — keep Plansom top-of-mind so people self-identify as ready when their trigger fires, and amplify the plan-sharing loop. Founder-led first.`);

  s += label("Channel strategy");
  s += table(["Channel","Owner","Focus"],[
    ["LinkedIn — company","Marketing","Product, proof, customer outcomes"],
    ["LinkedIn — Founders 1 &amp; 2","Founders","POV, build-in-public, category (highest reach)"],
    ["X — company + founder","Founder / mktg","Real-time, tech-native audience"],
    ["YouTube","Marketing","Walkthroughs, talks, repurposed video"],
    ["Instagram","Marketing","Short-form + brand moments"],
  ]);

  s += label("Content pillars");
  s += table(["Pillar","What we post","Example"],[
    ["Simply done philosophy","Goals not to-do lists; the Simple Way","“Stop managing to-do lists. Set a goal.”"],
    ["Build-in-public","The Plansom + Microsoft journey","Foundry SDKs / Teams milestones"],
    ["Customer outcomes","Proof + verbatim wins","Advisory-board mini case studies"],
    ["AI agents at work","Short demos of an agent doing a task","“Watch an agent clear this task.”"],
    ["How-to / templates","Turn a goal into a plan in 60s","Preset-goal walkthroughs"],
  ]);

  s += label("Cadence, engagement & measurement");
  s += table(["Element","Plan"],[
    ["Cadence","Founders 3–5×/wk · company 3×/wk · batch-produced from Content OS"],
    ["Formats","Short-form video first; repurpose across LinkedIn, X, YouTube, IG"],
    ["Engagement","Comment on ICP conversations; route inbound DMs to the CRM (warm pipeline)"],
    ["Measurement","Reach → profile visits → trials; attribute to pipeline, not vanity metrics"],
  ]);
  s += lead(`<span style="color:#5F5F5F">Founder-led accounts outperform brand at this stage — give each founder a distinct angle and a sustainable weekly cadence. All copy follows the brand voice: simple, action-first, confident.</span>`);
  return s;
};

function sections(n){ return BUILD[n] ? BUILD[n]() : ""; }
module.exports = { sections };
