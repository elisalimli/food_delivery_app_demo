import React from "react";
import { Animated, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons } from "../../constants";
import { useRestuarantStore } from "../../stores";
import { tw } from "../../utils";
import CustomText from "../CustomText";
import RestuarantCarouselDots from "./RestuarantFood/RestuarantCarouselDots";
import RestuarantMenuList from "./RestuarantMenuListContainer";

const RestuarantInfo = () => {
  const {
    restuarantItem: { menu },
  } = useRestuarantStore();

  const scrollX = new Animated.Value(0);

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-9`}>
        <RestuarantMenuList scrollX={scrollX} />
        <RestuarantCarouselDots scrollX={scrollX} />
      </View>
      {/* Order section */}
      <View style={tw`mt-4 bg-white rounded-tr-4xl rounded-tl-4xl p-8`}>
        {/* quantity of products in the cart & price */}
        <View
          style={tw`flex-row justify-between border-b border-b-lightGray200 mb-2`}
        >
          <Text style={tw`h2 font-medium`}>4 Items in the cart</Text>
          <Text style={tw`h2 font-medium`}>$46.97</Text>
        </View>
        <View>
          <View style={tw`my-4 flex-row items-center justify-between`}>
            {/* Location */}
            <View style={tw`flex-row items-center`}>
              <Image
                source={icons.pin}
                style={tw`w-4 h-4 tint-darkgray mr-2`}
              />
              <Text style={tw`font-medium`}>San Fransisco</Text>
            </View>
            {/* Card number */}
            <View style={tw`flex-row items-center`}>
              <Image
                source={icons.master_card}
                style={tw`w-4 h-4 tint-darkgray mr-2`}
              />
              <View style={tw`flex-row items-center mr-1 ml-1`}>
                {/* Card encryption dots */}
                <View style={tw`w-1 h-1 bg-black/90 mr-[2px] rounded-full`} />
                <View style={tw`w-1 h-1 bg-black/90 mr-[2px] rounded-full`} />
                <View style={tw`w-1 h-1 bg-black/90 mr-[2px] rounded-full`} />
                <View style={tw`w-1 h-1 bg-black/90 rounded-full`} />
              </View>
              <Text>5491</Text>
            </View>
          </View>
          {/* Order button */}
          <TouchableOpacity
            style={tw`bg-primary p-4 items-center justify-center rounded-2xl mt-1`}
          >
            <Text style={tw`text-white font-medium text-lg leading-tight`}>
              Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RestuarantInfo;
