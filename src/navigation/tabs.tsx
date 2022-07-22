import React from "react";
import { ColorValue, Image, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";
import { icons } from "../constants";
import { tw } from "../utils";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Like: undefined;
  User: undefined;
};

export type RootStackScreenProps<T extends keyof TabStackParamList> =
  NativeStackScreenProps<TabStackParamList, T>;

const Tab = createBottomTabNavigator<TabStackParamList>();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let source;
          const { search, like, user, cutlery } = icons;
          switch (route.name) {
            case "Search":
              source = search;
              break;
            case "Like":
              source = like;
              break;
            case "User":
              source = user;
              break;
            default:
              source = cutlery;
          }
          return (
            <Image
              source={source}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused
                  ? (tw`text-primary`.color as ColorValue)
                  : (tw`text-secondary`.color as ColorValue),
              }}
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Home} />
      <Tab.Screen name="Like" component={Home} />
      <Tab.Screen name="User" component={Home} />
    </Tab.Navigator>
  );
}
