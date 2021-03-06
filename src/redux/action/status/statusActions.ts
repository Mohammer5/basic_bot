import { actionSources } from '../../../constants/actionSources';
import { status } from '../../../constants/actions/status';

export function exchangeResponded(): IStatusAction {
  return {
    source: actionSources.STATUS,
    type: status.EXCHANGE_RESPONDED,
  };
}

export function exchangeRespondedWithError(): IStatusAction {
  return {
    source: actionSources.STATUS,
    type: status.EXCHANGE_RESPONDED_WITH_ERROR,
  };
}

export function waitForExchangeResponse(): IStatusAction {
  return {
    source: actionSources.STATUS,
    type: status.WAITING_FOR_EXCHANGE_RESPONSE,
  };
}
