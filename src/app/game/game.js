import React from "react";
import Board from "./board";
import TimeTravel from "./time-travel";
import calculateWinner from "./winner";

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
      firstPlayer: this.getFirstPlayerName(),
      secondPlayer: this.getSecondPlayerName(),
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

  getFirstPlayerName() {
    return localStorage.getItem("firstPlayer");
  }

  getSecondPlayerName() {
    return localStorage.getItem("secondPlayer");
  }

  isAllChecked(squares) {
    let isAllChecked = true;
    console.log(squares);
    squares.forEach((square) => {
      if (square == null) {
        isAllChecked = false;
        return false;
      }
    });

    return isAllChecked;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status =
        (winner.toString().toLowerCase() === "x"
          ? this.state.firstPlayer
          : this.state.secondPlayer) + " Winner!";
    } else if (this.isAllChecked(current.squares)) {
      status = "Game Over!";
    } else {
      status =
        "Next player is " +
        (this.state.xIsNext ? this.state.firstPlayer : this.state.secondPlayer);
    }

    return (
      <div className="game container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-8">
            <div className="card box-shadown mt-3">
              <div className="card-body">
                <div className="card-text text-center">
                  <h4
                    className={
                      status.toString().includes("Winner")
                        ? "text-success"
                        : status.toString().includes("Game Over")
                        ? "text-danger"
                        : ""
                    }
                  >
                    {status}
                  </h4>
                </div>
              </div>
            </div>
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
            />
          </div>
          <TimeTravel value={history} onClick={(step) => this.jumpTo(step)} />
        </div>
      </div>
    );
  }
}

export default Game;
