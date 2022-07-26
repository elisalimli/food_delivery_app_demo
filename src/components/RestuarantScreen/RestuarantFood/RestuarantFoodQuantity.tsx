import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { IRestaurantMenuItem } from "../../../stores/useDataStore";
import useRestaurantStore, {
  useGetOrderCount,
} from "../../../stores/useRestuarantStore";
import { tw } from "../../../utils";

interface RestuarantFoodQuantityProps {
  menuItem: IRestaurantMenuItem;
}

const RestuarantFoodQuantity: React.FC<RestuarantFoodQuantityProps> = ({
  menuItem,
}) => {
  const { menuId } = menuItem;
  const { addCardItem, removeCardItem, removeWholeCardItem } =
    useRestaurantStore();
  const itemCount = useGetOrderCount(menuId);

  const handleAddCardItem = () => addCardItem(menuItem);
  const handleRemoveCardItem = () => {
    //quiting if you can't decrease the quantity of food
    if (itemCount == 0) return;
    removeCardItem(menuItem);
  };

  return (
    <View
      style={tw`w-full flex-row justify-center items-center absolute h-12 -bottom-1`}
    >
      <Pressable
        onLongPress={() => {
          removeWholeCardItem(menuId);
        }}
        onPress={handleRemoveCardItem}
        style={({ pressed }) => [
          tw`px-2 py-1 bg-white rounded-tl-2xl rounded-bl-2xl`,
          { opacity: pressed ? 0.2 : 1 },
        ]}
      >
        <Text style={tw`font-medium text-xl p-1`}>-</Text>
      </Pressable>
      <TouchableOpacity style={tw`px-2 py-1 bg-white `}>
        <Text style={tw`font-medium text-xl p-1`}>{itemCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleAddCardItem}
        style={tw`px-2 py-1 bg-white rounded-tr-2xl rounded-br-2xl `}
      >
        <Text style={tw`font-medium text-xl p-1`}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RestuarantFoodQuantity;
