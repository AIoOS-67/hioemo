import { useAppState } from "../context/AppState";

export function FaaScreen() {
  const { state, actions } = useAppState();

  return (
    <div className="screen-body dashboard-screen">
      <div className="feed-topbar">
        <div>
          <p className="eyebrow">FAA</p>
          <h2>Fan Agent</h2>
        </div>
        <button className="mode-pill" onClick={() => actions.go("feed")}>
          Back
        </button>
      </div>

      <section className="panel insight-panel">
        <div className="list-head">
          <div>
            <p className="panel-title">Today's support plan</p>
            <p className="status-copy">FAA budget orchestration</p>
          </div>
          <span className="agent-badge">Active</span>
        </div>
        <p className="insight-copy">
          Keep your daily budget at $1.00. Allocate 60% to @mika.studio and reserve 40% for emerging creators in
          AI-native SocialFi.
        </p>
      </section>

      <section className="dashboard-grid compact">
        <article className="metric-card">
          <p className="card-label">Suggested budget</p>
          <p className="metric-value">$1.00</p>
          <p className="metric-footnote">Matches your current pace</p>
        </article>
        <article className="metric-card">
          <p className="card-label">Creators to watch</p>
          <p className="metric-value">3</p>
          <p className="metric-footnote">2 likely to reward back</p>
        </article>
      </section>

      <section className="panel list-panel">
        <div className="list-head">
          <div>
            <p className="panel-title">Why FAA recommends this</p>
            <p className="status-copy">Deterministic signal mix</p>
          </div>
        </div>
        <div className="agent-reason-list">
          <article className="reason-row">
            <span className="reason-dot mint" />
            <div>
              <p className="activity-title">@mika.studio has the highest reward-back probability</p>
              <p className="activity-subtitle">Running a top supporter campaign at 0.02 USDC.</p>
            </div>
          </article>
          <article className="reason-row">
            <span className="reason-dot gold" />
            <div>
              <p className="activity-title">Your budget is being used efficiently</p>
              <p className="activity-subtitle">
                Current spend pattern stays below daily cap while maximizing reward eligibility.
              </p>
            </div>
          </article>
        </div>
      </section>

      <div className="cta-stack">
        <button className="primary-button" onClick={actions.handleApplyFaaBudget}>
          Apply Suggested Budget
        </button>
        <button className="secondary-button" onClick={() => actions.go("feed")}>
          Support Recommended Creator
        </button>
      </div>

      <div className="toast">{state.faaToast}</div>
    </div>
  );
}
