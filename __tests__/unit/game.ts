import { Game } from '../../src/modules/game/game';
import { Player } from '../../src/modules/game/player';
let fourPlayers:Player[];
beforeAll(() => {
  fourPlayers = [...Array(4)].map((name, index) => new Player(`Player ${index}`));
});
describe('Game', () => {
  describe('On initialization', () => {
    it('Should be initialized with only 4 players', () => {
      const fivePlayers = [...Array(5)].map((name, index) => new Player(`Player ${index}`));
      const threePlayers = [...Array(3)].map((name, index) => new Player(`Player ${index}`));
      expect(new Game(fourPlayers)).toBeInstanceOf(Game);
      expect(() => new Game(threePlayers)).toThrowError('Incorrect number of players');
      expect(() => new Game(fivePlayers)).toThrowError('Incorrect number of players');
    });
    it('should start with 0:0 score', () => {
      const game = new Game(fourPlayers);
      expect(game.score).toBe('0:0');
    });
    it('should start with 0 rounds', () => {
      const game = new Game(fourPlayers);
      expect(game.rounds).toStrictEqual([]);
    });
  });

  describe('startRound', () => {
    it('should add one Round on the game ', () => {
      const game = new Game(fourPlayers);
      const initialRounds = game.rounds;
      game.startRound();
      expect(initialRounds).not.toStrictEqual(game.rounds);
    });
    it('should only add one round when another is finished', () => {
      const game = new Game(fourPlayers);
      const initialRounds = game.rounds;
      game.startRound();
      expect(() => game.startRound()).toThrowError();
    });
  });

  describe('Get Id', () => {
    it('should return a string with the id on uuid pattern', () => {
      const game = new Game(fourPlayers);
      expect(game.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });
  });
});
