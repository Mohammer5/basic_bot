import { closedOrder } from '../../constants/actions/closedOrder';
import { defaultAction } from '../../constants/actions/defaultAction';
import { reduce } from '../../module/redux/reduce';

const defaultState: IClosedOrderState = {
  all: [],
  own: [],
};

const actionToReducerMapping = {
  [closedOrder.ADD_CLOSED_ORDER]: (state, action) =>
    ({ ...state, all: [ ...state.all, closedOrder as IClosedOrder ]}),

  [closedOrder.ADD_OWN_CLOSED_ORDER]: (state, action) =>
    ({ ...state, own: [ ...state.own, closedOrder as IOwnOrder ]}),
};

export const closedOrders = (
  state: IClosedOrderState = defaultState,
  action: IClosedOrderAction = defaultAction,
): IClosedOrderState => reduce(actionToReducerMapping)(state)(action)(state)(action.type);
