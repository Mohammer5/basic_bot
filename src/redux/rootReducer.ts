import { actionSources } from '../Constants/actionSources';
import { defaultAction } from '../Constants/actions/defaultAction';
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
    balance(state, action),

  [actionSources.ORDER_BOOK]: (state, action) =>
    orderBook(state, action),

  [actionSources.TRADES]: (state, action) =>
    closedOrders(state, action),

  [actionSources.STATUS]: (state, action) =>
    status(state, action),
};

export const rootReducer = (
  state: IRootState = defaultState,
  action: IAbstractAction = defaultAction,
) => reduce(sourceToReducerMapping)(state)(source)(state)(action.type);
