import { status } from '../../constants/actions/status';
import { defaultAction } from '../../constants/actions/defaultAction';
import { reduce } from '../../module/redux/reduce';

export const defaultState: IStatusState = {
  waitingForExchangeResponse: false,
  exchangeResponseError: false,
  lastSync: 0,
};

const actionToReducerMapping = {
  [status.WAITING_FOR_EXCHANGE_RESPONSE]: (state, action) =>
    ({ ...state, waitingForExchangeResponse: true, exchangeResponseError: false }),

  [status.EXCHANGE_RESPONDED]: (state, action) =>
    ({ ...state, waitingForExchangeResponse: false }),

  [status.EXCHANGE_RESPONDED_WITH_ERROR]: (state, action) =>
    ({ ...state, waitingForExchangeResponse: false, exchangeResponseError: true }),

  [status.SYNCED_OPENED_ORDERS]: (state, action) =>
    ({ ...state, lastSync }),
};

export const status = (
  state: IStatusState = defaultState,
  { type, lastSync }: IStatusAction = defaultAction,
): IStatusState => reduce(actionToReducerMapping)(state)(action)(state)(action.type);
