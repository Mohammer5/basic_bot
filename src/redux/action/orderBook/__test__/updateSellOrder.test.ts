import 'jest';
import { updateSellOrder } from '../updateSellOrder';
import { actionSources } from '../../../Constants/actionSources';
import { orderBook } from '../../../Constants/actions/orderBook';
import IOrder = Orders.IOrder;
import { pairsToTrade } from '../../../../Constants/pairsToTrade';

describe('Order Book Actions - Update sell order', () => {
  it('should return an updateSellOrder action object', () => {
    const order: IOrder = {
      id: 'id',
      pair: pairsToTrade,
      side: 'sell',
      rate: 250.0,
      volume: 1.01,
    };
    expect(updateSellOrder('id', order)).toEqual({
      source: actionSources.ORDER_BOOK,
      type: orderBook.UPDATE_SELL,
      orderId: 'id',
      order,
    });
  });
});
