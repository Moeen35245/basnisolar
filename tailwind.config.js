module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        icream: "#F8F7FF",
        iblue: "#3641B7",
        ired: "#FF5670",
        iyellow: "#FDB400",
        inavy: "#003049",
        igray: "#627193",
        idark: "#121212",
        idarkBg: "#ffffff14",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px,20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          },
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      screens: {
        mobile: "420px",
      },
    },
  },
  plugins: [],
};
