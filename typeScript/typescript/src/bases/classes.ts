import axios from 'axios'
import { PokeapiReponse, Move } from '../interfaces/pokeapi-response.interface'
export class Pokemon {
  get imageUrl(): string {
    return `https//pokemon.com/${this.id}.jpg`
  }
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toLowerCase()} !!!`)
  }
  speak() {
    console.log(`${this.name}, ${this.name}`)
  }

  async getMoves(): Promise<Move[]> {
    const { data } = await axios.get<PokeapiReponse>(
      'https://pokeapi.co/api/v2/pokemon/4'
    )
    return data.moves
  }
}

export const charmander = new Pokemon(1, 'charmander')

// charmander.scream()
console.log(charmander.getMoves())
