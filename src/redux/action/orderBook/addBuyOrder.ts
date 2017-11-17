import { actionSources } from '../../Constants/actionSources';
import { orderBook } from '../../Constants/actions/orderBook';

export function addBuyOrder(order: IOwnOrder): IOrderBookAction {
  return {
    source: actionSources.ORDER_BOOK,
    type: orderBook.ADD_BUY,
    order,
  };
}
