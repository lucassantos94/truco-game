import { Game } from '../../src/modules/game/game';

describe('Game', () => {
  describe('On initialization', () => {
    it('game be instance of Game', () => {
      expect(new Game()).toBeInstanceOf(Game);
    });
  });
  describe('Get Id', () => {
    it('should return a string with the id on uuid pattern', () => {
      const game = new Game();
      expect(game.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });
  });
});
