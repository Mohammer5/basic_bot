export class Pair implements IProductPair {
  public baseCurrency: IProduct;
  public quoteCurrency: IProduct;

  public constructor(baseCurrency: IProduct, quoteCurrency: IProduct) {
    this.baseCurrency = baseCurrency;
    this.quoteCurrency = quoteCurrency;
  }

  public toString() {
    return this.baseCurrency + '' + this.quoteCurrency;
  }
}
