import React from "react";
import "./Light.css";
import closedImg from "./light-off.svg";
import openedImg from "./light-on.svg";

import { useState } from "react";

const Light = ({ name, state }) => {
  const [bulb, setBulb] = useState(state);

  const handleClick = () => {
    if (bulb === "on") {
      setBulb("off");
    } else {
      setBulb("on");
    }
  };

  return (
    <div className="light" onClick={handleClick}>
      <div className="light__icon">
        <img src={bulb === "on" ? openedImg : closedImg} />
        <div className="light__name">{name}</div>
      </div>
    </div>
  );
};

export default Light;


