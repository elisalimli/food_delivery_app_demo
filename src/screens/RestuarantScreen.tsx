import React from "react";
import { View, Text } from "react-native";
import RestuarantHeader from "../components/RestuarantScreen/RestuarantHeader";
import { useRestuarantStore } from "../stores";
import { tw } from "../utils";

const RestaurantScreen = () => {
  const { restuarantItem } = useRestuarantStore();

  return (
    <View style={tw`flex-1 bg-lightGray200`}>
      <RestuarantHeader />
    </View>
  );
};

export default RestaurantScreen;
