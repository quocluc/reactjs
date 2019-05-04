import React, { Component } from 'react';

import './App.css';
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: ''
    };
    this.updateToken = this.updateToken.bind(this);
    this.updateUrl = this.updateUrl.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  updateToken(event) {
    this.setState({ token: event.target.value })
  }
  updateUrl(event) {
    this.setState({ url: event.target.value })
  }
  handleClick() {
    axios.patch(''+this.state.url, {

    }, {
        headers: {
          Authorization: 'Bearer ' + this.state.token
        }
      })
      .then(function (response) {
        console.log("TCL: App -> componentDidMount -> response", response);
      });

  }




  render() {
    return (
      <div className="App">



        <label>token</label>
        <input id="token" type="text" name="token" onChange={this.updateToken} />
        <br />
        <label>url</label>
        <input id="url" type="text" name="url" onChange={this.updateUrl} />
        <button id="btn" name="btn" onClick={this.handleClick}>Submit</button>


      </div>
    );
  }
}

export default App;

