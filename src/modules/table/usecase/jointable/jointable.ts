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
    console.log(table);
    if (!table) {
      table = new Table(player);
    } else {
      table.addPlayer(player);
    }
    this.#tableRepo.update(table);
    return table;
  }
}
