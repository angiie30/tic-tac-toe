import React from "react";

export const TimeTravel = (props) => {
  const history = props.value;

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <div key={move} className="list-group">
        <button
          type="button"
          className="list-group-item list-group-item-action pointer"
          onClick={() => props.onClick(move)}
        >
          {desc}
        </button>
      </div>
    );
  });

  if (moves.length <= 1) return "";
  else
    return (
      <div className="card box-shadown mt-3">
        <div className="card-body">
          <div className="card-title">
            <h5>Time Travel</h5>
          </div>
        </div>
        {moves}
      </div>
    );
};

export default TimeTravel;
