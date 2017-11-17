import 'jest';
import { balance as balanceActions } from '../../../constants/actions/balance';
import { balance } from '../balance';

describe('Balance Reducer', () => {
  it('should change the initial state of the to-get value to 10', () => {
    expect(balance(undefined, {
      type: balanceActions.ADD,
      amount: 10,
      currency: 'USD',
    })).toEqual(expect.objectContaining({
      USD: 10,
    }))
  });

  it('should remove 5 from the to-get value of 10', () => {
    expect(balance({
      USD: 10,
    }, {
      type: balanceActions.REMOVE,
      amount: 5,
      currency: 'USD',
    })).toEqual(expect.objectContaining({
      USD: 5,
    }))
  });
});
