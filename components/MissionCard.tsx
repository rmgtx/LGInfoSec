"use client";

export default function MissionCard() {
  return (
    <section 
      className="card"
      style={{ 
        marginBottom: "var(--spacing-xl)",
        borderLeft: "4px solid var(--color-primary)"
      }}
      aria-labelledby="mission-heading"
    >
      <h2 id="mission-heading" style={{ marginBottom: "var(--spacing-md)" }}>Welcome & Mission</h2>
      <p style={{ marginBottom: "var(--spacing-lg)", lineHeight: "1.6" }}>
        Mend Information Security is dedicated to preserving the Confidentiality, Integrity, and Availability of Mend and customer data.
      </p>
      <div>
        <button 
          className="button button-outline"
          aria-describedby="contact-helper"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px", verticalAlign: "middle", marginRight: "var(--spacing-xs)" }}>
            mail
          </span>
          Contact InfoSec
        </button>
        <p 
          id="contact-helper"
          style={{ 
            marginTop: "var(--spacing-sm)",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-text-secondary)",
            lineHeight: "1.5"
          }}
        >
          For general inquiries, policy questions, or non-urgent requests. Response within 1-2 business days.
        </p>
      </div>
    </section>
  );
}

