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

function LinkList({ title, items, headingId }: { title: string; items: NavItem[]; headingId: string }) {
  return (
    <section className="card" aria-labelledby={headingId}>
      <h3 id={headingId} style={{ marginBottom: "var(--spacing-md)" }}>{title}</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item.slug} style={{ marginBottom: "var(--spacing-sm)" }}>
            <a
              href={`/request/${item.slug}`}
              style={{
                display: "flex",
                alignItems: "flex-start",
                padding: "var(--spacing-md)",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-text)",
                fontWeight: "var(--font-weight-medium)",
                transition: "all var(--transition-fast)",
                textDecoration: "none",
                border: "1px solid transparent",
                outline: "none",
              }}
              onFocus={(e) => {
                e.currentTarget.style.outline = "2px solid var(--color-primary)";
                e.currentTarget.style.outlineOffset = "2px";
                e.currentTarget.style.borderColor = "var(--color-primary)";
                e.currentTarget.style.backgroundColor = "rgba(10, 132, 255, 0.05)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.outline = "none";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(10, 132, 255, 0.1)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
              onMouseLeave={(e) => {
                if (document.activeElement !== e.currentTarget) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "transparent";
                }
              }}
            >
              <span className="material-symbols-outlined" style={{ 
                fontSize: "20px", 
                color: "var(--color-primary)",
                marginRight: "var(--spacing-sm)",
                flexShrink: 0,
                marginTop: "2px"
              }}>
                chevron_right
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ color: "var(--color-primary)", fontWeight: "var(--font-weight-medium)" }}>
                  {item.title}
                </div>
                {item.description && (
                  <div style={{ 
                    fontSize: "var(--font-size-sm)", 
                    color: "var(--color-text-secondary)",
                    marginTop: "var(--spacing-xs)",
                    lineHeight: "1.5"
                  }}>
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
    <section 
      aria-labelledby="requests-heading"
      style={{ marginBottom: "var(--spacing-xl)" }}
    >
      <h2 id="requests-heading" className="sr-only">Request Forms</h2>
      <div 
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ 
          gap: "var(--spacing-lg)",
        }}
      >
        <LinkList title="InfoSec Processes" items={infosecProcesses} headingId="infosec-heading" />
        <LinkList title="Employee Management" items={employeeManagement} headingId="employee-heading" />
        <LinkList title="IT Requests" items={itRequests} headingId="it-heading" />
      </div>
    </section>
  );
}

