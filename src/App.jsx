import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from ".//component.1/PokemonCard"


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
      name:"mew",
      
    }
  ];

  function App (){
    const [pokemonIndex,setPokemonIndex] = useState(0)
    const nextPokemon=() => {setPokemonIndex(pokemonIndex+1)}
    const prevPokemon=() => {  setPokemonIndex(pokemonIndex-1)}
    return (


    <div>

      <PokemonCard
      
      pokemon = {pokemonList[pokemonIndex]}/>
      {(pokemonIndex>0) && <button onClick={prevPokemon}>précédent</button>}
      {(pokemonIndex<pokemonList.length - 1) && <button onClick={nextPokemon}>suivant</button>}
    </div>
    
  )
}
export default App;
