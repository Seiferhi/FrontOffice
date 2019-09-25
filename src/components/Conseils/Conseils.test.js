import React from "react";
import ReactDOM from "react-dom";
import Conseils from "./Conseils";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Conseils />, div);
});
