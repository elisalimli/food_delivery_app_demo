import React from "react";
import { Animated, View } from "react-native";
import { SIZES } from "../../../constants/theme";
import { useGetColor } from "../../../hooks";
import { useRestaurantStore } from "../../../stores";
import { tw } from "../../../utils";

export interface RestuarantInfoCommonProps {
  scrollX: Animated.Value;
}

const RestuarantCarouselDots: React.FC<RestuarantInfoCommonProps> = ({
  scrollX,
}) => {
  const {
    currentRestuarant: { menu },
  } = useRestaurantStore();

  return (
    <View style={tw`flex-row justify-center items-center mt-8`}>
      {menu.map((m, index) => {
        const dotPosition = Animated.divide(scrollX, SIZES.WINDOW_WIDTH);
        const dotOpacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        const dotSize = dotPosition.interpolate({
          inputRange: [index - 2, index - 1, index, index + 1, index + 2],
          outputRange: [0.8 * 8, 0.8 * 10, 12, 0.8 * 10, 0.8 * 8],
          extrapolate: "clamp",
        });
        const dotColor = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [
            useGetColor("darkgray"),
            useGetColor("primary"),
            useGetColor("darkgray"),
          ],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[
              tw`w-3 h-3 rounded-full  mx-3`,

              { width: dotSize, height: dotSize },
              {
                backgroundColor: dotColor,
              },
              {
                opacity: dotOpacity,
              },
            ]}
            key={`${m.menuId}-dot-${index}`}
          ></Animated.View>
        );
      })}
    </View>
  );
};

export default RestuarantCarouselDots;
