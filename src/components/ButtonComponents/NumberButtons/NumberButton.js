import React from "react";


const NumberButton = (props) => {
  // console.log(props);

  if (props) 
 { return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      
      {
        <button className="number-buttons buttons">{props.number}</button>
      }
      
    </>
  );
};
}
export default NumberButton;