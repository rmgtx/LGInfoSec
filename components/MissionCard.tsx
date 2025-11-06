"use client";

export default function MissionCard() {
  return (
    <section 
      className="card"
      style={{ 
        borderLeft: "4px solid var(--color-primary)",
        background: "linear-gradient(to right, rgba(10, 132, 255, 0.02), var(--color-bg-alt))"
      }}
      aria-labelledby="mission-heading"
    >
      <div className="card-header">
        <h2 id="mission-heading" className="card-title">Welcome & Mission</h2>
      </div>
      <p style={{ 
        marginBottom: "var(--spacing-lg)", 
        lineHeight: "var(--line-height-relaxed)",
        fontSize: "var(--font-size-base)",
        color: "var(--color-text-secondary)"
      }}>
        Mend Information Security is dedicated to preserving the Confidentiality, Integrity, and Availability of Mend and customer data.
      </p>
      <div>
        <button 
          className="button button-outline"
          aria-describedby="contact-helper"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }} aria-hidden="true">
            mail
          </span>
          Contact InfoSec
        </button>
        <p 
          id="contact-helper"
          className="text-muted"
          style={{ 
            marginTop: "var(--spacing-md)",
            lineHeight: "var(--line-height-normal)"
          }}
        >
          For general inquiries, policy questions, or non-urgent requests. Response within 1-2 business days.
        </p>
      </div>
    </section>
  );
}

