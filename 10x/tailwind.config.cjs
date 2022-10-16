/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "cus-ind": "#4639a7",
        "nav-f2": "#dce6fa",
        "back-f2": "#e5ebf7",
        "text-col": "#8c84cf",
      },
    },
  },
  plugins: [],
};
