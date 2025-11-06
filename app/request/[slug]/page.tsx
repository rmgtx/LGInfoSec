"use client";

import { useParams } from "next/navigation";

export default function RequestPage() {
  const params = useParams();
  const slug = params.slug as string;

  const slugToTitle: Record<string, string> = {
    "app-approval": "App Approval / Testing Request",
    "vendor-risk": "Vendor Risk Assessment",
    "sftp-access": "SFTP Access Request",
    "breach-response": "Breach Response Form",
    "onboarding": "Onboarding / Offboarding",
    "system-access": "System Access Request",
    "job-title-change": "Job Title Change Form",
    "unlock-computer": "Unlock My Computer",
    "password-reset": "Password Reset",
    "vpn-setup": "VPN Setup",
    "hardware-request": "New Hardware Request",
  };

  const title = slugToTitle[slug] || "Request Form";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 mb-8">
            This form is currently under development. In the production version, this would
            contain a dynamic form based on the request type.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
            <p className="text-blue-800">
              <strong>Note:</strong> This is a placeholder page. The actual form will be
              implemented in a future phase with dynamic field generation based on the request
              type.
            </p>
          </div>
          <a
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            ← Back to Portal
          </a>
        </div>
      </div>
    </div>
  );
}

