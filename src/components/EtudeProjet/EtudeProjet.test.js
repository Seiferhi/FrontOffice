import React from "react";
import ReactDOM from "react-dom";
import EtudeProjet from "./EtudeProjet";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EtudeProjet />, div);
});
