import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { tw } from "../utils";
import Header from "../components/HomeScreen/HomeHeader";
import MainCategories from "../components/HomeScreen/MainCategories";
import Restaurants from "../components/HomeScreen/Restaurants";

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-lightGray400 px-4`}>
      <Header />
      <MainCategories />
      <Restaurants />
    </SafeAreaView>
  );
};

export default Home;
