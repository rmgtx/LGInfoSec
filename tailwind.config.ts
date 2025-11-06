import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Design System: Color Tokens mapped from CSS Variables
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          hover: "var(--color-primary-hover)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
        },
        bg: {
          DEFAULT: "var(--color-bg)",
          alt: "var(--color-bg-alt)",
        },
        border: {
          DEFAULT: "var(--color-border)",
        },
        text: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
        },
        success: {
          DEFAULT: "var(--color-success)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
        },
        error: {
          DEFAULT: "var(--color-error)",
        },
      },
      // Design System: Typography mapped from CSS Variables
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
      fontSize: {
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
      },
      fontWeight: {
        regular: "var(--font-weight-regular)",
        medium: "var(--font-weight-medium)",
        bold: "var(--font-weight-bold)",
      },
      // Design System: Spacing mapped from CSS Variables
      spacing: {
        xs: "var(--spacing-xs)",
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
        xl: "var(--spacing-xl)",
      },
      // Design System: Border Radius mapped from CSS Variables
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      // Design System: Shadows mapped from CSS Variables
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      // Design System: Transitions mapped from CSS Variables
      transitionDuration: {
        fast: "0.15s",
        medium: "0.3s",
      },
      transitionTimingFunction: {
        "ease-default": "ease",
      },
      // Design System: Max Width Container
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;

