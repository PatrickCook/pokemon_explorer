import './App.css';
import React, { Component } from 'react';
import { Layout, Input } from 'antd';
import Pokedex from './Pokedex';
import Navbar from './Navbar.js';

const { Sider, Content } = Layout;
const Search = Input.Search;

class DetailPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      filter: '',
      sortByAttrKey: 0
    }
  }

  handleInput = (e) => {
    this.setState({filter: e.target.value})
  }

  handleSortBy = (e) => {
    this.setState({sortByAttrKey: parseInt(e.key, 10)})
  }

  render() {
    const { filter, sortByAttrKey } = this.state;
    const { pokemonData } = this.props;

    return (
      <Layout>
        <Sider>
          <Navbar onNavbarChange={this.handleSortBy}/>
        </Sider>
        <Layout>
          <Content>
            <Search size="large" placeholder="Filter pokemon..." onChange={this.handleInput}/>
            <Pokedex filter={filter} pokedexData={pokemonData} sortAttrKey={sortByAttrKey}/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DetailPage;
