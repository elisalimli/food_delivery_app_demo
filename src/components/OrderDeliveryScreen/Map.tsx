import React from "react";
import { Image, Text, View } from "react-native";

import MapView, { Marker, Polyline } from "react-native-maps";
import { icons } from "../../constants";
import { useGetColor } from "../../hooks";
import { useDataStore, useRestaurantStore } from "../../stores";
import { tw } from "../../utils";

const Map = () => {
  const { currentLocation } = useDataStore();
  const { currentRestuarant } = useRestaurantStore();
  const fromLocation = currentRestuarant?.location;
  const toLocation = currentLocation?.gps;
  if (!currentLocation?.gps) {
    return <Text>loading..</Text>;
  }

  return (
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
      style={tw`w-full h-full`}
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
  );
};

export default Map;
