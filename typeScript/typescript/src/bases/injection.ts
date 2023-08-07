import { Move, PokeapiReponse } from '../interfaces/pokeapi-response.interface'
import {
  HttpAdapter,
  PokeapiAdapter,
  PokeapiFetchAdapter,
} from '../api/pokeApi.adapter'

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`
  }

  constructor(
    public readonly id: number,
    public name: string,
    // Todo: inyectar dependencias
    private readonly http: HttpAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak() {
    console.log(`${this.name}, ${this.name}`)
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiReponse>(
      'https://pokeapi.co/api/v2/pokemon/5'
    )
    console.log(data.moves)

    return data.moves
  }
}

const axios = new PokeapiAdapter()
const fetch = new PokeapiFetchAdapter()

export const charmander = new Pokemon(4, 'Charmander', axios)
export const pikachu = new Pokemon(4, 'Charmander', fetch)

charmander.getMoves()
pikachu.getMoves()
