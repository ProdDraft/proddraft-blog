---
title: "How to read an AI paper (and actually understand it)"
description: "A practical framework for extracting signal from arXiv noise — tools, heuristics, and how to avoid cargo-cult comprehension."
date: 2026-05-25
tags: [ai, research, reading]
draft: false
---

*This is a draft. The real first post goes here.*

## The problem

arXiv publishes over 3,000 papers a week in cs.AI alone. Most engineers read papers the way they read blog posts — top to bottom, linearly, hoping it sinks in. This doesn't work. Papers aren't blog posts. They're compressed arguments optimized for peer review, not comprehension.

## The framework

Here's how to actually extract value from a machine learning paper in under an hour:

### Pass 1: The 5-minute triage (is this worth my time?)

Read only: title, abstract, conclusions. Skip everything else. Ask yourself: does this paper claim something that, if true, changes how I think or build? If the answer is "maybe" — proceed. If "no" — close the tab.

### Pass 2: The 20-minute structure scan

Look at the figures and tables. Read the section headers. Read the first and last sentence of each paragraph. Your goal here is to understand the architecture of the argument — not the details. You should be able to explain the paper's contribution in two sentences after this pass.

### Pass 3: The deep read (only for papers that passed Pass 2)

Read the whole thing. But not passively. Keep a text file open and write:

- What problem are they solving?
- What's the key insight (the one thing that makes it work)?
- What assumptions does it make?
- What would break it?
- What's one thing I can implement from this in 2 hours?

That last question is the most important. Implementation forces understanding. If you can't build a tiny version of the core idea, you haven't understood it.

## Tools

- **arXiv Sanity** — Andrej Karpathy's interface for browsing papers by category
- **Semantic Scholar** — citation graph + TLDR summaries
- **Papers With Code** — if the paper doesn't have a repo, be skeptical
- **Zotero** — reference manager that doesn't suck

## The heuristic that matters

Papers that introduce a new technique: read for the technique. Papers that report benchmark results: read for the method, skip the leaderboard. Papers that claim to beat everything: read the error bars first.

Most papers are wrong about their own significance. Your job isn't to trust them — it's to extract what's useful and discard the rest.
