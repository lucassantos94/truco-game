import { createTable } from '../../../src/modules/table/usecase/createtable';
import { Player } from '../../../src/modules/game/player';
import { Table } from '../../../src/modules/table/domain/table';

describe('newTable ', () => {
  describe('execute', () => {
    it('Should return a table with one player', async () => {
      const player = new Player('player one');
      const table = await createTable.execute(player);
      expect(table).toBeInstanceOf(Table);
    });
  });
});
