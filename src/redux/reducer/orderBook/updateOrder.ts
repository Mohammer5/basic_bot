export function updateOrder(
  orderList: IOwnOrder[] = [],
  orderId: string,
  order: IOwnOrder,
): IOwnOrder[] {
  return orderList.map(oldOrder => {
    return oldOrder.id !== orderId ? oldOrder : { ...oldOrder, ...order };
  });
}
