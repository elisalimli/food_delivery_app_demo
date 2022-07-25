import React from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../constants";
import { SIZES } from "../../constants/theme";
import { useRestuarantStore } from "../../stores";
import {
  IRestaurantItem,
  IRestaurantMenuItem,
} from "../../stores/useDataStore";
import { tw } from "../../utils";
import RestuarantFoodImage from "./RestuarantFoodImage";
import RestuarantFoodInfo from "./RestuarantFoodInfo";
import RestuarantFoodQuantity from "./RestuarantFoodQuantity";

interface RestuarantMenuListItemProps {
  item: IRestaurantMenuItem;
}

const RestuarantMenuListItem: React.FC<RestuarantMenuListItemProps> = ({
  item,
}) => {
  const {
    restuarantItem: { menu },
  } = useRestuarantStore();

  return (
    <View>
      <View
        style={{
          height: SIZES.WINDOW_HEIGHT * 0.375,
        }}
      >
        {/* Food image */}
        <RestuarantFoodImage photo={item.photo} />
        {/* Quantity */}
        <RestuarantFoodQuantity />
      </View>
      <RestuarantFoodInfo item={item} />
    </View>
  );
};

export default RestuarantMenuListItem;
