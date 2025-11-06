"use client";

import { useState } from "react";
import IncidentReportModal from "./IncidentReportModal";

export default function IncidentReportButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section 
        style={{ marginBottom: "var(--spacing-xl)", textAlign: "center" }}
        aria-labelledby="incident-heading"
      >
        <h2 id="incident-heading" className="sr-only">Report Security Incident</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="button btn-accent"
          aria-describedby="incident-helper"
          style={{
            padding: "var(--spacing-md) var(--spacing-xl)",
            fontSize: "var(--font-size-lg)",
            boxShadow: "var(--shadow-lg)",
            transform: "scale(1)",
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--spacing-sm)",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "24px" }}>
            emergency
          </span>
          Report Security Incident
        </button>
        <p 
          id="incident-helper"
          style={{ 
            marginTop: "var(--spacing-md)",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-text-secondary)",
            lineHeight: "1.5",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <strong>Urgent?</strong> Use this form for active security incidents, data breaches, or suspicious activity. 
          Notifies on-call InfoSec team within 15 minutes.
        </p>
      </section>
      <IncidentReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

