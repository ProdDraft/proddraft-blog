---
title: "The state of LLMs — Late May 2026"
description: "A concise survey of frontier models, open-source contenders, and what's actually changed in the last quarter."
date: 2026-05-26
tags: [ai, llm, research, models]
draft: false
---

The LLM landscape moves fast enough that six months old is ancient history. Here's where things stand as of late May 2026 — no hype, just the models that matter and what they changed.

## The frontier (closed-source, API-only)

### Anthropic — Claude Opus 4 & Sonnet 4

Anthropic shipped both Opus 4 and Sonnet 4 in May 2026. Opus 4 is their new flagship: 200K context window, strong on long-form reasoning and complex code generation. Early benchmarks put it ahead of GPT-4.1 on graduate-level reasoning and competitive programming tasks. Sonnet 4 occupies the speed/cost sweet spot — similar capability to Opus 4 on most tasks, roughly 3x cheaper.

Key differentiator: Opus 4's extended thinking mode. It can spend up to 64K tokens on internal reasoning before responding, making it genuinely useful for tasks that benefit from deliberation — debugging multi-file systems, analyzing research papers, architecting complex features.

Pricing: Opus 4 at $15/$75 per million input/output tokens. Sonnet 4 at $3/$15.

### OpenAI — GPT-4.1, o3, o4-mini

OpenAI's spring lineup: GPT-4.1 (April 2026) refined the base model with better instruction following and a 1M token context window. The o3 and o4-mini reasoning models handle multi-step problems through chain-of-thought — o3 for depth, o4-mini for speed at lower cost. o3 is competitive with Claude Opus 4 on math and science benchmarks.

OpenAI also introduced the Codex CLI (March 2026), an open-source terminal-based coding agent — signaling that the agent layer is becoming a first-class product, not an afterthought.

Pricing: GPT-4.1 at $2/$8 per million tokens. o3 and o4-mini vary by reasoning depth.

### Google — Gemini 2.5 Pro & Flash

Shipped March/April 2026. Gemini 2.5 Pro offers a 2M token context window — the largest in the industry — with strong multimodal capabilities (text, image, audio, video). Flash is the smaller variant, optimized for speed. Google's advantage remains integration: these models are deeply embedded in Google Cloud, Vertex AI, and the Workspace ecosystem.

Key feature: Gemini 2.5 Pro claims best-in-class performance on the Humanity's Last Exam benchmark, a collection of 3,000 expert-level questions across disciplines.

Pricing: Pro at $1.25/$5 per million tokens. Flash at $0.075/$0.30 (aggressively cheap).

### xAI — Grok 3

Released February 2026. Grok 3 is xAI's first model that genuinely competes at the frontier tier. Strong on reasoning, mathematics, and coding benchmarks. Notable for its "Deep Search" feature — an agentic web search capability built into the model rather than bolted on. xAI claims it outperforms GPT-4o on several benchmarks, though independent verification is thinner than for Anthropic or OpenAI.

## Open-source & open-weight

### Meta — Llama 4 (Maverick, Scout, Behemoth)

Meta released the Llama 4 family in April 2026. Three variants: Maverick (general-purpose, 17B active parameters from a ~400B total MoE architecture), Scout (smaller, 109B total), and Behemoth (still training — their largest model, targeting frontier performance). Maverick is the one people are actually running: strong on coding and multilingual tasks, Apache 2.0 license, and small enough to run on consumer hardware with quantization.

Llama 4's significance: it closed the gap between open-weight and closed-source models to roughly 6-12 months. For most practical use cases, you can now run a model locally that outperforms GPT-4 from 2024.

### DeepSeek — V3, R1, V4 Pro

DeepSeek continues shipping at an aggressive cadence. V3 (December 2024, refreshed March 2025) established them as a serious contender — Mixture-of-Experts architecture, 671B total parameters with 37B active, competitive with GPT-4o. R1 (January 2025) is their reasoning model, using reinforcement learning to improve chain-of-thought — open-weight, MIT license, and genuinely good at math and code.

V4 Pro launched early 2026 — their current flagship. Details are sparse (DeepSeek publishes less than Western labs), but early benchmarks suggest it's competitive with Claude Sonnet 4 on coding tasks at a fraction of the cost.

DeepSeek's real impact: pricing. They've forced the entire industry to compete on cost. Their API is roughly 10-20x cheaper than OpenAI's equivalent tier.

### Qwen 3 (Alibaba)

Qwen 3 released in early 2026 — open-weight, strong multilingual performance (especially Chinese and Arabic), Apache 2.0 license. The 235B variant is competitive with Llama 4 Maverick. Qwen's growing ecosystem (Qwen-Agent, Qwen2.5-Coder, Qwen-VL) makes it a credible alternative for teams building on open-weight models.

### Mistral Large 2

Mistral's 123B flagship, released mid-2025. Strong on multilingual tasks and code generation, Apache 2.0 license. Mistral's differentiator is efficiency — it achieves GPT-4-class performance with roughly one-third the parameters. They've since released smaller variants (Mistral Small 3, Codestral) optimized for specific tasks.

## Trends that matter

### Reasoning models are the new baseline

Six months ago, chain-of-thought reasoning was a premium feature. Now every frontier lab ships a reasoning model. The pattern: a fast model for chat (Sonnet 4, GPT-4.1) and a thinking model for hard problems (Opus 4 extended thinking, o3, R1). Expect this to be table stakes by end of year.

### Cost is collapsing

In January 2024, GPT-4 cost $30/$60 per million tokens. Today, GPT-4.1 — a better model — costs $2/$8. DeepSeek V3 is ~$0.27/$1.10. Gemini Flash is $0.075/$0.30. The cost of running a frontier model has dropped roughly 20-50x in 18 months, and open-weight models let you run comparable quality for free on your own hardware.

This changes the economics of every AI product. Things that were too expensive to build in 2024 are viable in 2026. Expect a wave of AI-native products that were technically possible last year but financially impossible.

### Agents are becoming products, not demos

Claude Code, OpenAI Codex CLI, and the growing MCP (Model Context Protocol) ecosystem signal that tool-using agents are moving from research prototypes to shipping software. The capability gap between "can the model answer this question" and "can the model actually do the thing" is closing fast.

### Context windows are a solved problem (mostly)

1M-2M token windows are now standard at the frontier. The bottleneck has shifted from "can we fit the context" to "can the model actually use all of it effectively." Needle-in-a-haystack benchmarks are saturated; the new frontier is long-context reasoning quality.

### Open-weight models are closing the gap

Llama 4, Qwen 3, DeepSeek V3/R1, and Mistral Large 2 are all within striking distance of frontier closed models on most practical tasks. The gap is real — closed models still win on the hardest reasoning benchmarks — but for the majority of use cases, open-weight is good enough. And "good enough" at zero API cost changes the build vs. buy calculus for a lot of products.

## The takeaway

If you're building with LLMs right now: the cost curve is your friend, reasoning models are worth the latency for hard problems, and open-weight models are credible enough that you should at least benchmark them against your API spend. The models are no longer the bottleneck — the bottleneck is building products that use them well.

---

*Next in this series: a practical comparison of running Llama 4 Maverick vs. calling Claude Sonnet 4 for a real production workload — cost, quality, and latency measured, not speculated.*
