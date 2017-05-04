import React, { Component } from 'react';
import './App.css';

import Vector from './Vector'
import Game from './Game'

class App extends Component {
  render() {
    return <Game boardSize={new Vector(20, 20)} />;
  }
}

export default App;
