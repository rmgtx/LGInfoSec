"use client";

export default function Header() {
  return (
    <>
      <a 
        href="#main-content"
        className="skip-link"
        style={{
          position: "absolute",
          left: "-9999px",
          zIndex: 999,
          padding: "var(--spacing-md)",
          backgroundColor: "var(--color-primary)",
          color: "white",
          textDecoration: "none",
          fontWeight: "var(--font-weight-bold)",
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "var(--spacing-md)";
          e.currentTarget.style.top = "var(--spacing-md)";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
        }}
      >
        Skip to main content
      </a>
      <header className="navbar" role="banner">
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "var(--spacing-md) var(--spacing-xl)" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--color-primary)" }}
                aria-hidden="true"
              >
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="navbar-logo" style={{ margin: 0 }}>Mend</h1>
                <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)", margin: 0 }}>InfoSec Portal</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center navbar-links" aria-label="Main navigation">
              <a href="#main-content">Home</a>
              <a href="#policies">Policies</a>
              <a href="#calendar">Calendar</a>
              <a href="#news">News</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

