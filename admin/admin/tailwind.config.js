/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    // Some useful comment
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      MyFont: ["Rubik Burned", "system-ui"],
      Admin: ["Oswald", "sans-serif"],
    },
    extend: {
      backgroundImage: { myimage: "url('./src/assets/background.jpg')" },
    },
    // colors: {
    //   primary: ["#096079"],
    //   secondary: ["#C4A484"],
    // },
  },
  plugins: [],
};
