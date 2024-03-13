/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Jost-Font": ['"Jost"', "sans-serif"],
      },
      width: {
        "100px": "100px",
        "400px": "25rem",
        "90%": "90%",
        "calc-100-minus-90": "calc(100% - 90px)",
      },
      height: {
        "150px": "9.375rem",
        "460px": "28.75rem",
        "420px": "26.25rem",
        "500px": "31.25rem",
        "60vh": "60vh",
      },
      padding: {
        "4/5": "80%",
        "30px": "30px",
      },
      spacing: {
        "3/2": "150%",
        "4/5": "80%",
        "30%": "30%",
      },
      boxShadow: {
        "custom-orange": "7px 7px 0px 0px rgba(250, 71, 41, 0.18)",
        "custom-dark": "7px 7px 0px 0px rgba(16, 16, 16, 0.18)",
      },
      colors: {
        "custom-color": "#e7e7e7",
      },
      transitionTimingFunction: {
        "custom-cubic": "cubic-bezier(0, 0, 0.3642, 1)",
      },
    },
  },
  plugins: [
    {
      groupHover: {},
    },
  ],
};
