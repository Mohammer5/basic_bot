import 'jest';
import { removeBuyOrder } from '../removeBuyOrder';
import { actionSources } from '../../../Constants/actionSources';
import { orderBook } from '../../../Constants/actions/orderBook';

describe('Order Book Actions - Remove buy order', () => {
  it('should return a removeBuyOrder action object', () => {
    const orderId = 'id';
    expect(removeBuyOrder(orderId)).toEqual({
      source: actionSources.ORDER_BOOK,
      type: orderBook.REMOVE_BUY,
      orderId,
    });
  });
});
