import { Deck } from '../../src/modules/deck/deck';
import { Card } from '../../src/modules/deck/card';

describe('Deck Entity', () => {
  describe('On initialization', () => {
    it('Should be instance of Deck', () => {
      const deck = new Deck();
      expect(deck).toBeInstanceOf(Deck);
    });
    it('Should have 40 cards on stack', () => {
      const deck = new Deck();
      expect(deck.length).toBe(40);
    });
  });
  describe('On draw', () => {
    it('should return a Card', () => {
      const deck = new Deck();
      expect(deck.draw().card).toBeInstanceOf(Card);
    });
    it('should return true on noCard if no more card', () => {
      const deck = new Deck();
      let count = 0;
      let nocard = false;
      while (!nocard && count < 42) {
        nocard = deck.draw().noCard;
        count++;
      }
      expect(nocard).toBe(true);
    });
    it('should be able to draw 40 unique cards', () => {
      const deck = new Deck();
      const stack = [];
      let haveDuplicate = false;
      for (let i = 0; i < 40; i++) {
        const { card } = deck.draw();
        if (stack.indexOf(card.toString()) !== -1) {
          haveDuplicate = true;
          break;
        }
        stack.push(card.toString());
      }
      expect(haveDuplicate).toBe(false);
    });
    it('should be shuffled for each new instance', () => {
      const firstDeck = new Deck();
      const secondDeck = new Deck();
      const firstStack = [];
      const secondStack = [];
      for (let i = 0; i < 40; i++) {
        const firstCard = firstDeck.draw().card as Card;
        const secondCard = secondDeck.draw().card as Card;

        firstStack.push(firstCard.toString());
        secondStack.push(secondCard.toString());
      }

      expect(firstStack).not.toStrictEqual(secondStack);
    });
  });
});
