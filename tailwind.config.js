/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "deep-blue": "#010026",
        "deep-blue": "rgb(5, 8, 22)",
        myBlue: "#2CBCE9",
        myRed: "#DC4492",
        yellow: "#FDCC49",
        myPurple: "rgb(147, 51, 234)",
        "card-color": "rgb(21,16,48)",
        "form-color": "rgb(21,16,48)",
        "nav-color": "rgb(21,16,48)",
        "footer-color": "rgb(21,16,48)",
        "modal-menu-color": "rgb(21,16,48)",
        grey: "#ededed",
        "dark-grey": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",

        "gradient-green-pink":
          "linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)"
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/people/carlos.png')",
        person2: "url('./assets/people/jonathan.jpg')",
        person3: "url('./assets/people/person-3.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
