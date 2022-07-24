import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { icons } from "../../constants";
import { useDataStore } from "../../stores";
import { IRestaurant } from "../../stores/useDataStore";
import { tw } from "../../utils";

const Restaurant = ({ item }: { item: IRestaurant }) => {
  const { photo, duration, rating, priceRating, id } = item;
  return (
    <TouchableOpacity
    // onpress navigate to the Restuarant page
    >
      <View>
        {/* photo */}
        <Image style={tw`h-48 w-full rounded-5xl`} source={photo} />

        {/* duration  */}
        <View style={tw`absolute bg-white bottom-0 p-4 rounded-tr-3xl`}>
          <Text style={tw`font-bold text-gray-800`}>{duration}</Text>
        </View>
      </View>
      <View style={tw`py-2`}>
        {/* title */}
        <Text style={tw`text-2xl`}>{item.name}</Text>
        {/* info */}
        <View style={tw`py-4 flex-row items-center`}>
          {/* rating */}
          <Image source={icons.star} style={tw`w-4 h-4 mr-2`} />
          <Text style={tw`mr-6 font-medium`}>{rating}</Text>
          <Text>Burgers</Text>
          <View style={tw`w-1 h-1 rounded-full bg-gray-200 mx-2`}></View>
          <Text>Snacks</Text>
          <View style={tw`w-1 h-1 rounded-full bg-gray-200 mx-2`}></View>

          {/* price rating */}
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Restaurants = () => {
  const { restuarants } = useDataStore();
  return (
    <View>
      <FlatList
        data={restuarants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={(props) => <Restaurant {...props} />}
        // contentContainerStyle={tw`py-4 px-1 mb-[30px]`}
        contentContainerStyle={tw`py-4 px-1 pb-96`}
      />
    </View>
  );
};

export default Restaurants;
