import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div role="tabpanel" className="tab-pane fade" id="profile">
        <div className="agent-p-form">
          <form className="callus clearfix">
            <div className="single-query col-sm-12 form-group">
              <label>Nom && prenom </label>
              <input
                type="text"
                className="keyword-input"
                placeholder="Nom && prenom"
                required
              />
            </div>
            <div className="single-query col-sm-12 form-group">
              <label>Adresse</label>
              <input
                type="text"
                className="keyword-input"
                placeholder="Adresse"
                required
              />
            </div>
            <div className="single-query col-sm-12 form-group">
              <label>Tel</label>
              <input
                type="text"
                className="keyword-input"
                placeholder="Tel"
                required
              />
            </div>
            <div className="single-query col-sm-12 form-group">
              <label>Email Address</label>
              <input
                type="text"
                className="keyword-input"
                placeholder="Email Address"
              />
            </div>
            <div className="single-query col-sm-12 form-group">
              <label>Mot De Passe</label>
              <input
                type="password"
                className="keyword-input"
                placeholder="Password"
              />
            </div>
            <div className="single-query col-sm-12 form-group">
              <label> Confirmer Mot De Passe</label>
              <input
                type="password"
                className="keyword-input"
                placeholder="Confirm  Password"
                readOnly
              />
            </div>
            <div className="search-form-group white col-sm-12 form-group text-left">
              <div className="check-box-2">
                <i>
                  <input type="checkbox" name="check-box" />
                </i>
              </div>
              <span>Receive Newsletter</span>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12 text-center">
              <div className="query-submit-button">
                <input
                  type="submit"
                  defaultValue="Creat an Account"
                  className="btn-slide"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
