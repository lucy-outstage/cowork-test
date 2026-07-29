// Data for the Content Operating System companion document.
// Groups mirror the "B. Content OS" sheet. Each group: {num, title, count, purpose, rows:[{sub,note?,consider,build}]}

const groups = [
  {
    num: "1", title: "Social listening OS", count: "",
    purpose: "Detects readiness triggers in the wild — it surfaces who is voicing the problem right now, and in what words, before they ever reach the funnel.",
    rows: [
      { sub: "Keyword & topic monitors", consider: "Track the problem language, not just the brand — that is where unaware-but-ready buyers appear.", build: "Set up monitors on the segment/trigger keywords from the Messaging blueprint across LinkedIn, X, Reddit, communities." },
      { sub: "Competitor & category mentions", consider: "Switch-intent and complaints about incumbents are high-readiness signals.", build: "Alert on competitor names + churn/frustration terms; route hot mentions to Outreach." },
      { sub: "Community & forum listening", note: "Reddit, LinkedIn, Slack/Discord groups", consider: "Communities reveal the real vocabulary and objections of each segment.", build: "Join the 5–10 communities where the ICP gathers; log recurring themes." },
      { sub: "Trigger alerts → Outreach", consider: "Listening only pays off if signals become action within hours.", build: "Wire alerts into the Signals OS so named accounts flow to list building." },
      { sub: "Sentiment & theme synthesis → Messaging", consider: "Aggregated themes keep the “why” grounded in live language.", build: "Monthly synthesis feeding the Messaging blueprint and Content backlog." },
    ],
  },
  {
    num: "2", title: "Market scan OS", count: "",
    purpose: "Keeps the “why” sharp and current — it ensures Plansom’s differentiation and readiness triggers stay ahead of a moving competitive and category landscape.",
    rows: [
      { sub: "Competitor teardowns", consider: "Positioning drifts as competitors move; a cadence prevents stale claims.", build: "Quarterly teardown of the top 3–5 competitors (positioning, pricing, GTM)." },
      { sub: "Category & trend tracking", note: "AI planning, execution, OKRs", consider: "Category narrative shapes which triggers are rising.", build: "Maintain a living trends board; feed the founder POV and Discovery content." },
      { sub: "Win/loss synthesis", consider: "The truest source of why buyers are (or aren’t) ready.", build: "Structured win/loss capture from Spin Sell; synthesise monthly." },
      { sub: "Pricing & packaging benchmarks", consider: "Pricing clarity is a common trial blocker; benchmark to de-risk.", build: "Track competitor pricing; inform the pricing page and ROI logic." },
      { sub: "Feature-gap map → Product/Messaging", consider: "Gaps and strengths dictate honest, winnable positioning.", build: "Maintain a gap map; route to Product roadmap and battlecards." },
    ],
  },
  {
    num: "3", title: "Website", count: "12 pages",
    purpose: "The always-on destination where every “why” lives and prospects self-qualify — the hub every other pillar routes traffic to.",
    rows: [
      { sub: "Homepage", consider: "Must pass the 5-second “is this for me / what is it” test for the primary segment.", build: "Lead with the core narrative + primary use case; one strong CTA (start trial)." },
      { sub: "Key use-case pages", consider: "One page per high-readiness segment, mirroring that segment’s trigger language.", build: "Template once; build the top 3 segments first; link each to its use-case story." },
      { sub: "Skills / playbooks", consider: "Showcases the agent skills that deliver value — the proof of “how.”", build: "A library page per skill/playbook framed by the outcome it produces." },
      { sub: "Product / Features pages", consider: "Frame features as outcomes and jobs-to-be-done, not specs.", build: "Group by job; every feature ties back to a “why.”" },
      { sub: "Pricing page", consider: "Pricing clarity reduces trial friction; reflect the ~10-seat team model.", build: "Simple tiers + FAQ + clear CTA; align with ROI calculator." },
      { sub: "About page", consider: "Founder story builds the trust that founder-led GTM depends on.", build: "Mission, team, traction, and the origin “why.”" },
      { sub: "FAQ", consider: "Pre-empt the top objections surfaced in the Objection-handling doc.", build: "Keep synced with the live objections list from Spin Sell." },
      { sub: "Blog", consider: "The home of the SEO/GEO engine and thought leadership.", build: "Hub-and-spoke structure with a clear category taxonomy." },
      { sub: "Investors page", consider: "Supports the fundraising narrative and inbound investor interest.", build: "Key metrics, vision, and a deck-request path." },
      { sub: "Hiring page", consider: "Talent brand compounds as the team scales.", build: "Values, culture, and open roles." },
      { sub: "Security / compliance page", consider: "Unblocks larger, ready buyers with security requirements.", build: "Document data handling; publish a certifications roadmap." },
      { sub: "Cookies & privacy page", consider: "Legal baseline for ads and tracking (ties to the Traffic Tracking OS).", build: "Policy + consent banner aligned to ad-platform requirements." },
    ],
  },
  {
    num: "4", title: "Core use-case stories", count: "main page + 10 use cases",
    purpose: "The strongest self-identification device in the system — each story lets a specific segment recognise its own trigger in a concrete narrative, so the reader concludes “this is me, and I’m ready.”",
    rows: [
      { sub: "Main use-case page", consider: "Acts as the router that sends each visitor to their own story.", build: "Overview page linking all use cases, segmented by role/trigger." },
      { sub: "Use cases 1–10", note: "produced in priority order", consider: "Prioritise by segment readiness and volume; every story follows trigger → pain → Plansom → measurable outcome, with proof.", build: "Write one repeatable story template; produce highest-readiness segments first; pair each with a website use-case page and a landing page." },
    ],
  },
  {
    num: "5", title: "Growth enablement", count: "9 assets",
    purpose: "Arms Spin Sell and Outreach to convert identified readiness into trials — it turns the “why” into the tools that close.",
    rows: [
      { sub: "Clarity checks", consider: "Internal QA that every asset passes the “who/why” clarity bar before publish.", build: "A short checklist applied to every Content OS output." },
      { sub: "Story deck", consider: "The narrative spine for demos and pitches.", build: "One modular master deck; slides reused across contexts." },
      { sub: "One-pagers", consider: "Leave-behinds tuned per segment.", build: "Template derived from the story deck; one per priority segment." },
      { sub: "ROI calculator (copy + logic)", consider: "Quantifies the “implication” step of SPIN; ground logic in licence/funnel economics.", build: "Build a simple, transparent model + copy; validate assumptions with real deals." },
      { sub: "Battlecards", consider: "One per top competitor from the Market scan OS.", build: "Positioning, landmines, and proof of wins; keep current." },
      { sub: "Objection-handling doc", consider: "Feeds both the FAQ and follow-up sequences.", build: "Living doc sourced from real Spin Sell calls." },
      { sub: "Sales scripts / talk tracks", consider: "Encode the SPIN question sequence so it scales beyond the founders.", build: "Per segment and per funnel stage." },
      { sub: "Outreach & follow-up sequences", consider: "Shared asset with the Outreach OS — consistency across channels.", build: "Templated cadences per segment; version against reply data." },
      { sub: "Proposal / quote templates", consider: "Speed-to-proposal is a late-stage conversion lever.", build: "Standard template with configurable pricing blocks." },
    ],
  },
  {
    num: "6", title: "Lead generation", count: "5 landing pages + 5 lead magnets",
    purpose: "Captures ready demand and converts anonymous intent into known leads — the bridge from Traffic/Ads into the funnel.",
    rows: [
      { sub: "Landing pages 1–5", note: "one per active campaign/segment", consider: "Strict message-match to the ad or source; a single message and one CTA per page.", build: "Build a conversion template; ship one per active campaign; wire all to the Tracking OS." },
      { sub: "Lead magnets 1–5", note: "template · benchmark · guide · tool · assessment", consider: "Each magnet must map to a specific segment’s trigger to attract ready (not merely curious) leads.", build: "Produce the highest-intent magnet first; gate appropriately and route to nurture." },
    ],
  },
  {
    num: "7", title: "Product communication", count: "5 assets",
    purpose: "Turns “ready” trials into activated, paying users — it drives the trial→activation→purchase conversion the Customer Journey pillar owns.",
    rows: [
      { sub: "Onboarding guide & comms", consider: "Directly drives the activation milestone; the highest-leverage asset here.", build: "In-app guidance + a behaviour-triggered email sequence." },
      { sub: "Release notes / launches", consider: "Re-engages trials and customers and signals momentum.", build: "Regular cadence across in-app, email, and social." },
      { sub: "Product guides", consider: "Reduce support load and deepen usage/expansion.", build: "Structured, searchable docs per feature area." },
      { sub: "How-to guides", consider: "Task-level help mapped to activation-critical workflows.", build: "One per key workflow; link from in-app." },
      { sub: "Product video walkthroughs", consider: "Often the fastest path to the “aha” moment.", build: "Short videos, one per core use case." },
    ],
  },
  {
    num: "8", title: "Partner enablement", count: "10 assets",
    purpose: "Lets partners carry the “why” credibly to audiences who already trust them — it makes the Partnerships pillar’s borrowed distribution actually convert.",
    rows: [
      { sub: "Partner one-pager", consider: "The quick pitch partners use to introduce Plansom.", build: "Concise value + ICP + how-to-refer." },
      { sub: "Co-sell deck", consider: "Enables joint sales conversations.", build: "Modular deck co-brandable per partner." },
      { sub: "Joint value prop / solution brief", consider: "Articulates why Plansom + partner is better together.", build: "One brief per strategic partner." },
      { sub: "Partner onboarding kit", consider: "Ramp speed determines partner activation quality.", build: "Step-by-step kit + checklist for new partners." },
      { sub: "Deal reg / referral process", consider: "Clean attribution (ties to PartnerStack OS) prevents channel conflict.", build: "Documented process wired to the referral tracking." },
      { sub: "Partner FAQ", consider: "Reduces partner friction and support load.", build: "Cover commercials, process, and product basics." },
      { sub: "Co-branded case studies", consider: "Proof tuned to the partner’s audience.", build: "Produce with the Advisory Board / top partners." },
      { sub: "Enablement training", consider: "Certified partners sell more accurately.", build: "Short training + certification per partner tier." },
      { sub: "Partner portal content", consider: "Self-serve assets keep partners active without hand-holding.", build: "Central library of the assets above." },
      { sub: "Co-marketing guidelines", consider: "Keeps joint campaigns brand-safe.", build: "Light brand + campaign playbook for partners." },
    ],
  },
  {
    num: "9", title: "Discovery content", count: "15 channels / formats",
    purpose: "Creates and captures demand so future-ready buyers discover Plansom early and remember it when their trigger fires — the top-of-funnel engine for the Social and Traffic pillars.",
    rows: [
      { sub: "Newsletter", consider: "Owned audience you control end-to-end.", build: "Weekly/biweekly; repurpose best-performing content." },
      { sub: "Blog articles (SEO + GEO)", consider: "The compounding organic engine; write for both search and AI citation.", build: "Publish on a steady cadence against the keyword map." },
      { sub: "Company LinkedIn posts", consider: "Primary B2B distribution channel.", build: "Consistent cadence from the content calendar." },
      { sub: "Founder 1 executive presence", consider: "Founder-led content outperforms brand at this stage.", build: "Weekly POV posts; a clear personal narrative." },
      { sub: "Founder 2 executive presence", consider: "A second founder voice widens reach and credibility.", build: "Distinct angle from Founder 1; steady cadence." },
      { sub: "X (company) posts", consider: "Reaches the startup/tech-native segment.", build: "Repurpose LinkedIn + real-time commentary." },
      { sub: "Founder 1 X posts", consider: "Builds founder authority in the X ecosystem.", build: "Threads and POV tied to the category narrative." },
      { sub: "Short-form video scripts", consider: "Highest organic reach format across platforms.", build: "Scripts repurposed to LinkedIn, X, YouTube, Instagram." },
      { sub: "Guest posts", consider: "Borrowed audiences + backlinks (helps SEO).", build: "Target publications the ICP already reads." },
      { sub: "Podcast (notes / scripts)", consider: "Deep trust format; strong for founder-led GTM.", build: "Guesting first, then owned show if it earns it." },
      { sub: "Co-hosted webinar (both founders)", consider: "High-intent lead source with built-in nurture.", build: "Quarterly; gate registration into lead gen." },
      { sub: "Solo founder webinar", consider: "Lighter-weight, more frequent demand moment.", build: "Monthly on a single sharp topic." },
      { sub: "Influencer / user webinar", consider: "Third-party credibility accelerates readiness.", build: "Co-host with respected users/partners." },
      { sub: "YouTube channel", consider: "Compounding search + long-form trust.", build: "Home for walkthroughs, talks, and repurposed video." },
      { sub: "Instagram channel", consider: "Broadens reach; strong for short-form and brand.", build: "Repurpose short-form video and visual snippets." },
    ],
  },
  {
    num: "10", title: "Events & workshops", count: "3 formats",
    purpose: "Flagship moments that concentrate ready buyers and build category authority — the highest-signal, highest-trust demand generators.",
    rows: [
      { sub: "Plansom TED talk", consider: "A signature thought-leadership talk that frames the category and the “why.”", build: "Craft one canonical talk; repurpose across channels." },
      { sub: "Plansom masterclass", consider: "Teaching the methodology generates highly qualified leads.", build: "Structured class with registration into lead gen." },
      { sub: "Plansom workshops", consider: "Hands-on sessions are strong, high-intent conversion moments.", build: "Repeatable workshop format run for cohorts/accounts." },
    ],
  },
];

module.exports = { groups };
