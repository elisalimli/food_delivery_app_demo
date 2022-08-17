import React, { useState } from "react";
import { Image, Text, View } from "react-native";

import MapView, { Marker, Polyline } from "react-native-maps";
import MapViewDirections, {
  MapDirectionsResponse,
} from "react-native-maps-directions";
import { icons } from "../../constants";
import { useGetColor } from "../../hooks";
import { useDataStore, useMapStore, useRestaurantStore } from "../../stores";
import { tw } from "../../utils";
// @ts-ignore
import { GOOGLE_MAPS_APIKEY } from "@env";

const calculateAngle = (coordinates) => {
  const startLat = coordinates[0]["latitude"];
  const startLong = coordinates[0]["longitude"];
  const endLat = coordinates[1]["latitude"];
  const endLong = coordinates[1]["longitude"];
  const relativeX = endLat - startLat;
  const relativeY = endLong - startLong;

  return (Math.atan2(relativeX, relativeY) * 180) / Math.PI;
};

const Map = () => {
  const { result, setResult } = useMapStore();
  const [angle, setAngle] = useState(0);

  const { currentLocation } = useDataStore();
  const { currentRestuarant } = useRestaurantStore();
  const fromLocation = currentRestuarant?.location;
  const toLocation = currentLocation?.gps;
  if (!currentLocation?.gps) {
    return <Text>loading..</Text>;
  }
  return (
    <MapView
      provider="google"
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
      <Marker
        coordinate={fromLocation}
        rotation={angle}
        flat
        anchor={{ x: 0.5, y: 0.5 }}
      >
        <Image source={icons.car} style={tw`w-8 h-8`} />
      </Marker>
      <Marker flat anchor={{ x: 0.5, y: 0.5 }} coordinate={toLocation}>
        <View
          style={tw`w-8 h-8 bg-primary rounded-full items-center justify-center`}
        >
          <Image source={icons.pin} style={tw`w-4 h-4 tint-white`} />
        </View>
      </Marker>

      {/* Drawing the road between to destinations */}
      <MapViewDirections
        origin={fromLocation}
        destination={toLocation}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor={useGetColor("primary")}
        optimizeWaypoints
        onReady={(result) => {
          setResult(result);
          const angle = calculateAngle(result.coordinates);
          setAngle(angle);
        }}
      />

      {/* <Polyline
        coordinates={[toLocation, fromLocation]}
        strokeColor={useGetColor("primary")} // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={["#000"]}
        strokeWidth={6}
      /> */}
    </MapView>
  );
};

export default Map;
