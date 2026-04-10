# Hioemo PRD

## Document Status
Draft v1 for hackathon MVP build.

## Product Name
Hioemo

## Product Tagline
Every like is programmable.

## Product Summary
Hioemo is a mobile-first short-video SocialFi product on Solana where fans can support creators with like-triggered micropayments, creators can reward fans back, and AI agents help both sides manage behavior, budget, and incentives.

This PRD defines the first MVP to be built for the Solana Frontier Hackathon.

## Product Goal
Prove one core behavior in a working demo:

- a fan can set a support budget
- a fan can like a creator video
- that like triggers a micropayment
- a creator can see the earnings immediately
- a creator can reward a fan back through a rule-driven campaign
- AI agents provide useful decision support on both sides

## Non-Goals
The MVP does not attempt to solve:

- full creator onboarding and KYC
- full ad marketplace workflows
- native mobile app release
- large-scale video moderation
- complete tokenomics design
- advanced DeFi vault management
- production-grade recommendation infrastructure

## Primary Users

### Fan
A viewer who watches videos, sets a daily support budget, likes creators, and may receive creator rewards.

### Creator
A creator who publishes videos, receives micropayments from fan likes, and rewards top fans back.

### Admin Demo Operator
An internal role used during demo and testing to seed content, inspect activity, and reset states if needed.

## Core Product Principles
- The product must feel like a consumer app first, not a crypto dashboard.
- Wallet operations must be minimal and front-loaded into a budget setup flow.
- The main loop must complete in under 90 seconds during a demo.
- AI must control a real decision surface, not just provide generic chat.
- All screens should be optimized for a mobile viewport first.

## Success Criteria
The MVP is successful if a live demo can show:

1. a fan funding or authorizing a daily support budget
2. a fan sending a micropayment through a like action
3. a creator seeing updated earnings and fan ranking
4. a creator AI recommendation for rewarding back a fan segment
5. a creator reward-back action completing successfully
6. a fan seeing the reward notification and updated reward history

## Product Scope

### Included
- mobile web experience
- seeded short-video feed
- wallet connection
- support budget setup
- like-triggered micropayment flow
- creator dashboard
- fan reward campaign flow
- creator AI panel
- fan AI panel
- reward and activity history

### Excluded
- public video upload pipeline for all users
- full social graph and follows
- comments and DMs
- ads marketplace
- creator revenue withdrawal to bank
- complex identity verification

## Information Architecture
Top-level screens for the MVP:

1. Landing / Entry
2. Connect Wallet / Sign In
3. Budget Setup
4. Fan Feed
5. Video Detail Overlay
6. Fan Wallet / Activity
7. Fan AI Agent Panel
8. Creator Dashboard
9. Creator Supporters View
10. Creator Reward Campaign Builder
11. Creator AI Agent Panel
12. Reward Confirmation / Notification
13. Admin Seed Panel

## User Roles And Permissions

### Fan Permissions
- connect wallet
- authorize daily support budget
- watch videos
- like videos
- view spending history
- receive rewards
- open FAA panel

### Creator Permissions
- access creator dashboard
- view earnings
- view supporter rankings
- create reward campaigns
- execute reward-back actions
- open CAA panel

### Admin Permissions
- seed videos and demo users
- inspect transactions and events
- toggle demo data resets

## Shared Navigation Model
The mobile navigation should be simple and persistent.

### Bottom Nav For Fan
- Feed
- Wallet
- Agent
- Profile

### Bottom Nav For Creator Mode
- Dashboard
- Supporters
- Campaigns
- Agent

### Mode Switch
A top-right segmented toggle or avatar menu can switch between Fan mode and Creator mode for demo accounts that own both roles.

## Screen Specifications

## 1. Landing / Entry

### Purpose
Introduce the product quickly and push the user into wallet connection.

### Main Content
- Hioemo logo
- tagline: Every like is programmable.
- short explainer sentence
- primary CTA
- secondary CTA for demo mode

### Primary Actions
- `Connect Wallet`
- `Watch Demo Feed`

### States
- default
- wallet detected
- unsupported wallet
- loading

### Notes
For the hackathon demo, `Watch Demo Feed` can allow a low-friction preview before wallet connection, but likes must require budget setup.

## 2. Connect Wallet / Sign In

### Purpose
Authenticate the user and create a session.

### UI Components
- wallet provider buttons
- short explanation of budget-based likes
- status area

