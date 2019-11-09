import React from "react";

const SpecialButton = props => {
  if (props.special === "+/-") {
    return (
      <button
        className="negative special-buttons buttons"
        value={`* ${-1}`}
        onClick={props.negative}
      >
        {props.special}
      </button>
    );
  } else if (props.special === "%") {
    return (
      <button
        className="percent special-buttons buttons"
        value={`* .01`}
        onClick={props.percent}
      >
        {props.special}
      </button>
    );
  } else if (props.special === "C") {
    return (
      <button
        className="clear special-buttons buttons"
        value={props.special}
        onClick={props.handleClear}
      >
        {props.special}
      </button>
    );
  } else {
    return (
      <>
        {
          <button
            className="special-buttons buttons"
            value={props.special}
            onClick={props.handleClick}
          >
            {props.special}
          </button>
        }
      </>
    );
  }
};

export default SpecialButton;
