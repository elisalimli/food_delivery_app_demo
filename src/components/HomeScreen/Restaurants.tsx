import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { useDataStore } from "../../stores";
import { tw } from "../../utils";
import RestaurantItem from "./Restuarant/RestuarantItem";
import uuid from "react-native-uuid";

const Restaurants = () => {
  const { restuarants, setRestuarants } = useDataStore();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // resetting the resturants
    setRestuarants(null, true);

    setRefreshing(false);
  }, []);
  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={restuarants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}-${uuid.v4()}`}
        renderItem={(props) => <RestaurantItem {...props} />}
        // contentContainerStyle={tw`py-4 px-1 mb-[30px]`}
        contentContainerStyle={tw`py-4 px-1 pb-96`}
      />
    </View>
  );
};

export default Restaurants;
