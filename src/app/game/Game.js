import React, { useState } from "react";
import Board from "./Board";
import TimeTravel from "./TimeTravel";
import calculateWinner from "./winner";

const handleClick = (
  index,
  history,
  xIsNext,
  stepNumber,
  setHistory,
  setStepNumber,
  setXIsNext
) => {
  const playHistory = history.slice(0, stepNumber + 1);
  const current = playHistory[playHistory.length - 1];
  const squares = current.squares.slice();

  if (calculateWinner(squares) || squares[index]) {
    return;
  }

  squares[index] = xIsNext ? "X" : "O";

  setHistory(
    playHistory.concat([
      {
        squares: squares,
      },
    ])
  );
  setStepNumber(playHistory.length);
  setXIsNext(!xIsNext);
};

const jumpTo = (step, setStepNumber, setXIsNext) => {
  setStepNumber(step);
  setXIsNext(step % 2 === 0);
};

const isAllChecked = (squares) => {
  let isAllChecked = true;
  squares.forEach((square) => {
    if (square == null) {
      isAllChecked = false;
      return false;
    }
  });

  return isAllChecked;
};

export const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const firstPlayer = localStorage.getItem("firstPlayer");
  const secondPlayer = localStorage.getItem("secondPlayer");

  let status;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  if (winner) {
    status =
      (winner.toLowerCase() === "x" ? firstPlayer : secondPlayer) + " Winner!";
  } else if (isAllChecked(current.squares)) {
    status = "Game Over!";
  } else {
    status = `Next player is ${xIsNext ? firstPlayer : secondPlayer}`;
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
                    status.includes("Winner")
                      ? "text-success"
                      : status.includes("Game Over")
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
            onClick={(index) =>
              handleClick(
                index,
                history,
                xIsNext,
                stepNumber,
                setHistory,
                setStepNumber,
                setXIsNext
              )
            }
          />
        </div>
        <TimeTravel
          value={history}
          onClick={(step) => jumpTo(step, setStepNumber, setXIsNext)}
        />
      </div>
    </div>
  );
};

export default Game;
