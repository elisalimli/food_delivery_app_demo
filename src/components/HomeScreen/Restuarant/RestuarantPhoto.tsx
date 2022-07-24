import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { tw } from "../../../utils";

interface IRestuarantPhotoProps {
  photo: ImageSourcePropType;
}

const RestuarantPhoto: React.FC<IRestuarantPhotoProps> = ({ photo }) => {
  return (
    <Image
      style={tw`h-48 w-full rounded-5xl`}
      resizeMode="cover"
      source={photo}
    />
  );
};

export default RestuarantPhoto;
