import 'jest';
import { removeSellOrder } from '../removeSellOrder';
import { actionSources } from '../../../Constants/actionSources';
import { orderBook } from '../../../Constants/actions/orderBook';

describe('Order Book Actions - Remove sell order', () => {
  it('should return a removeSellOrder action object', () => {
    const orderId = 'id';
    expect(removeSellOrder(orderId)).toEqual({
      source: actionSources.ORDER_BOOK,
      type: orderBook.REMOVE_SELL,
      orderId,
    });
  });
});
