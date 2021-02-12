import React from 'react';
import './PokeList.css';


export default class PokeList extends React.Component {          
            
    render() {
    const filtered = this.props.filteredPokemon
    return (
        <>      
            {filtered.map(pokemon => <div key={pokemon.pokemon}>
            <img src={pokemon.url_image} />
                    <p>Name: {pokemon.pokemon}</p>
                    <p>Base Type: {pokemon.type_1}</p>
                    <p>Attack: {pokemon.attack}</p>
                    <p>Defense: {pokemon.defense}</p>
          </div>)}
        
        </>
    )
    }
}