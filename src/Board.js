import React, { Component, PropTypes } from 'react';
import _ from "underscore";
import Vector from './Vector'
import classNames from "classnames";
import "./Board.css"


class Board extends Component {
  constructor(props) {
    super(props)

    this.state = { size: this.props.size }
  }

  static propTypes = {
    size: PropTypes.instanceOf(Vector)
  };

  render() {

    const rows = _.range(this.props.size.y).map( (y) => {
      const cells = _.range(this.props.size.x).map( x => {
        return <div> cell </div>
      })
      return cells;
    });

    return (
      <div> { rows } </div>
    )
  }
}

export default Board;
