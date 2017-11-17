import 'jest';
import { status } from '../../../constants/actions/status';
import { status as statusAction, defaultState } from '../status';

describe('Trades Reducer', () => {
  it('should set adding buy order to true', () => {
    expect(statusAction(undefined, {
      type: status.WAITING_FOR_EXCHANGE_RESPONSE,
    })).toEqual(expect.objectContaining({ waitingForExchangeResponse: true }));
  });

  it('should set adding buy order error to false', () => {
    expect(statusAction({ ...defaultState, exchangeResponseError: true }, {
      type: status.WAITING_FOR_EXCHANGE_RESPONSE,
    })).toEqual(expect.objectContaining({ exchangeResponseError: false }));
  });

  it('should set adding buy order error to true', () => {
    expect(statusAction(undefined, {
      type: status.EXCHANGE_RESPONDED_WITH_ERROR,
    })).toEqual(expect.objectContaining({ exchangeResponseError: true }));
  });

  it('should set adding buy order to false', () => {
    expect(statusAction({ ...defaultState, waitingForExchangeResponse: true }, {
      type: status.EXCHANGE_RESPONDED,
    })).toEqual(expect.objectContaining({ waitingForExchangeResponse: false }));
  });
});
