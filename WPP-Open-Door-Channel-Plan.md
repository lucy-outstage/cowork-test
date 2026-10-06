# The Open Door — Channel Model & Activity Plan

**Operating annex to the Open Door sprint design**
Plansom · *Simply done* · v1.0 · 6 October 2026

> **Supersedes §6 and §9 of the sprint design.** Channels are now fixed to two: outbound calling and LinkedIn. This annex works the volumes through, flags four problems with the model as specified, recommends a corrected version, and sets out the Plansom activity plan.

---

## Summary — read this first

The channel volumes you specified are **larger than the sprint can absorb**. Four things need resolving before week one:

| # | Problem | Scale |
|---|---|---|
| **1** | **Segment exhaustion.** LinkedIn at 10 seats × 200 invites/week needs 8,000 contacts over four weeks. The segment holds 2,500 | **3.2× overshoot** — segment gone in week 1 |
| **2** | **Rate optimism.** The stated conversion rates sit roughly 3.7× above cold-outbound benchmarks | 510 meetings vs 137 for identical activity |
| **3** | **Meeting capacity.** At stated volumes and rates, 128 meetings a week | Needs **5.1 FTE** on meetings alone. The design allocates 0.3 |
| **4** | **Platform limits.** 200 invites/week/seat is at or above LinkedIn's practical ceiling | Restriction risk across all 10 seats |

**And one thing that got better.** At these volumes, paid conversions land somewhere between 8 and 32 rather than the 5–10 in v1.0. **At the upper end that is statistically readable** — which fixes the main weakness of the original design.

**The recommendation** is a staged ramp with a calibration week, because the 3.7× spread between your targets and benchmark cannot be resolved on paper. You measure it in week one and size everything else from what comes back.

---

## 1. The model as specified

| Channel | Volume | Stated rates |
|---|---|---|
| **LinkedIn** | 10 seats × 200 connection invites/week = **2,000/week** | Acceptance **60%** → Reply **15%** → Agree to meet **50%** |
| **Phone** | **150 dials/day** = 750/week | Connect **≥10%** → Agree to meet **50%** |

---

## 2. The maths

### Scenario 1 — At your stated rates

| Channel | Weekly | 4-week total |
|---|---|---|
| **LinkedIn** | 2,000 invites → 1,200 accepted → 180 replies → **90 meetings** | **360 meetings** |
| **Phone** | 750 dials → 75 connects → **38 meetings** | **150 meetings** |
| **Total** | **128 meetings/week** | **510 meetings** |

### Scenario 2 — At cold-outbound benchmarks

Same activity, benchmark conversion. Benchmarks used: LinkedIn acceptance 35%, reply 12%, reply-to-meeting 30%; phone connect 8%, connect-to-meeting 15%.

| Channel | Weekly | 4-week total |
|---|---|---|
| **LinkedIn** | 2,000 invites → 700 accepted → 84 replies → **25 meetings** | **101 meetings** |
| **Phone** | 750 dials → 60 connects → **9 meetings** | **36 meetings** |
| **Total** | **34 meetings/week** | **137 meetings** |

> **The same activity produces 510 meetings or 137, depending entirely on which rate assumption holds. That is a 3.7× spread, and no amount of planning resolves it. It has to be measured.**

### Where your rates sit against benchmark

| Metric | Your target | Benchmark | Verdict |
|---|---|---|---|
| LinkedIn acceptance | 60% | 25–40% | ⚠️ **Ambitious but achievable** with tight targeting, credible profiles and a personalised note. The WPP name genuinely helps here |
| LinkedIn reply (of accepted) | 15% | 10–20% | ✅ **Fair** |
| Reply → meeting | 50% | 20–30% | ⚠️ **~2× optimistic.** Replies include "no thanks" — assuming half of all repliers want a meeting is high |
| Phone connect rate | 10% | 5–15% | ✅ **Fair** with good mobile data |
| Connect → meeting | 50% | 10–20% | 🔴 **~3× optimistic.** This is the single most aggressive number in the model. Half of everyone who picks up agreeing to a meeting would be exceptional for cold |

**Not an argument to lower the targets.** They are reasonable as *goals*. They are dangerous as *planning assumptions*, because every downstream decision — segment size, team size, meeting capacity — is sized from them.

---

## 3. Problem one — the segment runs out

