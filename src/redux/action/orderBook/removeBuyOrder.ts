import { actionSources } from '../../Constants/actionSources';
import { orderBook } from '../../Constants/actions/orderBook';

export function removeBuyOrder(orderId: string): IOrderBookAction {
  return {
    source: actionSources.ORDER_BOOK,
    type: orderBook.REMOVE_BUY,
    orderId,
  };
}
