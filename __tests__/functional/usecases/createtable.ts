import { createTable } from '../../../src/modules/table/usecase/createtable';
import { Player } from '../../../src/modules/game/player';

describe('newTable ', () => {
  describe('execute', () => {
    it('Should return a table with one player', () => {
      const player = new Player('player one');
      const table = createTable.execute(player);
      expect(table).toBeInstanceOf(table);
    });
  });
});
