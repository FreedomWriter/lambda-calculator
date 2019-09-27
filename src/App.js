import React, { useState } from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Display from "./components/DisplayComponents/Display";

import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [dispNum, setDispNum] = useState("0");

  function handleClick(e) {
    let value = e.target.value;
    setDispNum(dispNum + value);
  }

  function handleNumClick(e) {
    let value = e.target.value;
    if (dispNum === "0") {
      setDispNum(value);
    } else setDispNum(`${dispNum}${value}`);
  }

  function handleEqual(e) {
    setDispNum(eval(dispNum));
  }

  function handleClear() {
    setDispNum("0");
  }

  function percent(e) {
    let { value } = e.target;
    setDispNum(`${eval(dispNum + value)}`);
  }

  function negative(e) {
    let value = e.target.value;
    let neg = `${eval(dispNum + value)}`;
    setDispNum(neg);
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display dispNum={dispNum} />
        <div className="button-container">
          <div className="row-buttons">
            <Specials
              handleClick={handleClick}
              handleClear={handleClear}
              percent={percent}
              negative={negative}
            />
            <Numbers handleClick={handleNumClick} />
          </div>
          <div className="column-buttons">
            <Operators handleClick={handleClick} handleEqual={handleEqual} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