### Buttons
- `Connect Phantom`
- `Use Demo Account`
- `Back`

### States
- idle
- connecting
- connected
- failed
- wrong network

### System Behavior
- on success, create or load user profile
- determine if user has fan mode, creator mode, or both
- route first-time users to Budget Setup
- route returning users to Feed or last-used mode

## 3. Budget Setup

### Purpose
Set the fan's daily support budget with a single approval-like flow.

### Main Inputs
- daily budget amount
- default micropayment per like
- optional safety controls

### Controls
- budget preset chips: `0.50`, `1.00`, `2.00`
- per-like preset chips: `0.01`, `0.02`, `0.05`
- toggle: `Prevent repeat likes on same video from paying twice`
- toggle: `Require confirmation above custom threshold`

### Buttons
- `Authorize Budget`
- `Skip For Now`
- `Learn How It Works`

### States
- first-time setup
- editing existing budget
- authorizing
- success
- failed
- insufficient balance

### Validation Rules
- daily budget must be greater than zero
- per-like amount must not exceed daily budget
- if wallet balance is too low, show warning but still allow demo mode if simulation is enabled

### Success Output
- budget card stored for fan profile
- route to Fan Feed

## 4. Fan Feed

### Purpose
Primary consumption experience. The fan swipes through vertical videos and can like creators.

### Main UI
- vertical video player
- creator avatar and name
- caption
- music or topic label
- right-side action rail
- bottom metadata strip
- budget status pill at top

### Action Rail Buttons
- `Like`
- `Share`
- `Save`
- `Creator`

### Primary Like Interaction
When the fan taps `Like`:
- animate heart
- show micropayment toast such as `0.01 USDC sent`
- update creator earnings event in background
- lock duplicate payment if same-content repeat is blocked

### Top Status Components
- budget remaining today
- likes sent today
- quick link to adjust budget

### States
- loading feed
- playing video
- paused video
- like success
- like failed
- daily budget exhausted
- wallet disconnected
- already rewarded for this video
- offline or chain unavailable
- demo simulation fallback

### Empty States
- no feed items available
- retry CTA
- seeded-content placeholder

### Buttons And Gestures
- swipe up: next video
- swipe down: previous video
- single tap on video: play/pause
- tap creator name: open creator profile overlay
- tap budget pill: open budget modal

## 5. Video Detail Overlay

### Purpose
Give more context without leaving the feed.

### Contents
- enlarged creator header
- full caption
- campaign notes such as `likes on this video support creator directly`
- recent supporter activity preview

### Buttons
- `Like`
- `View Creator`
- `Close`

### States
- default
- liked
- payment pending
- payment success
- payment failed

## 6. Fan Wallet / Activity

### Purpose
Show the fan where money went and what rewards came back.

### Sections
- daily budget card
- spent today
- remaining today
- reward received total
- recent like payments
- recent creator rewards

### Buttons
- `Adjust Budget`
- `Top Up`
- `View Onchain Activity`
- `Open FAA`

### States
- no activity yet
- some spending but no rewards
- rewards received
- failed transactions present

### Activity Item Types
- like payment sent
- creator reward received
- campaign badge earned
- duplicate-like blocked

## 7. Fan AI Agent Panel

### Purpose
Help the fan manage their support intelligently.

### Main Outputs
- budget recommendation
- creator suggestions
- reward summary
- tomorrow support suggestion

### Cards
- `Today's support plan`
- `Creators most aligned with your taste`
- `Rewards you earned`
- `Suggested budget adjustment`

### Buttons
- `Apply Suggested Budget`
- `Support Recommended Creator`
- `Dismiss`
- `Refresh Insights`

### States
- loading insights
- recommendations available
- no data yet
- fallback static advice

### Notes
FAA is not a full chat bot in v1. It is a structured recommendation panel.

## 8. Creator Dashboard

### Purpose
Primary creator home showing earnings and growth.

### KPI Cards
- total earned today
- total earned this week
- total likes monetized
- reward-back campaign status

### Main Sections
- earnings chart
- top-performing videos
- top supporters preview
- active campaign summary
- CAA recommendation card

### Buttons
- `Reward Fans`
- `View Supporters`
- `Open CAA`
- `View Earnings Activity`

### States
- no earnings yet
- earnings active
- campaign running
- campaign paused
- payout data loading

## 9. Creator Supporters View

