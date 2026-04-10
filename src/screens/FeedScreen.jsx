import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useAppState } from "../context/AppState";

export function FeedScreen() {
  const { state, actions } = useAppState();
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  async function handleLike() {
    await actions.handleLikeVideo({ connection, publicKey, sendTransaction });
  }

  return (
    <div className="screen-body feed-screen">
      <div className="feed-topbar">
        <div>
          <p className="eyebrow">Fan Mode</p>
          <h2>Discover</h2>
        </div>
        <button className="mode-pill" onClick={() => actions.go("creator-dashboard")}>
          Creator Mode
        </button>
      </div>

      <div className="budget-pill">
        <div>
          <span className="budget-pill-label">Budget remaining</span>
          <span className="budget-pill-value">${state.remaining.toFixed(2)}</span>
        </div>
        <button className="text-button" onClick={() => actions.go("budget")}>
          Adjust
        </button>
      </div>

      <article className="video-card">
        <div className="video-backdrop">
          <div className="video-badge">LIVE LOOP</div>
          <div className="video-gradient" />
          <div className="video-copy">
            <p className="creator-handle">@mika.studio</p>
            <h3>How creators can turn likes into programmable value</h3>
            <p className="video-caption">Fans support. Creator earns. CAA rewards top fans back.</p>
          </div>
        </div>

        <div className="feed-side-actions">
          <button className={`round-action like-action ${state.liked ? "liked" : ""}`} onClick={handleLike}>
            <span className="action-icon">♥</span>
          </button>
          <button className="round-action">
            <span className="action-icon">↗</span>
          </button>
          <button className="round-action">
            <span className="action-icon">☆</span>
          </button>
        </div>
      </article>

      <section className="feed-panels">
        <div className="mini-panel">
          <p className="mini-label">Current rule</p>
          <p className="mini-value">${state.likeAmount.toFixed(2)} sent per like</p>
        </div>
        <div className="mini-panel">
          <p className="mini-label">Execution</p>
          <p className="mini-value">{state.executionMode}</p>
        </div>
      </section>

      <div className={`toast ${state.likeToast.includes("exhausted") ? "danger-text" : ""}`}>{state.likeToast}</div>

      <nav className="bottom-nav">
        <button className="nav-item active">
          <span>Feed</span>
        </button>
        <button className="nav-item" onClick={() => actions.go("fan-wallet")}>
          <span>Wallet</span>
        </button>
        <button className="nav-item" onClick={() => actions.go("faa")}>
          <span>Agent</span>
        </button>
        <button className="nav-item" onClick={() => actions.go("creator-dashboard")}>
          <span>Creator</span>
        </button>
      </nav>
    </div>
  );
}
