import { Table } from '../../src/modules/table/domain/table';
import { Player } from '../../src/modules/game/player';
describe('Table', () => {
  describe('on initialization', () => {
    test('should be initialized with at least one player', () => {
      const player = new Player('player one');
      const table = new Table(player);
      expect(table).toBeInstanceOf(Table);
    });
    test('should have two teams', () => {
      const player = new Player('player one');
      const table = new Table(player);
      expect(table.teams.length).toBe(2);
    });
  });
});
