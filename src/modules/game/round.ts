
export interface RoundState{
  status:string
}
export class Round {
  #status: string;

  constructor () {
    this.#status = 'playing';
  }

  get state () :RoundState {
    return { status: this.#status };
  }

  public finish ():void {
    this.#status = 'finished';
  }
}
