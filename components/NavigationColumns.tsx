"use client";

interface NavItem {
  title: string;
  slug: string;
  description?: string;
}

const infosecProcesses: NavItem[] = [
  { title: "App Approval / Testing Request", slug: "app-approval" },
  { title: "Vendor Risk Assessment", slug: "vendor-risk" },
  { title: "SFTP Access Request", slug: "sftp-access" },
  { title: "Breach Response Form", slug: "breach-response" },
];

const employeeManagement: NavItem[] = [
  { title: "Onboarding / Offboarding", slug: "onboarding" },
  { title: "System Access Request", slug: "system-access" },
  { title: "Job Title Change Form", slug: "job-title-change" },
];

const itRequests: NavItem[] = [
  { title: "Unlock My Computer", slug: "unlock-computer", description: "Request to unlock your computer account" },
  { title: "Password Reset", slug: "password-reset", description: "Request a password reset for your account" },
  { title: "VPN Setup", slug: "vpn-setup", description: "Request VPN access and setup" },
  { title: "New Hardware Request", slug: "hardware-request", description: "Request new hardware or equipment" },
];

function LinkList({ title, items }: { title: string; items: NavItem[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.slug}>
            <a
              href={`/request/${item.slug}`}
              className="block p-3 rounded-md hover:bg-blue-50 transition group"
            >
              <span className="text-blue-600 font-medium group-hover:text-blue-700">
                {item.title}
              </span>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function NavigationColumns() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <LinkList title="InfoSec Processes" items={infosecProcesses} />
      <LinkList title="Employee Management" items={employeeManagement} />
      <LinkList title="IT Requests" items={itRequests} />
    </div>
  );
}