### Purpose
Show ranked supporters and let the creator inspect who should be rewarded.

### Columns Or Cards
- fan name or handle
- support amount
- number of paid likes
- watch completion score
- repeat engagement score
- fan status
- eligible for reward tag

### Filters
- `Top Today`
- `Top This Week`
- `New Fans`
- `High Loyalty`
- `At Risk`

### Buttons
- `Select All Eligible`
- `Create Reward Campaign`
- `Reward Selected Fans`
- `Back`

### States
- no supporters yet
- supporters ranked
- filter applied
- reward eligibility loading

## 10. Creator Reward Campaign Builder

### Purpose
Define how creators reward fans back.

### Campaign Types For MVP
- top supporters by amount
- most engaged fans by weighted score
- milestone completion reward

### Fields
- campaign name
- audience rule
- reward amount per fan
- max number of fans
- campaign duration
- optional badge label

### Preset Examples
- `Top 100 supporters get 0.02`
- `Fans who liked 5 videos this week get badge + 0.01`
- `Top new fans today get thank-you reward`

### Buttons
- `Preview Audience`
- `Save Draft`
- `Launch Campaign`
- `Cancel`

### States
- blank form
- validation error
- preview ready
- launch pending
- launched
- failed

### Validation Rules
- reward amount must be greater than zero
- creator must have enough reward balance or demo credits
- max recipients required
- campaign duration required

## 11. Creator AI Agent Panel

### Purpose
Let the creator see which fans matter and what actions to take.

### Main Outputs
- recommended campaign
- identified high-quality supporters
- earnings explanation
- next content suggestion

### Example Insight Cards
- `Reward your top 25 new fans today`
- `This video converted 2.4x more paid likes`
- `These supporters have the highest retention potential`
- `Post again in this topic tomorrow`

### Buttons
- `Apply Recommended Campaign`
- `View Suggested Fans`
- `Regenerate Insights`
- `Dismiss`

### States
- loading
- recommendations ready
- not enough data
- fallback rules-based recommendation

### Notes
CAA should feel like an operator assistant, not a chat novelty.

## 12. Reward Confirmation / Notification

### Purpose
Make reward-back actions legible and satisfying.

### Fan Notification Content
- creator name
- reward amount
- reason for reward
- optional badge or status upgrade

### Buttons
- `View Reward`
- `See Creator`
- `Close`

### States
- new reward pop-up
- inbox history item
- viewed

## 13. Admin Seed Panel

### Purpose
Support demo setup and testing.

### Functions
- seed demo creators
- seed demo fans
- add sample videos
- trigger fake AI insights if needed
- inspect recent payment events
- reset demo session data

### Buttons
- `Seed Content`
- `Seed Users`
- `Generate Demo Activity`
- `Reset Demo State`

### States
- idle
- seeding
- success
- failed

## Key User Flows

## Flow A: New Fan Onboarding
1. User opens Landing screen.
2. User taps `Connect Wallet`.
3. User connects wallet successfully.
4. System detects first-time fan profile.
5. User is routed to Budget Setup.
6. User selects daily budget and per-like amount.
7. User taps `Authorize Budget`.
8. Authorization succeeds.
9. User enters Fan Feed.

### Failure Cases
- wallet connection fails
- wrong network
- insufficient balance
- budget authorization fails

## Flow B: Fan Likes A Video
1. Fan is watching a video in Feed.
2. Fan taps `Like`.
3. UI animates immediately.
4. System checks daily budget remaining.
5. System checks duplicate-payment rule.
6. System submits or simulates micropayment.
7. Success toast appears: `0.01 USDC sent`.
8. Creator earnings update becomes visible in creator dashboard.
9. Fan activity history records the event.

### Failure Cases
- budget exhausted
- transaction failed
- duplicate like blocked from paying
- creator payout address unavailable

## Flow C: Creator Reviews Top Supporters
1. Creator switches to Creator mode.
2. Creator opens Dashboard.
3. Creator taps `View Supporters`.
4. System loads supporter rankings.
5. Creator filters by `Top This Week` or `High Loyalty`.
6. Creator selects supporter segment.
7. Creator proceeds to campaign creation.

## Flow D: Creator Launches Reward Campaign
1. Creator opens Reward Campaign Builder.
2. Creator chooses preset or custom audience rule.
3. Creator enters reward amount and max recipients.
4. Creator taps `Preview Audience`.
5. System shows eligible fan count and estimated payout.
6. Creator taps `Launch Campaign`.
7. System executes or simulates reward-back flow.
8. Creator sees campaign success state.
9. Fans receive reward notifications.

