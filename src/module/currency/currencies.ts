import { crypto } from './type/crypto';
import { fiat } from './type/fiat';
import { Currency } from './Currency';

export const BTC = new Currency('BTC', crypto);
export const ETH = new Currency('ETH', crypto);
export const LTC = new Currency('LTC', crypto);
export const USD = new Currency('USD', fiat);
