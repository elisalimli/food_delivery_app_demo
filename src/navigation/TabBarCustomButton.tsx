import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Path, Svg } from "react-native-svg";
import { useGetColor } from "../hooks";
import { tw } from "../utils";

const TabBarCustomButton: React.FC<BottomTabBarButtonProps> = ({
  accessibilityState,
  children,
  onPress,
}) => {
  var isSelected = accessibilityState?.selected;

  if (isSelected) {
    return (
      <View style={tw`flex-1 items-center`}>
        <View style={tw`flex-row absolute top-0`}>
          <View style={tw`flex-1 bg-white`}></View>
          <Svg width={70} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={useGetColor("white")}
            />
          </Svg>
          <View style={tw`flex-1 bg-white`}></View>
        </View>

        <TouchableOpacity
          style={tw`-top-[22.5px] justify-center items-center w-12 h-12 rounded-3xl bg-white`}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={tw`flex-1 h-11 py-4 bg-white`}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

export default TabBarCustomButton;
