"use client";

const slugToTitle: Record<string, string> = {
  "app-approval": "App Approval / Testing Request",
  "vendor-risk": "Vendor Risk Assessment",
  "sftp-access": "SFTP Access Request",
  "breach-response": "Breach Response Form",
  onboarding: "Onboarding / Offboarding",
  "system-access": "System Access Request",
  "job-title-change": "Job Title Change Form",
  "unlock-computer": "Unlock My Computer",
  "password-reset": "Password Reset",
  "vpn-setup": "VPN Setup",
  "hardware-request": "New Hardware Request",
};

export default function RequestPageClient({ slug }: { slug: string }) {
  const title = slugToTitle[slug] || "Request Form";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mb-8 text-gray-600">
            This form is currently under development. In the production version,
            this would contain a dynamic form based on the request type.
          </p>
          <div className="mb-6 border-l-4 border-blue-600 bg-blue-50 p-4">
            <p className="text-blue-800">
              <strong>Note:</strong> This is a placeholder page. The actual form
              will be implemented in a future phase with dynamic field
              generation based on the request type.
            </p>
          </div>
          <a
            href="/"
            className="inline-block rounded-md bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
          >
            ← Back to Portal
          </a>
        </div>
      </div>
    </div>
  );
}
