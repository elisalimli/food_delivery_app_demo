import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { SIZES } from "../../../constants/theme";

interface RestuarantFoodImageProps {
  photo: ImageSourcePropType;
}

const RestuarantFoodImage: React.FC<RestuarantFoodImageProps> = ({ photo }) => {
  return (
    <Image
      resizeMode="cover"
      source={photo}
      style={{
        width: SIZES.WINDOW_WIDTH,
        height: "95%",
      }}
    />
  );
};

export default RestuarantFoodImage;
