import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Map from "../components/OrderDeliveryScreen/Map";
import { icons, images } from "../constants";
import { useLocation } from "../hooks/useLocation";
import { useRestaurantStore } from "../stores";
import { tw } from "../utils";

const OrderDelivery = () => {
  // getting current location
  // useLocation();
  const { currentRestuarant } = useRestaurantStore();
  return (
    <View style={tw`flex-1 bg-white items-center justify-center`}>
      <Map />
      <View style={tw`absolute top-2 w-full`}>
        <View
          style={tw`bg-white mx-2 rounded-xl p-4 shadow-sm flex-row justify-between`}
        >
          {/* Location */}
          <View style={tw`flex-row items-center`}>
            <Image source={icons.red_pin} style={tw`w-4 h-4 mr-3`} />
            <Text style={tw`font-medium`}>Park Avenue,New York</Text>
          </View>
          {/* Duration */}
          <Text style={tw`h4`}>7 mins</Text>
        </View>
      </View>
      <View style={tw`absolute bottom-5 w-full`}>
        <View style={tw`bg-white mx-2 rounded-xl p-4 shadow-sm`}>
          <View style={tw`flex-row justify-between`}>
            <View style={tw`flex-row`}>
              <Image
                style={tw`w-12 h-12 rounded-full`}
                source={currentRestuarant.courier.avatar}
              />
              <View style={tw`justify-center ml-2`}>
                <Text style={tw`h3`}>{currentRestuarant.courier.name}</Text>
                <Text style={tw`text-darkgray/60`}>
                  {currentRestuarant.name}
                </Text>
              </View>
            </View>
            <View style={tw`flex-row items-center`}>
              <Image
                source={icons.star}
                style={tw`w-4 h-4 tint-primary mr-2`}
              />
              <Text>{currentRestuarant.rating}</Text>
            </View>
          </View>
          <View style={tw`flex-row justify-between mt-4 px-2`}>
            <TouchableOpacity
              style={tw`flex-1 items-center justify-center p-4 bg-primary rounded-2xl mr-2`}
            >
              <Text style={tw`text-white h4`}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`flex-1 items-center justify-center p-4 bg-lightGray100 rounded-2xl mr-2`}
            >
              <Text style={tw`font-medium`}>Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderDelivery;
