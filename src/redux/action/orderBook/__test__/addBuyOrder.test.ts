import 'jest';
import { addBuyOrder } from '../addBuyOrder';
import { actionSources } from '../../../Constants/actionSources';
import { orderBook } from '../../../Constants/actions/orderBook';
import { pairsToTrade } from '../../../../Constants/pairsToTrade';
import IOrder = Orders.IOrder;

describe('Order Book Actions - Add buy order', () => {
  it('should return an addBuyOrder action object', () => {
    const order: IOrder = {
      id: 'id',
      pair: pairsToTrade,
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
