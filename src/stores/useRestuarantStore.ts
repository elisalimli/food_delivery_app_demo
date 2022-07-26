import { combine } from "zustand/middleware";
import create from "zustand";
import { icons, images } from "../constants";
import { IRestaurantItem, IRestaurantMenuItem } from "./useDataStore";

type IOrderListItem = IRestaurantMenuItem & { quantity: number };

export const useRestaurantstore = create(
  combine(
    {
      // selected restuarant
      currentRestuarant: {} as IRestaurantItem,
      cartPrice: 0,
      orderList: [] as IOrderListItem[],
    },
    (set) => ({
      setCurrentRestuarant: (item: IRestaurantItem) =>
        set(() => ({ currentRestuarant: item })),
      addCardItem: (item: IRestaurantMenuItem) =>
        set((prev) => {
          let newOrderList = prev.orderList;
          // checking if the order item is created before or not
          const isExist =
            newOrderList.filter((i) => i.menuId == item.menuId)?.length != 0;
          if (isExist) {
            // if exist then incrase quantity
            newOrderList = newOrderList.map((or) => ({
              ...or,
              quantity: or?.quantity + 1,
            }));
          } else {
            // if doesn't exist then add a new one
            newOrderList.push({
              ...item,
              quantity: 1,
            });
          }
          return { orderList: newOrderList };
        }),
      removeCardItem: (item: IRestaurantMenuItem) =>
        set((prev) => {
          const newOrderList = prev.orderList.filter(
            (or) => or.menuId != item.menuId
          );

          return { orderList: newOrderList };
        }),
    })
  )
);

export default useRestaurantstore;

export const useGetOrderCount = (menuId: number) => {
  const { orderList } = useRestaurantstore();
  const currentMenu = orderList?.filter((i) => i.menuId == menuId);
  return currentMenu[0]?.quantity || 0;
};
