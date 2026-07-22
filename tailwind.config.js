/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },

      colors: {
        primary: "#00672E",
        secondary: "#8DB600",
        accent: "#F5A623",

        text: {
          primary: "#111827",
          secondary: "#555555",
        },

        border: "#E5E7EB",
      },
    },
  },
  plugins: [],
};
