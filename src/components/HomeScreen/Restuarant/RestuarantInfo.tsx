import React, { Fragment } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { icons } from "../../../constants";
import useDataStore, { IRestaurantItem } from "../../../stores/useDataStore";
import { tw } from "../../../utils";
import RestuarantPriceRating from "./RestuarantPriceRating";
import RestuarantCategories from "./RestuarantCategories";

interface IRestuarantInfoProps {
  item: IRestaurantItem;
}

const RestuarantInfo: React.FC<IRestuarantInfoProps> = ({ item }) => {
  const { categories, rating, name, duration, id, priceRating } = item;
  return (
    <Fragment>
      {/* title */}
      <Text style={tw`body2`}>{name}</Text>
      <View style={tw`py-4 flex-row items-center`}>
        {/* rating */}
        <Image source={icons.star} style={tw`tint-primary w-4 h-4 mr-2`} />
        <Text style={tw`mr-6 body3`}>{rating}</Text>

        {/* Categories */}
        <RestuarantCategories item={item} />
        {/* price rating */}
        <RestuarantPriceRating item={item} />
      </View>
    </Fragment>
  );
};

export default RestuarantInfo;
