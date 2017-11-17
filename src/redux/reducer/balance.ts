import { balance } from '../../constants/actions/balance';
import { defaultAction } from '../../constants/actions/defaultAction';
import { removeFrom } from './balance/removeFrom';
import { setTo } from './balance/setTo';
import { addTo } from './balance/addTo';
import { reduce } from '../../module/redux/reduce';

const defaultState: IBalanceState = {};
const actionToReducerMapping = {
  [balance.ADD]: addTo,
  [balance.SET]: setTo,
  [balance.REMOVE]: removeFrom,
};

export const balance = (
  state: IBalanceState = defaultState,
  action: IBalanceAction = defaultAction,
): IBalanceState => reduce(actionToReducerMapping)(state)(action)(state)(action.type);
