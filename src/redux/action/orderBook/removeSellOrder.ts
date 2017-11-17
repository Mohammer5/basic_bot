import { actionSources } from '../../Constants/actionSources';
import { orderBook } from '../../Constants/actions/orderBook';

export function removeSellOrder(orderId: string): IOrderBookAction {
  return {
    source: actionSources.ORDER_BOOK,
    type: orderBook.REMOVE_SELL,
    orderId,
  };
}
