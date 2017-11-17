export class Currency implements ICurrency {
  public identifier: string;
  public type: CurrencyType;

  public constructor(identifier, type) {
    this.identifier = identifier;
    this.type = type;
  }

  public toString() {
    return this.identifier;
  }
}
