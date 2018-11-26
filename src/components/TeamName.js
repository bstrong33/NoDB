import React, { Component } from 'react';
import axios from 'axios';
import './TeamName.css';

class TeamName extends Component {
    constructor(){
        super()

        this.state = {
            teamName: '',
            edit: false,
            userInput: '',
        }

        this.editTeamName = this.editTeamName.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    componentDidMount(){
        axios.get('/api/teamname').then(response => {
            this.setState({
                teamName: response.data
            })
        })
    }

    editTeamName( newName ) {
        axios.put('/api/teamname', { newName }).then(response => {
            this.setState({
                teamName: this.state.userInput,
                edit: false
            })
        })
    }

    toggleEdit(){
        this.setState({
            edit: true
        })
    }

    handleUserInput(event) {
        this.setState({
            userInput: event
        })
    }

    render() {
        return (
            <div className='teamNameDiv'>

                {this.state.edit ? 
                <div className="teamNameDiv">
                    <input onChange={event => {this.handleUserInput(event.target.value)}}></input>
                    <button onClick={() => {this.editTeamName()}}>Create Change</button> 
                </div> :
            
                <div className="teamNameDiv">
                    <span className="teamName">{this.state.teamName}</span>
                    <button onClick={() => {this.toggleEdit()}}>Change Team Name</button>
                </div>}
            </div>
        )
    }
}

export default TeamName