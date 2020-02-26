import { Card } from "./card";
const basicDeck = [
  {name:'ace',rank:3},
  {name:'2',rank:2},
  {name:'3',rank:1},
  {name:'4',rank:4},
  {name:'5',rank:5},
  {name:'6',rank:6},
  {name:'7',rank:7},
  {name:'jack',rank:8},
  {name:'queen',rank:9},
  {name:'king',rank:10}
]
const suits = ['clubs','spades','diamonds','hearts']
export class Deck {
  // eslint-disable-next-line prettier/prettier
  #stack: Card[] 
  
  constructor ( ) {
    
    this.#stack = this.createShuffledStack()

  }

  private createShuffledStack ():Card[] {
   
    const shuffledStack = []
    const stack = suits.map( suit => {
      return basicDeck.map( ( { name, rank } ) => new Card( { suit, name, rank } ) );
    } ).flat()

    while ( stack.length > 0 ) {
      const random = Math.random();
      shuffledStack.push( ...stack.splice( Math.round( random * stack.length ), 1 ) );
    }
    return shuffledStack;
  }

  public draw (): { noCard:boolean,card:Card } {
    const noCard = this.#stack.length === 0 
    return {
      noCard,
      card: this.#stack.pop() as Card
    }
    
  }

  get length (): number{
    return this.#stack.length;
  }


}  