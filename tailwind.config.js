/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        background: "#0a0e1a",
        card: "#181f2a",
        border: "#232a3d",
        foreground: "#f8fafc",
        muted: "#64748b",
        accent: "#3b82f6",
        "accent-foreground": "#f8fafc",
        primary: "#2563eb",
        "primary-foreground": "#f8fafc",
        secondary: "#1e293b",
        "secondary-foreground": "#f8fafc",
        destructive: "#ef4444",
        "destructive-foreground": "#f8fafc",
        ring: "#3b82f6",
        input: "#232a3d",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
