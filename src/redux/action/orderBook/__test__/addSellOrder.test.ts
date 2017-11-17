import 'jest';
import { addSellOrder } from '../addSellOrder';
import { actionSources } from '../../../Constants/actionSources';
import { orderBook } from '../../../Constants/actions/orderBook';
import IOrder = Orders.IOrder;
import { pairsToTrade } from '../../../../Constants/pairsToTrade';

describe('Order Book Actions - Add sell order', () => {
  it('should return an addSellOrder action object', () => {
    const order: IOrder = {
      id: 'id',
      pair: pairsToTrade,
      side: 'sell',
      rate: 250.0,
      volume: 1.01,
    };
    expect(addSellOrder(order)).toEqual({
      source: actionSources.ORDER_BOOK,
      type: orderBook.ADD_SELL,
      order,
    });
  });
});
