import { joinTable } from '../../../src/modules/table/usecase/jointable';
import { createTable } from '../../../src/modules/table/usecase/createtable';
import { Player } from '../../../src/modules/game/player';
import { Table } from '../../../src/modules/table/domain/table';
import { v4 as uuid } from 'uuid';

describe('joinTable', () => {
  describe('execute', () => {
    test('should need a player and a tableId and return a Table instance', async () => {
      const playerOne = new Player('player one');
      const playerTwo = new Player('player two');
      const table = await createTable.execute(playerOne);

      expect(await joinTable.execute(playerTwo, table.id)).toBeInstanceOf(Table);
    });
    test('should create a new table with player inside case table id not exists', async () => {
      const player = new Player('player one');
      const id = uuid();
      const table = await joinTable.execute(player, uuid());
      expect(table.id).toBe(id);
      expect(table.teams.flat()).toContain(player.id);
    });
  });
})
;
