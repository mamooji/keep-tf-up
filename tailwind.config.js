/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./app/_layout.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// content: ["./app/_layout.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
