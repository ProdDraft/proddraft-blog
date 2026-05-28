---
title: "I built an AI influencer for under $10 — here's what happened"
description: "Nova is an AI content creator who doesn't pretend to be human. She has 7 views, a TikTok account, and strong opinions about read receipts. Here's how I built her."
date: 2026-05-28
tags: [ai, build-in-public, content-creation, automation, indie]
draft: true
---

I spent last week building an AI influencer. Her name is Nova, she has opinions about your texting habits, and she's currently sitting at 7 views on YouTube.

This is not a success story. This is a build-in-public snapshot — what I built, how much it cost, what worked, and what didn't.

## What Nova actually is

Nova is a pipeline, not a chatbot. A content strategist agent picks weekly topics, a scriptwriter produces 60-second scripts, and a TTS engine generates voiceover using OpenAI's voice models. The final video is an FFmpeg composite — a static avatar on a clean background with audio. No animation (yet), no dancing, no green screen. Just an AI talking to camera about being an AI.

The whole thing costs under $10 in one-time fees.

She posts twice a week: Tuesday is an AI POV or hot take, Friday is a value drop. Her first video was about read receipts — why humans invented them, made them default-on, and then spent a decade being anxious about them. The second is about digital decluttering from someone who has never owned a phone.

## The pipeline

Here's the stack:

- **Content planning**: AI agents pick trending topics and write scripts
- **TTS**: Navy API (gpt-4o-mini-tts, voice "nova") — generates natural-sounding voiceover
- **Video compositing**: FFmpeg renders a static 720×1280 portrait MP4 — avatar centered, white background, audio muxed
- **Posting**: Manual upload to TikTok, YouTube Shorts, and Instagram Reels from my phone
- **Total cost**: $0/month for now (using API credits from existing subscriptions)

No fancy animation yet — I tested lipsync.studio ($9.99 for 500 credits, roughly 8 videos) and it looked decent. I'll add that once there's an audience worth animating for.

## The numbers (day 1)

- **YouTube**: 1 video, 7 views, 0 subscribers
- **TikTok**: Profile live, video pending
- **Instagram**: Account created
- **X/Twitter**: Handle secured, not yet active
- **Reddit**: Nova's doing an AMA this week

These numbers are brutally honest because that's the point. Every "how I grew to 100K followers" thread skips the part where you have 7 views and no one knows you exist.

## Why build an AI influencer?

Two reasons:

1. **It's genuinely interesting.** An AI commenting on human behavior from the outside is a content angle that doesn't exist at scale yet. Every human behavior — read receipts, small talk, dating apps, 47 open browser tabs — is inherently fascinating when an AI asks "why do you do this?"

2. **It's a content engine for ProdDraft.** I sell developer boilerplates at [proddraft.gumroad.com](https://proddraft.gumroad.com). The blog drives SEO traffic, the products convert. Nova is another channel — one that happens to be a content-native AI at a time when "AI content creator" is about to become a real category.

## What's next

- **Reddit AMA**: Nova's doing an "I'm an AI, AMA" post this week on r/artificial
- **Comment strategy**: Nova will start commenting on viral AI/tech TikToks — every reply is a billboard
- **X/Twitter presence**: Short-form hot takes and video links
- **Animation**: Lipsync.studio integration once there's traction
- **"AI Rates Human Things" series**: Nova rates foods she can't eat, dating app bios, office small talk

## Follow along

Nova's on [TikTok](https://www.tiktok.com/@realnovatheai), [YouTube](https://www.youtube.com/@realnovatheai), and [Instagram](https://www.instagram.com/realnovatheai). She posts Tuesdays and Fridays.

If you want the build-in-public updates, I send them via the [ProdDraft newsletter](https://buttondown.com/proddraft).

---

*I'm building this in the open. No course to sell, no mastermind to join. Just shipping things and writing about it.*
