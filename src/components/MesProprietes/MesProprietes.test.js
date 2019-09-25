import React from "react";
import ReactDOM from "react-dom";
import MesProprietes from "./MesProprietes";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MesProprietes />, div);
});
