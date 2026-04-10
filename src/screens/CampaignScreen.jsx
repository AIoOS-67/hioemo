import { useAppState } from "../context/AppState";

export function CampaignScreen() {
  const { state, actions } = useAppState();

  return (
    <div className="screen-body dashboard-screen">
      <div className="feed-topbar">
        <div>
          <p className="eyebrow">Reward Campaign</p>
          <h2>Builder</h2>
        </div>
        <button className="mode-pill" onClick={() => actions.go("creator-dashboard")}>
          Back
        </button>
      </div>

      <section className="panel">
        <p className="panel-title">Preset</p>
        <div className="preset-stack">
          <button className="preset-card active-preset">
            <span>
              <span className="preset-title">Top 100 supporters get 0.02</span>
              <span className="preset-copy">Best for visible loyalty rewards and retention.</span>
            </span>
          </button>
          <button className="preset-card">
            <span>
              <span className="preset-title">Top 25 new fans today</span>
              <span className="preset-copy">Use when a video is accelerating into new audiences.</span>
            </span>
          </button>
        </div>
      </section>

      <section className="dashboard-grid compact">
        <article className="metric-card">
          <p className="card-label">Reward per fan</p>
          <p className="metric-value">$0.02</p>
        </article>
        <article className="metric-card">
          <p className="card-label">Audience preview</p>
          <p className="metric-value">25 fans</p>
        </article>
      </section>

      <section className="panel insight-panel">
        <div className="list-head">
          <div>
            <p className="panel-title">Estimated payout</p>
            <p className="status-copy">CAA-selected high-quality supporters</p>
          </div>
          <span className="activity-amount positive">$0.50</span>
        </div>
        <p className="insight-copy">
          Launching this campaign now should strengthen retention on your best-performing video while keeping treasury
          usage efficient.
        </p>
      </section>

      <div className="cta-stack">
        <button className="primary-button" onClick={actions.handleLaunchCampaign}>
          Launch Campaign
        </button>
        <button className="secondary-button" onClick={() => actions.go("supporters")}>
          Review Supporters
        </button>
      </div>

      <div className="toast">{state.campaignToast}</div>
    </div>
  );
}
