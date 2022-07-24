import { create } from "twrnc";

// creating tai\lwind css instance
const tw = create({
  theme: require(`../../tailwind.config.js`).theme,
  plugins: require("../../tailwind.config.plugin.js").plugins,
});

export default tw;
