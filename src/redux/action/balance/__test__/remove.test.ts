import 'jest';
import { remove } from '../remove';
import { actionSources } from '../../../../constants/actionSources';
import { balance } from '../../../../constants/actions/balance';
import { USD } from '../../../../module/currency/currencies';

describe('Balance Actions - Remove from to-get', () => {
  it('should return a removeToGet action object with an amount of 20', () => {
    expect(remove(20, USD)).toEqual({
      source: actionSources.BALANCE,
      type: balance.REMOVE,
      amount: 20,
      currency: USD
    });
  });
});
