import 'jest';
import { addClosedOrder } from '../addClosedOrder';
import { actionSources } from '../../../Constants/actionSources';
import { closedOrder } from '../../../Constants/actions/closedOrder';
import IClosedOrder = Orders.IClosedOrder;
import { pairsToClosedOrder } from '../../../../Constants/pairsToClosedOrder';

describe('ClosedOrders Actions - Add closedOrder', () => {
  it('should return a addClosedOrderTime action object', () => {
    const closedOrder: IClosedOrder = {
      id: 'id',
      pair: pairsToClosedOrder,
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
