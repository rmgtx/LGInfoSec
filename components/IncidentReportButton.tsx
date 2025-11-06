"use client";

import { useState } from "react";
import IncidentReportModal from "./IncidentReportModal";

export default function IncidentReportButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="card"
        style={{
          textAlign: "center",
          background:
            "linear-gradient(to bottom, rgba(0, 200, 150, 0.05), var(--color-bg-alt))",
        }}
        aria-labelledby="incident-heading"
      >
        <h2
          id="incident-heading"
          className="card-title"
          style={{ marginBottom: "var(--spacing-lg)" }}
        >
          Report Security Incident
        </h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="button button-accent"
          aria-describedby="incident-helper"
          style={{
            padding: "var(--spacing-lg) var(--spacing-2xl)",
            fontSize: "var(--font-size-lg)",
            boxShadow: "var(--shadow-lg)",
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--spacing-md)",
            fontWeight: "var(--font-weight-bold)",
          }}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "28px" }}
            aria-hidden="true"
          >
            emergency
          </span>
          Report Security Incident
        </button>
        <p
          id="incident-helper"
          className="text-muted"
          style={{
            marginTop: "var(--spacing-lg)",
            lineHeight: "var(--line-height-relaxed)",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <strong
            style={{
              color: "var(--color-text)",
              fontWeight: "var(--font-weight-semibold)",
            }}
          >
            Urgent?
          </strong>{" "}
          Use this form for active security incidents, data breaches, or
          suspicious activity. Notifies on-call InfoSec team within 15 minutes.
        </p>
      </section>
      <IncidentReportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
