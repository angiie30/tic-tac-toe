import React from "react";
import Square from "./square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="game-board card box-shadown mt-3">
        <div className="card-body">
          <div className="board-row row mt-3">
            <div className="col">{this.renderSquare(0)}</div>
            <div className="col">{this.renderSquare(1)}</div>
            <div className="col">{this.renderSquare(2)}</div>
          </div>
          <div className="board-row row mt-3">
            <div className="col">{this.renderSquare(3)}</div>
            <div className="col">{this.renderSquare(4)}</div>
            <div className="col">{this.renderSquare(5)}</div>
          </div>
          <div className="board-row row mt-3">
            <div className="col">{this.renderSquare(6)}</div>
            <div className="col">{this.renderSquare(7)}</div>
            <div className="col">{this.renderSquare(8)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
