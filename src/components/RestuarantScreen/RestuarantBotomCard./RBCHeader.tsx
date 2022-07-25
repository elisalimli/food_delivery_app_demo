import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { tw } from "../../../utils";

const RestuarantBottomCardHeader = () => {
  return (
    <View
      style={tw`flex-row justify-between border-b border-b-lightGray200 mb-2`}
    >
      <Text style={tw`h2 font-medium`}>4 Items in the cart</Text>
      <Text style={tw`h2 font-medium`}>$46.97</Text>
    </View>
  );
};

export default RestuarantBottomCardHeader;
