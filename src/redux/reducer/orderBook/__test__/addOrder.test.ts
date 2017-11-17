import 'jest';
import { addOrder } from '../addOrder';
import { BTCUSD } from '../../../../module/currency/pairs';

describe('Order Book - Add Order Reducer', () => {
  it('should add an order to an empty order list', () => {
    const newOrder: IOrder = {
      id: 'id',
      pair: BTCUSD,
      side: 'buy',
      rate: 250.00,
      volume: 0.01,
    };

    expect(addOrder([], newOrder)).toEqual([newOrder]);
  });

  it('should add an order to a pre-filled order list', () => {
    const state: IOrder[] = [{
      id: 'id1',
      pair: BTCUSD,
      side: 'buy',
      rate: 245.00,
      volume: 0.01,
    }];
    const newOrder: IOrder = {
      id: 'id2',
      pair: BTCUSD,
      side: 'buy',
      rate: 250.00,
      volume: 0.01,
    };

    expect(addOrder(state, newOrder)).toEqual([...state, newOrder]);
  });
});
