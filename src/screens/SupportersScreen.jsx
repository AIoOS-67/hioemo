import { supporterRows } from "../data/mockData";
import { useAppState } from "../context/AppState";

export function SupportersScreen() {
  const { actions } = useAppState();

  return (
    <div className="screen-body dashboard-screen">
      <div className="feed-topbar">
        <div>
          <p className="eyebrow">Creator Supporters</p>
          <h2>Top Fans</h2>
        </div>
        <button className="mode-pill" onClick={() => actions.go("creator-dashboard")}>
          Back
        </button>
      </div>

      <section className="filter-row">
        <button className="chip active">Top This Week</button>
        <button className="chip">High Loyalty</button>
        <button className="chip">New Fans</button>
      </section>

      <section className="panel list-panel">
        <div className="supporter-list">
          {supporterRows.map((supporter) => (
            <article className="supporter-row" key={supporter.rank}>
              <div className="supporter-rank">{supporter.rank}</div>
              <div className="supporter-main">
                <p className="supporter-name">{supporter.name}</p>
                <p className="supporter-meta">{supporter.meta}</p>
              </div>
              <span className={`eligibility-tag ${supporter.muted ? "muted-tag" : ""}`}>{supporter.tag}</span>
            </article>
          ))}
        </div>
      </section>

      <button className="primary-button" onClick={() => actions.go("campaign")}>
        Reward Selected Fans
      </button>
    </div>
  );
}
