"use client";

export default function MissionCard() {
  return (
    <div className="card mb-8 border-l-4 border-mend-primary-600">
      <h2 className="text-2xl font-semibold text-mend-neutral-900 mb-3">Welcome & Mission</h2>
      <p className="text-mend-neutral-700 text-lg leading-relaxed mb-6">
        Mend Information Security is dedicated to preserving the Confidentiality, Integrity, and Availability of Mend and customer data.
      </p>
      <button className="btn-primary">
        Contact InfoSec
      </button>
    </div>
  );
}

