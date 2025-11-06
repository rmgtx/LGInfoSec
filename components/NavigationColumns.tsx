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
  {
    title: "Unlock My Computer",
    slug: "unlock-computer",
    description: "Request to unlock your computer account",
  },
  {
    title: "Password Reset",
    slug: "password-reset",
    description: "Request a password reset for your account",
  },
  {
    title: "VPN Setup",
    slug: "vpn-setup",
    description: "Request VPN access and setup",
  },
  {
    title: "New Hardware Request",
    slug: "hardware-request",
    description: "Request new hardware or equipment",
  },
];

function LinkList({
  title,
  items,
  headingId,
}: {
  title: string;
  items: NavItem[];
  headingId: string;
}) {
  return (
    <section className="card" aria-labelledby={headingId}>
      <div className="card-header">
        <h3 id={headingId} className="card-title" style={{ margin: 0 }}>
          {title}
        </h3>
      </div>
      <ul className="link-list" style={{ marginTop: "var(--spacing-md)" }}>
        {items.map((item) => (
          <li key={item.slug}>
            <a
              href={`/request/${item.slug}`}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "var(--spacing-md)",
              }}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: "24px",
                  color: "var(--color-primary)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
                aria-hidden="true"
              >
                chevron_right
              </span>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    color: "var(--color-text)",
                    fontWeight: "var(--font-weight-semibold)",
                    fontSize: "var(--font-size-base)",
                    lineHeight: "var(--line-height-normal)",
                    marginBottom: item.description ? "var(--spacing-xs)" : 0,
                  }}
                >
                  {item.title}
                </div>
                {item.description && (
                  <div
                    className="text-muted"
                    style={{
                      lineHeight: "var(--line-height-normal)",
                    }}
                  >
                    {item.description}
                  </div>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function NavigationColumns() {
  return (
    <section aria-labelledby="requests-heading">
      <h2 id="requests-heading" className="sr-only">
        Request Forms
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{
          gap: "var(--section-gap)",
        }}
      >
        <LinkList
          title="InfoSec Processes"
          items={infosecProcesses}
          headingId="infosec-heading"
        />
        <LinkList
          title="Employee Management"
          items={employeeManagement}
          headingId="employee-heading"
        />
        <LinkList
          title="IT Requests"
          items={itRequests}
          headingId="it-heading"
        />
      </div>
    </section>
  );
}
