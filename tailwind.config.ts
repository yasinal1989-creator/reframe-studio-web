import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#070B0F",
        "background-soft": "#0B1118",
        panel: "#121A22",
        cream: "#F4EFE6",
        "cream-muted": "#CFC4B5",
        amber: "#C9854D",
        gold: "#D69A45",
        line: "rgba(201,133,77,0.25)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        amber: "0 0 48px rgba(201, 133, 77, 0.18)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.34)"
      },
      backgroundImage: {
        "radial-amber":
          "radial-gradient(circle at 50% 40%, rgba(201,133,77,0.18), transparent 42%)",
        "fine-grid":
          "linear-gradient(rgba(244,239,230,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,230,0.035) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
