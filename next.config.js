/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
