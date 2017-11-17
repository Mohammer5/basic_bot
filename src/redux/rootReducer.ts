import { actionSources } from '../../constants/actionSources';
import { defaultAction } from '../../constants/actions/defaultAction';
import { balance } from './reducer/balance';
import { orderBook } from './reducer/orderBook';
import { closedOrders } from './reducer/closedOrders';
import { status } from './reducer/status';
import { reduce } from '../module/redux/reduce';

const defaultState: IRootState = {
  balance: balance(),
  orderBook: orderBook(),
  closedOrders: closedOrders(),
  status: status(),
};

const sourceToReducerMapping = {
  [actionSources.BALANCE]: (state, action) =>
    ({ ...state, balance: balance(state.balance, action)}),

  [actionSources.ORDER_BOOK]: (state, action) =>
    ({ ...state, orderBook: orderBook(state.orderBook, action)}),

  [actionSources.TRADES]: (state, action) =>
    ({ ...state, closedOrders: closedOrders(state.closedOrders, action)}),

  [actionSources.STATUS]: (state, action) =>
    ({ ...state, status: status(state.status, action)}),
};

export const rootReducer = (
  state: IRootState = defaultState,
  action: IAbstractAction = defaultAction,
) => reduce(sourceToReducerMapping)(state)(action)(action.source);
