import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/react/node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        primary: {
          50: "#f0f4ff",
          100: "#e0e8ff",
          200: "#c7d6fe",
          300: "#a4b9fc",
          400: "#7f93f8",
          500: "#5f6ff2",
          600: "#4a4ee6",
          700: "#3d3ecb",
          800: "#3437a4",
          900: "#243C7C", // Brand color
          950: "#1e2654",
        },
        brand: "#243C7C",
        dark: {
          bg: "#12141c", // Soft modern dark main background
          surface: "#1a1d27", // Soft dark for cards/header
          border: "#282c3e", // Softer dark border
          navy: "#1a1f36",
        },
        light: {
          gray: "#f5f7fa",
        },
        medium: {
          gray: "#e8ecf1",
        },
      },
      fontFamily: {
        sans: ["General Sans", "sans-serif"],
        geist: ["var(--font-geist)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        medium: "0 4px 16px rgba(0, 0, 0, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-in": "slideIn 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-10px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [heroui() as any],
};

export default config;
