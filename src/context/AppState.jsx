import { createContext, useContext, useMemo, useState } from "react";
import {
  applyCaaCampaign,
  applyFaaBudget,
  authorizeBudget,
  connectWallet,
  launchCampaign,
  sendLikePayment,
} from "../services/hioemoService";
import { initialActivityItems } from "../data/mockData";

const AppStateContext = createContext(null);

function prependActivity(currentActivity, transaction) {
  if (!transaction) return currentActivity;

  const nextItem = {
    id: transaction.id ?? `activity-${Date.now()}`,
    title: transaction.title ?? transaction.type,
    subtitle: transaction.subtitle ?? transaction.status,
    amount: transaction.amountLabel ?? "$0.00",
    positive: Boolean(transaction.positive),
    type: transaction.type,
    signature: transaction.signature ?? null,
    executionMode: transaction.executionMode ?? "demo-mock",
  };

  return [nextItem, ...currentActivity];
}

export function AppStateProvider({ children }) {
  const [screen, setScreen] = useState("landing");
  const [connected, setConnected] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [executionMode, setExecutionMode] = useState("demo-mock");
  const [budget, setBudget] = useState(1);
  const [likeAmount, setLikeAmount] = useState(0.01);
  const [remaining, setRemaining] = useState(1);
  const [creatorEarned, setCreatorEarned] = useState(12.48);
  const [rewardsReceived, setRewardsReceived] = useState(0.02);
  const [connectStatus, setConnectStatus] = useState({
    title: "Status",
    copy: "No wallet connected.",
  });
  const [likeToast, setLikeToast] = useState("");
  const [campaignToast, setCampaignToast] = useState("");
  const [faaToast, setFaaToast] = useState("");
  const [caaToast, setCaaToast] = useState("");
  const [liked, setLiked] = useState(false);
  const [lastTransaction, setLastTransaction] = useState(null);
  const [serviceStatus, setServiceStatus] = useState("idle");
  const [activity, setActivity] = useState(initialActivityItems);

  const actions = useMemo(
    () => ({
      go: setScreen,
      async handleConnect({ isDemo, connect, getPublicKey }) {
        setServiceStatus("connecting");
        try {
          const result = await connectWallet({ isDemo, connect, getPublicKey });
          setConnected(result.connected);
          setDemoMode(result.demoMode);
          setWalletAddress(result.walletAddress);
          setExecutionMode(result.executionMode);
          setConnectStatus(result.connectStatus);
          window.setTimeout(() => setScreen("budget"), 500);
        } finally {
          setServiceStatus("idle");
        }
      },
      watchDemoFeed() {
        setDemoMode(true);
        setExecutionMode("demo-mock");
        setScreen("feed");
      },
      async handleAuthorizeBudget() {
        setServiceStatus("authorizing_budget");
        try {
          const result = await authorizeBudget({ budget });
          setRemaining(result.remaining);
          setScreen("feed");
        } finally {
          setServiceStatus("idle");
        }
      },
      async handleLikeVideo(transactionContext = {}) {
        setServiceStatus("sending_like");
        try {
          const result = await sendLikePayment({
            remaining,
            likeAmount,
            creatorEarned,
            walletAddress,
            executionMode,
            ...transactionContext,
          });

          if (!result.ok) {
            setLikeToast(result.error);
            return;
          }

          setRemaining(result.remaining);
          setCreatorEarned(result.creatorEarned);
          setLiked(result.liked);
          setLikeToast(result.likeToast);
          setLastTransaction(result.transaction);
          setActivity((current) => prependActivity(current, result.transaction));
        } finally {
          setServiceStatus("idle");
        }
      },
      async handleApplyFaaBudget() {
        setServiceStatus("faa_budget");
        try {
          const result = await applyFaaBudget();
          setBudget(result.budget);
          setRemaining((value) => Math.min(value, result.budget));
          setFaaToast(result.faaToast);
        } finally {
          setServiceStatus("idle");
        }
      },
      async handleApplyCaaCampaign() {
        setServiceStatus("caa_campaign");
        try {
          const result = await applyCaaCampaign();
          setCaaToast(result.caaToast);
          setCampaignToast(result.campaignToast);
          setLastTransaction(result.draftCampaign);
          setScreen(result.nextScreen);
        } finally {
          setServiceStatus("idle");
        }
      },
      async handleLaunchCampaign() {
        setServiceStatus("launching_campaign");
        try {
          const result = await launchCampaign({ walletAddress });
          setRewardsReceived(result.rewardsReceived);
          setCampaignToast(result.campaignToast);
          setLastTransaction(result.transaction);
          setActivity((current) => prependActivity(current, result.transaction));
        } finally {
          setServiceStatus("idle");
        }
      },
      setBudget,
      setLikeAmount,
    }),
    [budget, likeAmount, remaining, creatorEarned, walletAddress, executionMode],
  );

  const value = useMemo(
    () => ({
      state: {
        screen,
        connected,
        demoMode,
        walletAddress,
        executionMode,
        budget,
        likeAmount,
        remaining,
        creatorEarned,
        rewardsReceived,
        connectStatus,
        likeToast,
        campaignToast,
        faaToast,
        caaToast,
        liked,
        lastTransaction,
        serviceStatus,
        activity,
      },
      actions,
    }),
    [
      screen,
      connected,
      demoMode,
      walletAddress,
      executionMode,
      budget,
      likeAmount,
      remaining,
      creatorEarned,
      rewardsReceived,
      connectStatus,
      likeToast,
      campaignToast,
      faaToast,
      caaToast,
      liked,
      lastTransaction,
      serviceStatus,
      activity,
      actions,
    ],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }
  return context;
}
