/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimaryColor: "#734B33",
      },
      fontFamily: {
        Inika: ["Inika", "serif"],
      },
    },
  },
  plugins: [],
};
