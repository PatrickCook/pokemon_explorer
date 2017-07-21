import './App.css';
import React, { Component } from 'react';
import { Card } from 'antd';

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: this.props.match.params.name,
      evolution_chain: ''
    }
  }

  componentDidMount() {
    // Fetch pokemon information
    fetch(`http://pokeapi.co/api/v2/pokemon-species/${this.state.pokemonName}`).then((response) => {
      return response.json();

    }).then((json) => {
      const pokemonEvolutionURL = json.evolution_chain.url;

      //Fetch evolution information based on URL from first fetch()
      fetch(pokemonEvolutionURL).then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({evolution_chain: json.chain});
        console.log(this.state.evolution_chain);
        console.log(json.chain)
      })
    });
  }

  render() {
    return (
      <Card title={this.props.match.params.name} style={{width: 300}}>
        <p> You just wait, this is going to be a really cool card...</p>
      </Card>
    );
  }
}

// refactor to class based Component
// fetch inside componentDidMount
// Read about promises
// hit pokemon species end point ----> hit pokemon evolution chain endpoint
// render evolutionary chain

export default DetailPage;
