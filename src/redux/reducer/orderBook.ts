import { addOrder } from './orderBook/addOrder';
import { updateOrder } from './orderBook/updateOrder';
import { removeOrder } from './orderBook/removeOrder';
import { orderBook } from '../Constants/actions/orderBook';
import { defaultAction } from '../Constants/actions/defaultAction';
import { reduce } from '../../module/redux/reduce';

const defaultState: IOrderBookState = {
  sell: [],
  buy: [],
};

const actionToReducerMapping = {
  [orderBook.ADD_SELL]: (state, { order }) =>
    ({ ...state, sell: addOrder(state.sell, order) }),

  [orderBook.ADD_BUY]: (state, { order }) =>
    ({ ...state, buy: addOrder(state.buy, order) }),

  [orderBook.UPDATE_SELL]: (state, { order, orderId }) =>
    ({ ...state, sell: updateOrder(state.sell, orderId, order) }),

  [orderBook.UPDATE_BUY]: (state, { order, orderId }) =>
    ({ ...state, buy: updateOrder(state.buy, orderId, order) }),

  [orderBook.REMOVE_SELL]: (state, { orderId }) =>
    ({ ...state, sell: removeOrder(state.sell, orderId) }),

  [orderBook.REMOVE_BUY]: (state, { orderId }) =>
    ({ ...state, buy: removeOrder(state.buy, orderId) }),

  [orderBook.RESET_SELL]: state =>
    ({ ...state, sell: [] }),

  [orderBook.RESET_BUY]: state =>
    ({ ...state, buy: [] }),
};

export const orderBook = (
  state: IOrderBookState = defaultState,
  action: IOrderBookAction = defaultAction,
) => reduce(actionToReducerMapping)(state)(action)(state)(action.type);
