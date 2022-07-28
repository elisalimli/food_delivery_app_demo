import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const SIZES = {
  WINDOW_WIDTH: width,
  WINDOW_HEIGHT: height,
};

// export const FONTS = {
//     largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
//     h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
//     h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
//     h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
//     h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 22 },
//     body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
//     body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
//     body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
//     body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
//     body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5, lineHeight: 22 },
// };
