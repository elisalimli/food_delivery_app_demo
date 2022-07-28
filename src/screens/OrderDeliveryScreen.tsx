import React from "react";
import { View } from "react-native";
import Map from "../components/OrderDeliveryScreen/Map";
import { useLocation } from "../hooks/useLocation";
import { tw } from "../utils";

const OrderDelivery = () => {
  // getting current location
  useLocation();

  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Map />
    </View>
  );
};

export default OrderDelivery;
