import { Player } from '../../game/player';
import { v4 as uuid } from 'uuid';
type playerOrNull = Player | null;
type Teams = [ Team, Team ];
type Team = [ playerOrNull, playerOrNull ]
export class Table {
  #teams: Teams;
  #id: string;
  private constructor (teams:Teams, id: string) {
    this.#teams = teams;
    this.#id = id;
  }

  // public restore ()
  get teams (): Teams {
    return this.#teams;
  }

  public static create (player: Player, id:string = uuid()): Table {
    return new Table([[player, null], [null, null]], id);
  }

  public static restore (teams: [ [ string, string ], [ string, string ] ], id: string): Table {
    const teamsInstatiated = teams.map(team =>
      team.map(player => (player) ? new Player(player) : null) as Team
    ) as Teams;

    return new Table(teamsInstatiated, id);
  }

  public addPlayer (player:Player):void {
    const emptyTeam = this.teams.find(team => team.some(player => player === null));
    if (emptyTeam)emptyTeam.push(player);
  }

  get id ():string {
    return this.#id;
  }
}
