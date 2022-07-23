import React from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDataStore } from "../../stores";
import { ICategory } from "../../stores/useDataStore";
import { tw } from "../../utils";

const RenderItem = ({ item }: { item: ICategory }) => {
  const { setSelectedCategoryId, selectedCategoryId } = useDataStore();
  const { id, name, icon } = item;
  const isActive = selectedCategoryId === id;
  const handlePress = () => setSelectedCategoryId(id);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        tw`p-4 rounded-t-[90px] rounded-b-[90px] mr-2 shadow-sm`,
        isActive ? tw`bg-primary shadow-md` : tw`bg-white`,
      ]}
    >
      <View
        style={tw`w-16 h-16 bg-white rounded-full items-center justify-center`}
      >
        <Image source={icon} resizeMode="contain" style={tw`w-12 h-12`} />
      </View>
      <Text
        style={[
          tw`text-center mt-6 text-lightGray300 font-medium`,
          isActive ? tw`text-white mb-4` : tw`text-black`,
        ]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

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
        keyExtractor={(item) => `${item.id}`}
        renderItem={(a) => <RenderItem {...a} />}
        contentContainerStyle={tw`py-4 px-1`}
      />
    </View>
  );
};

export default MainCategories;
