import React from "react";

export const StartNewGame = (props) => {
  if (!props.status.includes("Won") && !props.status.includes("Game Over"))
    return "";
  else {
    return (
      <div className="card box-shadown mt-3">
        <button
          type="button"
          className={
            props.winner?.toLowerCase() === "x"
              ? "btn btn-primary btn-block"
              : "btn btn-secondary btn-block"
          }
          onClick={props.onClick}
        >
          Play Again
        </button>
      </div>
    );
  }
};

export default StartNewGame;