```
LinkedIn demand, 4 weeks   :  8,000 contacts
Segment available          :  2,500 contacts  (1,000 accounts × 2.5)
                              ─────────────
Overshoot                  :  3.2×
Segment exhausted          :  week 1.2
Accounts needed to sustain :  3,200
```

Phone is different. At 150 dials/day with the standard 4–6 attempts per contact, the phone motion touches roughly **150 unique contacts a week — 600 over four weeks**. Phone is the depth channel; LinkedIn is the volume channel, by a factor of thirteen.

**So segment size is set by LinkedIn, and only by LinkedIn.**

---

## 4. Problem two — nobody is running the meetings

At one person managing five discovery calls a day — 25 a week, which is a full load alongside notes, follow-up and CRM hygiene:

| Scenario | Meetings/week | FTE needed on meetings |
|---|---|---|
| Stated volumes, your rates | 128 | **5.1** |
| Stated volumes, benchmark | 34 | **1.4** |
| Recommended, your rates | 66 | **2.6** |
| Recommended, benchmark | 17 | **0.7** |

**The v1.0 design allocates 0.3 FTE.** Under every scenario that is wrong, and under the top scenario it is wrong by a factor of seventeen.

This is the most likely way the sprint fails in practice: outreach works, meetings get booked, and then they are run badly or rescheduled by people with day jobs — which destroys both the conversion rate and the qualitative data that is the sprint's most valuable output.

---

## 5. Problem three — LinkedIn will restrict the accounts

LinkedIn's practical weekly connection-invite ceiling sits around **100 per account**, with throttling and restriction above it. **200 per week per seat, across ten seats simultaneously, is a high-risk pattern** — it looks like coordinated automation, which it effectively is.

If LinkedIn restricts the accounts mid-sprint, the channel stops and the sprint has no primary motion.

**Mitigations, all required:**

- **Cap at 100 invites per seat per week.** Non-negotiable.
- **Warm up new or dormant profiles** for two weeks before volume — normal posting, commenting, profile completion.
- **Use real people's profiles with their consent**, and have them send their own invites. At 15–20 invites a day that is **under 20 minutes per person per day** — entirely feasible, and it avoids automation entirely.
- **Sales Navigator seats** for the 10 profiles — better targeting, higher limits, lower risk.
- **Stagger send times.** Ten accounts firing identical volumes at identical times is the pattern detection looks for.

> **Recommended: ten named profile owners, each sending their own invites for twenty minutes a day, with Plansom assigning and tracking the daily task.** Higher acceptance rates than tooling, no terms-of-service exposure, and it distributes the effort to near-invisibility.

---

## 6. Problem four — UK compliance is not optional

Cold calling UK businesses carries specific legal obligations. These are not best practice; they are the law, and the penalties attach to WPP.

| Requirement | What it means | Owner |
|---|---|---|
| **CTPS screening** | The Corporate Telephone Preference Service. It is **unlawful** to make unsolicited marketing calls to CTPS-registered corporate numbers. Every number must be screened before dialling, and re-screened every 28 days | WPP Legal + Plansom Data |
| **TPS screening** | For any sole trader or partnership numbers in the list | Same |
| **PECR** | Governs electronic marketing. Do-not-call requests must be honoured immediately and permanently | WPP Legal |
| **UK GDPR** | Lawful basis for processing contact data — legitimate interest assessment documented before sourcing. Privacy notice available. Data subject rights honoured | WPP Legal + DPO |
| **Call recording consent** | Notification at the start of every recorded call | WPP Legal |
| **LinkedIn ToS** | Automated connection sending breaches LinkedIn's terms. Manual sending by profile owners does not | Plansom |

> ⛔ **Add to Gate 0.** CTPS screening and a documented legitimate interest assessment must be complete before the first dial. This is a hard legal gate, not a process preference — and for a company of WPP's profile, a compliance failure on a growth experiment is a disproportionate reputational risk.

---

## 7. The recommended model

The spread between your targets and benchmark cannot be closed on paper. So the design measures it first and sizes from the answer.

### Staged ramp with a calibration week

