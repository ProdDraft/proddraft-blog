---
title: "The state of LLMs — Late May 2026"
description: "A concise survey of frontier models, open-source contenders, and what's actually changed."
date: 2026-05-26
tags: [ai, llm, research, models]
draft: false
---

The LLM landscape moves fast enough that six months old is ancient history. Here's where things stand as of late May 2026 — no hype, just the models that matter and what they changed.

> **Note:** Facts verified against official sources as of May 26, 2026. If something's wrong, [email me](mailto:chadmartin@proddraft.com) and I'll fix it.

## The frontier (closed-source, API-only)

### Anthropic — Claude Opus 4.7

Anthropic shipped Claude Opus 4.7 on April 16, 2026 — their current flagship. It brings stronger performance across coding, agents, vision, and multi-step tasks, with an emphasis on thoroughness and consistency. Extended thinking remains the headline feature, letting the model spend significant compute on internal reasoning before responding.

Anthropic has been on an aggressive product cadence: Claude Design (April 17), Claude for Small Business (May 13), and a $200M Gates Foundation partnership (May 14). They also acquired Stainless (API SDK company) on May 18 — signaling serious investment in the developer ecosystem.

### OpenAI — GPT-5.5, GPT-5.4, GPT-5.3

OpenAI has moved well past the GPT-4 era. The current lineup as of May 2026: GPT-5.5 (flagship), GPT-5.4, GPT-5.3 Instant, and GPT-5.3-Codex (coding-optimized). The naming reflects a shift to continuous iteration rather than discrete generational leaps.

Recent OpenAI moves: Codex CLI (terminal-based coding agent, now deployed across desktop and mobile), Dell partnership for on-premises Codex (May 18), and a Gartner recognition as a Leader in enterprise coding agents (May 22). OpenAI also announced their model disproved a conjecture in discrete geometry (May 20) — one of the first "AI discovers new math" claims with a peer-reviewed proof attached.

### Google — Gemini 2.5 Pro & Flash

Gemini 2.5 Pro launched March 2025 with the largest context window in the industry (2M tokens) and strong multimodal capabilities. Flash is the smaller, faster variant. At Google I/O 2026 (last week, as of this writing), Google announced "managed agents" in the Gemini API — agentic capabilities as a first-class API feature rather than a demo. The keynote theme: "Welcome to the agentic Gemini era."

Google's advantage remains distribution: these models are embedded in Google Cloud, Vertex AI, Workspace, and now Google Beam (meeting AI). The Flash variant is priced aggressively — roughly $0.075/$0.30 per million tokens.

### xAI — Grok 3

Grok 3 launched February 2025. It was xAI's first model genuinely competitive at the frontier tier — strong on reasoning and mathematics. Its "Deep Search" feature integrates agentic web search directly into the model rather than as an external tool. A year later, xAI remains in the race but hasn't announced a Grok 4 timeline.

## Open-source & open-weight

### Meta — Llama 4 (Maverick, Scout, Behemoth)

Llama 4 arrived April 2025. Three variants:

- **Maverick** — the practical one. 17B active parameters from a 400B MoE architecture (128 experts). Strong on coding and multilingual tasks. Apache 2.0. Runs on consumer hardware with quantization.
- **Scout** — 17B active, 16 experts, 109B total. Smaller and faster.
- **Behemoth** — 288B active, 2T total. Still in training as of the announcement. Meta's moonshot for frontier performance.

A year post-launch, Llama 4 Maverick has become the default recommendation for teams wanting open-weight models. It's not beating the frontier on hardest reasoning benchmarks, but it's close enough that the zero-API-cost argument wins most build-vs-buy decisions.

### DeepSeek — V3, R1, V4 Pro

DeepSeek's cadence has been relentless:

- **V3** (December 2024) — 671B MoE, 37B active. First model that seriously challenged GPT-4o at a fraction of the cost.
- **R1** (January 2025) — reasoning model using RL-trained chain-of-thought. Open-weight, MIT license. Genuinely good at math and code.
- **V4 Pro** (late 2025/early 2026) — current flagship. Details are sparse (DeepSeek publishes less), but benchmarks suggest competitive performance with the frontier at 10-20x lower API cost.

DeepSeek's real impact has been economic: they forced the pricing floor down for the entire industry. Their API costs roughly $0.27/$1.10 per million tokens — two orders of magnitude below GPT-4 pricing 18 months ago.

### Qwen 3 (Alibaba)

Qwen 3 launched April 2025. Open-weight, Apache 2.0. Strong multilingual performance — especially Chinese and Arabic. The 235B variant (Qwen 3-Max) is competitive with Llama 4 Maverick. Qwen's ecosystem (Qwen-Agent, Qwen-Coder, Qwen-VL) makes them a credible alternative for teams that need multilingual performance or want to avoid US-model dependencies.

### Mistral Large 3

Mistral's current flagship, released late 2025/early 2026 — succeeding Mistral Large 2 (July 2024). Mistral's signature is efficiency: frontier-class performance at roughly one-third the parameter count of competitors. They've expanded into specialized variants (Small 3, Codestral) and enterprise deployments, maintaining their position as Europe's leading AI lab.

## Trends that matter

### Reasoning models are now baseline

A year ago, chain-of-thought reasoning was a premium differentiator. Now every lab ships a reasoning model: Opus 4.7 extended thinking, GPT-5.x reasoning modes, DeepSeek R1, Gemini 2.5 "thinking." The pattern has settled: a fast model for chat/interaction, and a reasoning model for hard problems. This is table stakes now.

### Cost continues collapsing

In January 2024, GPT-4 cost $30/$60 per million tokens. Today, frontier models cost single-digit dollars — and open-weight models are free on your own hardware. DeepSeek's pricing (~$0.27/$1.10) and Google's Flash ($0.075/$0.30) have reset expectations. The cost of running a frontier model has dropped roughly 20-50x in 18 months.

This changes the economics of every AI product. Things that were financially impossible in 2024 are viable in 2026.

### Agents are products now

Claude Code, OpenAI Codex CLI, Google's managed agents API, and the growing MCP ecosystem mean tool-using agents have moved from research prototypes to shipping software. Google I/O 2026's headline wasn't a model — it was agent infrastructure. The capability gap between "can the model answer" and "can the model do the thing" is closing fast.

### Context windows: the bottleneck shifted

1-2M token windows are standard at the frontier. Needle-in-a-haystack benchmarks are saturated. The new bottleneck isn't capacity — it's whether the model can effectively reason across the full context. Long-context attention quality is the new frontier.

### Open-weight: good enough for most things

Llama 4, Qwen 3, DeepSeek V3/R1, and Mistral Large 3 are all within striking distance of closed models on practical tasks. Closed models still win the hardest reasoning benchmarks, but for the majority of use cases, open-weight is good enough. And "good enough" at zero API cost changes the calculus entirely.

## The takeaway

If you're building with LLMs right now: the cost curve is your friend, reasoning models are worth the latency for hard problems, and open-weight models deserve a benchmark against your API spend. The models are no longer the bottleneck — the bottleneck is building products that use them well.

---

*Next: a practical comparison — running Llama 4 Maverick locally vs. calling an API model for a real production workload. Cost, quality, latency measured, not speculated.*
