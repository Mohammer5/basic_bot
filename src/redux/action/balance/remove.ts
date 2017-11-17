import { actionSources } from '../../../constants/actionSources';
import { balance } from '../../../constants/actions/balance';

export function remove(amount: number, currency: string): IBalanceAction {
  return {
    source: actionSources.BALANCE,
    type: balance.REMOVE,
    amount,
    currency,
  };
}