| Phase | Weeks | LinkedIn | Phone | Purpose |
|---|---|---|---|---|
| **Build** | 1–2 | Profile warm-up | Data + CTPS screening | Readiness |
| **Calibrate** | 3 | 250 invites (25/seat) | 375 dials | **Measure actual rates** |
| **Run** | 4–7 | Scaled to hit target | 750 dials/week | Volume sized from week 3 |
| **Analyse** | 8 | — | — | Synthesis |
| **Decide** | 9 | — | — | Recommendation |

**Sprint extends from 8 to 9 weeks.** The calibration week earns its place: it converts the single largest planning unknown into a measured input before the expensive phase begins.

### Segment sizing

| Option | Accounts | LinkedIn/seat/week | Fit |
|---|---|---|---|
| **A — Match your volumes** | 3,200 | 100 | Full channel capacity. 3.2× sourcing cost, 5 FTE on meetings, net-new verification harder at scale |
| **B — Match v1.0 segment** | 1,000 | 63 | Keeps original design. Under-uses the channel |
| **C — Hybrid ✅ recommended** | **2,000** | **100** | Uses LinkedIn at a safe ceiling, keeps verification manageable, team stays under 4 FTE |

**Option C in numbers:** 2,000 accounts × 2.5 contacts = 5,000 contacts. LinkedIn consumes 1,000/week × 4 weeks = 4,000. Phone works the highest-priority 600–750. Headroom for list attrition.

| Option C outcome | At benchmark | At your targets |
|---|---|---|
| Meetings (4 weeks) | ~86 | ~330 |
| Meetings/week | 22 | 83 |
| FTE on meetings | 0.9 | 3.3 |
| Trials (40%) | 34 | 132 |
| **Paid (30%)** | **~10** | **~40** |

> **At the upper end, ~40 paid conversions is statistically readable (±~7%).** That is the genuine upside of fixing the channels: the sprint can now answer the conversion question properly, which v1.0 could not.

---

## 8. The KPI tree

Every number below is measured weekly against a gate. Red means act that week, not next.

```
                    QUALIFIED MEETINGS
                           │
        ┌──────────────────┴──────────────────┐
        │                                     │
    LINKEDIN                               PHONE
        │                                     │
  invites sent                          dials made
  ≥1,000/wk                             ≥750/wk
        │                                     │
  acceptance rate                       connect rate
  target 60% · floor 35%                target 10% · floor 6%
        │                                     │
  reply rate                            connect→meeting
  target 15% · floor 8%                 target 50% · floor 15%
        │                                     │
  reply→meeting                               │
  target 50% · floor 20%                      │
        └──────────────────┬──────────────────┘
                           │
                    TRIAL STARTS   target 40% of meetings
                           │
                     ACTIVATED     brand live in 5 days
                           │
                        PAID       target 30% of trials
```

### Weekly gates

| Metric | 🟢 On track | 🟡 Watch | 🔴 Act |
|---|---|---|---|
| LinkedIn invites sent | ≥1,000 | 800–999 | <800 |
| LinkedIn acceptance | ≥50% | 35–49% | <35% |
| LinkedIn reply | ≥12% | 8–11% | <8% |
| Reply → meeting | ≥35% | 20–34% | <20% |
| Dials made | ≥750 | 600–749 | <600 |
| Connect rate | ≥9% | 6–8% | <6% |
| Connect → meeting | ≥30% | 15–29% | <15% |
| Meetings held vs booked | ≥85% | 70–84% | <70% |
| Account restrictions | 0 | 1 | ≥2 |

**Red actions, pre-agreed:**

| Red metric | Action — same week |
|---|---|
| Acceptance <35% | Targeting or profile problem. Re-check ICP fit and profile credibility before sending more |
| Reply <8% | Message problem. Switch to the next variant; do not add volume |
| Reply→meeting <20% | The offer is not landing, or qualification is too loose. Review transcripts |
| Connect <6% | Data problem. Re-source mobile numbers; dialling more bad numbers changes nothing |
| Connect→meeting <15% | Script or qualification. Listen to ten calls that day |
| Meetings held <70% | Confirmation process broken. Add same-day reminders |
| ≥2 restrictions | **Pause LinkedIn entirely.** Drop to 50/seat/week on restart |

---

## 9. Daily activity model

### LinkedIn — 10 profile owners

