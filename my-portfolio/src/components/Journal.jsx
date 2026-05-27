import CONFIG from "../config";

export default function Journal() {
  return (
    <section className="section" id="journal">
      <div className="container">

        {/* Header */}
        <div className="sec-header reveal">
          <div>
            <div className="sec-eyebrow">
              <div className="ey-line" />
              <span className="ey-text">Journal</span>
            </div>
            <h2 className="sec-heading">
              Recent <em>thoughts</em>
            </h2>
            <p className="sec-sub">
              Notes on design, code, and the space between.
            </p>
          </div>
          <button className="view-all">View all →</button>
        </div>

        {/* Entries */}
        <div className="journal-list reveal">
          {CONFIG.journal.map((entry, i) => (
            <a
              className="journal-entry"
              href={entry.href}
              target="_blank"
              rel="noreferrer"
              key={i}
            >
              <div className="j-thumb">{entry.emoji}</div>
              <div className="j-body">
                <div className="j-title">{entry.title}</div>
                <div className="j-meta">{entry.meta}</div>
              </div>
              <span className="j-arrow">↗</span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
