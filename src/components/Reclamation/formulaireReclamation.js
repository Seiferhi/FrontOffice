import React, { Component } from "react";
import axios from "axios";
class FormulaireReclamation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      nom:"",
      email: "",
      description_rec:"",
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

    const reclamation = {
      titre: this.state.titre,
      nom: this.state.nom,
      email: this.state.email,
      description_rec: this.state.description_rec
    };

    axios
      .post("http://localhost:8080/reclamations/addReclamation", reclamation)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }
  render() {
    return (
      <div className="row">
        <form className="callus clearfix border_radius"  onSubmit={this.onSubmit}>
          <div className="single-query form-group">
            <label>Titre de réclamation :</label>
            <input
              type="text"
              className="single-query keyword-input"
              placeholder="Titre de réclamation"
              value={this.state.titre}
              onChange={this.onChange}
              name="titre"
            />
          </div>
          <div className="single-query form-group">
            <label>Votre Nom :</label>
            <input
              type="text"
              className="single-query keyword-input"
              placeholder="Votre nom"
              value={this.state.nom}
              onChange={this.onChange}
              name="nom"
            />
          </div>
          <div className="form-group">
          <label>Adresse Email :</label>
          <input
              type="text"
              className="single-query keyword-input"
              placeholder="Titre de réclamation"
              value={this.state.email}
              onChange={this.onChange}
              name="email"
            />
             </div>
          <div className="single-query form-group top10">
            <label>Message</label>
            <textarea
              type="text"
              className="keyword-input"
              placeholder="Message"
              style={{ width: "350px" }}
              value={this.state.description_rec}
              onChange={this.onChange}
              name="description_rec"
            />
          </div>
          <button type="Envoyer" className="btn-blue border_radius top15">
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default FormulaireReclamation;
