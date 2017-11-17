import 'jest';
import { updateBuyOrder } from '../updateBuyOrder';
import { actionSources } from '../../../../constants/actionSources';
import { orderBook } from '../../../../constants/actions/orderBook';
import { BTCUSD } from '../../../../module/currency/currencies';

describe('Order Book Actions - Update buy order', () => {
  it('should return an updateBuyOrder action object', () => {
    const orderId = 'id';
    const order: IOrder = {
      id: orderId,
      pair: BTCUSD,
      side: 'buy',
      rate: 250.0,
      volume: 1.01,
    };
    expect(updateBuyOrder('id', order)).toEqual({
      source: actionSources.ORDER_BOOK,
      type: orderBook.UPDATE_BUY,
      orderId,
      order,
    });
  });
});
