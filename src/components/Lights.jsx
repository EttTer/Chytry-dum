import React from "react";
import "./Lights.css";
import "./Dashboard";
import Dashboard from "./Dashboard";
import Light from "../components/Light/Light";

const Lights = ({ lights }) => {


  return (
    <div className="lights">
      {lights.map((item) => (
        <Light key={item.name} name={item.name} state={item.state} />
      ))}
    </div>
  );
};

export default Lights;


