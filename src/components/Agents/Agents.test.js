import React from "react";
import ReactDOM from "react-dom";
import Agents from "./Agents";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Agents />, div);
});
