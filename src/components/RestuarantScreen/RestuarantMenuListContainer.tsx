import React from "react";
import { Animated } from "react-native";
import { useRestuarantStore } from "../../stores";
import { RestuarantInfoCommonProps } from "./RestuarantFood/RestuarantCarouselDots";
import RestuarantMenuListItem from "./RestuarantMenuListItem";

const RestuarantMenuListContainer: React.FC<RestuarantInfoCommonProps> = ({
  scrollX,
}) => {
  const {
    restuarantItem: { menu },
  } = useRestuarantStore();

  return (
    <Animated.ScrollView
      horizontal
      // snapToAlignment={"center"}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX as any } } }],
        { useNativeDriver: false }
      )}
    >
      {menu?.map((item, id) => (
        <RestuarantMenuListItem item={item} key={`menu-${id}`} />
      ))}
    </Animated.ScrollView>
  );
};

export default RestuarantMenuListContainer;
