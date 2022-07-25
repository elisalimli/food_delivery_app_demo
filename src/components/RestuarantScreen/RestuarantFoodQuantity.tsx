import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { tw } from "../../utils";

const RestuarantFoodQuantity: React.FC = () => {
  return (
    <View
      style={tw`w-full flex-row justify-center items-center absolute h-12 -bottom-1`}
    >
      <TouchableOpacity
        style={tw`px-2 py-1 bg-white rounded-tl-2xl rounded-bl-2xl`}
      >
        <Text style={tw`font-medium text-xl p-1`}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tw`px-2 py-1 bg-white `}>
        <Text style={tw`font-medium text-xl p-1`}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`px-2 py-1 bg-white rounded-tr-2xl rounded-br-2xl `}
      >
        <Text style={tw`font-medium text-xl p-1`}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RestuarantFoodQuantity;
