import React, { Component } from "react";
import PropTypes from "prop-types";
import Square from "./Square";
import Knight from "./Knight";

export default class Board extends Component {
  render() {
    return (
      <div>
        <Square black>
          <Knight />
        </Square>
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};
