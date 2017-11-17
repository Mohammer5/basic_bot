import { actionSources } from '../../../constants/actionSources';
import { balance } from '../../../constants/actions/balance';

export function add(amount: number, currency: string): IBalanceAction {
  return {
    source: actionSources.BALANCE,
    type: balance.ADD,
    amount,
    currency,
  };
}
