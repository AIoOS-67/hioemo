import { useAppState } from "../context/AppState";
import { budgetOptions, likeOptions } from "../data/mockData";

export function BudgetScreen() {
  const { state, actions } = useAppState();

  return (
    <div className="screen-body flow-screen">
      <button className="ghost-link" onClick={() => actions.go("connect")}>
        Back
      </button>
      <p className="eyebrow">Step 2</p>
      <h2>Set your daily support budget.</h2>
      <p className="body-copy">One setup step. Then likes can trigger micropayments without extra friction.</p>

      <section className="panel">
        <p className="panel-title">Daily budget</p>
        <div className="chip-row">
          {budgetOptions.map((option) => (
            <button
              key={option}
              className={`chip ${state.budget === Number(option) ? "active" : ""}`}
              onClick={() => actions.setBudget(Number(option))}
            >
              ${option}
            </button>
          ))}
        </div>
      </section>

      <section className="panel">
        <p className="panel-title">Per-like amount</p>
        <div className="chip-row">
          {likeOptions.map((option) => (
            <button
              key={option}
              className={`chip ${state.likeAmount === Number(option) ? "active" : ""}`}
              onClick={() => actions.setLikeAmount(Number(option))}
            >
              ${option}
            </button>
          ))}
        </div>
      </section>

      <section className="panel toggles">
        <label className="toggle-row">
          <input type="checkbox" defaultChecked />
          <span>Prevent repeat likes from paying twice on the same video</span>
        </label>
        <label className="toggle-row">
          <input type="checkbox" />
          <span>Require confirmation above $0.10 per like</span>
        </label>
      </section>

      <div className="budget-summary">
        <div>
          <p className="summary-label">Daily budget</p>
          <p className="summary-value">${state.budget.toFixed(2)}</p>
        </div>
        <div>
          <p className="summary-label">Default like</p>
          <p className="summary-value">${state.likeAmount.toFixed(2)}</p>
        </div>
      </div>

      <button className="primary-button" onClick={actions.handleAuthorizeBudget}>
        Authorize Budget
      </button>
    </div>
  );
}
