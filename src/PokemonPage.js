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
    currentPage: 1,
    totalPokemon: 0
    
  }
    componentDidMount = async () => {
      await this.fetchPokemon();
    }

    fetchPokemon = async () => {
      this.setState({ loading: true });

      const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&page=${this.state.currentPage}&perPage=50`)

      this.setState({
        loading: false,
        pokemons: data.body.results,
        totalPokemon: data.body.count
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
    
    handleNextPageClick = async () => {
      // go increment state
      // this unfortunately doeasn't happen immediately
      // "this setState is batched"
      await this.setState({
        currentPage: this.state.currentPage + 1
      });
  
      // now that the state is incremented, make a new fetch
      await this.fetchPokemon()
    }

    handlePreviousPageClick = async () => {
      await this.setState({
        currentPage: this.state.currentPage - 1
      });
  
      await this.fetchPokemon();
    }
        
      

  render() {

    const lastPage = Math.ceil(this.state.totalPokemon / 50);
  
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
          <div>Current Page: {this.state.currentPage}</div>
          <button onClick={this.handlePreviousPageClick} disabled={this.state.currentPage === 1}>Previous Page</button>
          <button onClick={this.handleNextPageClick} disabled={this.state.currentPage === lastPage}>Next Page</button>
          </div>
          {
            this.state.loading
              ? <Spinner />
              :<PokeList pokemon={this.state.pokemons}></PokeList>
          }
          </body>
        </>
      );
  }
}
