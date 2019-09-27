import React from "react";

const NumberButton = ({ number, handleNumClick }) => {
  if (number === 0) {
    return (
      <button
        className="zero number-buttons buttons"
        value={number}
        onClick={handleNumClick}
      >
        {number}
      </button>
    );
  } else {
    return (
      <>
        {
          <button
            className="number-buttons buttons"
            value={number}
            onClick={handleNumClick}
          >
            {number}
          </button>
        }
      </>
    );
  }
};
export default NumberButton;
