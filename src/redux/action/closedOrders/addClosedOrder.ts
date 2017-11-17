import { actionSources } from '../../../constants/actionSources';
import { closedOrder } from '../../../constants/actions/closedOrder';

export function addClosedOrder(closedOrder: IClosedOrder): IClosedOrderAction {
  return {
    source: actionSources.CLOSED_ORDERS,
    type: closedOrder.ADD_CLOSED_ORDER,
    closedOrder,
  };
}
