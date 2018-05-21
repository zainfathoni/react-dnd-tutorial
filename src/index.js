import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./Board";

ReactDOM.render(
  <Board knightPosition={[7, 4]} />,
  document.getElementById("root")
);
