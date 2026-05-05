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
