import { v4 as uuid } from 'uuid';
import { Player } from './player';
import { Round, RoundState } from './round';
import { throws } from 'assert';

export class Game {
  #id: string;
  #players: Player[];
  #score: [number, number];
  #rounds:Round[]
  constructor (players:Player[]) {
    this.#id = uuid();
    if (players.length === 4) throw new Error('Incorrect number of players');
    this.#players = [...players];
    this.#rounds = [];
    this.#score = [0, 0];
  }

  get id ():string {
    return this.#id;
  }

  get score (): string {
    return this.#score.join(':');
  }

  get rounds (): RoundState[] {
    return this.#rounds.map((round):RoundState => round.state);
  }

  private get lastRound (): Round|undefined {
    return this.#rounds.slice(-1).shift();
  }

  public startRound (): void {
    const lastRound = this.lastRound;
    if (lastRound && !lastRound.state.status === 'finished') {
      throw new Error('Cannot have two rounds started');
    };
    this.#rounds = new Round();
  }
}
