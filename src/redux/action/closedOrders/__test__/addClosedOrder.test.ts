import 'jest';
import { addClosedOrder } from '../addClosedOrder';
import { actionSources } from '../../../../constants/actionSources';
import { closedOrder } from '../../../../constants/actions/closedOrder';
import { BTCUSD } from '../../../../module/currency/pairs';

describe('ClosedOrders Actions - Add closedOrder', () => {
  it('should return a addClosedOrderTime action object', () => {
    const closedOrder: IClosedOrder = {
      id: 'id',
      pair: BTCUSD,
      side: 'buy',
      time: '10000000',
      rate: 250.0,
      volume: 1.01,
    };
    expect(addClosedOrder(closedOrder)).toEqual({
      source: actionSources.CLOSED_ORDERS,
      type: closedOrder.ADD_CLOSED_ORDER,
      closedOrder,
    });
  });
});
