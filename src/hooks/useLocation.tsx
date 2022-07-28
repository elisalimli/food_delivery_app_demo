import { useEffect } from "react";
import { useDataStore } from "../stores";
import * as Location from "expo-location";

export const useLocation = async () => {
  const { setCurrentLocation } = useDataStore();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        // @todo handle status
        // setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    })();
  }, []);
};
