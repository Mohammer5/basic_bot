/**
 *
 * Currencies
 *
 */
type FiatCurrency = 'Fiat';
type CryptoCurrency = 'Crypto';
type CurrencyType = TFiatCurrency | TCryptoCurrency;

interface ICurrency {
  identifier: string;
  type: TCurrencyType;
}

interface ICurrencyPair {
  baseCurrency: ICurrency;
  quoteCurrency: ICurrency;
}

/**
 *
 * Orders
 *
 */
type OrderSideSell = 'sell';
type OrderSideBuy = 'buy';
type OrderSide = OrderSideSell | OrderSideBuy;

type FeeTaker = 'taker';
type FeeMaker = 'maker';
type FeeType = FeeTaker | FeeMaker;

interface IOpenOrder {
  pair: IProductPair;
  side: OrderSide;
  rate: number;
  volume: number;
  openTime?: number;
}

interface IOwnOrder extends IOpenOrder {
  id: string;
  originalVolume: number;
}

interface IClosedOrder extends IOpenOrder {
  closeTime?: number;
}

interface IOwnClosedOrder extends IClosedOrder, IOwnOrder {
  feeType: FeeType;
}

/**
 *
 * Redux Actions
 *
 */
interface IAbstractAction {
  source?: string;
  type: string;
  payload?: any;
}

interface IBalanceAction extends IAbstractAction {
  amount?: number;
  currency?: ICurrency;
}

interface IOrderBookAction extends IAbstractAction {
  order?: Orders.IOwnOrder;
  orderId?: string;
}

interface IClosedOrderAction extends IAbstractAction {
  closedOrder?: Orders.IClosedOrder | Orders.IOwnClosedOrder;
}

interface IStatusAction extends IAbstractAction {
  lastSync?: number;
}

/**
 *
 * Redux State
 *
 */
interface IBalanceState {
  [currency: ICurrency]: number;
}

interface IOrderBookState {
  sell: Orders.IOwnOrder[],
  buy: Orders.IOwnOrder[],
}

interface IStatusState {
  waitingForExchangeResponse: boolean;
  exchangeResponseError: boolean;
}

interface IClosedOrderState {
  all: Orders.IClosedOrder[],
  own: Orders.IOwnOrder[],
}

interface IRootState {
  balance: IBalanceState;
  orderBook: IOrderBookState;
  closedOrders: IClosedOrderState;
  status: IStatusState;
}
