import { Table } from '../../domain/table';
import { ITableRepo } from '../itable';
type tableModel = { id: string, teams: (string|null)[][] }
export class TableRepo implements ITableRepo {
  #tableDb:any
  constructor (tableDb: any) {
    this.#tableDb = tableDb;
  }

  private toRepo (table: Table):tableModel {
    return { id: table.id, teams: table.teams.map(team => team.map(player => player ? player.name : player)) };
  }

  public async create (table: Table): Promise<void> {
    return this.#tableDb.create(this.toRepo(table));
  }

  public async getById (id: string): Promise<Table | undefined> {
    const table = await this.#tableDb.getById(id);
    if (table) {
      return Table.restore(table.teams, table.id);
    }
  }

  public async update (table:Table):Promise<void> {
    this.#tableDb.update(this.toRepo(table));
  }
}
