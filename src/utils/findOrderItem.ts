import { IOrderList } from "../stores/useRestuarantStore";

export const findOrderItem = (orderList: IOrderList, menuId: number) => {
  return orderList.findIndex((or) => or.menuId == menuId);
};
