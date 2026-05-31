# $200/month Monetization — Implementation Plan

> **For Hermes:** Execute task-by-task with two-stage review (spec compliance, then quality).
>
> **Goal:** Reach $200/month revenue within 6 months via affiliate content + product sales.
>
> **Architecture:** Two-track execution — content engine (weekly posts + Dev.to/Reddit distribution) runs as primary thread, product builds (3 new Gumroad products) run as secondary thread.
>
> **Stack:** Astro blog (proddraft.com), Gumroad (sales), Buttondown (newsletter), Dev.to (cross-post), Reddit (selective promo)

---

## Month 1 — Foundation (June 2026)

### Task 1: Set up Dev.to account and cross-posting workflow

**Objective:** Create Dev.to account, publish first cross-post, establish the canonical URL pattern.

**Files:**
- No code files. Account creation + first post.

**Step 1: Create Dev.to account**
- Go to https://dev.to
- Sign up via GitHub: ProdDraft
- Set profile: name "ProdDraft", bio "Production-grade developer tooling. AI, systems, and the craft of building software."

**Step 2: Publish first cross-post**
- Take latest blog post: "I built an AI influencer for $24/month"
- Add canonical URL meta tag pointing to https://proddraft.com/blog/building-nova-ai-influencer
- Reformat markdown for Dev.to (frontmatter: `canonical_url: https://proddraft.com/blog/building-nova-ai-influencer`)
- Add tags: #ai #tutorial #beginners
- Publish

**Verification:** Post is live on dev.to/proddraft. Canonical URL present in page source.

---

### Task 2: Write and publish affiliate post #1 — AI coding tools comparison

**Objective:** First money-making post. "Cursor vs Copilot vs Codex — which AI coding tool actually ships code?"

**Files:**
- Create: `src/content/blog/cursor-vs-copilot-vs-codex-2026.md`
- Modify: None

**Step 1: Research affiliate programs**
- Check PartnerStack for Cursor affiliate program
- Check GitHub Copilot affiliate options
- Check OpenAI/Codex affiliate options
- Document which tools have affiliate links and commission rates

**Step 2: Write the post**
- 1500-2500 words
- Format: side-by-side comparison with real usage
- Frontmatter: `draft: false, tags: [ai, tools, comparison]`
- Include affiliate links for each tool where available

**Step 3: Build, preview, deploy**
```bash
cd /Volumes/disk2/apps/hermes/projects/proddraft-blog
npm run build
git add src/content/blog/cursor-vs-copilot-vs-codex-2026.md
git commit -m "content: AI coding tools comparison post"
git push
```

**Step 4: Cross-post to Dev.to**
- Add canonical URL
- Publish with tags: #ai #coding #productivity

**Verification:** Post live on proddraft.com and dev.to. Affiliate links functional.

---

### Task 3: Write and publish affiliate post #2 — AI code editors review

**Objective:** "Best AI code editors in 2026 — tested on real projects"

**Files:**
- Create: `src/content/blog/best-ai-code-editors-2026.md`

**Steps:** Same as Task 2 (research, write, build, push, cross-post)

**Verification:** Post live. Cross-posted.

---

### Task 4: Write and publish affiliate post #3 — Claude Code review

**Objective:** "Claude Code review — 30 days of shipping with an AI agent"

**Files:**
- Create: `src/content/blog/claude-code-review-30-days.md`

**Steps:** Same as Task 2. This one is real experience-based — Chad has used Claude Code via Hermes.

**Verification:** Post live. Cross-posted.

---

### Task 5: Write and publish affiliate post #4 — AI avatar tools comparison

**Objective:** "HeyGen vs Synthesia — building an AI avatar in 2026"

**Files:**
- Create: `src/content/blog/heygen-vs-synthesia-2026.md`

**Steps:** Same as Task 2. Leverages Nova experience.

**Verification:** Post live. Cross-posted.

---

### Task 6: Set up Reddit distribution workflow

**Objective:** Establish Reddit accounts, understand subreddit rules, plan first posts.

**Step 1: Create Reddit account**
- Username: ProdDraft or similar
- Join: r/programming, r/webdev, r/artificial, r/MachineLearning

**Step 2: Document posting rules**
- Read each subreddit's self-promotion rules
- Note: r/programming requires text posts (not direct links)
- Note: r/webdev has "Showoff Saturday" for projects

**Step 3: Identify first post candidates**
- Best performing Dev.to post after week 2-3
- Format as Reddit text post (value-first, link at end)

**Verification:** Account active, subreddit rules documented.

---

### Task 7: Newsletter automation setup

**Objective:** Ensure every post triggers a Buttondown newsletter send.

