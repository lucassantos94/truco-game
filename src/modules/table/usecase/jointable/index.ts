import { JoinTable } from './jointable';
import { tableRepo } from '../../repo/impl';

export const joinTable = new JoinTable(tableRepo);
