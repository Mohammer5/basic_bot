import { balance as balanceActions } from '../../constants/actions/balance';
import { defaultAction } from '../../constants/actions/defaultAction';
import { removeFrom } from './balance/removeFrom';
import { setTo } from './balance/setTo';
import { addTo } from './balance/addTo';
import { reduce } from '../../module/redux/reduce';

const defaultState: IBalanceState = {};
const actionToReducerMapping = {
  [balanceActions.ADD]: addTo,
  [balanceActions.SET]: setTo,
  [balanceActions.REMOVE]: removeFrom,
};

export const balance = (
  state: IBalanceState = defaultState,
  action: IBalanceAction = defaultAction,
): IBalanceState => reduce(actionToReducerMapping)(state)(action)(action.type);
