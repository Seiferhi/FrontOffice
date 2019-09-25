import React, { Component } from "react";
import axios from "axios";
import "./EtudeProjet.css";
class FormulaireEtude extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      email: "",
      tel: "",
      description: "",
      titre: "",
      budget: "",
      localisation: "",
      description2: "",
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

    const etudeProjet = {
      nom: this.state.nom,
      email: this.state.email,
      tel: this.state.tel,
      description: this.state.description,
      titre: this.state.titre,
      budget: this.state.budget,
      localisation: this.state.localisation,
      description2: this.state.description2
    };

    axios
      .post("http://localhost:8080/etudeProjets/add", etudeProjet)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-6 bottom40">
          <h3>Informations Perssonnelles</h3>
          <form className="callus" style={{ paddingTop: "25px" }} onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nom & prénom "
                style={{
                  backgroundColor: "#ffffff0a",
                  fontSize: "18px",
                  color: "white"
                }}
                value={this.state.nom}
                onChange={this.onChange}
                name="nom"
              />
            </div>
            <div className="form-group">
              <input
                type="adress"
                className="form-control"
                placeholder="Adrresse Email"
                style={{
                  backgroundColor: "#ffffff0a",
                  fontSize: "18px",
                  color: "white"
                }}
                value={this.state.email}
                onChange={this.onChange}
                name="email"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Téléphone "
                style={{
                  backgroundColor: " #ffffff0a",
                  fontSize: "18px",
                  color: "white"
                }}
                value={this.state.tel}
                onChange={this.onChange}
                name="tel"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Proféssion & Description"
                style={{
                  backgroundColor: " #ffffff0a",
                  fontSize: "18px",
                  color: "white"
                }}
                
                value={this.state.description}
                onChange={this.onChange}
                name="description"
              />
            </div>
          </form>
        </div>
        <div className="col-sm-6 bottom40">
          <h3>Votre Projet</h3>

          <form className="callus" style={{ paddingTop: "25px" }}onSubmit={this.onSubmit}>
          <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Titre"
                style={{
                  backgroundColor: " #ffffff0a",
                  fontSize: "18px",
                  color: "white"
                }}
                value={this.state.titre}
                onChange={this.onChange}
                name="titre"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Budget"
                style={{
                  backgroundColor: " #ffffff0a",
                  fontSize: "18px",
                  color: "white"
                }}
                value={this.state.budget}
                onChange={this.onChange}
                name="budget"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Localisation"
                style={{
                  backgroundColor: " #ffffff0a",
                  fontSize: "18px",
                  color: "white"
                }}
                value={this.state.localisation}
                onChange={this.onChange}
                name="localisation"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Description du projet"
                style={{
                  backgroundColor: " #ffffff0a",
                  fontSize: "18px",
                  color: "white"
                }}
                value={this.state.description2}
                onChange={this.onChange}
                name="description2"
              />
            </div>
            <button
            type="submit"
            className="btn-blue uppercase border_radius"
            defaultValue="Envoyer"
            style={{ width: "158px",
              marginTop: "23px",
            marginLeft:"-627px"}}
          >
            Soumettre
          </button> 
          </form>
        </div>
      </div>
    );
  }
}

export default FormulaireEtude;
