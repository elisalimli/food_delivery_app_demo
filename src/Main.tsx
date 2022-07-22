// for setting up screens
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StatusBar, ColorValue } from "react-native";
import tailwindConfig from "../tailwind.config";
import { Home,OrderDelivery,Restaurant } from "./screens";
import { tw } from "./utils";

type RootStackParamList = {
  Home: undefined;
  Restaurant: undefined;
  OrderDelivery: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootStack = createStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      {/* @todo fix typescript error */}
      <StatusBar backgroundColor={tailwindConfig.theme?.extend?.colors?.primary} />

      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          gestureEnabled: true,
          gestureDirection: "vertical",
          headerShown: false,
          //   headerBackImage: () => <Text style={tw` text-blue-500`}>back</Text>,
        }}
        initialRouteName="Home"
      >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Restaurant" component={Restaurant} />
        <RootStack.Screen name="OrderDelivery" component={OrderDelivery} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
