import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      adresse: "",
      tel: "",
      email: "",
      motDepasse: "",
      motDepasse2: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const client = {
      nom: this.state.nom,
      adress: this.state.adresse,
      tel: this.state.tel,
      email: this.state.email,
      motDePasse: this.state.motDepasse,
      motDePasse2: this.state.motDepasse2
    };

    axios
      .post("http://localhost:8080/clients/register", client)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <div className="agent-p-form">
        <form className="callus clearfix" onSubmit={this.onSubmit}>
          <div className="single-query col-sm-12 form-group">
            <label>Nom && prenom </label>
            <input
              type="text"
              className="keyword-input"
              placeholder="Nom && prenom"
              value={this.state.nom}
              onChange={this.onChange}
              name="nom"
            />
          </div>
          <div className="single-query col-sm-12 form-group">
            <label>Adresse</label>
            <input
              type="text"
              className="keyword-input"
              placeholder="Adresse"
              value={this.state.adress}
              onChange={this.onChange}
              name="adresse"
            />
          </div>
          <div className="single-query col-sm-12 form-group">
            <label>Tel</label>
            <input
              type="text"
              className="keyword-input"
              placeholder="Tel"
              value={this.state.tel}
              onChange={this.onChange}
              name="tel"
            />
          </div>
          <div className="single-query col-sm-12 form-group">
            <label>Email Address</label>
            <input
              type="text"
              className="keyword-input"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.onChange}
              name="email"
            />
          </div>
          <div className="single-query col-sm-12 form-group">
            <label>Mot De Passe</label>
            <input
              type="password"
              className="keyword-input"
              placeholder="Password"
              value={this.state.motDepasse}
              onChange={this.onChange}
              name="motDepasse"
            />
          </div>
          <div className="single-query col-sm-12 form-group">
            <label> Confirmer Mot De Passe</label>
            <input
              type="password"
              className="keyword-input"
              placeholder="Confirm  Password"
              value={this.state.motDepasse2}
              onChange={this.onChange}
              name="motDepasse2"
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
    );
  }
}

export default Register;
