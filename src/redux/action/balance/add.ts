import { actionSources } from '../../Constants/actionSources';
import { balance } from '../../Constants/actions/balance';

export function add(amount: number, currency: string): IBalanceAction {
  return {
    source: actionSources.BALANCE,
    type: balance.ADD,
    amount,
    currency,
  };
}
