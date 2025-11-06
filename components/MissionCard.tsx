"use client";

export default function MissionCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-blue-600">
      <h2 className="text-2xl font-bold text-gray-900 mb-3">Welcome & Mission</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Mend Information Security is dedicated to preserving the Confidentiality, Integrity, and Availability of Mend and customer data.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
        Contact InfoSec
      </button>
    </div>
  );
}

