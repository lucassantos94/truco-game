import { Table } from '../../domain/table';
import { Player } from '../../../game/player';
import { ITableRepo } from '../../repo/itable';

export class CreateTable {
  #tableRepo: ITableRepo;
  constructor (tableRepo: ITableRepo) {
    this.#tableRepo = tableRepo;
  }

  public async execute (player: Player):Promise<Table> {
    const table = new Table(player);
    await this.#tableRepo.create(table);
    return table;
  }
}
