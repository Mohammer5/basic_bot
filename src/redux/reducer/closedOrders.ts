import { closedOrders as closedOrderActions } from '../../constants/actions/closedOrders';
import { defaultAction } from '../../constants/actions/defaultAction';
import { reduce } from '../../module/redux/reduce';

const defaultState: IClosedOrderState = {
  all: [],
  own: [],
};

const actionToReducerMapping = {
  [closedOrderActions.ADD_CLOSED_ORDER]: (state, action) =>
    ({ ...state, all: [ ...state.all, action.closedOrder as IClosedOrder ]}),

  [closedOrderActions.ADD_OWN_CLOSED_ORDER]: (state, action) =>
    ({ ...state, own: [ ...state.own, action.closedOrder as IOwnOrder ]}),
};

export const closedOrders = (
  state: IClosedOrderState = defaultState,
  action: IClosedOrderAction = defaultAction,
): IClosedOrderState => reduce(actionToReducerMapping)(state)(action)(action.type);
