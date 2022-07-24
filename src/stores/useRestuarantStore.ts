import { combine } from "zustand/middleware";
import create from "zustand";
import { icons, images } from "../constants";
import { IRestaurantItem } from "./useDataStore";

export const useRestuarantStore = create(
  combine(
    {
      restuarantItem: {} as IRestaurantItem,
    },
    (set) => ({
      setRestuarantItem: (item: IRestaurantItem) =>
        set(() => ({ restuarantItem: item })),
    })
  )
);

export default useRestuarantStore;
