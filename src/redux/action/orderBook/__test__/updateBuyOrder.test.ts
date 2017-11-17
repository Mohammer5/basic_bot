import 'jest';
import { updateBuyOrder } from '../updateBuyOrder';
import { actionSources } from '../../../Constants/actionSources';
import { orderBook } from '../../../Constants/actions/orderBook';
import IOrder = Orders.IOrder;
import { pairsToTrade } from '../../../../Constants/pairsToTrade';

describe('Order Book Actions - Update buy order', () => {
  it('should return an updateBuyOrder action object', () => {
    const orderId = 'id';
    const order: IOrder = {
      id: orderId,
      pair: pairsToTrade,
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
