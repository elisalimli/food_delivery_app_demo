const twrnc = require("twrnc"); // DO THIS

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    twrnc.plugin(({ addUtilities }) => {
      addUtilities({
        // 😎 similar to `@apply`
        largeTitle: `font-Roboto-Regular text-5xl`,
        h1: `font-Roboto-Black text-3xl`,
        h2: `font-Roboto-Bold text-2xl`,
        h3: `font-Roboto-Bold text-xl`,
        h4: `font-Roboto-Bold text-lg`,
        body1: `font-Roboto-Regular text-3xl`,
        body2: `font-Roboto-Regular text-xl`,
        body3: `font-Roboto-Regular text-base`,
        body4: `font-Roboto-Regular text-sm`,
        body5: `font-Roboto-Regular text-xs`,
        "body-text": `font-serif leading-relaxed tracking-wide text-gray-800`,
      });
    }),
  ],
};
