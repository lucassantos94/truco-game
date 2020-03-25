
type Table = {
  id: string,
  teams: [ [ string, string ], [ string, string ] ],
}
export class TableModel {
  #tables:Table[]
  constructor () {
    this.#tables = [];
  }

  public async create (table: Table):Promise<void> {
    this.#tables.push(table);
  }

  public async getById (id:string):Promise<Table|undefined> {
    return this.#tables.find(table => table.id === id);
  }

  public async update (table: Table):Promise<void> {
    const index = this.#tables.findIndex(dbTable => dbTable.id === table.id);
    if (index >= 0) {
      this.#tables[index] = table;
    } else {
      await this.create(table);
    }
  }
}
