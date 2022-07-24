import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { useDataStore } from "../../stores";
import { tw } from "../../utils";
import Category from "./CategoryItem";
import uuid from "react-native-uuid";

const MainCategories = () => {
  const { categories } = useDataStore();

  return (
    <View>
      <Text style={tw`h1`}>Main</Text>
      <Text style={tw`h1`}>Categories</Text>
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => `${item.id}-${uuid.v4()}`}
        renderItem={(props) => <Category {...props} />}
        contentContainerStyle={tw`py-4 px-1`}
      />
    </View>
  );
};

export default MainCategories;
