import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRestaurantstore } from "../../../stores";
import { tw } from "../../../utils";

const RestuarantBottomCardHeader = () => {
  const { orderList } = useRestaurantstore();
  return (
    <View
      style={tw`flex-row justify-between border-b border-b-lightGray200 mb-2`}
    >
      <Text style={tw`h2 font-medium`}>
        {orderList?.length} Items in the cart
      </Text>
      <Text style={tw`h2 font-medium`}>$46.97</Text>
    </View>
  );
};

export default RestuarantBottomCardHeader;
