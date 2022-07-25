import React from "react";
import { Animated, View } from "react-native";
import { useRestuarantStore } from "../../stores";
import RestuarantCarouselDots from "./RestuarantCarouselDots";
import RestuarantMenuList from "./RestuarantMenuListContainer";

const RestuarantInfo = () => {
  const {
    restuarantItem: { menu },
  } = useRestuarantStore();

  const scrollX = new Animated.Value(0);

  return (
    <View>
      <RestuarantMenuList scrollX={scrollX} />
      <RestuarantCarouselDots scrollX={scrollX} />
    </View>
  );
};

export default RestuarantInfo;
