// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        set: "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(50, 73, 40, 1) 100%)",
      },
      colors: {
        white: "#EFF2F4",

        "player-in": "#D9D9D9",
        "player-out": "#A1A1A1",
        player: "#2B2727",
      },
      fontFamily: {
        GT_Flexa: ["GT-Flexa", "sans-serif"],
        "Instrument-Serif": ["Instrument Serif", "serif"],
      },
      fontSize: {
        base: "16px",
      },
    },
  },
  plugins: [],
};
