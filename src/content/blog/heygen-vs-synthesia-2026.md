---
title: "HeyGen vs Synthesia — building an AI avatar on a budget"
description: "I tested both platforms to build Nova, an AI content creator. One cost $24/month. The other quoted $89/month. Here's which one actually ships videos."
date: 2026-06-06
tags: [ai, tools, content-creation, comparison, video]
draft: false
---

I built an AI influencer for $24/month. Her name is Nova, she's on TikTok and YouTube, and she's entirely rendered by AI. The first decision I had to make: which avatar platform?

Two names dominate: HeyGen and Synthesia. Both promise lip-synced talking heads from your images. Both have enterprise pricing pages that hide the real numbers. Both have demos that look better than what you actually get.

Here's what actually happened when I built on both.

## The test

Same source image. Same script. Same goal: a 60-second talking head video for TikTok/Shorts. Three criteria: quality (does it look real?), cost (what's the per-video price?), and workflow (how fast from script to published video?).

## HeyGen: the budget winner

HeyGen is what I ended up using. The Creator plan ($24/month, 600 credits) was the only option that made financial sense for a brand-new creator with zero revenue.

**Avatar III (3 credits/minute):** This is the workhorse. At $0.19 per minute, you get a lip-synced talking head that's good enough for Shorts/TikTok. Not photorealistic — you can tell it's AI if you look closely — but good enough that viewers don't care. Nova's first videos used Avatar III exclusively.

**Avatar IV (20 credits/minute):** The premium tier. Much better lip sync, more natural head movement, better emotional range. At $1.25 per minute, it's still cheaper than hiring a human but expensive enough that every video is a real decision. I use this for the weekly deep-dive videos where quality matters.

**Photo avatar training:** Upload 2+ photos, HeyGen builds a custom avatar. Costs 50 credits one-time ($2). Nova's avatar cost me $2 and two photos. The result is better than the generic avatars because it's actually her face.

**What HeyGen gets wrong:** The UI is confusing. Credit math is unclear until you start using it. The rendering queue can take 10-15 minutes during peak hours. And the API — while functional — requires more setup than it should.

**Total monthly cost running Nova on HeyGen:** $24/month (Creator plan, 600 credits). At 2 videos/day on Avatar III (6 credits), that's 100 videos/month. Realistically, Nova does 8 Shorts + 4 deep dives = 104 credits. Well within the 600 credit cap.

## Synthesia: the enterprise option I couldn't afford

Synthesia is the better product. Better lip sync, better avatars, better UI, better API, better everything. It's also 3-4x more expensive.

The Personal plan is $22/month but limits you to 10 minutes of video and a single seat. Not enough for daily content. The Creator plan at $67/month gets you 30 minutes — still tight for a daily creator. The Enterprise plan (custom pricing) is where Synthesia actually shines, but you need to talk to sales.

**What Synthesia does better:** The avatars are more natural. The lip sync is more accurate. The studio-quality preset avatars look genuinely professional. If you're a company making training videos, Synthesia is the right choice.

**What Synthesia does worse for creators:** The pricing model is built for businesses making occasional videos, not creators making daily content. The per-minute economics don't work at TikTok/Shorts volume. And there's no "good enough" cheap tier — even the Personal plan's video quality is more than most Shorts need, which means you're paying for quality your audience won't see.

## What about open-source alternatives?

I tested the free options too:

**SadTalker + Wav2Lip:** The open-source stack. SadTalker generates head movement from audio. Wav2Lip overlays lip sync. Combined with a TTS engine, you get a full pipeline for $0/month. The quality is noticeably worse — lip sync has artifacts, head movement is jerky — but it's free and runs on a gaming GPU (RTX 3060+). I used this for Nova's first two videos before switching to HeyGen. Good enough to validate the concept. Not good enough to build an audience.

**MuseTalk:** Newer, better quality than Wav2Lip. Still behind HeyGen. Worth watching — open-source avatar quality improves every quarter. At some point, the free stack will be good enough that paid platforms lose the creator market entirely. We're not there yet.

**Kokoro + F5-TTS:** For voice generation, the open-source options are actually competitive with paid TTS. Nova uses Navy API for convenience, but I've tested Kokoro TTS and the quality is close. Pair open-source TTS with a free avatar generator, and the only cost is GPU electricity.

## The real decision

| | HeyGen | Synthesia | Open-source |
|---|--------|-----------|-------------|
| **Monthly cost** | $24 | $67+ | $0 + GPU |
| **Per-video cost** | $0.19 (Avatar III) | ~$0.80+ | $0 + time |
| **Video quality** | Good enough | Professional | Workable |
| **Setup time** | 1 hour | 1 hour | 1-2 days |
| **Best for** | Creators on a budget | Businesses | Tinkerers, early-stage |

## What I'd tell someone starting today

Start with HeyGen Creator at $24/month. Use Avatar III for daily content. Upgrade to Avatar IV for the videos that matter. Don't bother with Synthesia unless you're a business — the pricing isn't built for creators.

If you have zero budget, start with SadTalker + Wav2Lip + Kokoro TTS on whatever GPU you have. The quality ceiling is lower, but you'll learn the pipeline and validate whether anyone wants to watch your AI avatar. Nova's first two videos were made this way. Nobody noticed the difference.

The biggest lesson from building Nova: the avatar platform matters less than you think. Viewers care about what your AI says, not how perfectly its lips move. The infrastructure is the easy part. Making something people actually want to watch — that's the whole game.

---

*Building an AI content creator? The [Nova Blueprint](https://proddraft.gumroad.com/l/nova-blueprint) is the exact playbook — pipeline setup, script system, distribution strategy, and real launch analytics. $19, one-time.*

*More honest tool comparisons: [subscribe to the newsletter](https://buttondown.com/proddraft). One email when there's something worth saying.*
