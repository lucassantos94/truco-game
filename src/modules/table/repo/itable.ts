import { Table } from '../../domain/table';

export interface ITableRepo {
  public getById (id: string): Promise<Table|undefined>;
  public create (table: Table): Promise<void>;
  public update(table: Table): Promise<void>;
}
