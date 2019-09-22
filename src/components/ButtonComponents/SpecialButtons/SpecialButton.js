import React from "react";
// import Specials from "./Specials";
// import Display from "../../DisplayComponents/Display"

const SpecialButton = (props) => {
  // console.log(props);
  if (props.special === "C") {
    return (<button className="clear special-buttons buttons" value={props.special} onClick={props.handleClear}>{props.special}</button>);
  } else 
  {return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {<button className="special-buttons buttons" value={props.special} onClick={props.handleClick}>{props.special}</button>}
    </>
  );}
};

export default SpecialButton;