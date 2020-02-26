import { Player } from '../../src/modules/game/player';

describe('Player', () => {
  describe('on initialization', () => {
    it('should return a instance of player if initialized with name', () => {
      const player = new Player('Lucas');
      expect(player).toBeInstanceOf(Player);
      expect(player.name).toBe('Lucas');
    });
    it('should have a id of pattern uuid', () => {
      const player = new Player('Lucas');
      expect(player.id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    });
    it('should be initiated with a empty hand', () => {
      const player = new Player('Lucas');
      expect(player.hand.length).toBe(0);
      expect(player.hand).toStrictEqual([]);
    });
  });
});
