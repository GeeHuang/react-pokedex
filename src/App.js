import React from 'react';
import './App.css';
import Pokegame from './Components/Pokegame/Pokegame';
import Demo from './Components/Demo';

export default class App extends React.Component {
    render(){
        return(
            <div className="App">
                <Pokegame/>
                <Demo maxNum={10}/>
            </div>
        )
    }
}
