/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#5442BD",
        red: "#EC1353",
        yellow: "#E8DA55",
        gray: "#EDEDED",
        "deep-blue": "#010026",
        "dark-gray": "#292727",
        "gray": "#403b3b",
        "light-gray": "#333030",
        "opaque-black": "rgba(0, 0, 0, 0.3)",
        "dark-purple": "#21094E",
        "pink": "#E1A5D9",
        purple: "#511281",
        "dark-cyan": "#4CA1A3",
        green: "#A5E1AD",
        "light-green": "#4bc03f",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
        rubik: ["Rubik", "sans-serif"]
      },
      content: {
        profile_picture: "url('./assets/me_1.png')",
        other_picture: "url('./assets/temp_img_1.jpg')",
        o_other_picture: "url('./assets/temp_img_2.jpg')",
        contact_picture: "url('./assets/temp_img_3.jpg')",
        project_picture_1: "url('./assets/temp_img_4.jpg')",
        project_picture_2: "url('./assets/temp_img_5.jpg')",
        resume: "url('./assets/Zhi_Zheng_Resume.pdf')"
      }
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
}
