/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        "Roboto-Black": ["Roboto-Black"],
        "Roboto-BlackItalic": ["Roboto-BlackItalic"],
        "Roboto-Bold": ["Roboto-Bold"],
        "Roboto-BoldItalic": ["Roboto-BoldItalic"],
        "Roboto-Italic": ["Roboto-Italic"],
        "Roboto-Light": ["Roboto-Light"],
        "Roboto-LightItalic": ["Roboto-LightItalic"],
        "Roboto-Medium": ["Roboto-Medium"],
        "Roboto-MediumItalic": ["Roboto-MediumItalic"],
        "Roboto-Regular": ["Roboto-Regular"],
        "Roboto-Thin": ["Roboto-Thin"],
        "Roboto-ThinItalic": ["Roboto-ThinItalic"],
        "RobotoCondensed-Bold": ["RobotoCondensed-Bold"],
        "RobotoCondensed-BoldItalic": ["RobotoCondensed-BoldItalic"],
        "RobotoCondensed-Italic": ["RobotoCondensed-Italic"],
        "RobotoCondensed-Light": ["RobotoCondensed-Light"],
        "RobotoCondensed-LightItalic": ["RobotoCondensed-LightItalic"],
        "SpaceMono-Regular": ["SpaceMono-Regular"],
        "SpaceMono-Regular": ["SpaceMono-Regular"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#FC6D3F", // orange
        secondary: "#CDCDD2", // gray

        // colors
        black: "#1E1F20",
        white: "#FFFFFF",

        lightGray: {
          100: "#F5F5F6",
          200: "#F6F6F7",
          300: "#EFEFF1",
          400: "#F8F8F9",
          500: "#9f7aea",
          600: "#805ad5",
          700: "#6b46c1",
          800: "#553c9a",
          900: "#44337a",
        },
        darkgray: "#898C95",
      },
      fontSize: {
        xs: 12,
        sm: 14,
        base: 16,
        lg: 20,
        xl: 22,
        "2xl": 30,
        "6xl":50,
      },
      lineHeight: {
        "1":22,
        "2":30,
        "3":36
      },
    },
  },
  plugins: [],
};
