import {
  connectPhantomAdapter,
  simulateCampaignLaunch,
  simulateLikePayment,
  prepareRealLikePayment,
} from "./solanaService";

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export async function connectWallet({ isDemo, connect, getPublicKey }) {
  await wait(300);

  if (isDemo) {
    return {
      connected: true,
      demoMode: true,
      walletAddress: null,
      executionMode: "demo-mock",
      connectStatus: {
        title: "Demo connected",
        copy: "Demo account loaded. Continue with budget setup.",
      },
    };
  }

  const walletSession = await connectPhantomAdapter({ connect, getPublicKey });

  return {
    connected: true,
    demoMode: false,
    walletAddress: walletSession.walletAddress,
    executionMode: walletSession.executionMode,
    connectStatus: {
      title: "Connected",
      copy: `Phantom connected: ${walletSession.walletAddress.slice(0, 4)}...${walletSession.walletAddress.slice(-4)}`,
    },
  };
}

export async function authorizeBudget({ budget }) {
  await wait(250);

  return {
    remaining: budget,
  };
}

export async function sendLikePayment({ remaining, likeAmount, creatorEarned, walletAddress, executionMode, connection, publicKey, sendTransaction }) {
  await wait(220);

  if (remaining < likeAmount) {
    return {
      ok: false,
      error: "Budget exhausted. Increase budget to keep supporting creators.",
    };
  }

  const chainResult =
    executionMode === "real-solana"
      ? await prepareRealLikePayment({ connection, publicKey, sendTransaction, likeAmount })
      : await simulateLikePayment({ walletAddress, likeAmount });

  return {
    ok: true,
    remaining: Number((remaining - likeAmount).toFixed(2)),
    creatorEarned: Number((creatorEarned + likeAmount).toFixed(2)),
    likeToast:
      chainResult.executionMode === "real-solana"
        ? `$${likeAmount.toFixed(2)} demo like sent on Devnet`
        : `$${likeAmount.toFixed(2)} USDC sent to @mika.studio`,
    liked: true,
    transaction: {
      id: chainResult.signature ?? `like-${Date.now()}`,
      type: "like_payment",
      title: "Like sent to @mika.studio",
      subtitle:
        chainResult.executionMode === "real-solana"
          ? `real-solana · Devnet transfer to demo creator vault`
          : `${chainResult.executionMode ?? executionMode} · Short-video support payment`,
      amountLabel: `-$${likeAmount.toFixed(2)}`,
      positive: false,
      amount: likeAmount,
      creatorHandle: "@mika.studio",
      contentId: "video-001",
      status: chainResult.status ?? "confirmed",
      signature: chainResult.signature ?? null,
      network: chainResult.network ?? "solana-devnet",
      executionMode: chainResult.executionMode ?? executionMode,
      recipient: chainResult.recipient ?? null,
    },
  };
}

export async function applyFaaBudget() {
  await wait(180);

  return {
    budget: 1,
    faaToast: "FAA kept your daily support budget at $1.00 for maximum reward efficiency.",
  };
}

export async function applyCaaCampaign() {
  await wait(180);

  return {
    nextScreen: "campaign",
    caaToast: "CAA moved the recommendation into Campaign Builder.",
    campaignToast: "CAA preset loaded. Review and launch the top-25 new fans campaign.",
    draftCampaign: {
      id: `draft-${Date.now()}`,
      name: "Top 25 new fans today",
      rewardAmount: 0.02,
      audienceSize: 25,
      estimatedPayout: 0.5,
      type: "campaign_draft",
    },
  };
}

export async function launchCampaign({ walletAddress }) {
  await wait(260);

  const chainResult = await simulateCampaignLaunch({
    walletAddress,
    rewardAmount: 0.02,
    audienceSize: 25,
  });

  return {
    rewardsReceived: 0.02,
    campaignToast: "Campaign launched. Top fans will receive 0.02 USDC reward-back.",
    transaction: {
      id: chainResult.signature ?? `campaign-${Date.now()}`,
      type: "reward_campaign",
      title: "Reward campaign launched",
      subtitle: `${chainResult.executionMode} · Top 25 fans at 0.02 USDC`,
      amountLabel: "-$0.50",
      positive: false,
      rewardAmount: chainResult.rewardAmount ?? 0.02,
      audienceSize: chainResult.audienceSize ?? 25,
      status: chainResult.status ?? "confirmed",
      signature: chainResult.signature ?? null,
      network: chainResult.network ?? "solana-devnet",
      executionMode: chainResult.executionMode,
    },
  };
}
