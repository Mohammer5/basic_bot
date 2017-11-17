import 'jest';
import { status } from '../../../../constants/actions/status';
import { actionSources } from '../../../../constants/actionSources';
import {
  exchangeResponded,
  exchangeRespondedWithError,
  waitForExchangeResponse
} from '../statusActions';

describe('Status Actions', () => {
  it('should return the waiting for exchange response action', () => {
    expect(waitForExchangeResponse()).toEqual({
      source: actionSources.STATUS,
      type: status.WAITING_FOR_EXCHANGE_RESPONSE,
    });
  });

  it('should return the exchange responded', () => {
    expect(exchangeResponded()).toEqual({
      source: actionSources.STATUS,
      type: status.EXCHANGE_RESPONDED,
    });
  });

  it('should return the exchange responded with error', () => {
    expect(exchangeRespondedWithError()).toEqual({
      source: actionSources.STATUS,
      type: status.EXCHANGE_RESPONDED_WITH_ERROR,
    });
  });
});
