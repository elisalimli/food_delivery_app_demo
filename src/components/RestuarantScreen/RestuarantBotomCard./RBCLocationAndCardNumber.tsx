import React, { Fragment } from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../../../constants";
import { tw } from "../../../utils";

const RBCLocationAndCardNumber = () => {
  return (
    <View style={tw`my-4 flex-row items-center justify-between`}>
      <View style={tw`flex-row items-center`}>
        <Image source={icons.pin} style={tw`w-4 h-4 tint-darkgray mr-2`} />
        <Text style={tw`font-medium`}>San Fransisco</Text>
      </View>
      {/* Card number */}
      <View style={tw`flex-row items-center`}>
        <Image
          source={icons.master_card}
          style={tw`w-4 h-4 tint-darkgray mr-2`}
        />
        <View style={tw`flex-row items-center mr-1 ml-1`}>
          {/* Card encryption dots */}
          <View style={tw`w-1 h-1 bg-black/90 mr-[2px] rounded-full`} />
          <View style={tw`w-1 h-1 bg-black/90 mr-[2px] rounded-full`} />
          <View style={tw`w-1 h-1 bg-black/90 mr-[2px] rounded-full`} />
          <View style={tw`w-1 h-1 bg-black/90 rounded-full`} />
        </View>
        <Text>5491</Text>
      </View>
    </View>
  );
};

export default RBCLocationAndCardNumber;
