import React, { useCallback, useEffect, useMemo } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { IRestaurantMenuItem } from "../../../stores/useDataStore";
import useRestaurantstore, {
  useGetOrderCount,
} from "../../../stores/useRestuarantStore";
import { tw } from "../../../utils";

interface RestuarantFoodQuantityProps {
  menuItem: IRestaurantMenuItem;
}

const RestuarantFoodQuantity: React.FC<RestuarantFoodQuantityProps> = ({
  menuItem,
}) => {
  const { addCardItem, removeCardItem } = useRestaurantstore();
  const itemCount = useGetOrderCount(menuItem.menuId);

  useEffect(() => console.log("re-rend2"));

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
          console.log("loooong press");
        }}
        onPress={handleRemoveCardItem}
        style={tw`px-2 py-1 bg-white rounded-tl-2xl rounded-bl-2xl`}
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
