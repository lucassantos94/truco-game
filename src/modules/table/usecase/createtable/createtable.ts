import { Table } from '../../domain/table';
import { Player } from '../../../game/player';

export class CreateTable {
  #tableRepo: any;
  constructor (tableRepo: any) {
    this.#tableRepo = tableRepo;
  }

  public async execute (player: Player):Promise<Table> {
    const table = new Table(player);
    await this.#tableRepo.save(Table);
    return table;
  }
}
