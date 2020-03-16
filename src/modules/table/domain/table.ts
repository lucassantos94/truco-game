import { Player } from '../../game/player';
import { v4 as uuid } from 'uuid';
type playerOrNull = Player | null;
type Teams = [ [ playerOrNull, playerOrNull ], [ playerOrNull, playerOrNull ] ];
export class Table {
  #teams: Teams;
  #id:string;
  constructor (player:Player, id?:string) {
    this.#teams = [
      [player, null],
      [null, null]
    ];
    this.#id = id || uuid();
  }

  get teams (): Teams {
    return this.#teams;
  }

  public addPlayer (player:Player):void {
    const emptyTeam = this.teams.find(team => team.some(player => player === null));
    if (emptyTeam)emptyTeam.push(player);
  }

  get id ():string {
    return this.#id;
  }
}