### Failure Cases
- insufficient creator balance
- invalid audience rule
- campaign launch transaction failed
- no eligible fans

## Flow E: Creator Uses CAA Recommendation
1. Creator opens CAA panel.
2. CAA generates recommendation based on earnings and supporter behavior.
3. Creator taps `Apply Recommended Campaign`.
4. Reward Campaign Builder opens prefilled.
5. Creator confirms launch.

## Flow F: Fan Sees Reward Back
1. Fan opens app or receives in-app notification.
2. Reward notification shows amount and reason.
3. Fan taps `View Reward`.
4. Fan Wallet / Activity displays reward item.
5. FAA panel updates support insights.

## State Model

### Like Payment State
- not_started
- validating_budget
- pending_submission
- confirmed
- failed
- blocked_duplicate
- blocked_budget_limit

### Reward Campaign State
- draft
- preview_ready
- launch_pending
- active
- completed
- failed
- cancelled

### Budget State
- not_set
- active
- low_remaining
- exhausted
- expired

### AI Insight State
- unavailable
- loading
- ready
- stale
- fallback_rules_only

## Data Requirements

### Fan Profile
- wallet address
- display name
- daily budget amount
- per-like default amount
- remaining budget today
- total rewards received
- liked content history

### Creator Profile
- wallet address
- display name
- creator bio
- total earned
- monetized likes count
- current campaign count
- supporter ranking summary

### Video Metadata
- video id
- creator id
- title
- caption
- video URL
- topic tags
- monetized like amount override if any

### Like Event
- event id
- fan id
- creator id
- video id
- amount
- timestamp
- status

### Reward Campaign
- campaign id
- creator id
- campaign type
- rule definition
- reward amount
- max recipients
- start and end time
- status

### Reward Event
- event id
- campaign id
- creator id
- fan id
- reward amount
- reason
- timestamp
- status

## Functional Requirements

### Feed
- must autoplay current video
- must support swipe navigation
- must show like success within one second in UI
- must prevent double-paid likes according to configured rule

### Budget
- must allow preset and custom daily budgets
- must display remaining daily budget at all times in fan mode
- must block paid likes when budget is exhausted

### Creator Dashboard
- must show updated earnings after successful like event
- must display top supporters ranked by configurable score
- must show active reward campaign summary

### AI Panels
- must render useful structured outputs even if LLM is unavailable
- must support deterministic fallback recommendations

### Campaigns
- must preview recipient count before launch
- must show estimated total payout
- must log reward-back activity per fan

## Non-Functional Requirements
- mobile-first responsive UI
- smooth transitions on a standard laptop browser in mobile viewport
- seeded demo content available locally or via static assets
- recover gracefully if chain call fails
- clear logging for demo troubleshooting

## Edge Cases
- fan likes when budget is exactly zero
- fan taps like repeatedly in rapid succession
- creator launches campaign with no eligible fans
- wallet disconnects mid-flow
- AI service times out
- transaction confirms after UI timeout
- creator has insufficient reward balance
- feed item has missing video asset

## Analytics Events
- wallet_connected
- budget_authorized
- budget_adjusted
- video_view_started
- video_liked
- like_payment_confirmed
- like_payment_failed
- creator_dashboard_viewed
- supporters_viewed
- campaign_previewed
- campaign_launched
- reward_received
- faa_opened
- caa_opened

## Demo Data Recommendations
Use seeded demo content with:

- 3 creators
- 8 to 12 short videos
- 1 demo fan with active budget
- 1 creator with preloaded earnings history
- 1 running campaign
- 1 recent reward notification

## Visual Direction Notes
- mobile-first layout with bold short-video UI
- crypto information should be secondary to content interaction
- reward moments should feel celebratory but not noisy
- agent panels should look operational and structured, not like chat windows

## Open Questions For Build
- which wallet flow is simplest for the demo while preserving credibility
- whether like payments are fully on-chain or partially simulated for speed
- whether reward-back executes in one batched transaction or stepwise simulation
- whether creator video upload is needed or all content is seeded

## Recommended Next Build Artifacts
1. low-fidelity wireframes for all screens
2. component inventory
3. frontend routing map
4. Solana transaction model doc
5. seeded demo content pack
