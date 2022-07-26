import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { RootStackNavigationProps } from "../../../Screens";
import { tw } from "../../../utils";

const RBCOrderButton = () => {
  const navigation = useNavigation<RootStackNavigationProps>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("OrderDelivery")}
      style={tw`bg-primary p-4 items-center justify-center rounded-2xl mt-1`}
    >
      <Text style={tw`text-white font-medium text-lg leading-tight`}>
        Order
      </Text>
    </TouchableOpacity>
  );
};

export default RBCOrderButton;
