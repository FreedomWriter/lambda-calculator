import React from "react";
// import Specials from "./Specials";
// import Display from "../../DisplayComponents/Display"

const SpecialButton = (props) => {
  // console.log(props);
  if (props.special === "+/-") {
    return (<button className="negative special-buttons buttons" value={`* ${-1}`} onClick={props.negative}>{props.special}</button>);
  } else
  if (props.special === "%") {
    return (<button className="percent special-buttons buttons" value={`* .01`} onClick={props.percent}>{props.special}</button>);
  } else 
  if (props.special === "C") {
    return (<button className="clear special-buttons buttons" value={props.special} onClick={props.handleClear}>{props.special}</button>);
  } else 
  {return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {<button className="special-buttons buttons" value={props.special} onClick={props.handleClick}>{props.special}</button>}
    </>
  );}
  //Below works but I'm trying to get rid of eval
  // if (props.special === "%") {
  //   return (<button className="clear special-buttons buttons" value={`* .01`} onClick={props.percent}>{props.special}</button>);
  // } else 
  // if (props.special === "C") {
  //   return (<button className="clear special-buttons buttons" value={props.special} onClick={props.handleClear}>{props.special}</button>);
  // } else 
  // {return (
  //   <>
  //     {/* Display a button element rendering the data being passed down from the parent container on props */}
  //     {<button className="special-buttons buttons" value={props.special} onClick={props.handleClick}>{props.special}</button>}
  //   </>
  // );}
};

export default SpecialButton;