import React, { Component } from 'react';
import './App.css';

import Board from './Board'
import Vector from './Vector'

class App extends Component {
  render() {
    return (
      <Board size = { new Vector(20,20) } />
    );
  }
}

export default App;
