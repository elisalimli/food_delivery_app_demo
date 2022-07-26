import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { RootStackNavigationProps } from "../../../Screens";
import { useRestaurantStore } from "../../../stores";
import { IRestaurantItem } from "../../../stores/useDataStore";
import { tw } from "../../../utils";
import RestuarantDuration from "./RestuarantDuration";
import RestuarantInfo from "./RestuarantInfo";
import RestuarantPhoto from "./RestuarantPhoto";

const RestaurantItem = ({ item }: { item: IRestaurantItem }) => {
  const { photo, duration } = item;
  const navigation = useNavigation<RootStackNavigationProps>();
  const { setCurrentRestuarant } = useRestaurantStore();

  const handlePress = () => {
    setCurrentRestuarant(item);
    navigation.navigate("Restaurant");
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      // onpress navigate to the Restuarant screen
    >
      <View>
        {/* photo */}
        <RestuarantPhoto photo={photo} />
        {/* duration  */}
        <RestuarantDuration duration={duration} />
      </View>
      {/* Restuarant info */}
      <View style={tw`my-2`}>
        <RestuarantInfo item={item} />
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantItem;
