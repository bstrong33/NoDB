import React, { Component } from 'react';
import Stateless from './Stateless'
import './TeamStats.css'

class TeamStats extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hp: 0,
            attack: 0,
            defense: 0,
            spAtk: 0,
            spDef: 0,
            speed: 0,
            // total: 0,
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props !== prevProps){
        let { wholeTeam } = this.props
        let accumulatedHp = wholeTeam.map(element => {
            for (let key in element){
                if(key === 'hp'){
                    return element.hp;
                }
            }  
        })

        let accumulatedAttack = wholeTeam.map(element => {
            for (let key in element){
                if(key === 'attack'){
                    return element.attack;
                }
            }  
        })

        let accumulatedDefense = wholeTeam.map(element => {
            for (let key in element){
                if(key === 'defense'){
                    return element.defense;
                }
            }  
        })

        let accumulatedSpAtk = wholeTeam.map(element => {
            for (let key in element){
                if(key === 'spAtk'){
                    return element.spAtk;
                }
            }  
        })

        let accumulatedSpDef = wholeTeam.map(element => {
            for (let key in element){
                if(key === 'spDef'){
                return element.spDef;
                }
            }  
        })

        let accumulatedSpeed = wholeTeam.map(element => {
            for (let key in element){
                if(key === 'speed'){
                return element.speed;
                }
            }  
        })

        let totalHp = accumulatedHp.reduce((acc, index) => {return acc + index}, 0)
        let totalAttack = accumulatedAttack.reduce((acc, index) => {return acc + index}, 0)
        let totalDefense = accumulatedDefense.reduce((acc, index) => {return acc + index}, 0)
        let totalSpAtk = accumulatedSpAtk.reduce((acc, index) => {return acc + index}, 0)
        let totalSpDef = accumulatedSpDef.reduce((acc, index) => {return acc + index}, 0)
        let totalSpeed = accumulatedSpeed.reduce((acc, index) => {return acc + index}, 0)

        // let totalStats = totalHp + totalAttack + totalDefense + totalSpAtk + totalSpDef + totalSpeed

        this.setState({
            hp: totalHp,
            attack: totalAttack,
            defense: totalDefense,
            spAtk: totalSpAtk,
            spDef: totalSpDef,
            speed: totalSpeed,
            // total: totalStats
        })
    }
    }

    render() {

        
        return (
            <div className='wholeStats'>
                <div className='allStats'>
                    <div className='individualStat'>
                        <h4>Total Stats</h4>
                        <Stateless 
                            hp={this.state.hp}
                            attack={this.state.attack}
                            defense={this.state.defense}
                            spAtk={this.state.spAtk}
                            spDef={this.state.spDef}
                            speed={this.state.speed}
                        />
                    </div>
                    <div className='individualStat'>
                        <h4>Total HP</h4>
                        {this.state.hp}
                    </div>
                    <div className='individualStat'>
                        <h4>Total Attack</h4>
                        {this.state.attack}
                    </div>
                    <div className='individualStat'>
                        <h4>Total Defense</h4>
                        {this.state.defense}
                    </div>
                    <div className='individualStat'>
                        <h4>Total Sp Attack</h4>
                        {this.state.spAtk}
                    </div>
                    <div className='individualStat'>
                        <h4>Total Sp Defense</h4>
                        {this.state.spDef}
                    </div>
                    <div className='individualStat'>
                        <h4>Total Speed</h4>
                        {this.state.speed}
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamStats;