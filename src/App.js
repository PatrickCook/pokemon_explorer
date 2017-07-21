import './App.css';
import React, { Component } from 'react';
import PokemonData from 'pokemon-metadata';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './HomePage.js';
import DetailPage from './DetailPage.js';


class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Route exact path="/" render={() => {
              return <HomePage pokemonData={PokemonData}/>
            }
          }/>
          <Route path="/detailed/:name" render={() => {
              return <DetailPage pokemonData={PokemonData}/>
            }
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
