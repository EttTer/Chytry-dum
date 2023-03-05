import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import "./smartHomeData";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { smartHomeData } from "./smartHomeData";

const App = () => {
  const Data = smartHomeData;

  return (
    <div className="container">
      <Header key="title" title="Chytrý dům" />
      <Dashboard data={Data} />
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);


