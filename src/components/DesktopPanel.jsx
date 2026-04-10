import { desktopCards } from "../data/mockData";

export function DesktopPanel() {
  return (
    <aside className="desktop-panel">
      <div className="brand-mark">
        <span className="brand-ring">O</span>
        <div>
          <p className="eyebrow">Solana Frontier MVP</p>
          <h1>Hioemo</h1>
        </div>
      </div>

      <p className="hero-copy">
        Every like is programmable. Fans fund creators instantly. Creators reward fans back.
      </p>

      <div className="desktop-cards">
        {desktopCards.map((card) => (
          <section className="desktop-card" key={card.label}>
            <p className="card-label">{card.label}</p>
            <ul>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </aside>
  );
}
