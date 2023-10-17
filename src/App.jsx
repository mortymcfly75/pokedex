import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from "./component.1/PokemonCard"
import Navbar from "./component.1/Navbar"

const pokemonList = [
  {
    name: "bulbizar",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "salameche",
    imgSrc:
      "https://www.pokepedia.fr/images/thumb/8/89/Salam%C3%A8che-RFVF.png/800px-Salam%C3%A8che-RFVF.png",
  },
  {
    name: "carapuce",
    imgSrc:
      "https://www.pokepedia.fr/images/thumb/c/cc/Carapuce-RFVF.png/800px-Carapuce-RFVF.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",

  }
];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  return (
    <>
      <PokemonCard
        pokemon={pokemonList[pokemonIndex]}
      />

      <Navbar
        index={pokemonIndex}
        list={pokemonList}
        setIndex={setPokemonIndex}
      />
    </>
  );
}
export default App
