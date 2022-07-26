import React from "react";
import { Animated, View } from "react-native";
import { useRestaurantStore } from "../../stores";
import { tw } from "../../utils";
import RestuarantBottomCardHeader from "./RestuarantBotomCard./RBCHeader";
import RBCLocationAndCardNumber from "./RestuarantBotomCard./RBCLocationAndCardNumber";
import RBCOrderButton from "./RestuarantBotomCard./RBCOrderButton";
import RestuarantCarouselDots from "./RestuarantFood/RestuarantCarouselDots";
import RestuarantMenuList from "./RestuarantMenuListContainer";

const RestuarantOrderInfo = () => {
  const {
    currentRestuarant: { menu },
  } = useRestaurantStore();

  const scrollX = new Animated.Value(0);

  return (
    <View style={tw`flex-1`}>
      <View style={tw`flex-9`}>
        <RestuarantMenuList scrollX={scrollX} />
        {menu?.length > 1 && <RestuarantCarouselDots scrollX={scrollX} />}
      </View>
      {/* Order section */}
      <View style={tw`mt-4 bg-white rounded-tr-4xl rounded-tl-4xl p-8`}>
        {/* quantity of products in the cart & price */}
        <RestuarantBottomCardHeader />
        <View>
          {/* Location */}
          <RBCLocationAndCardNumber />
          {/* Order button */}
          <RBCOrderButton />
        </View>
      </View>
    </View>
  );
};

export default RestuarantOrderInfo;
