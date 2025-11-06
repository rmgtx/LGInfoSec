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
        <div style={{ 
          maxWidth: "1400px", 
          margin: "0 auto", 
          padding: "var(--spacing-lg) var(--spacing-xl)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%"
        }}>
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "var(--spacing-md)"
          }}>
            <div 
              style={{ 
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--color-primary)"
              }}
              aria-hidden="true"
            >
              <span style={{ 
                color: "white", 
                fontWeight: "var(--font-weight-bold)", 
                fontSize: "var(--font-size-xl)"
              }}>
                M
              </span>
            </div>
            <div>
              <h1 className="navbar-logo" style={{ 
                margin: 0,
                fontSize: "var(--font-size-xl)",
                fontWeight: "var(--font-weight-bold)",
                lineHeight: "var(--line-height-tight)"
              }}>Mend</h1>
              <p className="text-muted" style={{ margin: 0 }}>InfoSec Portal</p>
            </div>
          </div>
          <nav 
            className="navbar-links" 
            aria-label="Main navigation" 
            style={{ 
              display: "flex",
              alignItems: "center",
              gap: "var(--spacing-lg)"
            }}
          >
            <a href="#main-content">Home</a>
            <a href="#policies">Policies</a>
            <a href="#calendar">Calendar</a>
            <a href="#news">News</a>
          </nav>
        </div>
      </header>
    </>
  );
}

