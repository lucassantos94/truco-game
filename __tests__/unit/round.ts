import { Round } from '../../src/modules/game/round';

describe('Round', () => {
  describe('on initialization', () => {
    test('should have a initial status playing ', () => {
      const round = new Round();
      expect(round.state.status).toBe('playing');
    });
  });
})
;
