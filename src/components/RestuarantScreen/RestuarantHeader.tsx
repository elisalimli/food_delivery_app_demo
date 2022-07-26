import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, images } from "../../constants";
import { useRestaurantStore } from "../../stores";
import { tw } from "../../utils";

const RestuarantHeader = () => {
  const navigation = useNavigation();
  const {
    currentRestuarant: { name },
  } = useRestaurantStore();

  return (
    // @todo fix margin top problem
    <View style={tw`flex-row mt-2 px-4 items-center`}>
      {/* Back button Section */}
      <Pressable
        hitSlop={16}
        onPress={() => {
          if (navigation.canGoBack()) navigation.goBack();
        }}
      >
        <Image style={tw`w-7 h-7`} source={icons.back} resizeMode="contain" />
      </Pressable>
      {/* Restuarant Name Section */}
      <View style={tw`flex-1 items-center p-2`}>
        <View
          style={tw`bg-lightGray300 h-10 justify-center items-center rounded-3xl min-w-3/5`}
        >
          <Text style={tw`h4 text-gray-500 px-4`}>{name}</Text>
        </View>
      </View>
      <View style={tw`h-10 items-end justify-center`}>
        <Image source={icons.list} resizeMode="contain" style={tw`w-7 h-7`} />
      </View>
    </View>
  );
};

export default RestuarantHeader;
