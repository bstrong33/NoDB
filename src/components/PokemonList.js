import React, { Component } from 'react';
import './PokemonList.css';

class PokemonList extends Component {
    constructor() {
        super()

        this.state = {
            pokemonToChooseFrom: [
                {name: 'Venesaur', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venusaur.png', id: 3, hp: 80, attack: 82, defense: 83, spAtk: 100, spDef: 100, speed: 80},
                {name: 'Charizard', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/charizard.png', id: 6, hp: 78, attack: 84, defense: 78, spAtk: 109, spDef: 85, speed: 100},
                {name: 'Blastoise', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/blastoise.png', id: 9, hp: 79, attack: 83, defense: 100, spAtk: 85, spDef: 105, speed: 78},
                {name: 'Butterfree', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/butterfree.png', id: 12, hp: 60, attack: 45, defense: 50, spAtk: 90, spDef: 80, speed: 70},
                {name: 'Beedrill', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/beedrill.png', id: 15, hp: 65, attack: 90, defense: 40, spAtk: 45, spDef: 80, speed: 75},
                {name: 'Pidgeot', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pidgeot.png', id: 18, hp: 83, attack: 80, defense: 75, spAtk: 70, spDef: 70, speed: 101},
                {name: 'Raticate', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raticate.png', id: 20, hp: 55, attack: 81, defense: 60, spAtk: 50, spDef: 70, speed: 97},
                {name: 'Fearow', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/fearow.png', id: 22, hp: 65, attack: 90, defense: 65, spAtk: 61, spDef: 61, speed: 100},
                {name: 'Arbok', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arbok.png', id: 24, hp: 60, attack: 95, defense: 69, spAtk: 65, spDef: 79, speed: 80},
                {name: 'Raichu', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/raichu.png', id: 26, hp: 60, attack: 90, defense: 55, spAtk: 90, spDef: 80, speed: 110},
                {name: 'Sandslash', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/sandslash.png', id: 28, hp: 75, attack: 100, defense: 110, spAtk: 45, spDef: 55, speed: 65},
                {name: 'NidoQueen', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoqueen.png', id:31, hp: 90, attack: 92, defense: 87, spAtk: 75, spDef: 85, speed: 76},
                {name: 'NidoKing', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/nidoking.png', id: 34, hp: 81, attack: 102, defense: 77, spAtk: 85, spDef: 75, speed: 85},
                {name: 'Clefable', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/clefable.png', id: 36, hp: 95, attack: 70, defense: 73, spAtk: 95, spDef: 90, speed: 60},
                {name: 'Ninetales', img:'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ninetales.png', id: 38, hp: 73, attack: 76, defense: 75, spAtk: 81, spDef: 100, speed: 100},
                {name: 'Wigglytuff', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/wigglytuff.png', id: 40, hp: 140, attack: 70, defense: 45, spAtk: 85, spDef: 50, speed: 45},
                {name: 'Golbat', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golbat.png', id: 42, hp: 75, attack: 80, defense: 70, spAtk: 65, spDef: 75, speed: 90},
                {name: 'Vileplume', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vileplume.png', id: 45, hp: 75, attack: 80, defense: 85, spAtk: 100, spDef: 90, speed: 50},
                {name: 'Parasect', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/parasect.png', id: 47, hp: 60, attack: 95, defense: 80, spAtk: 60, spDef: 80, speed: 30},
                {name: 'Venomoth', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/venomoth.png', id: 49, hp: 70, attack: 65, defense: 60, spAtk: 90, spDef: 75, speed: 90},
                {name: 'Dugtrio', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dugtrio.png', id: 51, hp: 35, attack: 100, defense: 50, spAtk: 50, spDef: 70, speed: 120},
                {name: 'Persian', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/persian.png', id: 53, hp: 65, attack: 70, defense: 60, spAtk: 65, spDef: 65, speed: 115},
                {name: 'Golduck', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golduck.png', id: 55, hp: 80, attack: 82, defense: 78, spAtk: 95, spDef: 80, speed: 85},
                {name: 'Primeape', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/primeape.png', id: 57, hp: 65, attack: 105, defense: 60, spAtk: 60, spDef: 70, speed: 95},
                {name: 'Arcanine', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/arcanine.png', id: 59, hp: 90, attack: 100, defense: 80, spAtk: 100, spDef: 80, speed: 95},
                {name: 'Poliwrath', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/poliwrath.png', id: 62, hp: 90, attack: 95, defense: 95, spAtk: 70, spDef: 90, speed: 70},
                {name: 'Alakazam', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/alakazam.png', id: 65, hp: 55, attack: 50, defense: 45, spAtk: 135, spDef: 95, speed: 120},
                {name: 'Machamp', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/machamp.png', id: 68, hp: 90, attack: 130, defense: 80, spAtk: 65, spDef: 85, speed: 55},
                {name: 'Vectreebel', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/victreebel.png', id: 71, hp: 80, attack: 105, defense: 65, spAtk: 100, spDef: 70, speed: 70},
                {name: 'Tentacruel', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tentacruel.png', id: 73, hp: 80, attack: 70, defense: 65, spAtk: 80, spDef: 120, speed: 100},
                {name: 'Golem', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/golem.png', id: 76, hp: 80, attack: 120, defense: 130, spAtk: 55, spDef: 65, speed: 45},
                {name: 'Rapidash', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rapidash.png', id: 78, hp: 65, attack: 100, defense: 70, spAtk: 80, spDef: 80, speed: 105},
                {name: 'Slowbro', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/slowbro.png', id: 80, hp: 95, attack: 75, defense: 100, spAtk: 100, spDef: 80, speed: 30},
                {name: 'Magneton', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magneton.png', id: 82, hp: 50, attack: 60, defense: 95, spAtk: 120, spDef: 70, speed: 70},
                {name: 'Farfetch\'d', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/farfetchd.png', id: 83, hp: 52, attack: 90, defense: 55, spAtk: 58, spDef: 62, speed: 60},
                {name: 'Dodrio', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dodrio.png', id: 85, hp: 60, attack: 110, defense: 70, spAtk: 60, spDef: 60, speed: 110},
                {name: 'Dewgong', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dewgong.png', id: 87, hp: 90, attack: 70, defense: 80, spAtk: 70, spDef: 95, speed: 70},
                {name: 'Muk', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/muk.png', id: 89, hp: 105, attack: 105, defense: 75, spAtk: 65, spDef: 100, speed: 50},
                {name: 'Cloyster', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/cloyster.png', id: 91, hp: 50, attack: 95, defense: 180, spAtk: 85, spDef: 45, speed: 70},
                {name: 'Gengar', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gengar.png', id: 94, hp: 60, attack: 65, defense: 60, spAtk: 130, spDef: 75, speed: 110},
                {name: 'Onix', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/onix.png', id: 95, hp: 35, attack: 45, defense: 160, spAtk: 30, spDef: 45, speed: 70},
                {name: 'Hypno', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hypno.png', id: 97, hp: 85, attack: 73, defense: 70, spAtk: 73, spDef: 115, speed: 67},
                {name: 'Kingler', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kingler.png', id: 99, hp: 55, attack: 130, defense: 115, spAtk: 50, spDef: 50, speed: 75},
                {name: 'Electrode', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electrode.png', id: 101, hp: 60, attack: 50, defense: 70, spAtk: 80, spDef: 80, speed: 150},
                {name: 'Exeggutor', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/exeggutor.png', id: 103, hp: 95, attack: 95, defense: 85, spAtk: 125, spDef: 75, speed: 55},
                {name: 'Marowak', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/marowak.png', id: 105, hp: 60, attack: 80, defense: 110, spAtk: 50, spDef: 80, speed: 45},
                {name: 'Hitmonlee', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonlee.png', id: 106, hp: 50, attack: 120, defense: 53, spAtk: 35, spDef: 110, speed: 87},
                {name: 'Hitmonchan', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/hitmonchan.png', id: 107, hp: 50, attack: 105, defense: 79, spAtk: 35, spDef: 110, speed: 76},
                {name: 'Lickitung', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lickitung.png', id: 108, hp: 90, attack: 55, defense: 75, spAtk: 60, spDef: 75, speed: 30},
                {name: 'Weezing', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/weezing.png', id: 110, hp: 65, attack: 90, defense: 120, spAtk: 85, spDef: 70, speed: 60},
                {name: 'Rhydon', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/rhydon.png', id: 112, hp: 105, attack: 130, defense: 120, spAtk: 45, spDef: 45, speed: 40},
                {name: 'Chansey', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/chansey.png', id: 113, hp: 250, attack: 5, defense: 5, spAtk: 35, spDef: 105, speed: 50},
                {name: 'Tangela', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tangela.png', id: 114, hp: 65, attack: 55, defense: 115, spAtk: 100, spDef: 40, speed: 60},
                {name: 'Kangaskhan', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kangaskhan.png', id: 115, hp: 105, attack: 95, defense: 80, spAtk: 40, spDef: 80, speed: 90},
                {name: 'Seadra', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seadra.png', id: 117, hp: 55, attack: 65, defense: 95, spAtk: 95, spDef: 45, speed: 85},
                {name: 'Seaking', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/seaking.png', id: 119, hp: 80, attack: 92, defense: 65, spAtk: 65, spDef: 80, speed: 68},
                {name: 'Starmie', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/starmie.png', id: 121, hp: 60, attack: 75, defense: 85, spAtk: 100, spDef: 85, speed: 115},
                {name: 'Mr. Mime', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mr-mime.png', id: 122, hp: 40, attack: 45, defense: 65, spAtk: 100, spDef: 120, speed: 90},
                {name: 'Scyther', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/scyther.png', id: 123, hp: 70, attack: 110, defense: 80, spAtk: 55, spDef: 80, speed: 105},
                {name: 'Jynx', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jynx.png', id: 124, hp: 65, attack: 50, defense: 35, spAtk: 115, spDef: 95, speed: 95},
                {name: 'Electabuzz', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/electabuzz.png', id: 125, hp: 65, attack: 83, defense: 57, spAtk: 95, spDef: 85, speed: 105},
                {name: 'Magmar', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/magmar.png', id: 126, hp: 65, attack: 95, defense: 57, spAtk: 100, spDef: 85, speed: 93},
                {name: 'Pinsir', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/pinsir.png', id: 127, hp: 65, attack: 125, defense: 100, spAtk: 55, spDef: 70, speed: 85},
                {name: 'Tauros', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/tauros.png', id: 128, hp: 75, attack: 100, defense: 95, spAtk: 40, spDef: 70, speed: 110},
                {name: 'Gyarados', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/gyarados.png', id: 130, hp: 95, attack: 125, defense: 79, spAtk: 60, spDef: 100, speed: 81},
                {name: 'Lapras', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/lapras.png', id: 131, hp: 130, attack: 85, defense: 80, spAtk: 85, spDef: 95, speed: 60},
                {name: 'Ditto', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/ditto.png', id: 132, hp: 48, attack: 48, defense: 48, spAtk: 48, spDef: 48, speed: 48},
                {name: 'Vaporeon', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/vaporeon.png', id: 134, hp: 130, attack: 65, defense: 60, spAtk: 110, spDef: 95, speed: 65},
                {name: 'Jolteon', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/jolteon.png', id: 135, hp: 65, attack: 65, defense: 60, spAtk: 110, spDef: 95, speed: 130},
                {name: 'Flareon', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/flareon.png', id: 136, hp: 65, attack: 130, defense: 60, spAtk: 95, spDef: 110, speed: 65},
                {name: 'Porygon', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/porygon.png', id: 137, hp: 65, attack: 60, defense: 70, spAtk: 85, spDef: 75, speed: 40},
                {name: 'Omastar', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/omastar.png', id: 139, hp: 70, attack: 60, defense: 125, spAtk: 115, spDef: 70, speed: 55},
                {name: 'Kabutops', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/kabutops.png', id: 141, hp: 60, attack: 115, defense: 105, spAtk: 65, spDef: 70, speed: 80},
                {name: 'Aerodactyl', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/aerodactyl.png', id: 142, hp: 80, attack: 105, defense: 65, spAtk: 60, spDef: 75, speed: 130},
                {name: 'Snorlax', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/snorlax.png', id: 143, hp: 160, attack: 110, defense: 65, spAtk: 65, spDef: 110, speed: 30},
                {name: 'Articuno', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/articuno.png', id: 144, hp: 90, attack: 85, defense: 100, spAtk: 95, spDef: 125, speed: 85},
                {name: 'Zapdos', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/zapdos.png', id: 145, hp: 90, attack: 90, defense: 85, spAtk: 125, spDef: 90, speed: 100},
                {name: 'Moltres', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/moltres.png', id: 146, hp: 90, attack: 100, defense: 90, spAtk: 125, spDef: 85, speed: 90},
                {name: 'Dragonite', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/dragonite.png', id: 149, hp: 91, attack: 134, defense: 95, spAtk: 100, spDef: 100, speed: 80},
                {name: 'MewTwo', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mewtwo.png', id: 150, hp: 106, attack: 110, defense: 90, spAtk: 154, spDef: 90, speed: 130},
                {name: 'Mew', img: 'https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/mew.png', id: 151, hp: 100, attack: 100, defense: 100, spAtk: 100, spDef: 100, speed: 100},
               
                // {name: '', img: '', id: },
               
              
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
                        <button onClick={() => {addPokemonFn(pokemon.name, pokemon.img, pokemon.id, pokemon.hp, pokemon.attack, pokemon.defense, pokemon.spAtk, pokemon.spDef, pokemon.speed)}}>Add</button>
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