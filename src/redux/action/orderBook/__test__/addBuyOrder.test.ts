import 'jest';
import { addBuyOrder } from '../addBuyOrder';
import { actionSources } from '../../../../constants/actionSources';
import { orderBook } from '../../../../constants/actions/orderBook';
import { BTCUSD } from '../../../../module/currency/currencies';

describe('Order Book Actions - Add buy order', () => {
  it('should return an addBuyOrder action object', () => {
    const order: IOrder = {
      id: 'id',
      pair: BTCUSD,
      side: 'buy',
      rate: 250.0,
      volume: 1.01,
    };
    expect(addBuyOrder(order)).toEqual({
      source: actionSources.ORDER_BOOK,
      type: orderBook.ADD_BUY,
      order,
    });
  });
});
