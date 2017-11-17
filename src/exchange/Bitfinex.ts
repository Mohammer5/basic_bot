import { ReplaySubject } from 'rxjs/ReplaySubject';

class Bitfinex implements IExchange {
  static fees: IExchangeFees = { maker: 0.001, taker: 0.0015 };

  key: string;
  secret: string;

  readonly addingOrders$: Rx.ReplaySubject<void>;
  readonly addingOrders$: Rx.ReplaySubject<void>;
  readonly deletingOrders$: Rx.ReplaySubject<void>;
  readonly ordersAdded$: Rx.ReplaySubject<IOwnOrder[]>;
  readonly ordersUpdated$: Rx.ReplaySubject<IExchangeUpdateOrderResponsep[]>;
  readonly ordersDeleted$: Rx.ReplaySubject<void>;
  readonly addingOrdersFailed$: Rx.ReplaySubject<string>;
  readonly addingOrdersFailed$: Rx.ReplaySubject<string>;
  readonly deletingOrdersFailed$: Rx.ReplaySubject<string>;

  constructor(key, secret) {
    this.key = key;
    this.secret = secret;
    this.setStreams();
  }

  public addOrder(order: IOpenOrder): Promise<IOwnOrder> {

  }

  public addOrders(orders: IOpenOrder[]): Promise<IOwnOrder[]> {

  }

  public updateOrder(order: IOpenOrderUpates): Promise<IExchangeUpdateOrderResponse> {

  }

  public deleteOrder(orderId: string): Promise<void> {

  }

  public getBalance(): Promise<IExchangeGetBalanceResponse> {

  }

  public getOpenOrders(): Promise<IOwnOrder[]> {

  }

  public getOwnClosedOrders(options: IGetClosedOrdersParameters): Promise<IOwnClosedOrder[]> {

  }

  public getClosedOrders(options?: IGetClosedOrdersParameters): Promise<IClosedOrder[]> {

  }

  protected setStreams() {
    this.addingOrders$ = new ReplaySubject<void>(1);
    this.addingOrders$ = new ReplaySubject<void>(1);
    this.deletingOrders$ = new ReplaySubject<void>(1);
    this.ordersAdded$ = new ReplaySubject<IOwnOrder[]>(1);
    this.ordersUpdated$ = new ReplaySubject<IExchangeUpdateOrderResponsep[]>(1);
    this.ordersDeleted$ = new ReplaySubject<void>(1);
    this.addingOrdersFailed$ = new ReplaySubject<string>(1);
    this.addingOrdersFailed$ = new ReplaySubject<string>(1);
    this.deletingOrdersFailed$ = new ReplaySubject<string>(1);
  }
}
