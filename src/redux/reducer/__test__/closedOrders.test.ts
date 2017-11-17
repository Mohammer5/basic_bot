import 'jest';
import { closedOrders as closedOrderActions } from '../../../constants/actions/closedOrders';
import { closedOrders } from '../closedOrders';
import { BTCUSD } from '../../../module/currency/pairs';

describe('Trades Reducer', () => {
  it('should add an own closedOrder to the initial state', () => {
    const newTrade: IOwnTrade = {
      id: 'id',
      side: 'buy',
      pair: BTCUSD,
      openTime: 100000000,
      closeTime: 100000005,
      rate: 100,
      volume: 1.01,
    };

    expect(closedOrders(undefined, {
      type: closedOrderActions.ADD_OWN_CLOSED_ORDER,
      closedOrder: newTrade,
    }).own).toEqual([newTrade]);
  });

  it('should add an own closedOrder to existing state', () => {
    const closedOrderOne: IOwnTrade = {
      id: 'id',
      side: 'buy',
      openTime: 100000000,
      closeTime: 100000005,
      pair: BTCUSD,
      rate: 100,
      volume: 1.01,
    };
    const closedOrderTwo: IOwnTrade = {
      id: 'id2',
      side: 'sell',
      openTime: 100000001,
      closeTime: 100000006,
      pair: BTCUSD,
      rate: 101,
      volume: 1.02,
    };
    const previousState = { own: [closedOrderOne], all: [] };
    const expected = [closedOrderOne, closedOrderTwo];
    const actual = closedOrders(previousState, {
      type: closedOrderActions.ADD_OWN_CLOSED_ORDER,
      closedOrder: closedOrderTwo,
    }).own;

    expect(actual).toEqual(expected);
  });

  it('should add a closedOrder to the initial state', () => {
    const newTrade: ITrade = {
      side: 'buy',
      pair: BTCUSD,
      closeTime: 100000005,
      rate: 100,
      volume: 1.01,
    };

    expect(closedOrders(undefined, {
      type: closedOrderActions.ADD_CLOSED_ORDER,
      closedOrder: newTrade,
    }).all).toEqual([newTrade]);
  });

  it('should add a closedOrder to existing state', () => {
    const closedOrderOne: ITrade = {
      side: 'buy',
      closeTime: 100000005,
      pair: BTCUSD,
      rate: 100,
      volume: 1.01,
    };
    const closedOrderTwo: ITrade = {
      side: 'sell',
      closeTime: 100000006,
      pair: BTCUSD,
      rate: 101,
      volume: 1.02,
    };
    const previousState = { all: [closedOrderOne], own: [] };
    const expected = [closedOrderOne, closedOrderTwo];
    const actual = closedOrders(previousState, {
      type: closedOrderActions.ADD_CLOSED_ORDER,
      closedOrder: closedOrderTwo,
    }).all;

    expect(actual).toEqual(expected);
  });
});
