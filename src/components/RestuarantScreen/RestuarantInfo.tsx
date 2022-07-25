import React from "react";
import {
  Animated,
  Image,
  ImageBackground,
  Text,
  Touchable,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SIZES } from "../../constants/theme";
import { useRestuarantStore } from "../../stores";
import { tw } from "../../utils";
import RestuarantCarouselDots from "./RestuarantCarouselDots";

const RestuarantInfo = () => {
  const {
    restuarantItem: { menu },
  } = useRestuarantStore();

  const scrollX = new Animated.Value(0);

  return (
    <View>
      <Animated.ScrollView
        horizontal
        snapToAlignment={"center"}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {menu?.map((m, id) => (
          <View key={`menu-${id}`}>
            {/* Food image */}
            <Image
              resizeMode="cover"
              style={{
                width: SIZES.WINDOW_WIDTH,
                height: SIZES.WINDOW_HEIGHT * 0.35,
              }}
              source={m.photo}
            />
            <View style={tw`flex-row absolute -bottom-4 z-10 left-1/2`}>
              <TouchableOpacity
                style={[
                  tw`bg-red-500 p-2 rounded-2xl`,
                  {
                    zIndex: 10, // works on ios
                    elevation: 10, // works on android
                  },
                ]}
              >
                <Text>-</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text>5</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
      <RestuarantCarouselDots scrollX={scrollX} />
    </View>
  );
};

export default RestuarantInfo;
