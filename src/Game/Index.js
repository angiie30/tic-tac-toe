import React from "react";
import Board from "./Board";
import calculateWinner from "./Winner";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <div key={move} className="list-group">
          <a
            className="list-group-item list-group-item-action text-center"
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </a>
        </div>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="card box-shadown mt-3">
              <div className="card-body">
                <div className="card-text">{status}</div>
              </div>
            </div>
            <div className="game-board card box-shadown mt-3">
              <div className="card-body">
                <Board
                  squares={current.squares}
                  onClick={(i) => this.handleClick(i)}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="card box-shadown mt-3">
              <div className="card-body">
                <div className="card-title">
                  <h5>Time Travel</h5>
                </div>
              </div>
              {moves}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
