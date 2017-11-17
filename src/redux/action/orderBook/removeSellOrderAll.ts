import { actionSources } from '../../../constants/actionSources';
import { orderBook } from '../../../constants/actions/orderBook';

export function removeSellOrderAll(): IOrderBookAction {
  return {
    source: actionSources.ORDER_BOOK,
    type: orderBook.REMOVE_SELL_ALL,
  };
}
