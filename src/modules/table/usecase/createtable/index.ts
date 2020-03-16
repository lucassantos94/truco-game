import { CreateTable } from './createtable';
import { tableRepo } from '../../repo/impl/index';

export const createTable = new CreateTable(tableRepo);
