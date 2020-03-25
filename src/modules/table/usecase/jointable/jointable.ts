import { Player } from '../../../game/player';
import { Table } from '../../domain/table';
import { ITableRepo } from '../../repo/itable';

export class JoinTable {
  #tableRepo: ITableRepo;
  constructor (tableRepo: ITableRepo) {
    this.#tableRepo = tableRepo;
  }

  public async execute (player: Player, tableId:string):Promise<Table> {
    let table: Table = await this.#tableRepo.getById(tableId);

    if (table) {
      table.addPlayer(player);
    } else {
      table = Table.create(player, tableId);
    }
    this.#tableRepo.update(table);
    return table;
  }
}
