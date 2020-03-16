import { TableRepo } from './table';
import { memoryDatabase } from '../../../../shared/infra';

export const tableRepo = new TableRepo(memoryDatabase.table);
