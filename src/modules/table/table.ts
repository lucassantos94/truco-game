import { Player } from '../game/player';
type playerOrNull = Player | null;

export class Table {
  public teams: [[playerOrNull, playerOrNull], [playerOrNull, playerOrNull]];
  constructor () {
    this.teams = [
      [null, null],
      [null, null]
    ];
  }
}
