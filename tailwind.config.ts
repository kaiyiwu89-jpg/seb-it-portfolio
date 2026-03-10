import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bricolage Grotesque'", "sans-serif"],
        body: ["'Geist'", "sans-serif"],
      },
      colors: {
        ink: "#111111",
        "ink-2": "#444444",
        "ink-3": "#888888",
        surface: "#F2F1EE",
        card: "#FFFFFF",
        border: "#E5E3DC",
        accent: "#2B5CE6",
        "accent-soft": "#EEF2FF",
        "accent-2": "#FF5C35",
      },
      borderRadius: {
        xl2: "18px",
        xl3: "24px",
      },
      boxShadow: {
        card: "0 2px 16px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.04)",
        "card-lg": "0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
