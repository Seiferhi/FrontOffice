import React, { Component } from "react";
import FormulaireReclamation from "./formulaireReclamation";

class Reclamation extends Component {
  render() {
    return (
      <div className="Reclamation">
        {/*bg image */}
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 text-left">
                <h1 className="uppercase">
                  <span>We don’t just find Great Deals</span> We Create them
                </h1>
                <p className="bottom30">
                  We have Properties in these Areas Discover your place to live
                  Get started in few clicks
                </p>
              </div>
              <div className="col-sm-4">
                <FormulaireReclamation />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Reclamation;
