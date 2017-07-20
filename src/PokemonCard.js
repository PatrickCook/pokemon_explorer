import './App.css';
import React, { Component } from 'react';
import { Card } from 'antd';
import { Progress } from 'antd';
import { Input } from 'antd';

const PokemonCard = (props) => {
  const {pokemon, index} = props;

  return (
    <div className="flex-col">
      <Card title= { pokemon.name } style={{ width: 300 }} extra={ pokemon.id } key={index}>
        <div className="pokemonStats" style={{ width: 140}}>
          <p> Base Experience: { pokemon.base_experience } </p>
        </div>
        <div>
          <img src={ pokemon.sprites.front_default }/>
        </div>
      </Card>
    </div>
  );
}

export default PokemonCard;
