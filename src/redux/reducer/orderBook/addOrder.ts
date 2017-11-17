export function addOrderReducer(
  orderList: IOwnOrder[] = [],
  order: IOwnOrder,
): IOwnOrder[] {
  return [
    ...orderList,
    order,
  ];
}
