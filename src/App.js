import React, { Component } from 'react';
import Widget from './Widget.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Waldorf Astoria New York</h2>
        </div>

        <div className="body">

        <Widget />

        </div>
      </div>
    );
  }
}

export default App;
