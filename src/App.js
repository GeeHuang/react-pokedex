import React from 'react';
import './App.css';
import Pokegame from './Components/Pokegame/Pokegame';

export default class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Pokegame/>
            </div>
        )
    }
}
