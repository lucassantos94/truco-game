import { Card } from '../../src/modules/deck/card';

describe('Card Entity', () => {
  describe('By default', () => {
    it('should be initialized with a suit, value and name', () => {
      const card = new Card({ suit: 'clubs', baseValue: 2, name: '2' });
      expect(card).toBeInstanceOf(Card);
    });
    it('must have a suit, value and name ', () => {
      const card = new Card({ suit: 'clubs', baseValue: 2, name: '2' });
      expect(card.suit).toBe('clubs');
      expect(card.name).toBe('2');
      expect(card.baseValue).toBe(2);
    });
  });
});
