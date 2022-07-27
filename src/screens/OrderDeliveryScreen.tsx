import React from "react";
import { Image, View } from "react-native";

import { Dimensions, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { icons } from "../constants";
import { useGetColor } from "../hooks";
import { useDataStore, useRestaurantStore } from "../stores";
import { tw } from "../utils";

function App() {
  const { currentLocation } = useDataStore();
  const { currentRestuarant } = useRestaurantStore();
  const fromLocation = currentRestuarant?.location;
  const toLocation = currentLocation?.gps;

  console.log(currentRestuarant);
  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: (fromLocation?.latitude + toLocation?.latitude) / 2,
          longitude: (fromLocation?.longitude + toLocation?.longitude) / 2,
          latitudeDelta: Math.abs(
            (fromLocation?.latitude - toLocation?.latitude) * 2
          ),
          longitudeDelta: Math.abs(
            (fromLocation?.longitude - toLocation?.longitude) * 2
          ),
        }}
        style={styles.map}
      >
        <Marker coordinate={fromLocation}>
          <Image source={icons.car} style={tw`w-8 h-8`} />
        </Marker>
        <Marker flat anchor={{ x: 0.5, y: 0.5 }} coordinate={toLocation}>
          <View
            style={tw`w-8 h-8 bg-primary rounded-full items-center justify-center`}
          >
            <Image source={icons.pin} style={tw`w-4 h-4 tint-white`} />
          </View>
        </Marker>
        <Polyline
          coordinates={[toLocation, fromLocation]}
          strokeColor={useGetColor("primary")} // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={["#000"]}
          strokeWidth={6}
        />
      </MapView>
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
