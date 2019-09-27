import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = ({ handleClick }) => {
  const [numsData, setNumsData] = useState(numbers);

  return (
    <div className="num-container">
      {numsData.map((num, index) => {
        if (num === ".") {
          return (
            <NumberButton
              key={index}
              number={num}
              handleNumClick={handleClick}
              state={useState}
            />
          );
        } else
          return (
            <NumberButton
              key={index}
              number={parseInt(num)}
              handleNumClick={handleClick}
              state={useState}
            />
          );
      })}
    </div>
  );
};

export default Numbers;
