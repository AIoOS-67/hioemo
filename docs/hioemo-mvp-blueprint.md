# Hioemo MVP Blueprint

## Objective
Ship a hackathon-quality prototype that proves:

- a short-video interface can feel natural
- every like can trigger an on-chain micropayment
- creators can reward fans back through configurable rules
- AI agents can coordinate the reward logic

## Product Story
Hioemo is a short-video SocialFi app where:

- fans like videos and pay creators in tiny amounts
- creators reward top fans back
- AI agents manage the budget, ranking, and rules

## Primary Demo Goal
Deliver a 90-second demo where a viewer likes a video, the creator gets paid instantly, and the creator AI agent rewards a top fan back.

## User Roles

### Fan
- watches short videos
- sets a support budget
- likes creators
- receives recognition or rewards from creators

### Creator
- uploads or manages videos
- receives micropayments
- reviews top supporters
- launches reward-back campaigns

### CAA: Creator AI Agent
- suggests fan reward rules
- ranks high-quality supporters
- summarizes creator performance
- recommends next content action

### FAA: Fan AI Agent
- helps set support budgets
- recommends creators to support
- tracks fan rewards and status

## MVP Scope

### Must Have
1. Authentication and wallet connection
2. Swipe-style short-video feed
3. Like button with programmable payment amount
4. Daily spend limit / support budget
5. On-chain or simulated-on-chain creator payout
6. Creator dashboard with earnings and top fans
7. Reward-back rule such as "top 100 fans get 0.02"
8. AI summary panel for creator and fan

### Good to Have
1. Push or in-app notification when reward-back happens
2. Fan leaderboard
3. Creator campaign presets
4. Budget recommendation by FAA

### Not Needed For Demo
1. Full ad marketplace
2. Complex DeFi vault strategy execution
3. Full moderation stack
4. Large-scale content upload pipeline
5. Native mobile app

## Suggested Architecture

### Frontend
- Web app with mobile-first layout
- TikTok-like vertical video feed
- Creator dashboard
- Fan wallet and reward views

### Backend
- content metadata service
- reward rules engine
- supporter ranking service
- AI orchestration layer for CAA and FAA

### Solana Layer
- user wallet / session wallet or delegated spend model
- programmable like payment instruction
- creator reward-back instruction
- event indexing for creator earnings and fan rewards

## On-Chain Design Principles
Keep the chain interactions simple for the MVP:

- one transaction pattern for fan-to-creator like payment
- one transaction pattern for creator-to-fan reward-back
- a daily spend policy or session-budget experience
- clear event records for demo visibility

If fully on-chain policy controls are too heavy for the timeline, simulate part of the policy logic off-chain and keep the value transfer visible and verifiable.

## AI Responsibilities

### Creator AI Agent
- identify top fans by weighted engagement
- recommend reward campaigns
- summarize what content converts into revenue
- generate creator-facing insights in plain language

### Fan AI Agent
- suggest a support budget
- recommend creators aligned with interests
- explain which creators rewarded them and why
- propose how to distribute support tomorrow

## Reward Logic

### Fan -> Creator
- one like can trigger a micropayment such as `0.01 USDC`
- fans pre-set a daily cap such as `$1 per day`
- repeated likes on the same content can be rate-limited

### Creator -> Fan
- creator defines a campaign
- example: top 100 supporters this week receive `0.02 USDC`
- example: fans who like 5 videos in 3 days receive a badge or micro-reward

### Ranking Inputs
- number of likes
- watch completion
- repeat engagement
- recency
- anti-spam score

## Demo Script
1. Open Hioemo feed on mobile-sized screen.
2. Show a viewer setting a `$1/day` support budget.
3. Swipe through videos.
4. Like one creator video.
5. Show instant confirmation that `0.01 USDC` was sent to the creator.
6. Switch to creator dashboard.
7. Show updated earnings and top supporter list.
8. Open Creator AI Agent panel.
9. Display recommendation: reward top fans this week.
10. Trigger reward-back rule.
11. Switch to fan view.
12. Show the fan received `0.02 USDC` or recognition.
13. End with the message: "Every like is programmable."

## Pitch Structure
1. Likes are broken: they create engagement, not income.
2. Web3 tipping is broken: it is too heavy for everyday interaction.
3. Hioemo fixes both by turning likes into programmable micropayments.
4. Hioemo adds a second breakthrough: creators can reward fans back.
5. AI agents make the whole system manageable and personalized.
6. Solana makes the interaction fast and cheap enough to feel native.

## Build Order
1. Product flows and wireframes
2. Wallet and budget flow
3. Feed and like interaction
4. Micropayment execution
5. Creator dashboard
6. Reward-back flow
7. AI insight panels
8. Demo polish

## Key Risks

### Risk: Too many concepts at once
Mitigation: keep the story centered on programmable likes and two-way rewards.

### Risk: Wallet flow feels heavy
Mitigation: use a single budget authorization step and avoid repeated approvals in the demo.

### Risk: AI feels bolted on
Mitigation: make agents control real reward logic and ranking decisions, not just chat.

### Risk: Social app cold start
Mitigation: use seeded content and role-played creator/fan accounts for the demo.

## Submission Positioning
Describe Hioemo as:

"An AI-native SocialFi network on Solana where short-video engagement becomes programmable value between fans and creators."

Do not lead with:

- "TikTok on blockchain"
- "adtech marketplace"
- "general crypto social network"

## Next Deliverables
1. PRD with screen-by-screen flows
2. Technical architecture with Solana transaction model
3. Demo storyboard
4. Pitch deck outline
