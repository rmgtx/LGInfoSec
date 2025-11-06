import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mend InfoSec Portal",
  description: "Information Security Portal - Preserving Confidentiality, Integrity, and Availability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/@fullcalendar/core@6.1.15/main.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/@fullcalendar/daygrid@6.1.15/main.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

