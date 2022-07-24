import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { IRestaurant } from "../../../stores/useDataStore";
import { tw } from "../../../utils";
import uuid from "react-native-uuid";

interface IRestuarantPriceRatingProps {
  item: IRestaurant;
}

const RestuarantPriceRating: React.FC<IRestuarantPriceRatingProps> = ({
  item: { priceRating, id },
}) => {
  return (
    <View style={tw`flex-row`}>
      {Array.from({ length: priceRating })
        .fill(0)
        .map((i) => (
          <Text style={tw`font-medium`} key={`price-${id}-${uuid.v4()}`}>
            $
          </Text>
        ))}
      {Array.from({ length: 3 - priceRating })
        .fill(0)
        .map((i) => (
          <Text style={tw`opacity-20 font-medium`} key={`${uuid.v4()}`}>
            $
          </Text>
        ))}
    </View>
  );
};

export default RestuarantPriceRating;
