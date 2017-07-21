import './App.css';
import React, { Component } from 'react';
import { Card, Input, Progress, Row, Col} from 'antd';

const PokemonCard = (props) => {
  const {pokemon, index} = props;

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  const getPokemonStats = (pokemon) => {
    return (
      <div>
        Speed: {pokemon.stats[0].base_stat}
        <Progress percent={(pokemon.stats[0].base_stat / 250) * 100} showInfo={false}/>

        Special Defense: {pokemon.stats[1].base_stat}
        <Progress percent={(pokemon.stats[1].base_stat / 250) * 100} showInfo={false}/>

        Special Attack: {pokemon.stats[2].base_stat}
        <Progress percent={(pokemon.stats[2].base_stat / 250) * 100} showInfo={false}/>

        Defense: {pokemon.stats[3].base_stat}
        <Progress percent={(pokemon.stats[3].base_stat / 250) * 100} showInfo={false}/>

        Attack: {pokemon.stats[4].base_stat}
        <Progress percent={(pokemon.stats[4].base_stat / 250) * 100} showInfo={false}/>

        Hit Points: {pokemon.stats[5].base_stat}
        <Progress percent={(pokemon.stats[5].base_stat / 250) * 100} showInfo={false}/>
      </div>
    );
  }
  return (
    <div className="flex-col" key={'pokemon_' + index}>
      <Card title= { pokemon.name.capitalize() } style={{ width: 400 }} extra={ pokemon.id } key={index}>
        <Row>
          <Col span={12}>
            <img src={ pokemon.sprites.front_default }/>
          </Col>
          <Col span={12}>
            { getPokemonStats(pokemon) }
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default PokemonCard;
