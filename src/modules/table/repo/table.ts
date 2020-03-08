import { Table } from '../domain/table';

export class TableRepo {
  #tableDb:any
  constructor (tableDb: any) {
    this.#tableDb = tableDb;
  }

  public async getTable (id:string):Promise<Table> {
    const table = await this.#tableDb.getById(id);
    return new Table(table);
  }

  public async addPlayer (player:string, tableId:string):Promise<void> {
    const table = await this.getTable(tableId);
    const incompleteTeam = table.teams.findIndex(team => team.any(teamPlayer => teamPlayer === null));
    table.teams[incompleteTeam].push(player);
    return this.#tableDb.update(table);
  }
}
