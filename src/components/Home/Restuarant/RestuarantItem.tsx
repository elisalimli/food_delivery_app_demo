import React from "react";
import { TouchableOpacity, View } from "react-native";
import { IRestaurant } from "../../../stores/useDataStore";
import { tw } from "../../../utils";
import RestuarantDuration from "./RestuarantDuration";
import RestuarantInfo from "./RestuarantInfo";
import RestuarantPhoto from "./RestuarantPhoto";

const RestaurantItem = ({ item }: { item: IRestaurant }) => {
  const { photo, duration } = item;
  return (
    <TouchableOpacity
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
