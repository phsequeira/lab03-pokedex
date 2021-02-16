import React from 'react';
import './App.css';
import PokeList from './Pokelist/PokeList';
import Spinner from './spinner.js';
import request from 'superagent';



export default class PokemonPage extends React.Component {
  state = {
    name: '',
    type: '',
    shape: '',
    ability: '',
    attack: 0,
    defense: 0,
    pokemons: [],
    sortOrder: '',
    sortBy: '',
    query: '',
    loading: false,
    
  }
    componentDidMount = async () => {
      await this.fetchPokemon();
    }

    fetchPokemon = async () => {
      this.setState({ loading: true });

      const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}`)

      this.setState({
        loading: false,
        pokemons: data.body.results,
      })
    }

    handleChange = async (e) => {
        this.setState({ 
            sortBy: e.target.value,
        });
    }
    handleHighLowChange = async (e) => {
        this.setState({
            sortOrder: e.target.value,
        })
    }
    handleInputChange = async (e) => {
        this.setState({
          query: e.target.value,
        });
      }
    button = async (e) => {
        e.preventDefault()

        await this.fetchPokemon()
                
    }
        
      

  render() {

  
      return (
        <>
        <body className='pokepage'>
        <div className='sidebar'>
        Sort By
        <form onSubmit = {this.button}>
          <select onChange={this.handleChange}>
            <option value="pokemon">Name</option>
            <option value="type_1">Type</option>
            <option value="shape">Shape</option>
            <option value="ability_1">Ability</option>
            <option value="attack">Attack</option>
            <option value="defense">Defense</option>
          </select>
          <select onChange={this.handleHighLowChange}>
            <option value="aesc">Asending (A-Z/1-+)</option>
            <option value="desc">Desending (Z-A/+-1)</option>
          </select>
          <input onChange={this.handleInputChange}/>
          <button>Search</button>
          </form>
          </div>
          {
            this.state.loading
              ? <Spinner />
              :<PokeList pokemons={this.state.pokemons}></PokeList>
          }
          </body>
        </>
      );
  }
}
