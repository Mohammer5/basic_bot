import 'jest';
import { updateOrder } from '../updateOrder';
import { BTCUSD } from '../../../../module/currency/pairs';

describe('Order Book - Rmove Order Reducer', () => {
  const side = 'buy';

  it('should update an order in a pre-filled order list', () => {
    const orderOne: IOrder = { id: 'id1', pair: BTCUSD, side, rate: 245.00, volume: 0.01, };
    const orderTwo: IOrder = { id: 'id2', pair: BTCUSD, side, rate: 247.00, volume: 0.01, };
    const orderThree: IOrder = { id: 'id3', pair: BTCUSD, side, rate: 249.00, volume: 0.01, };
    const update: IOrder = { id: 'ia27cg7wcg1', pair: BTCUSD, rate: 248.00 };
    const state: IOrder[] = [orderOne, orderTwo, orderThree];

    expect(updateOrder(state, 'id2', update)).toEqual([orderOne, { ...orderTwo, ...update }, orderThree]);
  });
});
