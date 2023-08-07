// import { name, age } from './bases/type.ts'
// import { pokemonIds ,pokemons,pikachu} from './bases/objects.ts'
import './style.css'

import { setupCounter } from './counter.ts'
import { charmander } from './bases/deco2.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hello ${charmander.name}</h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
