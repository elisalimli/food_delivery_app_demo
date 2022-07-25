import React from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../../../constants";
import { SIZES } from "../../../constants/theme";
import { IRestaurantMenuItem } from "../../../stores/useDataStore";
import { tw } from "../../../utils";

interface RestuarantFoodInfoProps {
  item: IRestaurantMenuItem;
}

const RestuarantFoodInfo: React.FC<RestuarantFoodInfoProps> = ({
  item: { name, calories, price, description },
}) => {
  return (
    <View style={tw`mb-8`}>
      <View style={[tw`my-4 px-1 items-center`, { width: SIZES.WINDOW_WIDTH }]}>
        {/* Name & price */}
        <Text style={tw`h2`}>
          {name} - ${price.toFixed(2)}
        </Text>
        {/* Description */}
        <Text style={tw`body4 my-2`}>{description}</Text>
      </View>
      {/* Calorie */}
      <View style={tw`flex-row items-center justify-center `}>
        <Image source={icons.fire} style={tw`w-4 h-4 mr-1`} />
        <Text style={tw`text-darkgray`}>{calories.toFixed(2)} cal</Text>
      </View>
    </View>
  );
};

export default RestuarantFoodInfo;
