import './App.css';
import React, { Component } from 'react';
import { Card } from 'antd';
import { Progress } from 'antd';
import { Input } from 'antd';
import PokemonCard  from './PokemonCard.js'

const Pokedex = (props) => {
  const { pokedexMetaData, filter } = props

  return (
    <div className="pokedex">
    { Object.keys(pokedexMetaData)
        .filter((pokemonKey) => {
          var pokemon = pokedexMetaData[pokemonKey];
          return pokemon.name.includes(filter)
        })
        .map(function(pokemonKey, index) {
            return (
              <PokemonCard pokemon={pokedexMetaData[pokemonKey]} index={index}/>
            )
          }
        )
    }
    </div>
  )
}

export default Pokedex;
