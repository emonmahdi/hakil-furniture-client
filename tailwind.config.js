/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes:
    [
      {
      mytheme: {
        primary: "#1C2880",
        secondary: "#4C85E2",
        accent: "#EE363D",
        neutral: "#ffffff",
        "base-100": "#ffffff",
      },
    },
    false
  ]
  },
  plugins: [require("daisyui")],
}