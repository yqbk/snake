import React, { Component } from 'react';
import './App.css';
import * as PIXI from 'pixi.js'
import Vector from './Vector'
import Game from './Game'

class App extends Component {
  constructor(props) {
    super(props)

    this.map = document.getElementById('root')
    this.app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});


    // app = new PIXI.Application(WIDTH, HEIGHT, {
    //   transparent: true,
    //   antialias: true
    //   // autoResize: true,
    //   // resolution: window.devicePixelRatio || 1
    // })
    // map.appendChild(app.view)
    //
    // const scale = 0.7
    //
    // container = new PIXI.Container()
    // container.scale.x = scale
    // container.scale.y = scale
    // container.interactive = true
    //
    // const graphics = new PIXI.Graphics()
    // graphics.displayGroup = new PIXI.DisplayGroup(100)
    // let startX
    // let startY
    //
    // app.stage.displayList = new PIXI.DisplayList()
    //
    // app.stage.addChild(container)
    // app.stage.addChild(graphics)
    //
    // let grid = {}
  }


  componentDidMount() {
    this.map.appendChild(this.app.view);
  }

  render() {
    return <Game boardSize={new Vector(20, 20) />
  }
}

export default App;
