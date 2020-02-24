import { Deck } from '../../src/modules/deck/deck';

describe('Deck Entity', () => {
  describe('On initialization', () => {
    it('Should have 40 cards', () => {
      const deck = new Deck();
      expect(deck).toBeInstanceOf(Deck);
    });
    it('Should have 40 cards on stack', () => {
      const deck = new Deck();
      expect(deck.stack.length).toBe(40);
    });
  });
});
