export function addOrder(
  orderList: IOwnOrder[] = [],
  order: IOwnOrder,
): IOwnOrder[] {
  return [
    ...orderList,
    order,
  ];
}
