import 'jest';
import { updateSellOrder } from '../updateSellOrder';
import { actionSources } from '../../../../constants/actionSources';
import { orderBook } from '../../../../constants/actions/orderBook';
import { BTCUSD } from '../../../../module/currency/currencies';

describe('Order Book Actions - Update sell order', () => {
  it('should return an updateSellOrder action object', () => {
    const order: IOrder = {
      id: 'id',
      pair: BTCUSD,
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
