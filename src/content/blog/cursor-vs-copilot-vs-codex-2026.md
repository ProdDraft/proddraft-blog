---
title: "Cursor vs Copilot vs Codex — which AI coding tool actually ships code?"
description: "Three AI coding tools, three real projects, three weeks. No feature lists — just which one shipped features and which one talked about shipping features."
date: 2026-06-02
tags: [ai, tools, comparison, cursor, copilot, codex]
draft: false
---

Everyone's comparing AI coding tools by their feature pages. That's like reviewing a car by reading the brochure. I wanted to know which one actually ships code — not which one has the best demo video.

So I ran three tools through the same real project: building a FastAPI + Next.js micro-SaaS from scratch. Same spec, same developer, three passes. Here's what happened.

## The test

One project: a link-in-bio tool with analytics. Users create a landing page, add links, see click counts. Simple enough to build in a weekend, complex enough to test real-world coding — auth, database, frontend, API design, edge cases.

Three tools:

| Tool | Model | Interface | Pricing |
|------|-------|-----------|---------|
| **Cursor** | Claude Opus 4.7 via API | Forked VS Code | $20/mo Pro |
| **GitHub Copilot** | GPT-4o + o4-mini | Any editor (extensions) | $10/mo Individual |
| **OpenAI Codex CLI** | GPT-5 Codex | Terminal (open source) | API usage ($) |

## Cursor: the one that shipped

Cursor finished the project in two sessions. About 4 hours total.

The agent mode (`Cmd+I`) is the differentiator. It reads your entire codebase, understands what you're building, and proposes changes across files — not just inline completions. For the link-in-bio app, it generated the database schema, the API routes, and the frontend components in sequence, each step building on the last.

**What worked:** Multi-file edits, understanding project context, handling edge cases (empty states, error handling, input validation). It caught a race condition in the click-counting logic that I hadn't considered.

**What didn't:** Sometimes over-engineers. Added a caching layer we didn't need. Easy to tell it to remove, but worth noting — it defaults to complexity.

**Cost:** $20/month flat. No per-request pricing. If you're coding daily, this is the cheapest per-line option.

## GitHub Copilot: the fast autocomplete

Copilot is excellent at what it does — inline completions and chat-based suggestions. For the link-in-bio project, it was great at filling in boilerplate: form components, API endpoint patterns, type definitions. The stuff you'd copy-paste from your last project but faster.

**What worked:** Speed of inline completions is unmatched. For repetitive patterns (CRUD endpoints, form fields, test cases), Copilot writes 80% of the code before you finish typing.

**What didn't:** No understanding of the project as a whole. Each completion is context-aware within the current file, but it doesn't know your database schema when writing frontend code. You're still the integration layer — the human who connects the dots.

**Cost:** $10/month Individual, $19/month Business. Included with GitHub Pro/Team/Enterprise. If you already pay for GitHub, Copilot is effectively free.

## Codex CLI: the open-source wildcard

Codex is the newest and most interesting. It's a terminal-based agent — you describe what you want, it generates code, runs tests, and iterates. No editor. No IDE. Just `codex "build a link-in-bio app"` and watch it work.

For the first 20 minutes, it was magical. It scaffolded the project, set up the database, generated the API — all from the terminal while I did other things.

Then it hit the database migration and spent 15 minutes in a loop trying to fix a Postgres connection string. Eventually figured it out, but the unsupervised agent model has a failure mode: when it gets stuck, it doesn't know it's stuck.

**What worked:** Autonomous scaffolding and boilerplate. If you know exactly what you want and the problem is well-defined, Codex is faster than typing it yourself.

**What didn't:** Edge cases and debugging. The agent model means it can waste time on problems a human would solve in 30 seconds. Cost is variable — a heavy session can burn through API credits fast.

**Cost:** Free and open source. You pay for your own API key (OpenAI, Anthropic, or any provider). A typical session costs $2-5 in API credits.

## The real comparison

| | Cursor | Copilot | Codex CLI |
|---|--------|---------|-----------|
| **Best for** | Building features end-to-end | Inline completions, boilerplate | Autonomous scaffolding |
| **Project awareness** | Understands entire codebase | Current file + open tabs | Session context only |
| **Cost** | $20/mo flat | $10/mo (free with GitHub) | $2-5 per session |
| **Surprise factor** | Caught a race condition I missed | Predictable, reliable | Magical until it's not |
| **Who should use it** | Solo devs shipping products | Teams with existing codebases | Experimenters, CLI fans |

## What's missing from every comparison

**Nobody talks about the integration tax.** These tools don't play together. Cursor's agent doesn't know about your Copilot chat history. Codex doesn't read your Cursor context. Switching between them means rebuilding context from scratch.

**Nobody talks about review burden.** Faster code generation means faster code review. If a tool generates 400 lines in 30 seconds, someone still has to read 400 lines. The bottleneck shifts from writing to reviewing.

**Nobody benchmarks on real projects.** Most comparisons use LeetCode problems or todo apps. Real projects have database migrations, auth flows, error handling, and dependencies between files. The gap between "solves Two Sum" and "builds a working SaaS" is the entire game.

## Which one should you use?

If you're a solo developer shipping products — and you don't have a team of reviewers catching generated code — Cursor is the most productive. It's the only one that feels like having a second developer, not a faster keyboard.

If you're on a team with an existing codebase, Copilot's inline completions are less disruptive and integrate with your existing workflow. Nobody has to learn a new editor.

If you're experimenting and want to see where the puck is going, Codex is worth the setup time. The agent model is the future, even if the present is rough.

I use Cursor for building features and Copilot for daily editing. Codex for experiments. No single tool is best — but Cursor is the closest to "just ship the thing."

---

*Building micro-SaaS with AI tools? The [FastAPI Pro Starter](https://proddraft.gumroad.com/l/remlbn) ships with Docker, CI, and structured logging — so your AI-generated code has a production-grade foundation. $29, one-time.*

*Want more comparisons like this? [Subscribe to the newsletter](https://buttondown.com/proddraft) — one email when there's something worth saying.*
