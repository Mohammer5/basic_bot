import 'jest';
import { removeFrom } from '../removeFrom';
import { USD } from '../../../../module/currency/currencies';

describe('Balance reducer - removeFrom', () => {
    it('should set the value to a negative amount of 5 of non-existing currency USD', () => {
        expect(removeFrom({}, { currency: USD, amount: 5 }))
          .toEqual(expect.objectContaining({ USD: -5 }));
    });

    it('should remove 5 from the existing currency (USD) value of 15 ', () => {
      expect(removeFrom({ USD: 15 }, { currency: USD, amount: 5 }))
        .toEqual(expect.objectContaining({ USD: 10 }));
    });
});
