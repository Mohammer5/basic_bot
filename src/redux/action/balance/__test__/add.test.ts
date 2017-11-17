import 'jest';
import { add } from '../add';
import { actionSources } from '../../../Constants/actionSources';
import { balance } from '../../../Constants/actions/balance';

describe('Balance Actions - Add to to-get', () => {
  it('should return a addToGet action object with an amount of 20', () => {
    expect(add(20, 'USD')).toEqual({
      source: actionSources.BALANCE,
      type: balance.ADD,
      amount: 20,
      currency: 'USD'
    });
  });
});
