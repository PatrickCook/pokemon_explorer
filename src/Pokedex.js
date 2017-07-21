import './App.css';
import React from 'react';
import PokemonCard  from './PokemonCard.js'


const Pokedex = (props) => {
  const { pokedexData, filter, sortAttrKey } = props

  const getPokemonAttributeValue = (pokemon) => {
    //console.log(pokemon, sortAttrKey);
    const { stats } = pokemon;
    const attributeToCompare = stats[sortAttrKey];
    const { base_stat } = attributeToCompare;

    return base_stat;
  }

  return (
    <div className="pokedex">
    { Object.values(pokedexData)
        .filter((pokemon) => {
          return pokemon.name.includes(filter)
        })
        .sort(function(a,b) {

          const statA = getPokemonAttributeValue(a);
          const statB = getPokemonAttributeValue(b);

          if (statA < statB)
           return 1;
          else if (statA > statB)
           return -1;
          else
           return 0;
         })
        .map(function(pokemon, index) {
            return (
              <PokemonCard pokemon={pokemon} index={index}/>
            )
          }
        )
    }
    </div>
  )
}

export default Pokedex;
