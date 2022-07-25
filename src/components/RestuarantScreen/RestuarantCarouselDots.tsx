import React from "react";
import { Animated, View } from "react-native";
import { SIZES } from "../../constants/theme";
import { useGetColor } from "../../hooks";
import { useRestuarantStore } from "../../stores";
import { tw } from "../../utils";

const RestuarantCarouselDots: React.FC<{ scrollX: Animated.Value }> = ({
  scrollX,
}) => {
  const {
    restuarantItem: { menu },
  } = useRestuarantStore();

  return (
    <View style={tw`flex-row`}>
      {menu.map((m, index) => {
        const dotPosition = Animated.divide(scrollX, SIZES.WINDOW_WIDTH);
        const opacity = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        const dotSize = dotPosition.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [0.6, 1, 0.6],
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
            opacity={opacity}
            style={[
              tw`w-3 h-3 rounded-full  mx-3`,

              { transform: [{ scale: dotSize }] },
              {
                backgroundColor: dotColor,
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
