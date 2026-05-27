---
name: gtm-marketplace-news
description: Fetch and summarize the latest news, launches, hiring trends, and tooling updates for GTM (go-to-market) engineers in the marketplace. Use when the user asks for a GTM engineer news digest, a daily marketplace update, or wants to catch up on GTM tooling and role trends.
---

# GTM Marketplace News Digest

Produce a concise daily digest of what's new for GTM engineers in the marketplace.

## What to cover

Pull from the last 24 hours (or since the last digest) across these buckets:

1. **Tooling & product launches** — new or updated GTM engineering tools (CDPs, reverse ETL, lead enrichment, outbound automation, signal-based platforms, AI SDRs, etc.).
2. **Hiring & role trends** — notable GTM engineer job postings, comp data, org structure shifts, layoffs/expansions at GTM-heavy companies.
3. **Playbooks & writeups** — published case studies, technical posts, or threads from practitioners (Clay, Apollo, HubSpot, Default, Common Room, etc.).
4. **Funding & M&A** — relevant rounds or acquisitions in the GTM tooling space.

## How to gather

- Use `WebSearch` for time-bounded queries (e.g. `"GTM engineer" news past 24 hours`, `Clay OR Apollo launch`, `"signal-based outbound"`).
- Use `WebFetch` to pull specific sources the user follows (add their preferred feeds below over time).
- Skip anything older than the lookback window unless it's a major item the user likely missed.

## Output format

Return a single markdown digest:

```
# GTM Marketplace — <YYYY-MM-DD>

## Tooling & launches
- <headline> — <source> — <1-line why-it-matters>

## Hiring & roles
- ...

## Playbooks & writeups
- ...

## Funding & M&A
- ...
```

Keep each bullet to one line. If a bucket is empty, omit it rather than padding.

## Preferred sources

### Tooling vendor blogs
- Clay — https://www.clay.com/blog
- Apollo.io — https://www.apollo.io/blog
- HubSpot — https://blog.hubspot.com/
- Common Room — https://www.commonroom.io/blog/
- Default — https://www.default.com/blog
- Outreach — https://www.outreach.io/resources/blog
- Gong — https://www.gong.io/blog/

### Newsletters & Substacks
- GTMnow (Sales Hacker) — https://gtmnow.com/
- Lenny's Newsletter — https://www.lennysnewsletter.com/
- The GTM Newsletter (Pavilion) — https://www.joinpavilion.com/newsletter
- Demand Curve — https://www.demandcurve.com/newsletter
- Category Pirates — https://categorypirates.substack.com/

### LinkedIn creators
- Adam Robinson (RB2B) — outbound + signal-based GTM
- Eric Nowoslawski (Growth Engine X) — outbound systems, Clay tactics
- Jordan Crawford (Blueprint) — GTM engineering playbooks
- Kyle Coleman (Copy.ai) — GTM AI workflows
- Mark Kosoglow (Operator Collective) — sales leadership trends

### Communities
- RevOps Co-op — Slack community for ops/GTM engineers
- Pavilion — paid community, GTM leadership content
- The GTM Engineer Slack / r/sales — practitioner discussion

## Scheduling

This skill is invoked on demand. For a true daily run, pair it with the `loop` skill:
`/loop 24h /gtm-marketplace-news`
