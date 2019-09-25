import React from "react";
import ReactDOM from "react-dom";
import Reclamation from "./Reclamation";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Reclamation />, div);
});
