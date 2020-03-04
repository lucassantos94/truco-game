import { Table } from '../../src/modules/table/table';
describe('Table', () => {
  describe('on initialization', () => {
    test('should have two teams', () => {
      const table = new Table();
      expect(table.teams.length).toBe(2);
    });
  });
});
