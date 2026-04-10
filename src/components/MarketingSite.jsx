import { useAppState } from "../context/AppState";

const protocolCards = [
  {
    label: "Programmable likes",
    title: "Fans trigger value with familiar behavior",
    copy:
      "A like is no longer just a metric. It can become a budget-aware, wallet-connected support action.",
  },
  {
    label: "Creator rewards",
    title: "Top supporters become visible and actionable",
    copy:
      "Creators can identify high-signal fans and send rewards back through campaign rules instead of manual outreach.",
  },
  {
    label: "AI coordination",
    title: "Agents help both sides decide what to do next",
    copy:
      "FAA manages support intent. CAA turns fan momentum into loyalty strategy, treasury action, and retention loops.",
  },
];

const buildRows = [
  "Phantom wallet connection integrated",
  "First Devnet like-payment flow implemented",
  "Creator dashboard and supporters loop mapped",
  "Reward campaign builder and AI surfaces live in prototype",
];

export function MarketingSite() {
  const { actions, state } = useAppState();

  return (
    <section className="marketing-shell">
      <header className="site-nav">
        <div className="site-brand">
          <span className="site-brand-ring">O</span>
          <div>
            <p className="eyebrow">AI-native SocialFi</p>
            <h1>HioEmo</h1>
          </div>
        </div>
        <div className="nav-badges">
          <span className="nav-badge">Solana</span>
          <span className="nav-badge muted">Creator economy</span>
        </div>
      </header>

      <div className="hero-block">
        <div className="hero-copy-stack">
          <p className="eyebrow">Short-video social graph</p>
          <h2 className="site-headline">Every like is programmable.</h2>
          <p className="site-subcopy">
            HioEmo turns short-video engagement into wallet-native support. Fans fund creators
            with one-tap micropayments. Creators reward top fans back. AI agents coordinate both
            sides.
          </p>

          <div className="site-cta-row">
            <button className="primary-button" onClick={() => actions.go("connect")}>
              Launch Prototype
            </button>
            <button className="secondary-button" onClick={actions.watchDemoFeed}>
              Open Live Feed
            </button>
          </div>
        </div>

        <div className="hero-data-card">
          <p className="card-label">Live prototype thesis</p>
          <div className="data-grid">
            <div>
              <span className="metric large">$0.01</span>
              <span className="metric-label">Base like payment</span>
            </div>
            <div>
              <span className="metric large">CAA</span>
              <span className="metric-label">Creator AI Agent</span>
            </div>
            <div>
              <span className="metric large">FAA</span>
              <span className="metric-label">Fan AI Agent</span>
            </div>
            <div>
              <span className="metric large">
                {state.executionMode === "real-solana" ? "Devnet" : "Demo"}
              </span>
              <span className="metric-label">Execution mode</span>
            </div>
          </div>
        </div>
      </div>

      <section className="site-section">
        <div className="section-head">
          <p className="eyebrow">Product formula</p>
          <h3>Social behavior first. Value exchange underneath.</h3>
        </div>
        <div className="protocol-grid">
          {protocolCards.map((card) => (
            <article className="protocol-card" key={card.label}>
              <p className="card-label">{card.label}</p>
              <h4>{card.title}</h4>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-section split-section">
        <div className="story-card emphasized">
          <p className="card-label">What changes</p>
          <h3>Web2 likes are passive. HioEmo likes are programmable.</h3>
          <ul className="story-list">
            <li>Fan likes a creator</li>
            <li>Creator gets paid instantly</li>
            <li>CAA finds top supporters</li>
            <li>Creator rewards them back</li>
          </ul>
        </div>

        <div className="story-card">
          <p className="card-label">Build status</p>
          <h3>Already live in the prototype</h3>
          <ul className="story-list">
            {buildRows.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="site-section callout-section">
        <div>
          <p className="eyebrow">Why now</p>
          <h3>Solana makes high-frequency social micropayments usable.</h3>
          <p className="site-subcopy compact">
            HioEmo is being built as a consumer-first product, not a speculative wrapper. The
            point is to make monetization, loyalty, and engagement happen inside the same
            interaction.
          </p>
        </div>
        <button className="primary-button" onClick={() => actions.go("campaign")}>
          Explore Reward Loop
        </button>
      </section>
    </section>
  );
}