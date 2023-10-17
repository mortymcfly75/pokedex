import PokemonCard from "./PokemonCard"

function Navbar({index,list,setIndex}){
    
    
    const nextPokemon=
    () => {setIndex(index+1)}
    const prevPokemon=() => {setIndex(index-1)}

   
 return ( 
    <>
  
{(index>0) && <button onClick={prevPokemon}>précédent</button>}
{(index<list.length - 1) && <button onClick={nextPokemon}>suivant</button>}

</>
)

}
export default Navbar