import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ColorValue, Image, Text } from "react-native";
import { icons } from "../constants";
import { Home } from "../screens";
import { tw } from "../utils";
import CustomTabBar from "./CustomTabBar";
import TabBarCustomButton from "./TabBarCustomButton";

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
      tabBar={(props) => <CustomTabBar props={props} />}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let icon;
          const { search, like, user, cutlery } = icons;
          // chosing the icon for each route
          switch (route.name) {
            case "Search":
              icon = search;
              break;
            case "Like":
              icon = like;
              break;
            case "User":
              icon = user;
              break;
            default:
              icon = cutlery;
          }
          return (
            <Image
              source={icon}
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
        tabBarButton: TabBarCustomButton,

        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#f2f2f2",
          borderTopWidth: 0,
          // for android(removing shadow stuff)
          elevation: 0,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={() => <Text>Search</Text>} />
      <Tab.Screen name="Like" component={() => <Text>Like</Text>} />
      <Tab.Screen name="User" component={() => <Text>User</Text>} />
    </Tab.Navigator>
  );
}
