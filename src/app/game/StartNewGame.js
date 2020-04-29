import React from "react";

export const StartNewGame = (props) => {
  const history = props.value;

  if (!props.value.includes("Won") && !props.value.includes("Game Over"))
    return "";
  else
    return (
      <div className="col-sm-12 col-md-12 col-lg-4">
        <div className="card box-shadown mt-3">
          <button
            type="button"
            className="btn btn-secondary btn-block"
            onClick={() => props.onClick()}
          >
            Play Again
          </button>
        </div>
      </div>
    );
};

export default StartNewGame;
