import 'jest';
import { removeOrder } from '../removeOrder';
import IOrder = Orders.IOrder;
import { LTC, USD } from '../../../../Module/Product/products';

describe('Order Book - Rmove Order Reducer', () => {
  it('should remove an order from a pre-filled order list', () => {
    const state: IOrder[] = [{
      id: 'id1',
      pair: [LTC, USD],
      side: 'buy',
      rate: 245.00,
      volume: 0.01,
    }];

    expect(removeOrder(state, 'id1')).toEqual([]);
  });

  it('shouldn\'t alter the order list when used with an non-existing id', () => {
    const state: IOrder[] = [{
      id: 'id1',
      pair: [LTC, USD],
      side: 'buy',
      rate: 245.00,
      volume: 0.01,
    }];

    expect(removeOrder(state, 'id2')).toEqual(state);
  });
});
