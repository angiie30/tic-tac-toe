import React from "react";
import { getPlayers, setPlayers } from "../../shared/localStorage";

const increaseWinnerPlays = (winner) => {
  const players = getPlayers();

  players[0].playsWon =
    winner?.toLowerCase() === "x"
      ? players[0].playsWon + 1
      : players[0].playsWon;

  players[1].playsWon =
    winner?.toLowerCase() === "o"
      ? players[1].playsWon + 1
      : players[1].playsWon;

  setPlayers(players);
};

export const GamesWon = (props) => {
  if (props.status.includes("Won") || props.status.includes("Game Over")) {
    increaseWinnerPlays(props.winner);
  }

  let players = getPlayers();

  return (
    <div className="card box-shadown mt-3">
      <ul className="list-group">
        <li
          className="list-group-item disabled text-center"
          aria-disabled="true"
        >
          Games Won
        </li>
        <li
          className={
            players[0].playsWon > players[1].playsWon
              ? "list-group-item active"
              : "list-group-item"
          }
          aria-disabled="true"
        >
          {players[0].name}: {players[0].playsWon}
        </li>
        <li
          className={
            players[0].playsWon < players[1].playsWon
              ? "list-group-item active secondPlayerActive"
              : "list-group-item"
          }
        >
          {players[1].name}: {players[1].playsWon}
        </li>
      </ul>
    </div>
  );
};

export default GamesWon;
