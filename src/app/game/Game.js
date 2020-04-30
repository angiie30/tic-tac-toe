import React, { useState } from "react";
import Board from "./Board";
import TimeTravel from "./TimeTravel";
import calculateWinner from "./winner";
import StartNewGame from "./StartNewGame";
import PlaysWon from "./PlaysWon";
import { getPlayers } from "../../shared/localStorage";

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

const startNewGame = (winner, setHistory, setStepNumber, setXIsNext) => {
  setHistory([{ squares: Array(9).fill(null) }]);
  setStepNumber(0);
  setXIsNext(winner.toLowerCase() === "x");
};

export const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const players = getPlayers();

  let status;
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  if (winner) {
    status =
      (winner.toLowerCase() === "x" ? players[0].name : players[1].name) +
      " Won!";
  } else if (isAllChecked(current.squares)) {
    status = "Game Over!";
  } else {
    status = `Next player is ${xIsNext ? players[0].name : players[1].name}`;
  }

  return (
    <div className="game container">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8">
          <div className="row">
            <div className="col-12">
              <div className="card box-shadown mt-3">
                <div className="card-body">
                  <div className="card-text text-center">
                    <h4
                      className={
                        status.includes("Won")
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
            </div>
            <div className="col-12">
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
            <div className="col-12">
              <StartNewGame
                status={status}
                winner={winner}
                onClick={() =>
                  startNewGame(winner, setHistory, setStepNumber, setXIsNext)
                }
              />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <div className="row">
            <div className="col-12">
              <PlaysWon status={status} winner={winner} />
            </div>
            <div className="col-12">
              <TimeTravel
                value={history}
                onClick={(step) => jumpTo(step, setStepNumber, setXIsNext)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
