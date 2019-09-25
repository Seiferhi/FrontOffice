import React, { Component } from "react";
import "./Conseils.css";
import axios from "axios";
class FormulaireConseil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      tel: "",
      nomAgent:"",
      email: "",
      message:"",
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

    const conseil = {
      nom: this.state.nom,
      tel: this.state.tel,
      nomAgent: this.state.nomAgent,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post("http://localhost:8080/conseils/addconseils", conseil)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }

  render() {
    return (
      <div className="col-sm-6 bottom40">
        <h2 className="text-uppercase bottom20">Contact Agent</h2>
        <form className="callus"onSubmit={this.onSubmit}>
          <label>
            <h4>Nom & prénom :</h4>
          </label>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nom & prénom"
              style={{ width: " 500px;" }}
              value={this.state.nom}
              onChange={this.onChange}
              name="nom"
            />
          </div>
          <label>
            <h4>Téléphone :</h4>
          </label>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Téléphone"
              style={{ width: " 500px;" }}
              value={this.state.tel}
              onChange={this.onChange}
              name="tel"
            />
          </div>
          <label>
            <h4>Email :</h4>
          </label>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              style={{ width: " 500px;" }}
              value={this.state.email}
              onChange={this.onChange}
              name="email"
            />
          </div>
          <label>
            <h4>Non d'agent :</h4>
          </label>
          <div className="form-group">
            <select id="pet-select" style={{ width: " 554px" }}  value={this.state.nomAgent}
              onChange={this.onChange}
              name="nomAgent">
              <option value="">
                s'il vous plaît choisissez un agent pour vous aider
              </option>
              <option value="dog">agent1</option>
              <option value="cat">agent2</option>
              <option value="hamster">agent3</option>
            </select>
          </div>
          <label>
            <h4>Message :</h4>
          </label>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Message"
              defaultValue={""}
              style={{ width: " 500px;" }}
              value={this.state.message}
              onChange={this.onChange}
              name="message"
            />
          </div>

          <button
            type="submit"
            className="btn-blue uppercase border_radius"
            defaultValue="Envoyer"
          >
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default FormulaireConseil;