| Element | Spec |
|---|---|
| **Per person, per day** | 20 connection invites + reply handling |
| **Time** | 15–20 minutes |
| **Weekly per seat** | 100 invites (LinkedIn-safe ceiling) |
| **Team weekly** | 1,000 invites |
| **Task delivery** | Plansom assigns the day's named contacts to each owner each morning |
| **Rule** | Owners send their own invites. No automation |

**Daily sequence per owner:** open the Plansom task → send the day's 20 invites with the assigned variant note → handle replies from previous days → log outcomes → mark complete.

### Phone — 2 SDRs

| Element | Spec |
|---|---|
| **Per SDR, per day** | 75 dials |
| **Team daily** | 150 dials |
| **Dial blocks** | 2 × 90 minutes (09:00–10:30, 14:00–15:30) |
| **Unique contacts/week** | ~150 (4–6 attempts each) |
| **Weekly** | 750 dials |

**Daily sequence per SDR:** Plansom task list of CTPS-screened numbers → block one, 40 dials → log, book, follow up → block two, 35 dials → log outcomes → end-of-day standup auto-generated.

### Meetings — 2 dedicated people

| Element | Spec |
|---|---|
| **Per person, per day** | 5 discovery meetings maximum |
| **Duration** | 30 minutes + 15 minutes write-up |
| **Non-negotiable** | Recorded, transcribed, win/loss question set asked every time |
| **Capacity** | 50 meetings/week across two people |

> **Capacity ceiling: 50 meetings a week.** If the funnel produces more, **throttle the top rather than rushing meetings.** Badly run meetings destroy both the conversion rate and the qualitative data — and the qualitative is the sprint's most valuable output.

---

## 10. The Plansom activity plan

Once the strategy is set, Plansom generates and runs the activity: the plan, the daily tasks, the prioritisation, the standups and the bottleneck reporting.

### Five workstreams

| # | Workstream | Owner | Cadence |
|---|---|---|---|
| **W1** | Data & compliance | Plansom Data + WPP Legal | Front-loaded, then weekly |
| **W2** | LinkedIn motion | 10 profile owners | Daily |
| **W3** | Phone motion | 2 SDRs | Daily |
| **W4** | Meetings & trials | 2 meeting owners + Solutions | Daily |
| **W5** | Measurement & gates | Plansom Analyst | Daily + weekly |

### Recurring task structure

| Task | Frequency | Owner | Feeds |
|---|---|---|---|
| Source and enrich next account tranche | Weekly | Plansom Data | W1 |
| Verify net-new against client master | Weekly | Plansom + WPP | W1 |
| **CTPS re-screen (28-day cycle)** | Every 4 weeks | Plansom Data | W1 |
| Assign tomorrow's 20 LinkedIn contacts per owner | Daily, 17:00 | Plansom (auto) | W2 |
| Send 20 invites | Daily | Each owner | W2 |
| Handle LinkedIn replies | Daily | Each owner | W2 |
| Assign tomorrow's dial list | Daily, 17:00 | Plansom (auto) | W3 |
| Dial block 1 — 40 dials | Daily, 09:00 | Each SDR | W3 |
| Dial block 2 — 35 dials | Daily, 14:00 | Each SDR | W3 |
| Run and record discovery meetings | Daily | Meeting owners | W4 |
| Trial setup — brand live in 5 days | Per conversion | Solutions | W4 |
| Log support contacts and handling time | Per interaction | Solutions | W4 |
| Refresh dashboard | Daily, 18:00 | Plansom (auto) | W5 |
| Standup — yesterday, today, blockers | Daily, 09:00 | Plansom (auto) | W5 |
| Code meeting transcripts | Daily | Plansom Analyst | W5 |
| Gate review against the KPI tree | Weekly, Friday | Plansom + Sponsor | W5 |
| Data integrity checks | Weekly | Plansom RevOps | W5 |
| Bottleneck report | Weekly | Plansom (auto) | W5 |

### How Plansom runs it

| Plansom capability | Applied to this sprint |
|---|---|
| **AI Plan** | Converts this strategy into the full task tree — every task, owner, cadence and dependency, generated rather than hand-built |
| **Prioritisation by impact and effort** | When the week slips, Plansom ranks what to protect. Dial blocks and meeting quality outrank list hygiene every time |
| **AI Manage** | Automated daily standups, progress tracking and bottleneck reports — so the 15-minute standup is a decision, not a status round |
| **Distributed micro-tasks** | Ten LinkedIn owners each get a 20-minute daily task they cannot misread, tracked centrally without anyone chasing |
| **AI Execute** | Drafts the personalised invite notes and follow-ups for owner review — the only way 1,000 personalised invites a week is realistic |
| **Single plan of record** | One place where sprint lead, sponsor and fourteen operators see the same state |

