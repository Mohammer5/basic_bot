jest.mock('../balance/addTo');
jest.mock('../balance/removeFrom');
jest.mock('../balance/setTo');

import { balance as balanceActions } from '../../../constants/actions/balance';
import { balance } from '../balance';
import { addTo } from '../balance/addTo';
import { removeFrom } from '../balance/removeFrom';
import { setTo } from '../balance/setTo';

describe('Balance Reducer', () => {
  it('should call the addTo reducer when called with the add action', () => {
    balance(undefined, { type: balanceActions.ADD, amount: 10, currency: 'USD' });
    expect(addTo.mock.calls.length).toBe(1);
  });

  it('should call the removeFrom reducer when called with the add action', () => {
    balance(undefined, { type: balanceActions.REMOVE, amount: 10, currency: 'USD' });
    expect(removeFrom.mock.calls.length).toBe(1);
  });

  it('should call the setTo reducer when called with the add action', () => {
    balance(undefined, { type: balanceActions.SET, amount: 10, currency: 'USD' });
    expect(setTo.mock.calls.length).toBe(1);
  });
});
