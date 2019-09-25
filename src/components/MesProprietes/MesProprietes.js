import React, { Component } from "react";
import NavBarItem from "./../Profile/navBarItem";
import MesProprietesListe from "./mesPropreitesListe";
class MesProprietes extends Component {
  render() {
    return (
      <div className="MesProprietes">
        {/* Page Banner Start*/}
        <section className="page-banner padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-uppercase">Favorite properties</h1>
                <p>
                  Serving you since 1999. Lorem ipsum dolor sit amet consectetur
                  adipiscing elit.
                </p>
                <ol className="breadcrumb text-center">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                  <li className="active">My properties</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* My - Property Start */}
        <section id="agent-2-peperty" className="my-pro padding">
          <div className="container">
            <div className="row">
              <NavBarItem />
            </div>
            <div className="row bottom30">
              <div className="col-md-12 text-center">
                <h2 className="text-uppercase">Mes Propriété</h2>
              </div>
            </div>
          </div>
          <div className="container  list-t-border">
            <MesProprietesListe />
          </div>
          <div className="container">
            <div className="row padding_top">
              <div className="col-md-12">
                <ul className="pager">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* My - Property end */}
      </div>
    );
  }
}

export default MesProprietes;
