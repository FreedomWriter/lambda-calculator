import React from "react";
// import Display from "../../../components/DisplayComponents/Display";
const OperatorButton = (props) => {
  // console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator-buttons buttons" value={props.char} onClick={props.handleClick}>{props.char}</button>
    </>
  );
};

export default OperatorButton;
