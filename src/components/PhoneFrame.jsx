export function PhoneFrame({ statusText, children }) {
  return (
    <main className="phone-stage">
      <div className="phone-frame">
        <div className="status-bar">
          <span>9:41</span>
          <span>{statusText}</span>
        </div>
        <section className="screen active">{children}</section>
      </div>
    </main>
  );
}
