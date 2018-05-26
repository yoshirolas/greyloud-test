import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {message: []}

  componentDidMount() {
    axios('/message')
      .then(message => this.setState({ message: message.data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Message from server</h1>
        {this.state.message}
      </div>
    );
  }
}

export default App;