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
      {[1, 2, 3].map((i) => (
        <Text
          style={[tw`font-medium`, i > priceRating && tw`opacity-20`]}
          key={`price-${id}-${uuid.v4()}`}
        >
          $
        </Text>
      ))}
    </View>
  );
};

export default RestuarantPriceRating;
