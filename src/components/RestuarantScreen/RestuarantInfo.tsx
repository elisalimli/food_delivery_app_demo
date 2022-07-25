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
import { icons } from "../../constants";
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
        {menu?.map(({ name, photo, price, description, calories }, id) => (
          <View key={`menu-${id}`} style={{ alignItems: "center" }}>
            <View
              style={{
                height: SIZES.WINDOW_HEIGHT * 0.375,
              }}
            >
              {/* Food image */}
              <Image
                resizeMode="cover"
                source={photo}
                style={{
                  width: SIZES.WINDOW_WIDTH,
                  height: "95%",
                }}
              />
              {/* Quantity */}
              <View
                style={tw`w-full flex-row justify-center items-center absolute h-12 -bottom-1`}
              >
                <TouchableOpacity
                  style={tw`px-2 py-1 bg-white rounded-tl-2xl rounded-bl-2xl`}
                >
                  <Text style={tw`font-medium text-xl p-1`}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`px-2 py-1 bg-white `}>
                  <Text style={tw`font-medium text-xl p-1`}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={tw`px-2 py-1 bg-white rounded-tr-2xl rounded-br-2xl `}
                >
                  <Text style={tw`font-medium text-xl p-1`}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                tw`my-4 px-1 items-center`,
                { width: SIZES.WINDOW_WIDTH },
              ]}
            >
              <Text style={tw`h2`}>
                {name} - ${price.toFixed(2)}
              </Text>
              <Text style={tw`body4 my-2`}>{description}</Text>
            </View>
            <View style={tw`flex-row items-center `}>
              <Image source={icons.fire} style={tw`w-4 h-4 mr-1`} />
              <Text style={tw`text-darkgray`}>{calories.toFixed(2)} cal</Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      <RestuarantCarouselDots scrollX={scrollX} />
    </View>
  );
};

export default RestuarantInfo;
