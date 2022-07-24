import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { tw } from "../../../utils";

interface IRestuarantDurationProps {
  duration: string;
}

const RestuarantDuration: React.FC<IRestuarantDurationProps> = ({
  duration,
}) => {
  return (
    <View
      style={tw`absolute w-1/3 bg-white bottom-0 p-4 rounded-tr-5xl rounded-bl-5xl shadow-sm`}
    >
      <Text style={tw`h4 text-gray-800`}>{duration}</Text>
    </View>
  );
};

export default RestuarantDuration;
