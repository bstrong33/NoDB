import React, { Component } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList'
import './PokemonTeam.css';

class PokemonTeam extends Component {
    constructor() {
        super()

        this.state = {
            pokemonTeam: []
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

    addPokemonToTeam( name, img, id ){
        if (this.state.pokemonTeam.length < 6){
        axios.post('/api/pokemon', { name, img, id }).then(response => {
            this.setState({
                pokemonTeam: response.data
            })
        })
        } else {alert('You can only have 6 pokemon on your team')}
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
                <div className="individualTeamMember" key={teamMember.id}>
                    <img alt={teamMember.name} src={teamMember.img} />
                    <span>{teamMember.name}</span>
                    <button onClick={() => this.deletePokemonFromTeam( teamMember.id )}>Delete</button>
                </div>
            )
        })
        return (
            <div>
                    <PokemonList addPokemonFn={this.addPokemonToTeam}/>
                    <h2>Your Team</h2>
                <div className="wholeTeam">
                    {mappedPokemonTeam}
                </div>
            </div>
        )
    }
}

export default PokemonTeam;