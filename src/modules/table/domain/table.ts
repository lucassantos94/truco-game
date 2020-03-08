import { Player } from '../../game/player';
type playerOrNull = Player | null;

export class Table {
  public teams: [[playerOrNull, playerOrNull], [playerOrNull, playerOrNull]];
  constructor (player:Player) {
    this.teams = [
      [player, null],
      [null, null]
    ];
  }
}
