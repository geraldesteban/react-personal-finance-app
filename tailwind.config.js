/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myFontRegular: ["PublicSansRegular"],
        myFontBold: ["PublicSansBold"],
      },
      colors: {
        beige: {
          100: "#F8F4F0",
          500: "#98908B",
        },
        grey: {
          100: "#F2F2F2",
          300: "#B3B3B3",
          500: "#696868",
          900: "#201F24",
        },
        green: "#277C78",
        yellow: "#F2CDAC",
        cyan: "#82C9D7",
        navy: "#626070",
        red: "#C94736",
        purple: "#826CB0",
        turquoise: "#597C7C",
        brown: "#93674F",
        magenta: "#934F6F",
        blue: "#3F82B2",
        navyGrey: "#97A0AC",
        armyGreen: "#7F9161",
        pink: "#AF81BA",
        gold: "#CAB361",
        orange: "#BE6C49",
        white: "#FFFFFF",
      },
    },
    screens: {
      // for login ui
      xxxl: { max: "1550px" },

      // for some ui
      xxl: { max: "1352px" },

      // ↓ 1279px and below (laptops, small desktops)
      xl: { max: "1279px" },

      // ↓ 1023px and below (tablets landscape)
      lg: { max: "1023px" },

      // ↓ 767px and below (tablets portrait)
      md: { max: "767px" },

      // ↓ 639px and below (mobile phones)
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