> **This is the sprint's own test of the thesis.** The hypothesis says the tail can only be served if the motion is radically simple. Fourteen people running two channels against two thousand accounts under weekly gates is exactly that problem in miniature. **If Plansom cannot make this simple, the argument that WPP can make the tail simple is weaker.**

---

## 11. Revised team

| Role | v1.0 | Revised | Why |
|---|---|---|---|
| Executive Sponsor | 0.1 | 0.1 | — |
| Open Pro Commercial Lead | 0.3 | 0.3 | — |
| SDR / caller | 2 × 1.0 | **2 × 1.0** | 150 dials/day confirmed |
| **Meeting owners** | — | **2 × 1.0** | 🔴 **New.** 50 meetings/week capacity |
| **LinkedIn profile owners** | — | **10 × 0.05** | 🔴 **New.** 20 min/day each |
| Solutions / Onboarding | 0.3 | **0.5** | Higher trial volume |
| Marketing Ops | 0.3 | 0.3 | — |
| Finance Analyst | 0.1 | 0.1 | — |
| Brand / Legal | 0.1 | **0.3** | 🔴 CTPS, LIA, PECR, recording consent |
| **WPP total** | **~3.3 FTE** | **~5.2 FTE** | |
| Plansom | 4 people | 4 people | Unchanged |

**The increase is almost entirely meeting capacity**, and it is the difference between a sprint that books meetings and a sprint that learns something from them.

---

## 12. What changes in the sprint design

| Section | Change |
|---|---|
| §4.4 Cohort design | **2,000 accounts** (was 1,000). Cohort C (paid inbound) **removed** — channels now fixed to two |
| §6 Metrics | Replaced by §8 KPI tree above |
| §6.3 Statistical note | **Revised.** Paid conversions now 10–40. At the upper end, readable |
| §7.2 Team | Replaced by §11 above — **5.2 FTE** |
| §8 Systems | **Add:** dialler, CTPS screening service, LinkedIn Sales Navigator × 10. **Remove:** paid media |
| §9 Plan | **9 weeks** (was 8). Calibration week inserted at week 3 |
| §10 Decision criteria | Volume thresholds rescale — see below |
| §11 Risks | **Add:** LinkedIn restriction, CTPS breach, meeting capacity overrun |

### Rescaled decision criteria

| | Scale ✅ | Pivot 🔄 | Stop ⛔ |
|---|---|---|---|
| Qualified meetings (4 wks) | ≥80 | 40–79 | <40 |
| Trial starts | ≥30 | 15–29 | <15 |
| Paid conversions | ≥8 | 3–7 | <3 |
| Cost per qualified meeting | <£400 | £400–800 | >£800 |
| Bespoke scoping requested | <20% | 20–30% | >30% |
| Net-new verification accuracy | >95% | 90–95% | <90% |
| LinkedIn restrictions | 0 | 1 | ≥2 |

---

## 13. What to confirm before week zero

| # | Question | Why it blocks |
|---|---|---|
| 1 | **Segment size — A, B or C?** We recommend **C: 2,000 accounts** | Sets sourcing scope and cost |
| 2 | **Who are the ten LinkedIn profile owners?** Named, consented, profiles credible | They are the primary channel. No names, no channel |
| 3 | **Who runs the meetings?** Two dedicated people | The gap most likely to sink the sprint |
| 4 | **Is CTPS screening commissioned?** | Hard legal gate before the first dial |
| 5 | **Is the legitimate interest assessment documented?** | UK GDPR requirement before sourcing |
| 6 | **Dialler and Sales Navigator procured?** | 10 Navigator seats, 2 dialler seats |
| 7 | **Does the sprint accept the 50-meeting weekly ceiling?** | If the funnel over-delivers, we throttle the top rather than rush meetings |

---

<div align="center">

**Plansom** · *Simply done*

*The Open Door — Channel Model & Activity Plan v1.0 · 6 October 2026*
*Annex to: Open Door sprint design · WPP Business Diagnosis · The Eighteen Months*

</div>
