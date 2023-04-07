/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addComponents }) {
      addComponents({
        ".btn": {
          padding: ".2rem 1rem !important",
          borderRadius: ".5rem !important",
          margin: ".1rem",
          fontWeight: "600 !important",
          backgroundColor: "#6366F1",
          color: "#fff",
          textTransform: "uppercase",
        },
        ".btn:hover": {
          backgroundColor: "#4338CA",
        },
        ".btn-delete": {
          padding: ".5rem 1rem !important",
          borderRadius: ".5rem !important",
          margin: ".1rem",
          fontWeight: "600 !important",
          backgroundColor: "#EF4444",
          color: "#fff",
          textTransform: "uppercase",
        },
        ".btn-delete:hover": {
          backgroundColor: "#C03733",
        },
      });
    }),
  ],
  daisyui: {
    themes: ["light"],
  },

};
