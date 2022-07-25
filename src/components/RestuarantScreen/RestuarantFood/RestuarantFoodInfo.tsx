import React, { Fragment } from "react";
import { Animated, Image, Text, View } from "react-native";
import { icons } from "../../../constants";
import { SIZES } from "../../../constants/theme";
import { useRestuarantStore } from "../../../stores";
import {
  IRestaurantItem,
  IRestaurantMenuItem,
} from "../../../stores/useDataStore";
import { tw } from "../../../utils";
import RestuarantCarouselDots from "./RestuarantCarouselDots";
import RestuarantMenuList from "../RestuarantMenuListContainer";

interface RestuarantFoodInfoProps {
  item: IRestaurantMenuItem;
}

const RestuarantFoodInfo: React.FC<RestuarantFoodInfoProps> = ({
  item: { name, calories, price, description },
}) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default RestuarantFoodInfo;
