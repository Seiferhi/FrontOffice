import React, { Component } from "react";

class ProfilItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <form className="callus">
          <div className="col-sm-4">
            <div className="single-query">
              <label>Votre Nom:</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <input
                type="text"
                placeholder="Bohdan Kononets"
                className="keyword-input"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-query">
              <label>Ton Prénom:</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <input
                type="text"
                placeholder="(+01) 34 56 7890"
                className="keyword-input"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-query">
              <label>Teléphone:</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <input
                type="text"
                placeholder="(+216) 34 567 890"
                className="keyword-input"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-query">
              <label>Adresse Email :</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <input
                type="text"
                placeholder="bohdan@realtyhomes.com"
                className="keyword-input"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-query">
              <label>Skype:</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <input
                type="text"
                placeholder="bohdan.kononets"
                className="keyword-input"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-query">
              <label>Description:</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <textarea
                placeholder="Écris ici quelque chose"
                className="form-control"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12 text-right">
            <a className="btn-blue border_radius" href="#.">
              Sauvegarder
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default ProfilItem;
