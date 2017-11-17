import { actionSources } from '../../Constants/actionSources';
import { balance } from '../../Constants/actions/balance';

export function remove(amount: number, currency: string): IBalanceAction {
  return {
    source: actionSources.BALANCE,
    type: balance.REMOVE,
    amount,
    currency,
  };
}
