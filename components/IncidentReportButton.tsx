"use client";

import { useState } from "react";
import IncidentReportModal from "./IncidentReportModal";

export default function IncidentReportButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mb-8 text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-accent py-4 px-8 text-lg shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-mend-accent-500 focus:ring-offset-2"
        >
          🚨 Report Security Incident
        </button>
      </div>
      <IncidentReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

