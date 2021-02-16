import React from 'react';
import './PokeList.css';


export default class PokeList extends React.Component {          
            
    render() {
    const pokemons = this.props.pokemons
    return (
        <>      
            {pokemons.map(pokemon => <div className='pokelist' key={pokemon.pokemon}>
            <img src={pokemon.url_image} />
                    <p>Name: {pokemon.pokemon}</p>
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