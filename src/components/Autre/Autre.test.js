import React from "react";
import ReactDOM from "react-dom";
import Autre from "./Autre";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Autre />, div);
});
