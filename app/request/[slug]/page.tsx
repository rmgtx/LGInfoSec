import RequestPageClient from "./RequestPageClient";

// All valid slugs for static generation
const validSlugs = [
  "app-approval",
  "vendor-risk",
  "sftp-access",
  "breach-response",
  "onboarding",
  "system-access",
  "job-title-change",
  "unlock-computer",
  "password-reset",
  "vpn-setup",
  "hardware-request",
];

// Required for static export with dynamic routes
export function generateStaticParams() {
  return validSlugs.map((slug) => ({
    slug,
  }));
}

export default function RequestPage({ params }: { params: { slug: string } }) {
  return <RequestPageClient slug={params.slug} />;
}
