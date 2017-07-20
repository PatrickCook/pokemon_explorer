import './App.css';
import React, { Component } from 'react';
import PokemonData from 'pokemon-metadata';
import { Card } from 'antd';
import { Progress } from 'antd';
import { Input } from 'antd';
import Pokedex from './Pokedex';

const Search = Input.Search;


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filter: ''
    }
  }

  handleInput = (e) => {
    this.setState({filter: e.target.value})
  }

  render() {
    const {filter} = this.state;
    return (
      <div>
        <Search size="large" placeholder="Filter pokemon..." onChange={this.handleInput}/>
        <Pokedex filter={filter} pokedexMetaData={ PokemonData }/>
      </div>
    );
  }
}

export default App;
