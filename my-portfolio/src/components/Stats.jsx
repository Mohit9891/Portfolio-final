import CONFIG from "../config";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {CONFIG.stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-num">{stat.number}</div>
              <div className="stat-lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
