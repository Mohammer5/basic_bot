import { actionSources } from '../../Constants/actionSources';
import { orderBook } from '../../Constants/actions/orderBook';

export function updateBuyOrder(orderId: string, order: IOwnOrder): IOrderBookAction {
  return {
    source: actionSources.ORDER_BOOK,
    type: orderBook.UPDATE_BUY,
    orderId,
    order,
  };
}
