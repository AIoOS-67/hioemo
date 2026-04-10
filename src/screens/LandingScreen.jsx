import { useAppState } from "../context/AppState";

export function LandingScreen() {
  const { actions } = useAppState();

  return (
    <div className="screen-body landing-screen">
      <div className="landing-art">
        <div className="spark spark-a" />
        <div className="spark spark-b" />
        <div className="hero-orb" />
        <div className="hero-logo">
          <span>HI</span>
          <span className="hero-ring">O</span>
          <span>EMO</span>
        </div>
      </div>

      <div className="content-stack">
        <p className="eyebrow">AI-native SocialFi</p>
        <h2>Short-video social graph with programmable likes.</h2>
        <p className="body-copy">
          Fans support creators with one-tap micropayments. Creators reward top fans back.
        </p>

        <div className="cta-stack">
          <button className="primary-button" onClick={() => actions.go("connect")}>
            Connect Wallet
          </button>
          <button className="secondary-button" onClick={actions.watchDemoFeed}>
            Watch Demo Feed
          </button>
        </div>

        <div className="info-strip">
          <div>
            <span className="metric">0.01</span>
            <span className="metric-label">USDC per like</span>
          </div>
          <div>
            <span className="metric">CAA</span>
            <span className="metric-label">Creator agent</span>
          </div>
          <div>
            <span className="metric">FAA</span>
            <span className="metric-label">Fan agent</span>
          </div>
        </div>
      </div>
    </div>
  );
}
