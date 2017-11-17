import { actionSources } from '../../../constants/actionSources';
import { orderBook } from '../../../constants/actions/orderBook';

export function addBuyOrder(order: IOwnOrder): IOrderBookAction {
  return {
    source: actionSources.ORDER_BOOK,
    type: orderBook.ADD_BUY,
    order,
  };
}
