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
  symbol?: ICurrencyPair;
}

interface IExchange {
  /*********************************************************
   *
   *
   * These value may change over time or when switching accounts
   *
   *
   *********************************************************/
  key: string;
  secret: string;
  fees: IExchangeFees;


  /*********************************************************
   *
   *
   * These values should never be changed, but accessible from outside
   *
   *
   *********************************************************/
  readonly addingOrders$: Rx.ReplaySubject<void>;
  readonly addingOrders$: Rx.ReplaySubject<void>;
  readonly deletingOrders$: Rx.ReplaySubject<void>;
  readonly ordersAdded$: Rx.ReplaySubject<IOwnOrder[]>;
  readonly ordersUpdated$: Rx.ReplaySubject<IExchangeUpdateOrderResponsep[]>;
  readonly ordersDeleted$: Rx.ReplaySubject<void>;
  readonly addingOrdersFailed$: Rx.ReplaySubject<string>;
  readonly addingOrdersFailed$: Rx.ReplaySubject<string>;
  readonly deletingOrdersFailed$: Rx.ReplaySubject<string>;


  /*********************************************************
   *
   *
   * The methods handle orders
   *
   *
   *********************************************************/

  /**
   * @param {IOpenOrder} order
   * @returns {Promise<IOwnOrder>}
   */
  addOrder(order: IOpenOrder): Promise<IOwnOrder>;

  /**
   * @param {IOpenOrder[]} orders
   * @returns {Promise<IOwnOrder[]>}
   */
  addOrders(orders: IOpenOrder[]): Promise<IOwnOrder[]>;

  /**
   * @param {IOpenOrderUpates} order
   * @returns {Promise<IExchangeUpdateOrderResponse>}
   */
  updateOrder(order: IOpenOrderUpates): Promise<IExchangeUpdateOrderResponse>;

  /**
   * @param {string} orderId
   * @returns {Promise<void>}
   */
  deleteOrder(orderId: string): Promise<void>;


  /*********************************************************
   *
   *
   * These methods retrieve data
   *
   *
   *********************************************************/

  /**
   * @returns {Promise<IExchangeGetBalanceResponse>}
   */
  getBalance(): Promise<IExchangeGetBalanceResponse>;

  /**
   * @returns {Promise<IOwnOrder[]>}
   */
  getOpenOrders(): Promise<IOwnOrder[]>;

  /**
   * @param {IGetClosedOrdersParameters} options
   * @returns {Promise<IOwnClosedOrder[]>}
   */
  getOwnClosedOrders(options: IGetClosedOrdersParameters): Promise<IOwnClosedOrder[]>;

  /**
   * @param {IGetClosedOrdersParameters} options
   * @returns {Promise<IClosedOrder[]>}
   */
  getClosedOrders(options?: IGetClosedOrdersParameters): Promise<IClosedOrder[]>;
}
