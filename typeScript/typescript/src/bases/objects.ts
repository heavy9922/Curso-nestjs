export const pokemonIds = [1, 2, 3, 4, 5, 6]

export interface Pokemon {
  id: number
  name: string
  age?: number
}

export const pikachu: Pokemon = {
  id: 1,
  name: 'pikachu',
}
export const charmander: Pokemon = {
  id: 4,
  name: 'charmander',
}

export const pokemons: Pokemon[] = []

pokemons.push(pikachu, charmander)
