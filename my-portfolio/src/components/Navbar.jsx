import CONFIG from "../config";

const NAV_LINKS = ["Home", "Work", "Contact"];

export default function Navbar({ scrolled, active, setActive }) {
  const handleNav = (link) => {
    setActive(link);
    if (link === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className={`nav-pill${scrolled ? " scrolled" : ""}`}>

        {/* Logo */}
        <div className="nav-logo" onClick={() => handleNav("Home")}>
          <div className="logo-ring">
            <div className="logo-inner">{CONFIG.initial}</div>
          </div>
        </div>

        <div className="nav-div" />

        {/* Nav links */}
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            className={`nav-link${active === link ? " active" : ""}`}
            onClick={() => handleNav(link)}
          >
            {link}
          </button>
        ))}

        <div className="nav-div" />

        {/* Say hi */}
        <button
          className="nav-sayhi"
          onClick={() => (window.location = `mailto:${CONFIG.email}`)}
        >
          <span>Say hi ↗</span>
        </button>
      </div>
    </nav>
  );
}
