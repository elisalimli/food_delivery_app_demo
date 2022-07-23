/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        black: ["Roboto-Black"],
        blackItalic: ["Roboto-BlackItalic"],
        bold: ["Roboto-Bold"],
        boldItalic: ["Roboto-BoldItalic"],
        italic: ["Roboto-Italic"],
        light: ["Roboto-Light"],
        lightItalic: ["Roboto-LightItalic"],
        medium: ["Roboto-Medium"],
        mediumItalic: ["Roboto-MediumItalic"],
        regular: ["Roboto-Regular"],
        thin: ["Roboto-Thin"],
        thinItalic: ["Roboto-ThinItalic"],
        condensedBold: ["RobotoCondensed-Bold"],
        condensedBoldItalic: ["RobotoCondensed-BoldItalic"],
        condensedItalic: ["RobotoCondensed-Italic"],
        condensedLight: ["RobotoCondensed-Light"],
        "condensed-LightItalic": ["RobotoCondensed-LightItalic"],
        "SpaceMono-Regular": ["SpaceMono-Regular"],
        "SpaceMono-Regular": ["SpaceMono-Regular"],
      },
      borderRadius: {
        "4xl": "32px",
        "5xl": "40px",
        "6xl": "48px",
        "7xl": "56px",
        "8xl": "88px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#FC6D3F", // orange
        secondary: "#CDCDD2", // gray

        // colors
        black: "#1E1F20",
        white: "#FFFFFF",

        lightGray100: "#F5F5F6",
        lightGray200: "#F6F6F7",
        lightGray300: "#EFEFF1",
        lightGray400: "#F8F8F9",
        lightGray500: "#9f7aea",
        lightGray600: "#805ad5",
        lightGray700: "#6b46c1",
        lightGray800: "#553c9a",
        lightGray900: "#44337a",
        darkgray: "#898C95",
      },
      lineHeight: {
        1: 22,
        2: 30,
        3: 36,
      },
      // fontSize: {
      //   xs: 12,
      //   sm: 14,
      //   base: 16,
      //   lg: 20,
      //   xl: 22,
      //   "2xl": 30,
      //   "6xl":50,
      // },
    },
  },
};
