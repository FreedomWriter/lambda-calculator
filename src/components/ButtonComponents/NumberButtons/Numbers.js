import React, {useState} from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";
// console.log('hello world');
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
const Numbers = () => {
  // STEP 2 - add the imported data to state
  // const [numsData, setNumsData] = useState(numbers);
  // console.log(useState(numsData));
  return (
    <div className="num-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       
       {
         numbers.map((num, index) => {
           return <NumberButton key={index} number={num} state={useState} />
         })
       }
       
    </div>
  );
};

export default Numbers;