import { Table } from '../../domain/table';
import { ITableRepo } from '../itable';
import { Player } from '../../../game/player';
type tableModel = { id: string, teams: (string|null)[][] }
export class TableRepo implements ITableRepo {
  #tableDb:any
  constructor (tableDb: any) {
    this.#tableDb = tableDb;
  }

  private toRepo (table: Table):tableModel {
    return { id: table.id, teams: table.teams.map(team => team.map(player => player ? player.id : player)) };
  }

  public async create (table: Table):Promise<void> {
    this.#tableDb.create(this.toRepo(table));
  }

  public async getById (id:string):Promise<Table| undefined > {
    return this.#tableDb.getById(id);
  }

  public async update (table:Table):Promise<void> {
    this.#tableDb.update(this.toRepo(table));
  }
}
