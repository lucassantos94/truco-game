import { Card } from "../deck/card";
import {v4 as uuid} from "uuid";

export class Player {
  #id: string;
  #name: string;
  #hand: Card[];
  constructor ( name: string ) {
    this.#name = name;
    this.#id = uuid();
    this.#hand = []
  }

  get name ():string {
    return this.#name;
  }

  get id ():string {
    return this.#id;
  }

  get hand (): Card[]{
    return [ ... this.#hand]
  }
}
