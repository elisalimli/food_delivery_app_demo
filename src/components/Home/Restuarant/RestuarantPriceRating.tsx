import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { IRestaurant } from "../../../stores/useDataStore";
import { tw } from "../../../utils";

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
          <Text style={tw`font-medium`} key={`price-${id}-${i}`}>
            $
          </Text>
        ))}
      {Array.from({ length: 3 - priceRating })
        .fill(0)
        .map((i) => (
          <Text
            style={tw`opacity-20 font-medium`}
            key={`price-${id}-${i}-${Math.floor(Math.random() * 100000)}`}
          >
            $
          </Text>
        ))}
    </View>
  );
};

export default RestuarantPriceRating;
