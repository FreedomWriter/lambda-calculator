import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

const Operators = ({ handleClick, handleEqual }) => {
  const [op, setOp] = useState(operators);

  return (
    <div className="op-container">
      {op.map((operator, index) => {
        return (
          <OperatorButton
            key={index}
            char={operator.char}
            value={operator.value}
            handleClick={handleClick}
            handleEqual={handleEqual}
          />
        );
      })}
    </div>
  );
};

export default Operators;
