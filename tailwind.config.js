/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        albert: ["Albert Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      sm: "600px",
      md: "850px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
