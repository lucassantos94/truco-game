interface CardProps {
  suit: string;
  baseValue: number;
  name: string;
}
export class Card {

  #suit: string;
  #name: string;
  #baseValue: number;

  constructor ( props: CardProps ) {
    this.#name = props.name
    this.#suit = props.suit
    this.#baseValue = props.baseValue
  }

  get name(){ 
    return this.#name
  }

  get suit(){ 
    return this.#suit
  }

  get baseValue(){ 
    return this.#baseValue
  }
}
