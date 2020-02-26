interface CardProps {
  suit: string;
  rank: number;
  name: string;
}
export class Card {
  
  // eslint-disable-next-line prettier/prettier
  #name: string; 
  #rank: number;
  #suit: string;

  constructor (props: CardProps) { 
    this.#name = props.name;
    this.#suit = props.suit;
    this.#rank = props.rank;
  } 
 
  get name (): string { 
    return this.#name; 
  }

  get suit (): string {
    return this.#suit;
  } 

  get rank (): number {
    return this.#rank;
  }

  toString (): string{
    return `${this.#name} of ${this.#suit}`
  }
}
