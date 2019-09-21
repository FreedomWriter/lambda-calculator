import React from "react";
import Specials from "./Specials";
import Display from "../../DisplayComponents/Display"

const SpecialButton = (props) => {
  // console.log(props);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {<button className="special-buttons buttons">{props.special}</button>}
    </>
  );
};

export default SpecialButton;