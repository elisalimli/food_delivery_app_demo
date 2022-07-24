import React from "react";
import { View, Text } from "react-native";
import { useRestuarantStore } from "../stores";

const Restaurant = () => {
  const { restuarantItem } = useRestuarantStore();
  console.log(restuarantItem, "item");
  return (
    <View>
      <Text>
        {restuarantItem.duration},{restuarantItem?.courier?.name}
      </Text>
    </View>
  );
};

export default Restaurant;
