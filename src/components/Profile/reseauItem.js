import React, { Component } from "react";
class ReseauItem extends Component {
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
              <label>Facebook:</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <input
                type="text"
                placeholder="http://facebook.com"
                className="keyword-input"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-query">
              <label>Twitter:</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <input
                type="text"
                placeholder="http://twitter.com"
                className="keyword-input"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-query">
              <label>Google Plus:</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <input
                type="text"
                placeholder="http://google-plus.com"
                className="keyword-input"
              />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="single-query">
              <label>Linkedin:</label>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="single-query form-group">
              <input
                type="text"
                placeholder="http://linkedin.com"
                className="keyword-input"
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

export default ReseauItem;
