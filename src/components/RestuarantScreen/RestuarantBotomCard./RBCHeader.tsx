import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useRestaurantStore } from "../../../stores";
import { useGetAllOrderCount } from "../../../stores/useRestuarantStore";
import { tw } from "../../../utils";

const RestuarantBottomCardHeader = () => {
  const { orderList } = useRestaurantStore();
  const [allOrderCount, sum] = useGetAllOrderCount();
  return (
    <View
      style={tw`flex-row justify-between border-b border-b-lightGray200 mb-2`}
    >
      <Text style={tw`h2 font-medium`}>{allOrderCount} Items in the cart</Text>
      <Text style={tw`h2 font-medium`}>${sum.toFixed(2)}</Text>
    </View>
  );
};

export default RestuarantBottomCardHeader;
