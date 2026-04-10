import { useAppState } from "../context/AppState";

export function CaaScreen() {
  const { state, actions } = useAppState();

  return (
    <div className="screen-body dashboard-screen">
      <div className="feed-topbar">
        <div>
          <p className="eyebrow">CAA</p>
          <h2>Creator Agent</h2>
        </div>
        <button className="mode-pill" onClick={() => actions.go("creator-dashboard")}>
          Back
        </button>
      </div>

      <section className="panel insight-panel">
        <div className="list-head">
          <div>
            <p className="panel-title">Recommended action</p>
            <p className="status-copy">CAA operator recommendation</p>
          </div>
          <span className="agent-badge">High confidence</span>
        </div>
        <p className="insight-copy">
          Reward your top 25 new fans today. The current video has strong conversion into paid likes and fan retention
          is highest within the first 6 hours.
        </p>
      </section>

      <section className="dashboard-grid compact">
        <article className="metric-card glow">
          <p className="card-label">Retention uplift</p>
          <p className="metric-value">+18%</p>
          <p className="metric-footnote">Predicted if campaign launches now</p>
        </article>
        <article className="metric-card">
          <p className="card-label">Treasury impact</p>
          <p className="metric-value">$0.50</p>
          <p className="metric-footnote">Estimated total payout</p>
        </article>
      </section>

      <section className="panel list-panel">
        <div className="list-head">
          <div>
            <p className="panel-title">Why CAA chose this segment</p>
            <p className="status-copy">Weighted engagement analysis</p>
          </div>
        </div>
        <div className="agent-reason-list">
          <article className="reason-row">
            <span className="reason-dot mint" />
            <div>
              <p className="activity-title">New fans are converting unusually fast</p>
              <p className="activity-subtitle">This content is 2.4x above your weekly paid-like baseline.</p>
            </div>
          </article>
          <article className="reason-row">
            <span className="reason-dot gold" />
            <div>
              <p className="activity-title">Top 25 captures the best loyalty band</p>
              <p className="activity-subtitle">Beyond 25 fans, projected retention gain drops sharply.</p>
            </div>
          </article>
        </div>
      </section>

      <div className="cta-stack">
        <button className="primary-button" onClick={actions.handleApplyCaaCampaign}>
          Apply Recommended Campaign
        </button>
        <button className="secondary-button" onClick={() => actions.go("supporters")}>
          Review Suggested Fans
        </button>
      </div>

      <div className="toast">{state.caaToast}</div>
    </div>
  );
}
