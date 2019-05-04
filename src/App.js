import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        axios.patch('http://api2.abc.com/v2/tests/8', {

        },{
            headers: {
                Authorization: 'Bearer 40cb3cf32b20e96610afd03a43910035ad859e8d5a77df7e0f867ae046a09a7b/0jWakLR1hKDDetKoruRhYuXpEqCnOmv02SgtlDPLXUPQ2-dXfEvbC6bEcIArOoju/MTA='
            }
        })
            .then(function (response) {
								console.log("TCL: App -> componentDidMount -> response", response);
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;

