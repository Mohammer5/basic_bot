import { actionSources } from '../../../constants/actionSources';
import { orderBook } from '../../../constants/actions/orderBook';

export function addSellOrder(order: IOwnOrder): IOrderBookAction {
  return {
    source: actionSources.ORDER_BOOK,
    type: orderBook.ADD_SELL,
    order,
  };
}
