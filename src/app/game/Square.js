import React from "react";

export const Square = (props) => {
  return (
    <button
      type="button"
      className={
        "square btn btn-lg btn-block " +
        (props.value == null
          ? "btn-outline-dark"
          : props.value.toString().toLowerCase() === "x"
          ? "btn-primary"
          : "btn-secondary")
      }
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default Square;
