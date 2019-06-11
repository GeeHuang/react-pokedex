/* eslint-disable no-unused-expressions */

import React, {Component} from 'react';
import './Pokedex.css';
import Pokecard from '../Pokecard/Pokecard';

export default class Pokedex extends Component {

    render(){
        return(
            <div className="Pokedex">
                <h1>Pokedex</h1>
                <h1 className={this.props.isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>{this.props.isWinner ? 'WINNER' :'LOSER'}</h1>
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
        )
    }
}