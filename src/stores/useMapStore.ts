import { combine } from "zustand/middleware";
import create from "zustand";
import { MapDirectionsResponse } from "react-native-maps-directions";

export const useMapStore = create(
  combine(
    {
      result: {} as MapDirectionsResponse,
    },
    (set) => ({
      setResult: (result: MapDirectionsResponse) => set(() => ({ result })),
    })
  )
);

export default useMapStore;
