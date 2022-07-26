import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { Dimensions, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useDataStore, useRestaurantStore } from "../stores";

function App() {
  const { currentLocation } = useDataStore();
  const { currentRestuarant } = useRestaurantStore();

  console.log(currentRestuarant);
  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude:
            (currentRestuarant?.location?.latitude +
              currentLocation?.gps?.latitude) /
            2,
          longitude:
            (currentRestuarant?.location?.longitude +
              currentLocation?.gps?.longitude) /
            2,
          latitudeDelta: Math.abs(
            (currentRestuarant?.location?.latitude -
              currentLocation?.gps?.latitude) *
              2
          ),
          longitudeDelta: Math.abs(
            (currentRestuarant?.location?.longitude -
              currentLocation?.gps?.longitude) *
              2
          ),
        }}
        style={styles.map}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

const OrderDelivery = () => {
  return <App />;
};

export default OrderDelivery;
