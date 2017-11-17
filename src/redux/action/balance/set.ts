import { actionSources } from '../../Constants/actionSources';
import { balance } from '../../Constants/actions/balance';
import IBalanceAction = Actions.IBalanceAction;

export function set(amount: number, currency: string): IBalanceAction {
  return {
    source: actionSources.BALANCE,
    type: balance.SET,
    amount,
    currency,
  };
}
