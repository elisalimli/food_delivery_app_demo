import { create } from "twrnc";

// creating tailwind css instance
 const tw = create({
    theme: require(`../../tailwind.config.js`).theme,
    plugins: require("../../tailwind.config.public.js").plugins,
  });

  export default tw