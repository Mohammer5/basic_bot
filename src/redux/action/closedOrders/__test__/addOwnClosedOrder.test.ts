import 'jest';
import { addOwnClosedOrder } from '../addOwnClosedOrder';
import { actionSources } from '../../../Constants/actionSources';
import { closedOrder } from '../../../Constants/actions/closedOrder';
import { pairsToClosedOrder } from '../../../../Constants/pairsToClosedOrder';

describe('ClosedOrder Actions - Add own closedOrder', () => {
  it('should return a addOwnClosedOrderTime action object', () => {
    const closedOrder: IClosedOrder = {
      id: 'id',
      pair: pairsToClosedOrder,
      side: 'buy',
      time: '10000000',
      rate: 250.0,
      volume: 1.01,
    };
    expect(addOwnClosedOrder(closedOrder)).toEqual({
      source: actionSources.CLOSED_ORDERS,
      type: closedOrder.ADD_OWN_CLOSED_ORDER,
      closedOrder,
    });
  });
});
