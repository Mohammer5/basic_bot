import 'jest';
import { set } from '../set';
import { actionSources } from '../../../../constants/actionSources';
import { balance } from '../../../../constants/actions/balance';
import { USD } from '../../../../module/currency/currencies';

describe('Balance Actions - Add to to-get', () => {
  it('should return a addToGet action object with an amount of 20', () => {
    expect(set(20, USD)).toEqual({
      source: actionSources.BALANCE,
      type: balance.SET,
      amount: 20,
      currency: USD
    });
  });
});
