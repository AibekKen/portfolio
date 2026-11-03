/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8fafc",
          100: "#f1f5f9",
          900: "#0f172a",
          700: "#1e293b",
          600: "#475569",
          primary: "#0B63F6",
          "primary-dark": "#2563EB",
          dark: "#061B4E",
          "dark-alt": "#0B2A6F",
        },
        // AI Studio palette: cobalt carries the hero, gold is the single warm accent
        cobalt: {
          600: "#0B5AE6",
          700: "#0A47C2",
          800: "#08379A",
          900: "#072A78",
          950: "#051C52",
        },
        gold: {
          200: "#FFE7A3",
          300: "#FFD866",
          400: "#F7C531",
          500: "#E3A512",
        },
        ink: "#0E1630",
      },
      fontFamily: {
        sans: ["Onest", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      borderRadius: {
        brand: "16px",
        "brand-lg": "24px",
      },
      spacing: {
        "safe-top": "max(1rem, env(safe-area-inset-top))",
        "safe-bottom": "max(1rem, env(safe-area-inset-bottom))",
      },
    },
  },
  plugins: [],
}
