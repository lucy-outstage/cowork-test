// Single source of truth for the Plansom GTM Pillar Overview.
// Rich text uses tiny markup: **bold**, *italic*.  Rendered to both DOCX and HTML.

const pillars = [
  {
    n: "01", role: "DEFINE the hypothesis", title: "Messaging & Brand System",
    thesis: [
      "**This pillar is where the answer is first written down.** It converts a vague market into a short list of named segments, each paired with the specific **trigger event** that makes that segment ready *now* — new funding, a leadership change, tool sprawl, a missed quarter — and the pain that trigger creates.",
      "Every other pillar inherits its targeting and its “why” from here. Messaging produces the hypotheses that Outreach and Traffic test in-market, and the language that Content expresses. If this is vague, the whole engine chases the wrong people at scale.",
    ],
    rows: [
      { comp: "Messaging blueprint",
        subs: ["ICP & segment definitions (who)", "“Ready-now” trigger event per segment", "Pain → value map", "Positioning & category POV", "Proof points & differentiators", "Message hierarchy: one-liner → elevator → full narrative"],
        consider: "Anchor every segment to an observable trigger Outreach can actually target; separate “ready now” from “good fit but dormant.”",
        build: "Draft v1 from founder intuition + your first customers, publish as one source-of-truth doc, then version it quarterly against Outreach reply data and the Advisory Board." },
      { comp: "Brand guidelines",
        subs: ["Visual identity (logo, colour, type)", "Voice & tone", "Do / don’t rules", "Templates & asset library"],
        consider: "Keep it lightweight at this stage — enough for consistency across Content, not a full rebrand. Founder-led voice matters more than polish.",
        build: "Ship a one-pager plus a template kit (Figma/Canva); enforce it through the Content OS." },
      { comp: "Ownership tree",
        subs: ["RACI per GTM component", "Single DRI for messaging", "Review cadence"],
        consider: "Messaging drift is the most common GTM failure mode; one named owner prevents it.",
        build: "Map ownership onto the team and embed the review in the weekly Marketing check-in." },
      { comp: "Resource & capacity tree",
        subs: ["Headcount / agency map", "Budget by stream", "Tooling", "Capacity per channel"],
        consider: "Tie capacity directly to funnel targets (5 LinkedIn accounts, 170 inboxes, etc.) so plans stay physically achievable.",
        build: "Build a simple capacity model; revisit monthly against KPI actuals." },
    ],
  },
  {
    n: "03", role: "REACH & TEST at scale", title: "Outreach System",
    thesis: [
      "Outreach is the fastest, most direct instrument for *testing* who is ready. It puts the messaging hypothesis in front of thousands of named, targeted prospects every month and treats their responses as the readiness signal: **a reply and a booked meeting is the market telling you this person is ready, and revealing the “why.”**",
      "It is also the cheapest evidence you can buy — roughly **$43 per meeting on LinkedIn and $49 on email**. The model targets ~250 meetings/month → ~125 trials, and feeds validated segment learning straight back into Messaging.",
    ],
    rows: [
      { comp: "Outreach process definition", subs: ["Channel sequencing & cadences", "SLAs and handoff to Spin Sell", "“Qualified meeting” bar"], consider: "Define what counts as a qualified meeting before scaling, or you optimise for noise.", build: "Document the end-to-end play; make it the single reference for the whole team." },
      { comp: "List building OS", subs: ["ICP filters tied to Messaging segments", "Data sources (Apollo et al.)", "Enrichment, dedupe, QA"], consider: "List quality drives every downstream number; filters must map 1:1 to the segment triggers.", build: "Build repeatable, named list recipes per segment." },
      { comp: "Signals OS", subs: ["Trigger signals: funding, hiring, job changes, tech installs, site visits", "Signal → list routing"], consider: "Signals are the sharpest “ready-now” proxy you have — prioritise them over cold lists.", build: "Wire signal sources into list building so hot accounts surface automatically." },
      { comp: "CRM system", subs: ["Pipeline stages matching the funnel", "Data model & activity logging", "Attribution"], consider: "One source of truth; stages must mirror the funnel model exactly.", build: "Select and configure the CRM early; retrofitting attribution later is painful." },
      { comp: "Tech stack spec", subs: ["Sending infra: 170 inboxes, domains, warm-up", "LinkedIn: 5× Sales Nav + agency", "Sequencer & deliverability"], consider: "Domain health and deliverability are existential — one reputation hit zeroes the channel.", build: "Document the stack and monitor deliverability as a standing KPI." },
      { comp: "Reporting dashboard", subs: ["Per-channel KPIs: connect, reply, yes, meetings, CPM", "Cohort views"], consider: "Mirror the LinkedIn & Email OS math so forecast and actuals are comparable.", build: "Stand up a live dashboard fed from the CRM." },
      { comp: "Email OS", subs: ["170 inboxes × 30 sends × 20 days", "3 follow-ups → ~34k sends", "1% reply × 30% positive → ~102 meetings/mo"], consider: "Output is volume × deliverability; protecting reputation beats raising volume.", build: "Scale inbox count carefully with warm-up; guard sender reputation." },
      { comp: "LinkedIn OS", subs: ["750 connects/mo @ 50% → DMs, follow-ups", "150 InMails", "~125 meetings across 5 accounts (15% correction)"], consider: "Respect account safety limits; over-automation gets accounts flagged.", build: "Run 5 accounts with agency support; treat limits as hard constraints." },
      { comp: "Ownership & capacity trees", subs: ["DRI per channel", "Agency vs. in-house split", "Capacity vs. targets"], consider: "This is the most operationally heavy pillar — clear ownership is non-negotiable.", build: "Assign DRIs per channel; review load in the weekly Marketing check-in." },
    ],
  },
  {
    n: "04", role: "QUALIFY readiness live", title: "Spin Sell System",
    thesis: [
      "This is where “ready?” gets answered in a real conversation. **SPIN** — Situation, Problem, Implication, Need-payoff — is a diagnostic method: it surfaces the prospect’s actual situation and pain, quantifies the cost of not solving it, and lets the prospect *articulate the value themselves*, which is the truest test of readiness and the clearest capture of the “why.”",
      "It converts the meetings Outreach books into qualified trials — the model’s **meeting→trial target is 50%** — and disqualifies the not-ready quickly so effort concentrates where readiness is real.",
    ],
    rows: [
      { comp: "Spin sell process documentation", subs: ["Discovery framework & SPIN question bank per segment", "Qualification criteria (BANT / MEDDIC-lite)", "Disqualification rules"], consider: "Readiness = trigger + a pain-owner with authority; make that the explicit bar.", build: "Write the playbook and script the SPIN sequence per segment." },
      { comp: "Collateral", subs: ["Demo script & story deck", "One-pagers, ROI calculator", "Battlecards, objection-handling"], consider: "Assets are authored in the Content OS; this pillar owns using the right one at the right stage.", build: "Assemble a stage-mapped kit; keep it in sync with Content OS versions." },
      { comp: "Follow up sequence", subs: ["Post-meeting nurture", "Trial-activation nudges", "Multi-threading the account"], consider: "Speed-to-follow-up is the single biggest conversion lever after the meeting.", build: "Templatise and automate; trigger the moment a meeting ends." },
      { comp: "Agents setup", subs: ["AI note-taker & CRM auto-logging", "Follow-up drafting", "Call scoring / coaching"], consider: "Use Plansom’s own agents to let a small team run an enterprise-grade motion.", build: "Configure agents to remove admin so reps stay in conversations." },
      { comp: "Ownership & capacity trees", subs: ["DRI for the sales motion", "Rep capacity vs. meeting volume"], consider: "Meeting supply from Outreach must match Spin Sell capacity or trials leak.", build: "Model capacity against the ~250 meetings/mo target." },
    ],
  },
  {
    n: "05", role: "CONVERT readiness into usage", title: "Customer Journey System",
    thesis: [
      "Being “ready” only matters if it turns into active usage. **This pillar owns the path from trial → activated customer → expansion, ensuring the people the rest of the engine identified as ready actually reach value and buy** (targets: trial→purchase 20%, ~10 licences/customer, and a 20% plan-sharing loop that compounds growth).",
      "It also validates the *real* definition of readiness: the users who activate fastest reveal the truest “ready” profile, which flows back to Messaging and the Advisory Board.",
    ],
    rows: [
      { comp: "Journey process documentation", subs: ["Lifecycle stages: trial → activate → convert → expand → advocate", "Activation milestones", "Health scoring"], consider: "Define the single “aha” / activation event first — everything else optimises toward it.", build: "Map the journey end-to-end and instrument every stage." },
      { comp: "Funnel OS", subs: ["Conversion model (mirrors the funnel sheet)", "Stage metrics & leak detection", "Cohort analysis"], consider: "The plan-sharing viral coefficient (0.2) is a distinct growth lever — track it explicitly.", build: "Build the funnel dashboard; attack the largest leak each month." },
      { comp: "Collateral", subs: ["Onboarding guides", "Product & how-to guides", "Video walkthroughs"], consider: "Authored in Content OS; this pillar maps each asset to an activation milestone.", build: "Sequence assets to compress time-to-value." },
      { comp: "Follow up sequence", subs: ["Onboarding comms", "Behaviour-triggered activation nudges", "Conversion & expansion plays"], consider: "Trigger on behaviour, not calendar time, to match each user’s pace.", build: "Stand up lifecycle automation keyed to product events." },
      { comp: "Agents setup", subs: ["In-app guidance", "Usage-triggered outreach", "Churn-risk alerts"], consider: "Dogfood Plansom’s agents — the journey is itself a proof point.", build: "Configure agents against activation and churn signals." },
      { comp: "Ownership & capacity trees", subs: ["CS / lifecycle DRI", "Capacity vs. trial volume"], consider: "Trial inflow from all channels must be matched by activation capacity.", build: "Size CS capacity to the combined trial target." },
    ],
  },
  {
    n: "06", role: "DEFINE from real users", title: "Customer Advisory Board", tbc: true,
    thesis: [
      "This is the highest-signal instrument for sharpening “who is ready and why,” because it asks the people who *already chose* Plansom. A structured board of best-fit customers turns anecdote into a validated readiness profile and a prioritised list of the “whys” that actually convert.",
      "@Currently marked **TBC** in the plan — the components below are the recommended way to stand it up. It feeds Messaging, Content, and Product with primary evidence.",
    ],
    rows: [
      { comp: "Membership & charter", subs: ["Selection criteria: best-fit, high-usage, referenceable", "Board size, term & incentives", "Charter and confidentiality"], consider: "Recruit from your earliest fast-activating customers — they embody “ready.”", build: "Recruit 8–12 members; write a light charter and cadence." },
      { comp: "Session cadence & agenda", subs: ["Quarterly sessions", "Topic backlog", "Readiness / “why” deep-dives", "Roadmap input"], consider: "Capture verbatim language — the words customers use become Messaging copy.", build: "Run structured quarterly sessions with a fixed insight template." },
      { comp: "Insight → action loop", subs: ["Synthesis of sessions", "Routing to Messaging / Product / Content", "Close the loop with members"], consider: "A board with no action loop quietly dies; assign a DRI to convert insight into changes.", build: "Stand up a simple pipeline from session → owned action → member update." },
      { comp: "Advocacy engine", subs: ["Case studies & references", "Referrals", "Co-marketing"], consider: "Bridges into Content and Partnerships — board members become proof and pipeline.", build: "Turn each member into at least one case study and one referral path." },
    ],
  },
  {
    n: "07", role: "REACH concentrated ready pools", title: "Accelerators & Events System",
    thesis: [
      "Accelerator cohorts and curated events are **dense concentrations of ready-now buyers** — teams actively scaling, under pressure to hit goals fast, and unusually open to new tools. A cohort is a pre-packaged batch of prospects whose readiness trigger is firing simultaneously.",
      "Layered with ABM on a small set of key relationships, this pillar reaches those people with warm, high-trust context at the exact moment the “why” is most acute.",
    ],
    rows: [
      { comp: "List of top accelerators", subs: ["Tiering by fit", "Cohort calendars", "Contacts & partnership angle"], consider: "Each cohort is a batch of ready teams — time outreach to cohort start dates.", build: "Build a ranked list and a repeatable cohort-outreach play." },
      { comp: "List of events", subs: ["By segment & region", "Sponsor vs. speak vs. attend", "Annual calendar"], consider: "Prioritise events where the ICP physically concentrates over big generic ones.", build: "Build an annual event calendar with a target per event." },
      { comp: "ABM list of key relationships", subs: ["Named high-value accounts, partners, people", "Relationship map"], consider: "Depth over breadth — a handful of relationships can outproduce broad outreach.", build: "Build the map; assign a named owner per relationship." },
      { comp: "Annual plan per ABM", subs: ["Per-account goals", "Touch plan & offers", "Success metrics"], consider: "Treat each key relationship like a mini-campaign with its own plan.", build: "One living plan per key relationship, reviewed quarterly." },
      { comp: "Plan per event", subs: ["Pre / at / post-event plays", "Targets", "Follow-up workflow"], consider: "Pipeline is made in the follow-up, not on the day — resource it deliberately.", build: "Templatise the event play so every event runs the same motion." },
    ],
  },
  {
    n: "08", role: "REACH via borrowed trust", title: "Partnerships & Directories System",
    thesis: [
      "Partners already hold the trust and attention of people who are ready — they sit in the workflow and recommend tools at the moment of need. **This pillar borrows that distribution** to put Plansom in front of in-market buyers cheaply: the model shows ~118 trials/mo from PartnerStack at ~$47/trial, plus ~300/mo from partner programmes.",
      "Directories (G2, Capterra, marketplaces) capture the other end — people *actively comparing* tools, one of the highest-intent readiness signals in the funnel.",
    ],
    rows: [
      { comp: "PartnerStack enablement", subs: ["Recruitment: 800 msgs/mo @ 10% × 80% fit → ~64 new + ~20 organic ≈ 84/mo", "Onboarding & deal-reg / referral", "Commissions & partner content", "Traffic capture → ~3,360 visits → ~118 trials"], consider: "Partner activation quality beats partner count — a few active partners drive most volume.", build: "Stand up the program, an enablement kit, and clean referral tracking." },
      { comp: "ABM Partnerships", subs: ["Strategic / tech / channel targets", "Joint value prop & solution brief", "Co-sell & co-market plan", "Integrations"], consider: "A few deep integrations beat many shallow logos.", build: "Pick top partners; build a joint plan and integration roadmap with each." },
      { comp: "Directories & marketplaces", tag: "recommended addition", subs: ["G2 / Capterra / app marketplaces", "Listing optimisation", "Review generation"], consider: "Highest-intent capture in the whole system — buyers here are comparing, not browsing.", build: "Claim and optimise listings; drive reviews from CS and the Advisory Board." },
    ],
  },
  {
    n: "09", role: "REACH & CAPTURE intent", title: "Traffic System",
    thesis: [
      "Search and intent-driven traffic are the **purest readiness signal there is** — someone typing the problem into Google, or asking an AI assistant, is telling you they are ready right now. This pillar captures that demand (SEO/GEO) and manufactures it (paid ads), routing both to trials.",
      "Paid delivers ~200 trials/mo (LinkedIn ~62, Meta ~60, Google ~77) at **$233–$480/trial** — expensive against outreach, which is why organic SEO/GEO is the long-run margin play.",
    ],
    rows: [
      { comp: "Tracking OS", subs: ["Analytics & UTMs", "Attribution model", "Conversion tracking, pixels & consent"], consider: "Without clean tracking, ad spend is blind — build this before scaling budget.", build: "Implement first; make attribution a prerequisite for spend increases." },
      { comp: "Paid ads", subs: ["LinkedIn: $30k → ~62 trials @ $480", "Meta: $14k → ~60 @ $233", "Google: $22.5k → ~77 @ $260", "Creative & landing pages (Content OS)"], consider: "Hold CAC discipline against the ~10-seat LTV; kill losers fast, scale winners.", build: "Start small per channel, optimise to CPA targets, then scale the winners." },
      { comp: "SEO", subs: ["Keyword / topic strategy per segment", "Technical SEO", "Content engine & backlinks"], consider: "Compounding but slow — start with high-intent bottom-funnel terms for fastest payback.", build: "Prioritise commercial-intent keywords; build the content engine off Content OS." },
      { comp: "GEO", tag: "generative engine optimisation", subs: ["Being cited by AI assistants", "Structured, citable content", "Entity & authority building"], consider: "Emerging channel with real first-mover advantage as buyers shift to AI search.", build: "Structure content for LLM citation; monitor AI-referral traffic as it grows." },
    ],
  },
  {
    n: "10", role: "BUILD ambient demand & trust", title: "Social Media System", tbc: true,
    thesis: [
      "Most of the market is not ready today — but readiness triggers fire unpredictably. **Social (especially founder-led) keeps Plansom top-of-mind so people self-identify as ready the moment their trigger hits**, and makes every other channel convert better because the name is already familiar.",
      "@Currently **TBC** in the plan; scaffold it from the Content OS “Discovery content” group. It also amplifies the plan-sharing viral loop.",
    ],
    rows: [
      { comp: "Channel strategy", subs: ["LinkedIn: company + 2 founders", "X: page + founder", "YouTube, Instagram"], consider: "Founder-led accounts consistently outperform brand accounts at this stage.", build: "Pick 1–2 primary channels and go deep rather than spreading thin." },
      { comp: "Content & cadence", subs: ["Post calendar", "Formats: short-form video, POV posts", "Repurposing from Content OS"], consider: "Consistency beats volume; a sustainable weekly cadence compounds.", build: "Set a weekly cadence and batch-produce from existing Content OS assets." },
      { comp: "Engagement & community", subs: ["Comment strategy", "DMs → pipeline", "Community building"], consider: "Social is a conversation, not a billboard — inbound DMs are warm pipeline.", build: "Define engagement SLAs; route qualified DMs into the CRM." },
      { comp: "Measurement & loop", subs: ["Reach → profile visits → pipeline", "Plan-sharing amplification"], consider: "Attribute to pipeline, not vanity metrics, to justify the investment.", build: "Track social → trial; feed the best content back into the calendar." },
    ],
  },
];

