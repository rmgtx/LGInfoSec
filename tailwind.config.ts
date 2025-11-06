import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mend: {
          primary: "#1e40af",
          secondary: "#3b82f6",
          accent: "#ef4444",
        },
      },
    },
  },
  plugins: [],
};
export default config;

