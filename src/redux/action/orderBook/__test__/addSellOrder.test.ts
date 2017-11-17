import 'jest';
import { addSellOrder } from '../addSellOrder';
import { actionSources } from '../../../../constants/actionSources';
import { orderBook } from '../../../../constants/actions/orderBook';
import { BTCUSD } from '../../../../modules/currency/currencies';

describe('Order Book Actions - Add sell order', () => {
  it('should return an addSellOrder action object', () => {
    const order: IOrder = {
      id: 'id',
      pair: BTCUSD,
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
