import React from "react";
import Square from "./Square";

export const Board = (props) => {
  return (
    <div className="game-board card box-shadown mt-3">
      <div className="card-body">
        <div className="board-row row mt-3">
          {props.squares.map((square, index) => {
            return (
              <div className="col-4 mb-3" key={index}>
                <Square
                  key={index}
                  value={square}
                  onClick={() => props.onClick(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
