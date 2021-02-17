import React from 'react';
import { Link } from 'react-router-dom';
import './PokeList.css';


export default class PokeList extends React.Component {          
            
    render() {
    const pokemons = this.props.pokemon
    return (
        <>  
          
            {pokemons.map(pokemon => <div className='pokelist' key={pokemon.pokemon}>
                <Link to={pokemon.pokemon}>
            <img src={pokemon.url_image} />
                    <p>Name: {pokemon.pokemon}</p>
            </Link>
                    <p>Base Type: {pokemon.type_1}</p>
                    <p>Shape: {pokemon.shape}</p>
                    <p>Ability: {pokemon.ability_1}</p>
                    <p>Attack: {pokemon.attack}</p>
                    <p>Defense: {pokemon.defense}</p>
          </div>)}
        
        </>
    )
    }
}