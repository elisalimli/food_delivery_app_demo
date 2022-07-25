import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../../constants";
import { useDataStore } from "../../stores";
import { tw } from "../../utils";

// Dummy Datas

const LeftHeader = () => {
  return (
    <View style={tw`flex-1 justify-center items-start`}>
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          style={{ width: 25, height: 25 }}
          source={icons.location}
        />
      </TouchableOpacity>
    </View>
  );
};

const MiddleHeader = () => {
  const { currentLocation } = useDataStore();
  return (
    <View
      style={tw`flex-3 rounded-3xl flex items-center justify-center bg-lightGray300`}
    >
      <Text style={tw`h4`}>{currentLocation.streetName}</Text>
    </View>
  );
};

const RightHeader = () => {
  return (
    <View style={tw`flex-1 justify-center items-end`}>
      <TouchableOpacity style={tw`justify-center flex-2`}>
        <Image
          resizeMode="contain"
          style={{ width: 25, height: 25 }}
          source={icons.basket}
        />
      </TouchableOpacity>
    </View>
  );
};

const HomeHeader = () => {
  return (
    <View style={tw`flex-row h-16 pt-4 mb-8 `}>
      <LeftHeader />
      <MiddleHeader />
      <RightHeader />
    </View>
  );
};

export default HomeHeader;
