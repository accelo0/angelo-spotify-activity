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
        mint: "#dbfff8",
        black: "#000000",
        "gray-dark": "#242423",
        "gray-light": "#525453",
        white: "#EFF2F4",

        "player-in": "#D9D9D9",
        "player-out": "#A1A1A1",
        player: "#2B2727",
      },
      fontFamily: {
        GT_Flexa: ["GT-Flexa", "sans-serif"],
      },
      fontSize: {
        xs: "0.5rem",
        sm: "1rem",
        base: "16px",
        "1xl": "1.5rem",
        "2xl": "2rem",
        "3xl": "5rem",
      },
    },
  },
  plugins: [],
};
