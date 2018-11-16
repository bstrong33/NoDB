import React, { Component } from 'react';
import './PokemonList.css';

class PokemonList extends Component {
    constructor() {
        super()

        this.state = {
            pokemonToChooseFrom: [
                {name: 'Venesaur', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png', id: 1},
                {name: 'Charizard', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png', id: 2},
                {name: 'Blastoise', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png', id: 3},
                {name: 'Butterfree', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png', id: 4},
                {name: 'Beedrill', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beedrill.png', id: 5},
                {name: 'Pidgeot', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png', id: 6},
                {name: 'Raticate', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raticate.png', id: 7},
                {name: 'Fearow', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png', id: 8},
                {name: 'Arbok', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arbok.png', id: 9}
            ]
        }

    }

    render(){
        let { addPokemonFn } = this.props
        let mappedPokemonToChooseFrom = this.state.pokemonToChooseFrom.map(pokemon => {
            return (
                <div className="individualPokemon" key={pokemon.id}>
                        <img alt={pokemon.name} src={pokemon.img} />
                        <span>{pokemon.name}</span>
                        <button onClick={() => {addPokemonFn(pokemon.name, pokemon.img, pokemon.id)}}>Add</button>
                </div>
            )
        })
        return (
            <div className="allPokemon">
                {mappedPokemonToChooseFrom}
            </div>
        )
    }
}

export default PokemonList;