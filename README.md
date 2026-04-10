# HioEmo

AI-native SocialFi on Solana where every like is programmable.

![HioEmo hero](./HioEmo%20Logo%20big.png)

## What It Is

HioEmo is a mobile-first short-video product for creators and fans.

Instead of treating likes as empty engagement signals, HioEmo turns them into programmable onchain actions:

- Fans support creators with one-tap micropayments
- Creators reward top supporters back
- Creator AI Agents and Fan AI Agents coordinate incentives, loyalty, and timing

The goal is simple: make social engagement and value exchange happen inside the same interaction.

## Product Loop

1. A fan connects a wallet and sets a support budget
2. A like can trigger a lightweight payment
3. Creator earnings update in real time
4. The creator can launch reward-back campaigns for top supporters
5. AI agents help both sides decide how to allocate support and rewards

## Why It Matters

Web2 social apps optimize attention but leave creators with weak native monetization.

Web3 tipping products exist, but they often feel too heavy for high-frequency consumer behavior.

HioEmo is designed around a different thesis:

> Every like is programmable.

That means social behavior stays familiar, while the economic layer becomes native, lightweight, and composable.

## Current Prototype

The repository contains the active HioEmo prototype built during the Solana Frontier hackathon, including:

- marketing-style landing experience
- mobile product shell
- wallet connection flow
- budget setup
- short-video feed interactions
- creator dashboard
- supporters view
- reward campaign builder
- Fan AI Agent and Creator AI Agent surfaces
- Phantom integration
- initial Devnet like-payment transaction flow

This is an active prototype, not a production-hardened release.

## Stack

- React
- Vite
- JavaScript
- Solana Wallet Adapter
- Phantom
- Solana Web3.js

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Repository Structure

```text
src/
  components/      shared UI shells and marketing layout
  context/         app state and orchestration
  data/            local mock data
  providers/       Solana provider wiring
  screens/         prototype product screens
  services/        mock and Devnet transaction services
docs/
  product brief
  MVP blueprint
  PRD
```

## Product Thesis

HioEmo is being built as a consumer-first product, not a speculative crypto wrapper.

The long-term business model can include:

- take rate on creator-fan support flows
- premium creator tooling
- sponsored reward campaigns
- brand or merchant agents participating in high-engagement moments

## Status

- mobile-first prototype: live
- GitHub repository: live
- Devnet wallet flow: connected
- production deployment: in progress

## Founder Context

The HioEmo direction builds on prior work across payments, AI-assisted transaction flows, creator monetization thinking, and the earlier "Like-as-a-Reward" concept exploration formalized before the hackathon.

## License

Proprietary prototype. All rights reserved unless otherwise stated.
