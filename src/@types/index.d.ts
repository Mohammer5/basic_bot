/**
 *
 * Currencies
 *
 */
type FiatCurrency = 'Fiat';
type CryptoCurrency = 'Crypto';
type CurrencyType = FiatCurrency | CryptoCurrency;

interface ICurrency {
  identifier: string;
  type: CurrencyType;
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
  pair: ICurrencyPair;
  side: OrderSide;
  rate: number;
  volume: number;
  openTime?: number;
}

interface IOpenOrderUpates {
  id: string;
  rate?: number;
  volume?: number;
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

/**
 *
 * Exchange
 *
 **/
interface IExchangeFees {
  maker: number;
  taker: number;
}

interface IExchangeUpdateOrderResponse {
  id: string;
  updates: IOwnOrder;
}

interface IExchangeGetBalanceResponse {
  [currency: ICurrency]: number;
}

interface IGetClosedOrdersParameters {
  amount?: number;
  since?: number;
  symbol?: Pair;
}

interface IExchange {
  fees: IExchangeFees;

  addingOrders$: Rx.ReplaySubject<void>;
  addingOrders$: Rx.ReplaySubject<void>;
  deletingOrders$: Rx.ReplaySubject<void>;
  ordersAdded$: Rx.ReplaySubject<IOwnOrder[]>;
  ordersUpdated$: Rx.ReplaySubject<IExchangeUpdateOrderResponsep[]>;
  ordersDeleted$: Rx.ReplaySubject<void>;
  addingOrdersFailed$: Rx.ReplaySubject<string>;
  addingOrdersFailed$: Rx.ReplaySubject<string>;
  deletingOrdersFailed$: Rx.ReplaySubject<string>;

  addOrder(order: IOpenOrder): Promise<IOwnOrder>;
  addOrders(orders: IOpenOrder[]): Promise<IOwnOrder[]>;
  updateOrder(order: IOpenOrderUpates): Promise<IExchangeUpdateOrderResponse>;
  deleteOrder(orderId: string): Promise<void>;

  getBalance(): Promise<IExchangeGetBalanceResponse>;
  getOpenOrders(): Promise<IOwnOrder[]>;
  getOwnClosedOrders(options: IGetClosedOrdersParameters): Promise<IOwnClosedOrder[]>;
  getClosedOrders(options?: IGetClosedOrdersParameters): Promise<IClosedOrder[]>;
}
