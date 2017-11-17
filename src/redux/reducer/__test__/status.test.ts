import 'jest';
import { status as statusActions } from '../../../constants/actions/status';
import { status, defaultState } from '../status';

describe('Trades Reducer', () => {
  it('should set adding buy order to true', () => {
    expect(status(undefined, {
      type: statusActions.WAITING_FOR_EXCHANGE_RESPONSE,
    })).toEqual(expect.objectContaining({ waitingForExchangeResponse: true }));
  });

  it('should set adding buy order error to false', () => {
    expect(status({ ...defaultState, exchangeResponseError: true }, {
      type: statusActions.WAITING_FOR_EXCHANGE_RESPONSE,
    })).toEqual(expect.objectContaining({ exchangeResponseError: false }));
  });

  it('should set adding buy order error to true', () => {
    expect(status(undefined, {
      type: statusActions.EXCHANGE_RESPONDED_WITH_ERROR,
    })).toEqual(expect.objectContaining({ exchangeResponseError: true }));
  });

  it('should set adding buy order to false', () => {
    expect(status({ ...defaultState, waitingForExchangeResponse: true }, {
      type: statusActions.EXCHANGE_RESPONDED,
    })).toEqual(expect.objectContaining({ waitingForExchangeResponse: false }));
  });
});
