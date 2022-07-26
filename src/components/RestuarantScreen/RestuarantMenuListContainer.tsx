import React from "react";
import { Animated } from "react-native";
import { useRestuarantStore } from "../../stores";
import { RestuarantInfoCommonProps } from "./RestuarantFood/RestuarantCarouselDots";
import RestuarantMenuListItem from "./RestuarantMenuListItem";
import uuid from "react-native-uuid";

const RestuarantMenuListContainer: React.FC<RestuarantInfoCommonProps> = ({
  scrollX,
}) => {
  const {
    restuarantItem: { menu },
  } = useRestuarantStore();

  return (
    <Animated.FlatList
      data={menu}
      renderItem={(props) => <RestuarantMenuListItem item={props.item} />}
      keyExtractor={(item) => `menu-${item.menuId}-${uuid.v4()}`}
      horizontal
      // snapToAlignment={"center"}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX as any } } }],
        { useNativeDriver: false }
      )}
    />
  );
};

export default RestuarantMenuListContainer;
