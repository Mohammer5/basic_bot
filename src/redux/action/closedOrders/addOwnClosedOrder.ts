import { actionSources } from '../../../constants/actionSources';
import { closedOrder } from '../../../constants/actions/closedOrder';

export function addOwnClosedOrder(closedOrder: IOwnClosedOrder): IClosedOrderAction {
  return {
    source: actionSources.CLOSED_ORDERS,
    type: closedOrder.ADD_OWN_CLOSED_ORDER,
    closedOrder,
  };
}
