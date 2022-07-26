import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDataStore } from "../../stores";
import { ICategory } from "../../stores/useDataStore";
import { tw } from "../../utils";

const Category = ({ item }: { item: ICategory }) => {
  const { setSelectedCategoryId, setRestaurants, selectedCategoryId } =
    useDataStore();
  const { id, name, icon } = item;

  const isActive = selectedCategoryId === id;
  const handlePress = () => {
    setSelectedCategoryId(id);
    setRestaurants(id, false);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        tw`p-4 rounded-full mr-2 shadow-sm`,
        isActive ? tw`bg-primary shadow-md` : tw`bg-white`,
      ]}
    >
      <View
        style={tw`w-12 h-12 bg-white rounded-full items-center justify-center`}
      >
        <Image source={icon} resizeMode="contain" style={tw`w-10 h-10`} />
      </View>
      <Text
        style={[
          tw`text-center mt-6 text-lightGray300 font-medium`,
          isActive ? tw`text-white mb-2` : tw`text-black`,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};
export default Category;
