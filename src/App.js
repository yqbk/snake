import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Board'

class App extends Component {
  render() {
    return (
      <Board size = '20' />
    );
  }
}

export default App;
