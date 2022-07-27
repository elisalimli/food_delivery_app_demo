// import React, { useEffect, useState } from "react";
// import { Image, Text, View } from "react-native";

// import { Dimensions, StyleSheet } from "react-native";
// import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
// import MapViewDirections from "react-native-maps-directions";
// import { icons } from "../constants";
// import { useDataStore, useRestaurantStore } from "../stores";
// import { tw } from "../utils";

// function App() {
//   const { currentLocation } = useDataStore();
//   const { currentRestuarant } = useRestaurantStore();
//   const fromLocation = currentRestuarant?.location;
//   const toLocation = currentLocation?.gps;

//   console.log(currentRestuarant);
//   return (
//     <View style={styles.container}>
//       <MapView
//         region={{
//           latitude: (fromLocation?.latitude + toLocation?.latitude) / 2,
//           longitude: (fromLocation?.longitude + toLocation?.longitude) / 2,
//           latitudeDelta: Math.abs(
//             (fromLocation?.latitude - toLocation?.latitude) * 2
//           ),
//           longitudeDelta: Math.abs(
//             (fromLocation?.longitude - toLocation?.longitude) * 2
//           ),
//         }}
//         style={styles.map}
//       >
//         <MapViewDirections
//           origin={}
//           destination={destination}
//           apikey={GOOGLE_MAPS_APIKEY}
//         />

//         <Marker coordinate={fromLocation}>
//           <Image source={icons.car} style={tw`w-8 h-8`} />
//         </Marker>
//         <Marker flat anchor={{ x: 0.5, y: 0.5 }} coordinate={toLocation}>
//           <View
//             style={tw`w-8 h-8 bg-primary rounded-full items-center justify-center`}
//           >
//             <Image source={icons.pin} style={tw`w-4 h-4 tint-white`} />
//           </View>
//         </Marker>
//       </MapView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
// });

// const OrderDelivery = () => {
//   return <App />;
// };

// export default OrderDelivery;
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

MapboxGL.setAccessToken();

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}
