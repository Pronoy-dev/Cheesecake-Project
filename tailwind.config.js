/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        title_color: "#734B33",
      },
      fontFamily: {
        custom_recursive: ["Recursive", "sans - serif"],
        custom_inter: ["Inter", "sans-serif"],
        custom_Inika: ["Inika", "serif"],
      },
    },
  },
  plugins: [],
};
