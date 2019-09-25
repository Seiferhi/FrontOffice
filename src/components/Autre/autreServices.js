import React, { Component } from "react";
import "./Autre.css";
import axios from "axios";
class AutreServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      email: "",
      nomAgent: "",
      titre: "",
      description: "",
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

    const autre = {
      nom: this.state.nom,
      email: this.state.email,
      nomAgent: this.state.nomAgent,
      titre: this.state.titre,
      description: this.state.description,
    };

    axios
      .post("http://localhost:8080/autres/add", autre)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }
  render() {
    
    return (
      <div className="col-sm-6 bottom40">
        <h3>Informations Perssonnelles</h3>
        <form className="callus" onSubmit={this.onSubmit}>
        <div className="form-group -animated">
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
             type="text"
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
            <select id="pet-select" style={{ backgroundColor: "#ffffff0a",
              fontSize: "18px",
              color: "white",
              width: "588px"}}  
              value={this.state.nomAgent}
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
          <textarea
            className="form-control"
            placeholder="Description"
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
        <button
            type="submit"
            className="btn-blue uppercase border_radius"
            defaultValue="Envoyer"
          >
            Soumettre
          </button>  </form>
                       
      </div>
    );
  }
}

export default AutreServices;
