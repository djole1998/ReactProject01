import React, { Component } from 'react';

class Project01 extends Component {
    constructor(){
        super();
        this.state = {
           name: ""
        }
    }

    nameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    };
    render() {
        return (
            <div>
                <label>Unesi ime:</label>
                <input onChange={this.nameChange}/>
                <p>Tvoje ime je: {this.state.name}</p>
            </div>
        );
    }
}

export default Project01;
