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
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
        >
          🚨 Report Security Incident
        </button>
      </div>
      <IncidentReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

