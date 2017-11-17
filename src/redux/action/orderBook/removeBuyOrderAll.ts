import { actionSources } from '../../../constants/actionSources';
import { orderBook } from '../../../constants/actions/orderBook';

export function removeBuyOrderAll(): IOrderBookAction {
  return {
    source: actionSources.ORDER_BOOK,
    type: orderBook.REMOVE_BUY_ALL,
  };
}
