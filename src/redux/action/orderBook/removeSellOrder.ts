import { actionSources } from '../../../constants/actionSources';
import { orderBook } from '../../../constants/actions/orderBook';

export function removeSellOrder(orderId: string): IOrderBookAction {
  return {
    source: actionSources.ORDER_BOOK,
    type: orderBook.REMOVE_SELL,
    orderId,
  };
}
