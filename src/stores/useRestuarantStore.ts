import { combine } from "zustand/middleware";
import create from "zustand";
import { IRestaurantItem, IRestaurantMenuItem } from "./useDataStore";

const findOrderItem = (orderList, menuId) => {
  return orderList.findIndex((or) => or.menuId == menuId);
};

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
          const itemIdx = findOrderItem(newOrderList, item.menuId);
          // this means it exists
          if (itemIdx !== -1)
            // if exist then incrase quantity
            newOrderList[itemIdx] = {
              ...item,
              quantity: newOrderList[itemIdx].quantity + 1,
            };
          // if doesn't exist then add a new one
          else
            newOrderList.push({
              ...item,
              quantity: 1,
            });

          return { orderList: newOrderList };
        }),
      removeCardItem: (item: IRestaurantMenuItem) =>
        set((prev) => {
          console.log(item);
          const newOrderList = prev.orderList;
          const itemIdx = findOrderItem(newOrderList, item.menuId);
          newOrderList[itemIdx] = {
            ...item,
            quantity: Math.max(0, newOrderList[itemIdx].quantity - 1),
          };

          return { orderList: newOrderList };
        }),
    })
  )
);

export default useRestaurantstore;

export const useGetAllOrderCount = () => {
  const { orderList } = useRestaurantstore();
  let sumOfOrders = 0;
  let sumOfOrderPrice = 0;
  for (let i = 0; i < orderList.length; i++) {
    sumOfOrders += orderList[i].quantity;
    sumOfOrderPrice += orderList[i].quantity * orderList[i].price;
  }
  return [sumOfOrders, sumOfOrderPrice];
};

export const useGetOrderCount = (menuId: number) => {
  const { orderList } = useRestaurantstore();
  const currentMenu = orderList?.filter((i) => i.menuId == menuId);
  return currentMenu[0]?.quantity || 0;
};
