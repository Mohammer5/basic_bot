import 'jest';
import { USD } from '../../../../module/currency/currencies';
import { setTo } from '../setTo';

describe('Balance reducer - setTo', () => {
    it('should set the value of a non-existing currency (USD) to 5', () => {
        expect(setTo({}, { currency: USD, amount: 5 }))
          .toEqual(expect.objectContaining({ USD: 5 }));
    });

    it('should override the value of an existing currency (USD) to 10', () => {
        expect(setTo({ USD: 15 }, { currency: USD, amount: 10 }))
          .toEqual(expect.objectContaining({ USD: 10 }));
    });
});
