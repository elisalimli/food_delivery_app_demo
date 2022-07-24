import React, { Fragment } from "react";
import { Text, View } from "react-native";
import useDataStore, { IRestaurantItem } from "../../../stores/useDataStore";
import { tw } from "../../../utils";
import uuid from "react-native-uuid";

interface IRestuarantCategoriesProps {
  item: IRestaurantItem;
}

const RestuarantCategories: React.FC<IRestuarantCategoriesProps> = ({
  item: { categories },
}) => {
  const { categories: categoryData } = useDataStore();

  return (
    <Fragment>
      {categories.map((categoryId) => (
        <View key={`${uuid.v4()}`} style={tw`flex-row items-center`}>
          <Text>{categoryData[categoryId]?.name}</Text>
          <View style={tw`w-1 h-1 rounded-full bg-darkgray mx-2`}></View>
        </View>
      ))}
    </Fragment>
  );
};

export default RestuarantCategories;
