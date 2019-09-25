import React, { Component } from "react";

import "./ItemBien.css";

class Itembien extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="card">
        <div className="property_item heading_space">
          <div className="image">
            <img
              src="images/latest1.jpg"
              alt="latest property"
              className="img-responsive"
            />
          </div>
          <div className="price default_clr clearfix bottom20">
            <span className="tag pull-left">{item.statut}</span>
            <h4 className="pull-right">
              {item.prix} - <small>Categorie: {item.categorie}</small>
            </h4>
          </div>
          <div className="proerty_content">
            <div className="proerty_text">
              <h3 className="bottom15">
                <a href="property_detail1.html">{item.titre}</a>
              </h3>
              <p>{item.parag}</p>
            </div>
            <div className="favroute clearfix">
              <p className="pull-md-left"> {item.region} Tunisie </p>
              <ul className="pull-right">
                <li>
                  <a href="javascript:void(0)">
                    <i className="icon-video-player" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="icon-like" />
                  </a>
                </li>
                <li>
                  <a
                    href="#one"
                    className="share_expender"
                    data-toggle="collapse"
                  >
                    <i className="icon-share3" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="toggle_share collapse" id="one">
              <ul>
                <li>
                  <a href="javascript:void(0)" className="facebook">
                    <i className="icon-facebook-1" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="twitter">
                    <i className="icon-twitter-1" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="vimo">
                    <i className="icon-vimeo3" /> Vimeo
                  </a>
                </li>
              </ul>
            </div>
            <div className="property_meta">
              <span title="Surface">
                <i className="icon-select-an-objecto-tool" />
                {item.surface}
              </span>
              <span title="Nombre de Chambre">
                <i className="icon-bed" />
                {item.nombrePiece !== 3 ? item.nombrePiece : "3 ou +"}
              </span>
              <span title="Nombre de Salle de Bain">
                <i className="icon-safety-shower" />
                {item.nombreSalleDeBain !== 3
                  ? item.nombreSalleDeBain
                  : "3 ou +"}
              </span>
              <span title="Nombre de Salon">
                <i className="icon-old-television" />
                {item.nombreSalon !== 3 ? item.nombreSalon : "3 ou +"}
              </span>
              <span title="Nombre de Garage">
                <i className="icon-garage" />
                {item.nombreGarage !== 3 ? item.nombreGarage : "3 ou +"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Itembien;
