# Plansom — Messaging Nucleus (Master Doc)

**Status:** First drafts for review · **Owner:** Lucy · **Source voice:** Anders
**Origin:** Lucy <> Anders, 29 Jun 2026 (founder interview) + public positioning
**Funnel stage:** Source — everything downstream (website, sales deck, partner pages, articles) is derived from this doc.

> **How to use this doc.** This is the nucleus. The six pieces below are the *source of truth* for the Plansom story. They are written in Anders' voice, dumbed down only as far as a founder/internal reader needs — external copy will simplify further. Where Anders explicitly deferred a decision (the hero archetype, the geography line, the Score methodology), it's flagged **[OPEN]** rather than invented. Don't ship anything in the "Avoid in external copy" list to customers.

**Status legend:** ✅ ready to derive from · 🟡 needs Anders sign-off · 🔴 open question

---

## 1. Origin Story
*P1 · Internal / founder · ~400 words · 🟡*

Plansom began with a simple observation, repeated often enough that I couldn't ignore it: the people working hardest were rarely the ones getting the furthest. I saw it in companies I'd worked with, in friends' businesses, and at times in myself — talented people, genuinely committed, stretched thin and exhausted, and somehow not moving closer to the things they cared about. The effort was never in question. Something quieter was getting in the way.

I grew up around sport, in a family where performance was studied closely. What stayed with me wasn't the intensity of it but the opposite — how the best athletes are almost economical with themselves. They don't try to do everything at full force. They pay close attention to where their energy goes, and they spend it deliberately. You don't win by trying harder than everyone else; you win by directing your energy more precisely. That question — *where is the effort actually going, and is any of it being wasted?* — turned out to be just as true of organisations as of athletes.

Because when I looked closely at why hard-working teams stalled, the pattern was remarkably consistent, and none of it was about laziness. A surprising share of the work simply didn't matter — good people pouring themselves into things that wouldn't move the outcome. Information that already existed somewhere wasn't reaching the people who needed it. The real bottleneck was usually visible, if anyone stopped to name it, and often went unspoken. And the tools meant to help quietly reinforced all of this. Most of them are built on one assumption — that the goal is to complete everything, to clear the list — when the harder, more useful question is which few things actually deserve the effort at all.

So Plansom started as a gentler idea than "work harder." It's the belief that there's a better way to work — beginning with what you're trying to achieve rather than the pile of tasks in front of you — and that this way of thinking, which usually only comes with experience, could be built into something anyone can pick up. Not do more. Do the things that matter, notice what's actually in the way, and put your energy there.

---

## 2. Why Now
*P1 · Internal / founder · ~500 words · 🟡*

The problem Plansom solves is not new. For thousands of years, the hard part of any endeavour has been the same three things: knowing what you're trying to achieve, being honest about what's blocking you, and choosing what to do next when everything feels urgent. Generals wrestled with it. Every company that ever hit a ceiling wrestled with it. What's new is that, for the first time, it can actually be solved at scale — and that the cost of *not* solving it is about to explode.

Here's why now, and not five years ago. Two things have changed.

First, AI finally makes the methodology real. Humans are genuinely good at some things — logical, causal thinking; deciding what *should* be done. And humans are famously terrible at others: holding a wide range of information in our heads, reasoning about base rates and probabilities. For the whole history of management, the good-judgement part and the information-crunching part had to live in the same overloaded human brain, and it buckled. Now we can split them. AI does the crunching, the benchmarking, the base rates, the hints and tips. The human keeps the direction. That combination — the scope of AI with human intention — is what wasn't possible before.

Second, and more urgently: agents are about to break the way work is prioritised. Our whole model has three steps — fix on the goal, find the bottleneck, then prioritise the work. With agents in the picture, the first two steps don't change *at all*. You still need a goal. The bottleneck still determines the performance of the whole system. But the third step — prioritisation — completely explodes. Work that used to happen at human speed now happens at machine speed, a thousand times faster, across multiple agents at once, generating far more information than any person can absorb. We already know individual contributors struggle to manage their own work, and that the best ICs often make poor managers. Now imagine that person — or that CEO — trying to direct a swarm of agents that never sleep. Who knows if they're working on the right thing? Who even knows what they're *doing*?

