import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './spinner.js';
import './DetailPage.css';

export default class DetailPage extends Component {
    state = {
        pokemonData: {},
        loading: false
    }

    componentDidMount = async () => {        
        this.setState({ loading: true });
    
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);
    
        this.setState({ 
          loading: false,
          pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        });
    }

    render() {
        return (
            <div className='details'>
                <h2>Welcome to the {this.props.match.params.pokemonName} page!</h2>
               {
                this.state.loading
                    ? <Spinner /> 
                    : <div>
                        <img className='pokeimg' src={this.state.pokemonData.url_image} alt="pokemon" />
                       <h3>{this.state.pokemonData.pokemon}</h3>
                       <p>HP: {this.state.pokemonData.hp}</p>
                       <p>Height: {this.state.pokemonData.height}</p>
                       <p>Weight: {this.state.pokemonData.weight}</p>
                       <p>Attack: {this.state.pokemonData.attack}</p>
                       <p>Defense: {this.state.pokemonData.defense}</p>
                       <p>Base Type: {this.state.pokemonData.type_1}</p>
                       <p>Secondary Type: {this.state.pokemonData.type_2}</p>
                       <p>Shape: {this.state.pokemonData.shape}</p>
                       <p>Main Ability: {this.state.pokemonData.ability_1}</p>
                       <p>Secondary Ability: {this.state.pokemonData.ability_2}</p>

                   </div>
               }
            </div>
        )
    }
}