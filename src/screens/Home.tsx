import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { tw } from "../utils";
import Header from "./Home/Header";

const Home = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-lightGray400`}>
      <Header />
    </SafeAreaView>
  );
};

export default Home;
