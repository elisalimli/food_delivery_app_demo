import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Home } from "./screens";
import { tw } from "./utils";

type RootStackParamList = {
  Home: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

const RootStack = createStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#7ecf99" />

      <RootStack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          gestureEnabled: true,
          gestureDirection: "vertical",

          headerBackImage: () => <Text style={tw` text-blue-500`}>back</Text>,
        }}
      >
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
