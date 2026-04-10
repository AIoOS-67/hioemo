import { useAppState } from "../context/AppState";

export function CreatorDashboardScreen() {
  const { state, actions } = useAppState();

  return (
    <div className="screen-body dashboard-screen">
      <div className="feed-topbar">
        <div>
          <p className="eyebrow">Creator Mode</p>
          <h2>Earnings</h2>
        </div>
        <button className="mode-pill" onClick={() => actions.go("feed")}>
          Fan Feed
        </button>
      </div>

      <section className="dashboard-grid">
        <article className="metric-card glow">
          <p className="card-label">Earned today</p>
          <p className="metric-value">${state.creatorEarned.toFixed(2)}</p>
          <p className="metric-footnote">+24 monetized likes</p>
        </article>
        <article className="metric-card">
          <p className="card-label">Active campaign</p>
          <p className="metric-value">Top 100</p>
          <p className="metric-footnote">0.02 USDC reward-back</p>
        </article>
      </section>

      <section className="panel insight-panel">
        <div className="list-head">
          <div>
            <p className="panel-title">CAA recommendation</p>
            <p className="status-copy">Operator insight from creator agent</p>
          </div>
          <button className="text-button" onClick={() => actions.go("caa")}>
            Open CAA
          </button>
        </div>
        <p className="insight-copy">
          Reward your top 25 new fans today. This video converted 2.4x more paid likes than your weekly average.
        </p>
      </section>

      <section className="panel list-panel">
        <div className="list-head">
          <div>
            <p className="panel-title">Top supporters</p>
            <p className="status-copy">Weighted by spend, completion, and repeat engagement.</p>
          </div>
          <button className="text-button" onClick={() => actions.go("supporters")}>
            View All
          </button>
        </div>
        <div className="supporter-preview">
          <article className="supporter-chip">
            <div className="supporter-avatar">AL</div>
            <div>
              <p className="supporter-name">alex.loop</p>
              <p className="supporter-meta">$1.20 sent this week</p>
            </div>
          </article>
          <article className="supporter-chip">
            <div className="supporter-avatar">JN</div>
            <div>
              <p className="supporter-name">jun3verse</p>
              <p className="supporter-meta">92% completion score</p>
            </div>
          </article>
        </div>
      </section>

      <nav className="bottom-nav">
        <button className="nav-item active">
          <span>Dashboard</span>
        </button>
        <button className="nav-item" onClick={() => actions.go("supporters")}>
          <span>Supporters</span>
        </button>
        <button className="nav-item" onClick={() => actions.go("campaign")}>
          <span>Campaigns</span>
        </button>
        <button className="nav-item" onClick={() => actions.go("caa")}>
          <span>Agent</span>
        </button>
      </nav>
    </div>
  );
}
