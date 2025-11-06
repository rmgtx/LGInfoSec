/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable static export for GitHub Pages
  output: "export",
  // Set basePath if deploying to a subdirectory (e.g., /LGInfoSec)
  // For root domain (username.github.io), set this to "" or remove it
  // For subdirectory (username.github.io/repo-name), set this to "/repo-name"
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: [
      "@fullcalendar/react",
      "@fullcalendar/daygrid",
      "@fullcalendar/interaction",
    ],
  },
};

module.exports = nextConfig;