const contentGroups = [
  ["Social listening OS", "Monitor conversations to detect live readiness triggers."],
  ["Market scan OS", "Track market, competitors and category to keep the “why” current."],
  ["Website", "12 core pages — the always-on home for every “why.”"],
  ["Core use-case stories", "Main page + 10 use cases so prospects find their own trigger."],
  ["Growth enablement", "Decks, ROI calculator, battlecards, scripts — arms Spin Sell."],
  ["Lead generation", "5 landing pages + 5 lead magnets to capture ready demand."],
  ["Product communication", "Onboarding, release notes, guides, walkthroughs for the journey."],
  ["Partner enablement", "10 assets from one-pager to co-branded case studies."],
  ["Discovery content", "15 channels/formats — newsletter, blog, founder presence, webinars."],
  ["Events & workshops", "TED talk, masterclass, workshops — flagship demand moments."],
];

// pillar list for the cover (in document order, with content = pillar 2 shown in place)
const coverList = [
  ["1", "Messaging & Brand System", "Define"],
  ["2", "Content System (Content OS) — companion doc", "Express"],
  ["3", "Outreach System", "Reach & test"],
  ["4", "Spin Sell System", "Qualify"],
  ["5", "Customer Journey System", "Convert"],
  ["6", "Customer Advisory Board", "Define · TBC"],
  ["7", "Accelerators & Events System", "Reach"],
  ["8", "Partnerships & Directories System", "Reach"],
  ["9", "Traffic System", "Reach & capture"],
  ["10", "Social Media System", "Demand · TBC"],
];

module.exports = { pillars, contentGroups, coverList };
