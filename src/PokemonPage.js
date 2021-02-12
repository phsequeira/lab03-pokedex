import React from 'react';
import './App.css';
import PokeList from './Pokelist/PokeList';
import pokemons from './pokemon';



export default class PokemonPage extends React.Component {
  state = {
    name: '',
    type: '',
    shape: '',
    ability: '',
    attack: 0,
    defense: 0,
    pokemons: pokemons,
    sortOrder: 'low',
    sortBy: 'pokemon',
    query: '',
    filteredPokemon: pokemons
  }


    handleChange = (e) => {
        this.setState({ 
            sortBy: e.target.value,
        });
    }
    handleHighLowChange = (e) => {
        this.setState({
            sortOrder: e.target.value,
        })
    }
    handleInputChange = (e) => {
        this.setState({
          query: e.target.value,
        });
      }
    button= (e) => {
        e.preventDefault()
        
        const balls = this.state.pokemons

        if (this.state.sortBy === 'pokemon' || this.state.sortBy === 'type_1' || this.state.sortBy === 'shape' || this.state.sortBy === 'ability_1'){
            if (this.state.sortOrder === 'low') {
            balls.sort(
            (a, b) => 
              a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
            }

            if (this.state.sortOrder === 'high') {
                balls.sort(
                    (a, b) => 
                      b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
            }
        }
    
            if (this.state.sortBy === 'attack' || this.state.sortBy === 'defense'){
                if (this.state.sortOrder === 'low') { 
                balls.sort(
                (a, b) => 
                  a[this.state.sortBy] - b[this.state.sortBy])
                }

            if (this.state.sortOrder === 'high'){
                balls.sort(
                (a, b) => 
                b[this.state.sortBy] - a[this.state.sortBy])
                        }
                    }
        this.setState({
                filteredPokemon: balls.filter(pokemon => pokemon.pokemon.includes(this.state.query))

            })
        
        }

  render() {

    


        

      return (
        <>
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
            <option value="low">Low to High (A-Z/1-+)</option>
            <option value="high">High to Low (Z-A/+-1)</option>
          </select>
          <input onChange={this.handleInputChange}/>
          <button>Search</button>
          </form>
          </div>
          <PokeList filteredPokemon={this.state.filteredPokemon}></PokeList>
          
        </>
      );
  }
}
