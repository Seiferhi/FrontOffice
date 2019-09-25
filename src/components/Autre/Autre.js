import React, { Component } from "react";
import "./Autre.css";
import AutreSevices from "./autreServices";

class Autre extends Component {
  render() {
    return (
      <div className="Autre">
        {/*Fullscreen*/}
        <section className="fullscreen">
          <div className="container">
            <div className="row">
              <div className="fullscreen_inner centered">
                <div className="col-sm-12" style={{ marginTop: "390px" }}>
                  <div className="text-center">
                    <div className="row">
                      <AutreSevices />
                  <div className="col-sm-6 bottom40">
                        <h3>A propos ce service</h3>

                        <div className="paragraph">
                          {" "}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Cras et dui vestibulum, bibendum purus sit amet,
                          vulputate mauris. Ut adipiscing gravida tincidunt.
                          Duis euismod placerat rhoncus. Phasellus mollis
                          imperdiet placerat. Sed ac turpis nisl. Mauris at ante
                          mauris. Aliquam posuere fermentum lorem, a aliquam
                          mauris rutrum a. Curabitur sit amet pretium lectus,
                          nec consequat orci. Class aptent taciti sociosqu ad
                          litora torquent per conubia nostra, per inceptos
                          himenaeos. Duis et metus in libero sollicitudin
                          venenatis eu sed enim. Nam felis lorem, suscipit ac
                          nisl ac, iaculis dapibus tellus. Cras ante justo,
                          aliquet quis placerat nec, molestie id turpis. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam power nonummy nibh tempor cum soluta nobis
                          eleifend option congue nihil imperdiet doming Lorem
                          ipsum dolor sit amet. consectetuer elit sed diam power
                          nonummy Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cras et dui vestibulum, bibendum
                          aliquet quis placerat nec, molestie id turpis. Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit,
                          sed diam power nonummy nibh tempor cum soluta nobis
                          eleifend option congue nihil imperdiet doming Lorem
                          ipsum dolor sit amet. consectetuer elit sed diam power
                          nonummy Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cras et dui vestibulum,
                          bibendumaliquet quis placerat nec, molestie id turpis.
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam power nonummy nibh tempor cum soluta
                          nobis eleifend option congue nihil imperdiet doming
                          Lorem ipsum dolor sit amet. consectetuer elit sed diam
                          power nonummy Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Cras et dui vestibulum, bibendum
                        </div>
                      </div>
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
export default Autre;
