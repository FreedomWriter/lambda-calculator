// import React from "react";
import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

const Specials = ({ negative, handleClear, handleClick, percent }) => {
  const [spec, setSpec] = useState(specials);
  return (
    <div className="spec-container">
      {spec.map((special, index) => {
        return (
          <SpecialButton
            key={index}
            special={special}
            value={special.value}
            negative={negative}
            handleClick={handleClick}
            handleClear={handleClear}
            percent={percent}
          />
        );
      })}
    </div>
  );
};

export default Specials;
