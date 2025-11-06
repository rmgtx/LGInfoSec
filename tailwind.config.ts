import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design System: Color Tokens (Semantic Naming)
      colors: {
        mend: {
          // Primary Brand Colors
          primary: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1e40af",
            800: "#1e3a8a",
            900: "#1e3a8a",
          },
          // Secondary/Accent Colors
          secondary: {
            50: "#f0f9ff",
            100: "#e0f2fe",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
          },
          // Semantic Colors
          accent: {
            50: "#fef2f2",
            100: "#fee2e2",
            500: "#ef4444",
            600: "#dc2626",
            700: "#b91c1c",
          },
          // Neutral Grays
          neutral: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
          },
        },
      },
      // Design System: Typography Scale
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.025em" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: "0.025em" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "0" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: "0" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: "-0.025em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.025em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.05em" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.05em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.05em" }],
      },
      // Design System: Spacing Scale (8px base unit - extending Tailwind defaults)
      spacing: {
        "0.5": "0.125rem", // 2px
        "1.5": "0.375rem", // 6px
        "2.5": "0.625rem", // 10px
        "3.5": "0.875rem", // 14px
        "7": "1.75rem", // 28px
      },
      // Design System: Border Radius
      borderRadius: {
        none: "0",
        sm: "0.125rem", // 2px
        DEFAULT: "0.25rem", // 4px
        md: "0.375rem", // 6px
        lg: "0.5rem", // 8px
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
        full: "9999px",
      },
      // Design System: Shadows
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      // Design System: Max Width Container
      maxWidth: {
        container: "1280px",
        content: "1024px",
        narrow: "768px",
      },
    },
  },
  plugins: [],
};
export default config;

