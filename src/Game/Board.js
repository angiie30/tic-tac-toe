import React from "react";
import Square from "./Square";
import calculateWinner from "./Winner";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <h5 className="status mt-3">{status}</h5>
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
    );
  }
}

export default Board;
