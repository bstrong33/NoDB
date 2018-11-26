import React, { Component } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList'
import TeamName from './TeamName'
import TeamStats from './TeamStats'
import './PokemonTeam.css';

class PokemonTeam extends Component {
    constructor() {
        super()

        this.state = {
            pokemonTeam: [],
        }

        this.deletePokemonFromTeam = this.deletePokemonFromTeam.bind(this)
        this.addPokemonToTeam = this.addPokemonToTeam.bind(this)
    }

    componentDidMount(){
        axios.get('/api/pokemon').then(response => {
            this.setState({
                pokemonTeam: response.data
            })
        })
    }

    addPokemonToTeam( name, img, id, hp, attack, defense, spAtk, spDef, speed ){
        if (this.state.pokemonTeam.length < 6){
        axios.post('/api/pokemon', { name, img, id, hp, attack, defense, spAtk, spDef, speed }).then(response => {
            this.setState({
                pokemonTeam: response.data
            })
        })
        } else {alert('You can only have 6 pokemon on your team!')}
    }

    deletePokemonFromTeam( id ){
        axios.delete(`/api/pokemon/${id}`).then(response => {
            this.setState({
                pokemonTeam: response.data
            })
        })
    }

    render() {
        let mappedPokemonTeam = this.state.pokemonTeam.map(teamMember => {
            return (
                <div className="individualTeamMember" key={teamMember.uniqueId}>
                    <img alt={teamMember.name} src={teamMember.img} />
                    <span>{teamMember.name}</span>
                    <button onClick={() => this.deletePokemonFromTeam( teamMember.id )}>Delete</button>
                </div>
            )
        })
        return (
            <div className='pokemonTeamComponent'>
                <PokemonList addPokemonFn={this.addPokemonToTeam}/>
                <div className='teamAndName'>
                    <TeamName />
                    <div className="wholeTeam">
                    {mappedPokemonTeam}
                    </div>
                    <TeamStats wholeTeam={this.state.pokemonTeam}/>   
                </div>
            </div>
        )
    }
}

export default PokemonTeam;