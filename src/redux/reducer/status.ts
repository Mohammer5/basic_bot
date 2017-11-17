import { status as statusActions } from '../../constants/actions/status';
import { defaultAction } from '../../constants/actions/defaultAction';
import { reduce } from '../../module/redux/reduce';

export const defaultState: IStatusState = {
  waitingForExchangeResponse: false,
  exchangeResponseError: false,
  lastSync: 0,
};

const actionToReducerMapping = {
  [statusActions.WAITING_FOR_EXCHANGE_RESPONSE]: (state, action) =>
    ({ ...state, waitingForExchangeResponse: true, exchangeResponseError: false }),

  [statusActions.EXCHANGE_RESPONDED]: (state, action) =>
    ({ ...state, waitingForExchangeResponse: false }),

  [statusActions.EXCHANGE_RESPONDED_WITH_ERROR]: (state, action) =>
    ({ ...state, waitingForExchangeResponse: false, exchangeResponseError: true }),

  [statusActions.SYNCED_OPENED_ORDERS]: (state, action) =>
    ({ ...state, lastSync }),
};

export const status = (
  state: IStatusState = defaultState,
  action: IStatusAction = defaultAction,
): IStatusState => reduce(actionToReducerMapping)(state)(action)(action.type);
