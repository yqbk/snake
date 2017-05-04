import React, { Component, PropTypes } from 'react';
import _ from "underscore";
import * as PIXI from 'pixi'
import Vector from './Vector'
import classNames from "classnames";
import "./Board.css"

class Board extends Component {
  constructor(props) {
    super(props)

    //this.container = new PIXI.Container()
    //this.hex = new PIXI.Sprite.fromImage('../public/head.png')
    //this.initializeItem(this.hex, this.x, this.y, 0.5, 'hexes')
    //this.container.addChild(this.hex)


    this.state = { size: this.props.size }
  }

  static propTypes = {
    size: PropTypes.instanceOf(Vector).isRequired,
    snakePositions: PropTypes.arrayOf(PropTypes.instanceOf(Vector)).isRequired,
    fruitPosition: PropTypes.instanceOf(Vector).isRequired
  };

  render() {

    //var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
    //document.body.appendChild(app.view);

    const {size, snakePositions, fruitPosition} = this.props;

    const rows = _.range(size.y).map((y) => {
      const cells = _.range(size.x).map(x => {
        const pos = new Vector(x, y);
        const maybeSnakeStyle = {
          snake: snakePositions.find(s => s.equals(pos))
        };
        const maybeFruitStyle = {fruit: fruitPosition.equals(pos)};
        return <div key={x} className={classNames("cell", maybeSnakeStyle, maybeFruitStyle)}/>;
      });
      return <div key={y} className="row">{cells}</div>;
    });



    return <div className="board">{rows}</div>;
  }
}


export default Board;