**Step 1: Verify Buttondown setup**
- Confirm proddraft account is active
- Confirm subscriber form on proddraft.com/subscribe works

**Step 2: Document newsletter workflow**
- After each post goes live: log into Buttondown → New email
- 2-3 sentence intro + link to post
- Send

**Verification:** Test send with affiliate post #1.

---

### Task 8: Write and publish authority post — State of LLMs June 2026

**Objective:** First monthly authority post. Deep, linkable, newsletter-worthy.

**Files:**
- Create: `src/content/blog/state-of-llms-june-2026.md`

**Step 1: Research**
- Check latest model releases since May 2026 state-of-LLMs post
- Verify facts against official sources

**Step 2: Write**
- Same format as state-of-llms-may-2026.md
- Cross-link to relevant affiliate posts and products

**Step 3: Build, push, newsletter, cross-post, Reddit (if strong)**

**Verification:** Post live. Newsletter sent.

---

## Month 2 — First Product Launch (July 2026)

### Task 9: Build Next.js Full-Stack Starter

**Objective:** Product #3 — Next.js starter kit at $39.

**Deliverables:**
- Source files: Next.js 15, Prisma, NextAuth, Tailwind, Docker, CI
- README with screenshots walkthrough
- Gumroad listing: cover image, description, pricing
- Landing page: `src/pages/nextjs-starter.astro` (if needed, or use products page)

**Launch post:** "Ship a SaaS in a weekend with Next.js" (affiliate + product hybrid post)

**Verification:** Product live on Gumroad. Landing page live. Launch post live.

---

### Task 10: Continue weekly affiliate posts

**Objective:** Weeks 5-8: 4 more affiliate posts. Same workflow as Month 1 tasks.

Topics TBD based on what's ranking and trending. Pipeline:
- "Best TTS APIs — ElevenLabs vs Navy vs Kokoro"
- "AI app builders compared — v0 vs Bolt vs Lovable"
- Two more from content backlog

---

## Month 3 — First Rankings (August 2026)

### Task 11: Audit and optimize early posts

**Objective:** Check which Month 1-2 posts are getting impressions. Optimize underperformers.

**Step 1: Google Search Console check**
- Which posts have impressions? Which keywords?
- Retitle/re-optimize posts with zero impressions after 6 weeks

**Step 2: Internal linking pass**
- Cross-link all related posts to each other
- Example: Claude Code review links to Cursor comparison, vice versa

**Verification:** Every post has 2+ internal links to related content.

---

### Task 12: Continue weekly content + Reddit selective posting

**Objective:** Weeks 9-12: 4 more posts. First Reddit posts for top performers.

Reddit strategy: Best-performing Dev.to post → Reddit text post → monitor for removal

---

## Month 4 — Second Product + Revenue Tracking (September 2026)

### Task 13: Build Go Microservice Template

**Objective:** Product #4 — Go starter at $29.

Same format as Next.js starter. Launch post paired with release.

---

### Task 14: Revenue dashboard

**Objective:** Simple tracking — know exactly how much came from where.

**Step 1: Create tracking spreadsheet (Apple Numbers or Airtable)**
- Columns: Month, Affiliate Revenue, Product Revenue, Source Breakdown
- Update monthly

**Verification:** June-September revenue documented.

---

## Month 5-6 — Compound + Product #5 (October-November 2026)

### Task 15: Build Terraform AWS Module Pack

**Objective:** Product #5 — Terraform pack at $29.

---

### Task 16: Continue content engine

Weekly posts continue throughout. By month 6: 48 posts live, 3 new products, steady Dev.to and selective Reddit distribution.

---

## Revenue Checkpoints

| End of Month | Expected Range | Verify |
|-------------|---------------|--------|
| Month 1 | $0-5 | Gumroad + affiliate dashboards |
| Month 2 | $5-20 | First product sale possible |
| Month 3 | $15-69 | First rankings producing |
| Month 4 | $40-100 | Two products live |
| Month 5 | $65-140 | Compounding |
| Month 6 | $90-200 | Target range |

---

## Weekly Time Budget

| Activity | Hours/week |
|----------|-----------|
| Affiliate post (research + write + publish) | 3-4 |
| Cross-post (Dev.to, Reddit selective) | 0.5 |
| Newsletter send | 0.25 |
| Product development | 2-3 (when active) |
| Authority post (monthly) | 3-4 (one week/month) |
| Analytics + optimization | 0.5 |
| **Total** | **6-8 hours** |

---

## Key Risk: SEO Takes Time

Month 1-2 will feel like shouting into the void. The plan expects zero meaningful revenue until month 3+. Stay consistent. The compounding is real but invisible until it isn't.
