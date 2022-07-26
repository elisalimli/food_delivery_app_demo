import React from "react";
import { View, Text } from "react-native";
import RestuarantHeader from "../components/RestuarantScreen/RestuarantHeader";
import RestuarantOrderInfo from "../components/RestuarantScreen/RestuarantOrderInfo";
import { tw } from "../utils";

const RestaurantScreen = () => {
  return (
    <View style={tw`flex-1 bg-lightGray200`}>
      <RestuarantHeader />
      <RestuarantOrderInfo />
    </View>
  );
};

export default RestaurantScreen;
