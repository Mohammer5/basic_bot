import { BTC, ETH, LTC, USD } from './products';
import { Pair } from './Pair';

export const BTCUSD = new Pair(BTC, USD);
export const ETHUSD = new Pair(ETH, USD);
export const LTCUSD = new Pair(LTC, USD);
