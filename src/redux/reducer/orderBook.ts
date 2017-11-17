import { addOrder } from './orderBook/addOrder';
import { updateOrder } from './orderBook/updateOrder';
import { removeOrder } from './orderBook/removeOrder';
import { orderBook as orderBookActions } from '../../constants/actions/orderBook';
import { defaultAction } from '../../constants/actions/defaultAction';
import { reduce } from '../../module/redux/reduce';

const defaultState: IOrderBookState = {
  sell: [],
  buy: [],
};

const actionToReducerMapping = {
  [orderBookActions.ADD_SELL]: (state, { order }) =>
    ({ ...state, sell: addOrder(state.sell, order) }),

  [orderBookActions.ADD_BUY]: (state, { order }) =>
    ({ ...state, buy: addOrder(state.buy, order) }),

  [orderBookActions.UPDATE_SELL]: (state, { order, orderId }) =>
    ({ ...state, sell: updateOrder(state.sell, orderId, order) }),

  [orderBookActions.UPDATE_BUY]: (state, { order, orderId }) =>
    ({ ...state, buy: updateOrder(state.buy, orderId, order) }),

  [orderBookActions.REMOVE_SELL]: (state, { orderId }) =>
    ({ ...state, sell: removeOrder(state.sell, orderId) }),

  [orderBookActions.REMOVE_BUY]: (state, { orderId }) =>
    ({ ...state, buy: removeOrder(state.buy, orderId) }),

  [orderBookActions.RESET_SELL]: state =>
    ({ ...state, sell: [] }),

  [orderBookActions.RESET_BUY]: state =>
    ({ ...state, buy: [] }),
};

export const orderBook = (
  state: IOrderBookState = defaultState,
  action: IOrderBookAction = defaultAction,
) => reduce(actionToReducerMapping)(state)(action)(action.type);
