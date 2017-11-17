import 'jest';
import { orderBook as orderBookActions } from '../../../constants/actions/orderBook';
import { orderBook } from '../orderBook';
import { BTCUSD } from '../../../module/currency/currencies';

describe('Order Book Reducer', () => {
  it('should add a sell order to the initial state', () => {
    const newOrder: IOrder = {
      id: 'id',
      pair: BTCUSD,
      side: 'sell',
      rate: 100,
      volume: 1,
    };
    expect(orderBook(undefined, {
      type: orderBookActions.ADD_SELL,
      order: newOrder,
    })).toEqual(expect.objectContaining({
      sell: [newOrder],
    }))
  });

  it('should add a buy order to the initial state', () => {
    const newOrder: IOrder = {
      id: 'id',
      pair: BTCUSD,
      side: 'buy',
      rate: 100,
      volume: 1,
    };
    expect(orderBook(undefined, {
      type: orderBookActions.ADD_BUY,
      order: newOrder,
    })).toEqual(expect.objectContaining({
      buy: [newOrder],
    }))
  });

  it('should remove a sell order to the initial state', () => {
    const previousState: IOrderBookState = {
      buy: [],
      sell: [{
        id: 'id',
        pair: BTCUSD,
        side: 'sell',
        rate: 100,
        volume: 1,
      }],
    };
    expect(orderBook(previousState, {
      type: orderBookActions.REMOVE_SELL,
      orderId: 'id',
    })).toEqual(expect.objectContaining({
      sell: [],
    }))
  });

  it('should remove a buy order to the initial state', () => {
    const previousState: IOrderBookState = {
      sell: [],
      buy: [{
        id: 'id',
        pair: BTCUSD,
        side: 'buy',
        rate: 100,
        volume: 1,
      }],
    };
    expect(orderBook(previousState, {
      type: orderBookActions.REMOVE_BUY,
      orderId: 'id',
    })).toEqual(expect.objectContaining({
      buy: [],
    }))
  });

  it('should update a sell order to the initial state', () => {
    const update: IOrder = {
      id: 'id',
      pair: BTCUSD,
      side: 'sell',
      rate: 101,
      volume: 1.01,
    };
    const previousState: IOrderBookState = {
      buy: [],
      sell: [{
        id: 'id',
        pair: BTCUSD,
        side: 'sell',
        rate: 100,
        volume: 1,
      }],
    };
    expect(orderBook(previousState, {
      type: orderBookActions.UPDATE_SELL,
      orderId: 'id',
      order: update,
    })).toEqual(expect.objectContaining({
      sell: [update],
    }))
  });

  it('should update a buy order to the initial state', () => {
    const update: IOrder = {
      id: 'id',
      pair: BTCUSD,
      side: 'buy',
      rate: 101,
      volume: 1.01,
    };
    const previousState: IOrderBookState = {
      sell: [],
      buy: [{
        id: 'id',
        pair: BTCUSD,
        side: 'buy',
        rate: 100,
        volume: 1,
      }],
    };
    expect(orderBook(previousState, {
      type: orderBookActions.UPDATE_BUY,
      orderId: 'id',
      order: update,
    })).toEqual(expect.objectContaining({
      buy: [update],
    }))
  });
});
