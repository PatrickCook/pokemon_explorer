import './App.css';
import React, { Component } from 'react';
import PokemonData from 'pokemon-metadata';
import { Layout, Card, Progress, Input } from 'antd';
import Pokedex from './Pokedex';
import Navbar from './Navbar.js';

const { Header, Footer, Sider, Content } = Layout;
const Search = Input.Search;

class App extends Component {

  constructor(props) {
    super(props)
    console.log(PokemonData);
    this.state = {
      filter: '',
      sortByAttrKey: 0
    }
  }

  handleInput = (e) => {
    this.setState({filter: e.target.value})
  }

  handleSortBy = (e) => {
    this.setState({sortByAttrKey: parseInt(e.key)})
  }

  render() {
    const {filter, sortByAttrKey} = this.state;

    return (
      <div>
        <Layout>
          <Sider>
            <Navbar onNavbarChange={this.handleSortBy}/>
          </Sider>
          <Layout>
            <Content>
              <Search size="large" placeholder="Filter pokemon..." onChange={this.handleInput}/>
              <Pokedex filter={filter} pokedexData={ PokemonData } sortAttrKey={sortByAttrKey}/>
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
