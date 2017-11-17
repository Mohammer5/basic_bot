import { actionSources } from '../../Constants/actionSources';
import { closedOrder } from '../../Constants/actions/closedOrder';

export function addClosedOrder(closedOrder: IClosedOrder): IClosedOrderAction {
  return {
    source: actionSources.CLOSED_ORDERS,
    type: closedOrder.ADD_CLOSED_ORDER,
    closedOrder,
  };
}
