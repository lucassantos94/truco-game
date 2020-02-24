import { Card } from '../../src/modules/deck/card';

describe('Card Entity', () => {
  describe('On initialization', () => {
    it('should be initialized with a suit, rank and name', () => {
      const card = new Card({ suit: 'clubs', rank: 2, name: '2' });
      expect(card).toBeInstanceOf(Card);
    });
    it('must have a suit, rank and name ', () => {
      const card = new Card({ suit: 'clubs', rank: 2, name: '2' });
      expect(card.suit).toBe('clubs');
      expect(card.name).toBe('2');
      expect(card.rank).toBe(2);
    });
  });
});
