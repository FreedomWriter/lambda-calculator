import React, {useState} from "react";

const OperatorButton = (props) => {
  // console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator-buttons buttons" >{props.char}</button>
    </>
  );
};

export default OperatorButton;
