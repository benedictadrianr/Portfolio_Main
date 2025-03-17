/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00F7FF",
          700: "#0F3F43",
          600: "#0CB0BC",
          500: "#00F7FF",
        },

        secondary: "#171D25",
      },
    },
  },
  plugins: [],
};
