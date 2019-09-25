import React from "react";
import ReactDOM from "react-dom";
import Favoris from "./Favoris";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Favoris />, div);
});
