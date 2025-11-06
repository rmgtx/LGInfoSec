"use client";

export default function HeroBanner() {
  const patternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  
  return (
    <div 
      className="relative py-16"
      style={{ 
        background: "var(--color-bg-alt)",
        borderBottom: "1px solid var(--color-border)",
        paddingTop: "var(--spacing-xl)",
        paddingBottom: "var(--spacing-xl)"
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 var(--spacing-xl)", textAlign: "center" }}>
        <h1 
          style={{ 
            fontSize: "var(--font-size-3xl)",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "var(--line-height-tight)",
            margin: "0 0 var(--spacing-lg) 0",
            color: "var(--color-text)"
          }}
        >
          Information Security
        </h1>
        <p 
          className="max-w-3xl mx-auto text-lg"
          style={{ 
            color: "var(--color-text-secondary)",
            lineHeight: "var(--line-height-relaxed)"
          }}
        >
          Preserving Confidentiality, Integrity, and Availability of Mend systems and data.
        </p>
      </div>
    </div>
  );
}

