import { useWallet } from "@solana/wallet-adapter-react";
import { WalletReadyState } from "@solana/wallet-adapter-base";
import { useAppState } from "../context/AppState";
import { detectPhantomAvailability } from "../services/solanaService";

export function ConnectScreen() {
  const { state, actions } = useAppState();
  const wallet = useWallet();
  const phantomDetected = detectPhantomAvailability();
  const walletReady = phantomDetected || wallet.wallet?.readyState === WalletReadyState.Installed;

  async function handlePhantomConnect() {
    try {
      await actions.handleConnect({
        isDemo: false,
        connect: wallet.connect,
        getPublicKey: () => wallet.wallet?.adapter?.publicKey ?? wallet.publicKey,
      });
    } catch (error) {
      actions.go("connect");
    }
  }

  return (
    <div className="screen-body flow-screen">
      <button className="ghost-link" onClick={() => actions.go("landing")}>
        Back
      </button>
      <p className="eyebrow">Step 1</p>
      <h2>Connect your wallet once.</h2>
      <p className="body-copy">Set a daily support budget so likes feel instant inside the feed.</p>
      <div className="panel-stack">
        <button className="wallet-button" onClick={handlePhantomConnect} disabled={!walletReady || state.serviceStatus === "connecting"}>
          <span className="wallet-mark">P</span>
          <span>{walletReady ? "Connect Phantom" : "Phantom Not Detected"}</span>
        </button>
        <button className="wallet-button muted" onClick={() => actions.handleConnect({ isDemo: true })}>
          <span className="wallet-mark">D</span>
          <span>Use Demo Account</span>
        </button>
      </div>
      <div className="status-panel">
        <p className="status-title">{state.connectStatus.title}</p>
        <p className="status-copy">{state.connectStatus.copy}</p>
      </div>
      <div className="panel list-panel compact-panel">
        <p className="panel-title">Connection mode</p>
        <p className="status-copy">Execution: {state.executionMode}</p>
        <p className="status-copy">Wallet: {state.walletAddress ?? "Not connected"}</p>
      </div>
    </div>
  );
}

