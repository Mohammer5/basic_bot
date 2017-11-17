import 'jest';
import { removeBuyOrder } from '../removeBuyOrder';
import { actionSources } from '../../../../constants/actionSources';
import { orderBook } from '../../../../constants/actions/orderBook';

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