That's the gap that's opening right now. And the panic around it is loud and mostly wrong. People are running around saying "software is dead," that AI will simply do everything. It won't. LLMs are trained on past data and predict what comes next — they're brilliant at it. But the two things that matter most for getting things done — *intervening* (do something different and see what happens) and *counterfactual reasoning* (what if we'd done it another way) — have no training data, because they haven't happened yet. That's where goals and bottlenecks live. That is irreducibly human judgement. Nobody is going to bake their own bread just because they *can* — and nobody should pretend the thinking goes away.

So the timing is exact: the methodology is centuries old, the means to deliver it arrived with AI, and the chaos of the agent era is about to make it indispensable.

---

## 3. The Big Idea
*P1 · Internal / founder · ~150 words · 🟡*

There is a better way to work, and it's the same for one person and for a hundred thousand. It is not *do more*. It is: **decide what you're trying to achieve, find the one thing that's blocking you, and put your energy intentionally there.**

Task trackers assume you should complete everything. Strategy is deciding what *not* to do.

Plansom turns that discipline into a system. You set a goal, it helps you surface the bottleneck, and it prioritises your workload — yours and your agents' — against what matters. Then it gives you one number for how you're doing.

We combine AI's reach with human direction, so you can finally achieve the things you were always capable of but never had the system to deliver.

---

## 4. What We Built
*P1 · Internal / founder · ~300 words · ✅*

Plansom is a goals-first operating system for getting things done — for an individual setting up a yoga studio, a growing team, or an enterprise running on AI agents. The same algorithm fixes all of them, because what goes wrong is always the same.

It works in three moves:

1. **Goal.** You start from what you're trying to achieve, not from a pile of tasks. You can drop in an existing OKR and Plansom builds the goal to reach it. Goals nest into a hierarchy, so the why flows down and the work flows up — the principle that lets you delegate intent instead of issuing orders.

2. **Bottleneck.** Plansom helps you name the one thing constraining the whole system — and marks it on the goal list with a bottleneck flag — instead of letting you polish things that don't move the needle. Optimising everything is pointless; the system runs at the speed of its constraint.

3. **Prioritise.** At the task level, Plansom ranks the work by impact, giving boosts to whatever sits on a bottleneck, so attention lands where it counts.

Wrapped around all of it:

- **The Plansom Score** — one normalised, shareable number for whether you're working on what matters and getting it done. Benchmarkable against your own KPIs (mark each outcome a win, okay, or miss).
- **Agents & mission control** — build agents inside Plansom or plug in third-party ones; delegate tasks to them, duplicate and customise them, and watch what they actually do. Model-agnostic by design.
- **An independent verification layer** — acceptance tests and logs that grade an agent on the outcome it *actually* delivered, not what its vendor claims. Plansom makes the black box transparent.

---

## 5. New World (Vision)
*P1 · Internal / founder · ~300 words · 🟡*

Picture the world once Plansom is the layer everyone runs on.

You open Plansom and it is your mission control. Not a wall of tasks demanding to be ticked — a clear view of what you're trying to achieve, what's currently stuck, and where your energy should go next. Your agents are right there beside you: a fleet you can see, check in on, redirect. The black box is open. You know what each one is doing and — far more importantly — whether it made any difference to your goal. When an agent claims it did the job, Plansom independently scores the outcome, the way a referee does, not the way a salesperson does.

In this world, the agent era doesn't drown you; it lifts you. The thousand-fold speed-up that should have buried you in noise instead compounds toward things you actually chose. You keep the part that is irreducibly human — deciding what matters and what's blocking it — and you hand the machine everything it's better at. The best of both, finally combined.

And it feels like *yours*, not a cage. Plansom puts you in control of your agents and in control of your own progress. The Score is something you're proud to share — proof of what you're achieving, an artifact you can hold up to your peers and your manager. For the person on the ground it's an invitation to shine; for the people they work with, the visibility is simply there. Liberation that happens to be legible.

This is the older idea underneath it all: human potential, finally unstrapped. People have always been capable of far more than their systems allowed. Plansom is the system that lets some of that capability out — AI's scope pointed by human intention, so you can reach the things you were always meant to.

---

## 6. Story Bank
*P1 · Internal / founder · ~3,000 words (3 stories) · 🔴 [OPEN: Anders has not picked a hero archetype yet — these are candidates to react to, not a locked "star"]*

> **Note for Anders:** You said you don't want to commit to a single star yet, and that the best archetypes carry real emotional tension — the Shakespearean "what should I do, and how will I do it." These three are drafts built from examples you actually reach for. Read them as a range; tell me which tension rings true and we'll sharpen one into the hero. A backlog of alternative archetypes (solo operator / yoga studio, the liberated employee, the quiet-efficiency master) is listed at the end.

### Story A — The CEO whose team is busy and going nowhere
*Tension: effort vs. progress · ~1,000 words*

The thing that should worry a CEO is not a quiet office. It's a *busy* one that isn't moving.

Maya runs a 90-person company. By every visible signal, things are going well: the calendars are full, the channels never stop, people are at their desks early and answering messages late. Nobody is slacking. If anything, the problem is the opposite — the team is working *too* hard. And yet, quarter after quarter, the numbers that actually matter barely move. Revenue is flat. The big initiative is "almost there" and has been almost there for five months.

What makes this so painful is that Maya can't point to a villain. There's no obviously lazy person to manage out, no single dropped ball. The effort is real and it is enormous. That's exactly what makes it a trap. When a team is visibly trying this hard, the instinct — hers and theirs — is that the answer must be to try *harder*. Add a stand-up. Add a tracker. Push. And so the work intensifies and the progress doesn't, and everyone slowly starts to feel that something is wrong with *them*.

Almost nothing is wrong with them. What's wrong is the system they're working inside, and it's failing in two ordinary, invisible ways.

First, a lot of the effort is going into things that simply don't matter. Maya would never sign off on that if she could see it plainly — but she can't, because in a task-driven world every completed task looks like progress. The dashboard is green. People are closing tickets. The trouble is that closing tickets is not the same as achieving the goal, and a tracker built to celebrate *completing everything* will happily celebrate a team sprinting in the wrong direction. Strategy is deciding what *not* to do, and nobody in Maya's company has been given permission — or a way — to decide that.

Second, there's a bottleneck, and the organisation is quietly dishonest about it. Not maliciously. It's just human. The information about what's actually stuck *exists* somewhere in the company — someone knows the real reason the big initiative keeps slipping — but it isn't flowing to Maya, and on some level the team is avoiding naming it, because naming a bottleneck feels like admitting fault. So instead of fixing the one constraint that governs everything, the company optimises around it: a nicer website, a tidier process, a faster stand-up. None of it changes the outcome, because the system only ever moves as fast as its tightest constraint, and that one is being left untouched precisely because it's uncomfortable.

Here's the moment that turns the story. Maya stops asking "is everyone working hard?" — she already knows they are — and starts asking the only two questions that matter: *what are we actually trying to achieve, and what one thing is blocking it?* The famous version of this is Elon Musk walking onto the factory floor and asking, "What's the biggest problem this week?" and then fixing *that*, and nothing else, until it's no longer the biggest problem. It sounds almost too simple. It works because it's the opposite of what a busy organisation naturally does.

With Plansom, Maya's company starts from the goal instead of the task list. The goal is explicit, and so is its hierarchy, so the *why* travels down to the people doing the work and they can make decisions on the ground without sending everything back up the chain for approval. The bottleneck gets a name and a flag — it's allowed to exist as a fact rather than a failing — and the work reprioritises around it, with the constrained step getting the boost it deserves. And the green-dashboard illusion is replaced by one honest Score: not "how many tasks did we close," but "are we working on what matters, and are we landing it."

The relief, when it comes, is not that everyone finally relaxes. It's that the same enormous effort the team was already pouring out suddenly *counts*. They were never the problem. They were just aimed wrong.

> **Why this archetype:** Anders reaches for it most often with senior buyers, and it makes the CEO value obvious — "I can see everything." Risk he flagged: on its own it can read as a control-system pitch. Pair it with an individual-liberation beat so it doesn't tip into surveillance.

### Story B — The brilliant operator who became the bottleneck
*Tension: control vs. scale · ~1,000 words*

Most companies that stop growing don't stop because the market ran out or the product failed. They stop because of one person — and that person is usually the best one they have.

Daniel is the reason his company exists. He's the founder, the rainmaker, the person who knows how everything works because he built most of it himself. For years that was the company's superpower. Then, somewhere around fifty people, it quietly became the ceiling.

You can see the mechanism if you watch a single week of his calendar. Every important decision routes through Daniel. Not because he's a control freak — he genuinely wants to delegate, and he *tries*. He hands something off. And the person comes back and asks him anyway. He explains it again. They come back and ask again. After the third round he concludes, not unreasonably, that it's faster to just do it himself. So he does. And every time he does, he teaches the organisation one more time that the way to get something decided is to bring it to Daniel. The bottleneck isn't a process or a tool. It's him, and he's reinforcing it with his own hands.

The cruel part is *why* the delegation keeps failing, because it isn't a character flaw on anyone's side. When Daniel is busy — and he is always busy — he doesn't take the time to delegate properly. He passes the *what* but not the *why*. He says "handle the Henderson account" but not what winning the Henderson account actually means, why it matters this quarter, or what "done" looks like. And without the why, the person on the ground genuinely cannot make the call themselves. The safe move — the *comfortable* move — is always to come back and ask the decision-maker to approve, rather than to decide and risk being wrong. So they ask. And the loop closes again.

This is one of the oldest problems in organised human effort, and it was solved a long time ago, in of all places the Prussian army. A general named Helmuth von Moltke inherited a military that ran on rigid command-and-control: headquarters dictated exactly what each unit should do. It kept failing, for a reason that will sound familiar to anyone who's run a company — the world is not rigid. By the time an order travelled up the chain and a new one came back down, the situation on the ground had already changed. Moltke's reform was deceptively small: stop dictating the *what*, and start delegating the *why*. Give each unit the intent — what we're trying to achieve and why it matters — and let the people closest to the fight decide how. They moved independently and stayed aligned, because they were anchored to the same goal rather than the same instruction. It was one of the most successful reforms in military history, and the same pattern has worked — and its absence has failed — a hundred times since.

Daniel's company is failing it. The fix is not to make Daniel work harder or care more; he already does both to a fault. The fix is to make the *why* travel with the work, every time, so that delegation actually sticks.

That's the discipline Plansom builds in. A task doesn't go out as a bare instruction; it goes out as a goal with its reasoning attached — here's what we're trying to achieve, here's why it's important, here's what done looks like. The goal hierarchy means that intent flows downward by default instead of depending on Daniel remembering to explain himself at the end of a fourteen-hour day. The person on the ground finally has what they need to make the call — so they make it, instead of walking it back to his desk. And because everyone can see the goal and how the work maps to it, "did we get there?" stops being something only Daniel can adjudicate.

The emotional turn here is subtler than in Maya's story, and more personal. For Daniel, becoming the bottleneck felt like being indispensable, and indispensable felt good — right up until it felt like a prison he'd built himself. Letting go is frightening precisely because his identity is wrapped up in being the one who knows. The promise isn't that he matters less. It's that, for the first time, the thing he's best at — judgement, direction, knowing what *actually* matters — can finally scale past the reach of his own two hands.

> **Why this archetype:** Anders named it directly ("the IC who becomes a poor manager," "the neck everything flows through") and flagged it as *heated* — it can sting the very buyer you're pitching. Handle with empathy: the operator is the hero, not the problem. Strong candidate for founder/SMB audiences.

### Story C — The operator drowning in a swarm of agents
*Tension: speed vs. control · ~1,000 words*

For most of history, the limit on getting things done was how much work you could *produce*. That limit just disappeared, and almost nobody is ready for what replaces it.

Priya runs growth at a mid-sized company, and six months ago she could count her "team" on one hand. Today she runs a swarm. There's an agent writing outbound, an agent qualifying leads, an agent drafting content, two more stitched together to handle research and follow-up. Some she built inside her stack; some are third-party products she pays for; one is an SDR a vendor swears will book her a calendar full of meetings. On paper she has the leverage of a department. In practice she lies awake.

Because here's what the demos never mention. The work now happens a thousand times faster than she can read it. Output streams in at machine speed, around the clock, from half a dozen agents at once, each generating more logs, more drafts, more "completed" actions than any human brain can absorb. And the questions that keep her up are brutally simple. *Are they working on the right things? Are they any good? What are they even doing right now?* She has more activity than she's ever had in her life and less certainty than she's ever had about whether any of it is moving the goal.

The instinct of the whole industry is to wave this away — *the agents will just handle it, software is dead, you don't need to think anymore.* Priya has read those takes, and standing in front of her actual swarm she knows in her gut they're wrong. The agents are extraordinary at one thing: they've absorbed enormous amounts of past data and they predict, fluently, what comes next. What they cannot do is the part of her job that actually is her job. They can't decide what *should* be done — they have no data on the road not taken, on the experiment nobody's run yet, on what would happen if she pulled the whole team off outbound and onto retention next week. That kind of reasoning — intervention, the counterfactual, *what if we did it differently* — has no training set, because it hasn't happened yet. It's exactly where goals and bottlenecks live, and it is exactly the part that's still, stubbornly, hers.

So Priya doesn't actually need the agents to think for her. She needs to *direct* them — and to see whether they're delivering. And that second part is where everything currently falls apart, because each agent is a black box with its own dashboard, its own metrics, its own vendor's definition of success. Her outbound agent reports it sent four hundred emails. Is that good? Her SDR vendor reports a "pipeline impact." Do they really trust it? She has eleven different tools telling her eleven different flattering stories, in eleven incompatible languages, and no way to lay them side by side.

This is the moment Plansom is built for, and it's why steps one and two of the method don't change at all in the agent era. Priya still starts from the goal — book qualified meetings that actually close — and she still has to be honest about the bottleneck, which turns out not to be email volume at all but the hand-off where qualified leads go cold. What changes, and what explodes, is the third step: prioritisation, now across a fleet moving faster than she can watch. So Plansom becomes her mission control. The black box opens — she can see what each agent is doing, not as a wall of raw logs but as work mapped to the goal. She delegates tasks to agents the way Moltke delegated to his officers: with the *why* attached, so an agent operating on the ground stays aligned without her approving every move.

And then the part that finally lets her sleep: independent verification. Plansom doesn't take the agent's word, or the vendor's. It runs acceptance tests against the outcome the agent actually produced and grades it — win, okay, miss — against what Priya was really trying to achieve. Not "four hundred emails sent." *Did the meetings get booked, and did they close.* Every agent, however it was built, whatever model it runs on, whoever sold it to her, gets scored on the same honest, normalised scale, so for the first time she can lay them side by side and see which ones are real. The vendor says their SDR is brilliant. Plansom tells her whether it actually moved her goal.

The feeling underneath this story isn't relief, exactly. It's *agency restored*. Priya went from being a manager who'd been handed superhuman speed and quietly buried by it, to being genuinely in command of it — pointing a force she could never have afforded a year ago at the things she, and only she, decided mattered.

> **Why this archetype:** This is the strategically central one for the AI-era story and the investor narrative Anders wants to "gradually emphasise." It carries the verification-layer idea his investment banker is excited about, but keeps the core where Anders wants it: goals and direction, with agents as the layer — not the headline.

### Story Bank backlog — alternative archetypes to develop
- **The solo operator / yoga-studio founder.** One person, no team, no boss — just trying to organise themselves and not lose the goal under daily busywork. Best vehicle for the *individual liberation* and "this is my everything" angle, and for the pure single-player Plansom Score (the "10,000 steps" feel).
- **The liberated employee.** Inside a big org, uses Plansom to make their own contribution legible and shine in front of peers/managers — the self-promotion / shareable-artifact angle, framed as opportunity rather than surveillance.
- **The quiet-efficiency master.** A character study in directing energy well — spending effort deliberately, aiming rather than pushing. Closest to Anders' own voice; good for brand/thought-leadership rather than product.

---

## Appendix A — Voice & vocabulary (for everything derived from this doc)

**Say this (the lexicon):**
- Goal · Bottleneck · Prioritise / prioritisation · The Plansom Score · Mission control · Acceptance tests · Delegate the *why* · "Strategy is deciding what not to do" · "Work on the right things, not more things" · Make the black box transparent · Independent verification layer

**The Score, said simply:** it's IQ / NPS / 10,000-steps for getting things done — a single normalised, comparable, shareable number. Don't itemise what's "in" it; people accept IQ and steps without a breakdown. If pressed, a methodology note exists for the few who want it, but it isn't the pitch.

**Avoid in external copy (founder shorthand only — these lose people):**
- Helmuth von Moltke / Prussian army → say "delegate the *why*, not just the *what*"
- Complexity theory / Donella Meadows → say "a system runs at the speed of its bottleneck"
- Judea Pearl / *The Book of Why* / ladder of causation → say "AI predicts from the past; deciding what to do is still yours"
- Nietzsche / Übermensch → say "human potential, unstrapped"
- Panopticon / Christopher Lasch / narcissism → keep the *insight* (a metric you're proud to share), drop the theory

**Tone:** founder-direct, a little spicy, never hustle-culture. Confident about the method, gentle about the person. The individual must feel *helped and liberated*, never surveilled — the CEO value ("I can see everything") is real but never the lead.

## Appendix B — Open questions for Anders 🔴
1. **Hero archetype / "the star."** Not yet chosen — Story Bank A/B/C are candidates. Which tension is truest?
2. **AI emphasis.** Confirmed direction: goals/methodology is the core; AI/agents are a layer, emphasised *gradually* and more heavily for investors. Flag if that balance shifts.
3. **Plansom Score methodology.** Do we publish a "for the curious" explainer, or hold the line on "don't over-explain it"?
4. **Geography line.** Working answer: "global, US-leaning, tech / AI-first," wear the Irish identity *lightly* (no one's actually in Ireland). Confirm before it hits the website.
5. **Positioning axis.** Lead with individual liberation (recommended by Anders), CEO visibility as the obvious secondary. Lock for the website hero.
6. **Out of scope here:** investor pitch deck (P0 — handled by the investment bank, not us).
