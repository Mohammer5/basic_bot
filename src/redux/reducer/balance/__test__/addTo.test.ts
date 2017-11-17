import 'jest';
import { addTo } from '../addTo';
import { USD } from '../../../../module/currency/currencies';

describe('Balance Reducer - addTo', () => {
    it('should set the value of non-existing USD to 5', () => {
        expect(addTo({}, {
          currency: USD,
          amount: 5,
        })).toEqual(expect.objectContaining({
          USD: 5,
        }));
    });

    it('should add 10 to the existing currency (USD) value of 5', () => {
        expect(addTo({
          USD: 5
        }, {
          currency: USD,
          amount: 10,
        })).toEqual(expect.objectContaining({
          USD: 15,
        }));
    });
});
