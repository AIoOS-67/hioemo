import { useAppState } from "../context/AppState";

export function FanWalletScreen() {
  const { state, actions } = useAppState();

  return (
    <div className="screen-body dashboard-screen">
      <div className="feed-topbar">
        <div>
          <p className="eyebrow">Fan Wallet</p>
          <h2>Activity</h2>
        </div>
        <button className="mode-pill" onClick={() => actions.go("feed")}>
          Back To Feed
        </button>
      </div>

      <section className="dashboard-grid compact">
        <article className="metric-card">
          <p className="card-label">Remaining today</p>
          <p className="metric-value">${state.remaining.toFixed(2)}</p>
        </article>
        <article className="metric-card">
          <p className="card-label">Rewards back</p>
          <p className="metric-value">${state.rewardsReceived.toFixed(2)}</p>
        </article>
      </section>

      <section className="panel list-panel">
        <div className="list-head">
          <div>
            <p className="panel-title">Recent Activity</p>
            <p className="status-copy">Track support sent and rewards received.</p>
          </div>
          <button className="text-button" onClick={() => actions.go("faa")}>
            Open FAA
          </button>
        </div>
        <div className="activity-list">
          {state.activity.map((item) => (
            <article className="activity-row" key={item.id}>
              <div>
                <p className="activity-title">{item.title}</p>
                <p className="activity-subtitle">{item.subtitle}</p>
              </div>
              <span className={`activity-amount ${item.positive ? "positive" : ""}`}>{item.amount}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
