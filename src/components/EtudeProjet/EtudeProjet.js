import React, { Component } from "react";

import FormulaireEtude from "./formulaireEtude";

class EtudeProjet extends Component {
  render() {
    return (
      <div className="EtudeProjet">
        {/*Fullscreen*/}
        <section className="fullscreen">
          <div className="container">
            <div className="row">
              <div className="fullscreen_inner centered">
                <div className="col-sm-12" style={{ marginTop: "390px" }}>
                  <div className="text-center">
                    <div className="row">
                      <FormulaireEtude />
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default EtudeProjet;
