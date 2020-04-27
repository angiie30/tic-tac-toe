import React from "react";

function TimeTravel(props) {
  const history = props.value;

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <div key={move} className="list-group">
        <a
          className="list-group-item list-group-item-action text-center"
          onClick={() => props.onClick(move)}
        >
          {desc}
        </a>
      </div>
    );
  });

  return (
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
  );
}

export default TimeTravel;
