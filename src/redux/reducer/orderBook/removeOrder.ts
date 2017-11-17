export function removeOrderReducer(
  orderList: IOwnOrder[] = [],
  orderId: string,
): IOwnOrder[] {
  return orderList.filter(({ id }) => id !== orderId);
}
