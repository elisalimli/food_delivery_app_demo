import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { icons, images } from "../../constants";
import { tw } from "../../utils";

const RestuarantHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-row mt-2 px-4`}>
      <Pressable
        hitSlop={16}
        onPress={() => {
          if (navigation.canGoBack()) navigation.goBack();
        }}
      >
        <Image style={tw`w-7 h-7`} source={icons.back} />
      </Pressable>
    </View>
  );
};

export default RestuarantHeader;
