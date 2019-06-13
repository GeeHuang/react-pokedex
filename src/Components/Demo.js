import React, { Component } from 'react';

export default class Demo extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             num:1
        };   
        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        let rand = Math.floor(Math.random() * this.props.maxNum);
        this.setState({num:rand})
    }
    
    render() {
        return (
            <div>
                <h1>Number is :{this.state.num}</h1>
                {this.state.num !== 7 ? <button onClick={this.onClick}>Click me!</button> : <p>You Win!!</p> }
            </div>
        )
    };
}
