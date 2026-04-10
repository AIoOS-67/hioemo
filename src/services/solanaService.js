import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

const DEMO_CREATOR_VAULT = new PublicKey("AsxCvuCn8sqqVqJEbgEb8YQd9J3B33WARvvVW4nyTGFZ");

function randomId(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

export function detectPhantomAvailability() {
  return Boolean(window?.phantom?.solana?.isPhantom || window?.solana?.isPhantom);
}

export async function connectPhantomAdapter({ connect, getPublicKey }) {
  await connect();
  const publicKey = getPublicKey();

  if (!publicKey) {
    throw new Error("Phantom connected but no public key was returned.");
  }

  return {
    walletAddress: publicKey.toBase58(),
    executionMode: "real-solana",
    chain: "solana-devnet",
  };
}

export async function simulateLikePayment({ walletAddress, likeAmount }) {
  return {
    signature: randomId("like-sig"),
    executionMode: walletAddress ? "wallet-mock" : "demo-mock",
    network: "solana-devnet",
    amount: likeAmount,
    recipient: DEMO_CREATOR_VAULT.toBase58(),
  };
}

export async function simulateCampaignLaunch({ walletAddress, rewardAmount, audienceSize }) {
  return {
    signature: randomId("campaign-sig"),
    executionMode: walletAddress ? "wallet-mock" : "demo-mock",
    network: "solana-devnet",
    rewardAmount,
    audienceSize,
  };
}

export async function prepareRealLikePayment({ connection, publicKey, sendTransaction, likeAmount }) {
  if (!connection || !publicKey || !sendTransaction) {
    throw new Error("Missing Solana transaction context for real like payment.");
  }

  const lamports = Math.max(5000, Math.round(likeAmount * LAMPORTS_PER_SOL * 0.0001));
  const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash("confirmed");

  const transaction = new Transaction({
    feePayer: publicKey,
    blockhash,
    lastValidBlockHeight,
  }).add(
    SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: DEMO_CREATOR_VAULT,
      lamports,
    }),
  );

  const signature = await sendTransaction(transaction, connection);
  await connection.confirmTransaction({ signature, blockhash, lastValidBlockHeight }, "confirmed");

  return {
    signature,
    executionMode: "real-solana",
    network: "solana-devnet",
    amount: likeAmount,
    lamports,
    recipient: DEMO_CREATOR_VAULT.toBase58(),
    status: "confirmed",
  };
}

export async function prepareRealCampaignLaunch() {
  return {
    status: "not_implemented",
    message: "Real Solana reward campaign transaction builder is not wired yet.",
  };
}
