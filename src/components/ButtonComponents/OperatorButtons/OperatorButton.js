import React from "react";

const OperatorButton = ({ char, handleEqual, value, handleClick }) => {
  if (char === "=") {
    return (
      <button
        className="equal operator-buttons buttons"
        value={char}
        onClick={handleEqual}
      >
        {char}
      </button>
    );
  } else
    return (
      <>
        <button
          className="operator-buttons buttons"
          value={value}
          onClick={handleClick}
        >
          {char}
        </button>
      </>
    );
};

export default OperatorButton;
