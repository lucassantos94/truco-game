import { joinTable } from '../../../src/modules/table/usecase/jointable';
import { createTable } from '../../../src/modules/table/usecase/createtable';
import { Player } from '../../../src/modules/game/player';
import { Table } from '../../../src/modules/table/domain/table';
import { v4 as uuid } from 'uuid';

describe('joinTable', () => {
  describe('execute', () => {
    test('should need a player and a tableId and return a Table instance', () => {
      const playerOne = new Player('player one');
      const playerTwo = new Player('player two');
      const table = createTable.execute(playerOne);

      expect(() => joinTable.execute()).toThrowError();
      expect(() => joinTable.execute(table.id)).toThrowError();
      expect(joinTable.execute(playerTwo, table.id)).toBeInstanceOf(Table);
    });
    test('should create a new table with player inside case table id not exists', () => {
      const player = new Player('player one');
      const id = uuid();
      const table = joinTable.execute(player, uuid);
      expect(table.id).toBe(id);
      expect(table.players).toContain(player.id);
    });
  });
})
;
