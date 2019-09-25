import React, { Component } from "react";
import { connect } from "react-redux";

import "./rechercheAvancee.css";

import BienRecherchee from "../BienRecherchee/BienRecherchee";

import { getAnnouncementsList } from "../../Redux/annoncesActions";
import { addFilter } from "../../Redux/filtersActions";

class RechercheAvancee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searched: false,
      ecart: "",
      paginationList: [],
      nbrPages: 0,
      showList: [],
      filtredList: [],
      titre: "",
      region: "",
      categorie: "",
      statut: "",
      nombreChambre: "",
      nombreSalleDeBain: "",
      surface: "",
      prix: ""
    };
  }

  sliderChange(value) {
    this.setState({ prix: value });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.props.addFilter({ [e.target.name]: e.target.value });
  };

  onRechercheClick = () => {
    let filters = Object.keys(this.props.filters);
    let validFilters = {};
    filters.map(el => {
      if (this.props.filters[el] !== "")
        return (validFilters = {
          ...validFilters,
          [el]: this.props.filters[el]
        });
    });

    console.log("calid filters are ... ", validFilters);

    this.props.getAnnouncementsList({ ...validFilters });
  };

  // For pagination
  show = index => {
    let result = this.state.filtredList.slice(index, index + 3);
    this.setState({ showList: result });
  };

  render() {
    return (
      <div>
        <div>
          {/* <ul>
          Juste pour les test :
          {
            this.props.listes.map(el => {
              return <li> titre : {el.titre} , region : {el.region} , categorie : {el.categorie} , prix : {el.prix}</li>
            })
          }
        </ul> */}
          <form
            className="callus col-xs-12"
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <select
                  name="region"
                  value={this.state.region}
                  onChange={this.handleInputChange}
                  style={{ width: "100%" }}
                >
                  <option value="">Toutes Les Régions</option>
                  {villes.map((el, i) => (
                    <option key={i} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>
              {/* <Regions /> */}
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <select
                  style={{ width: "100%" }}
                  name="categorie"
                  value={this.state.categorie}
                  onChange={this.handleInputChange}
                >
                  <option value="">Toutes les Catégories</option>
                  {[
                    "Appartement",
                    "Bureau",
                    "Local Commerciale",
                    "Maison",
                    "Résidence",
                    "Terre/Terrain"
                  ].map((el, i) => (
                    <option key={i}>{el}</option>
                  ))}
                </select>
                {/* <Categories /> */}
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="form-group">
                <select
                  name="statut"
                  value={this.state.statut}
                  onChange={this.handleInputChange}
                  style={{ width: "100%" }}
                >
                  <option value=""> Statut de bien</option>
                  <option>A Vendre</option>
                  <option>A louer</option>
                </select>
              </div>
              {/* <Statut /> */}
            </div>
            <div className="col-md-6">
              <div className="col-md-5 col-sm-6">
                <div className=" form-group">
                  <select
                    name="nombreChambre"
                    disabled={
                      this.state.categorie != "Résidence" &&
                      this.state.categorie != "Maison" &&
                      this.state.categorie != "Appartement"
                    }
                    value={this.state.nombreChambre}
                    onChange={this.handleInputChange}
                    style={{ width: "100%" }}
                  >
                    <option className="active" value="">
                      Nombre de Chambre
                    </option>
                    {numbers.map((el, i) =>
                      el !== 3 ? (
                        <option key={i} value={el}>
                          {el}
                        </option>
                      ) : (
                        <option key={i} value={el}>
                          3 ou +
                        </option>
                      )
                    )}
                  </select>
                </div>
                {/* <nombreChambre /> */}
              </div>
              <div className="col-md-5 col-sm-6">
                <div className=" form-group">
                  <select
                    name="nombreSalon"
                    disabled={
                      this.state.categorie != "Résidence" &&
                      this.state.categorie != "Maison" &&
                      this.state.categorie != "Appartement"
                    }
                    value={this.state.nombreSalon}
                    onChange={this.handleInputChange}
                    style={{ width: "100%" }}
                  >
                    <option className="active" value="">
                      Nombre de Salon
                    </option>
                    {numbers.map((el, i) =>
                      el !== 3 ? (
                        <option key={i} value={el}>
                          {el}
                        </option>
                      ) : (
                        <option key={i} value={el}>
                          3 ou +
                        </option>
                      )
                    )}
                  </select>
                </div>
                {/* <nombreChambre /> */}
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="form-group">
                  <select
                    disabled={
                      this.state.categorie != "Résidence" &&
                      this.state.categorie != "Maison" &&
                      this.state.categorie != "Appartement"
                    }
                    name="nombreSalleDeBain"
                    style={{ width: "100%" }}
                    value={this.state.nombreSalleDeBain}
                    onChange={this.handleInputChange}
                  >
                    <option className="active" value="">
                      Salle de bain
                    </option>
                    {numbers.map((el, i) =>
                      el !== 3 ? (
                        <option key={i} value={el}>
                          {el}
                        </option>
                      ) : (
                        <option key={i} value={el}>
                          3 ou +
                        </option>
                      )
                    )}
                  </select>
                  {/* <nombreSalleDeBain /> */}
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="form-group">
                  <select
                    disabled={
                      this.state.categorie != "Résidence" &&
                      this.state.categorie != "Maison"
                    }
                    name="nombreGarage"
                    style={{ width: "100%" }}
                    value={this.state.nombreGarage}
                    onChange={this.handleInputChange}
                  >
                    <option className="active" value="">
                      Garage
                    </option>
                    {numbers.map((el, i) =>
                      el !== 3 ? (
                        <option key={i} value={el}>
                          {el}
                        </option>
                      ) : (
                        <option key={i} value={el}>
                          3 ou +
                        </option>
                      )
                    )}
                  </select>
                  {/* <nombreSalleDeBain /> */}
                </div>
              </div>
              <div className="col-md-5 col-sm-6">
                <div className="form-group">
                  <select
                    name="surface"
                    value={this.state.surface}
                    onChange={this.handleInputChange}
                    style={{ width: "100%" }}
                  >
                    <option value=""> Surface du bien</option>
                    {[
                      "Inférieur à 100M2",
                      "Entre 100 et 200 M2",
                      "Entre 200 et 300 M2",
                      "Entre 200 et 300 M2",
                      "Entre 300 et 400 M2",
                      "Supéreieur à 400 M2"
                    ].map((el, i) => {
                      return (
                        <option key={i} value={el}>
                          {el}
                        </option>
                      );
                    })}
                  </select>
                </div>
                {/* <Statut /> */}
              </div>
            </div>
            <div className=" col-md-6">
              <div className="col-md-4 form-group">
                <input
                  id="placeholder-color"
                  name="prix"
                  style={{ width: "100%" }}
                  type="text"
                  value={this.state.prix}
                  onChange={this.handleInputChange}
                  className="keyword-input"
                  placeholder="Prix"
                />
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <select
                    disabled={!this.state.prix}
                    name="ecart"
                    style={{ width: "100%" }}
                    value={this.state.ecart}
                    onChange={this.handleInputChange}
                  >
                    <option className="active" value="0">
                      +/-
                    </option>
                    {[50, 100, 200, 500, 1000, 10000, 50000, 100000].map(
                      (el, i) => (
                        <option key={i}>{el}</option>
                      )
                    )}
                  </select>
                  {/* <nombreSalleDeBain /> */}
                </div>
              </div>

              {/* <div className="single-query-slider"> */}
              {/* slider */}
              {/* <Horizontal sliderChange={value => this.sliderChange(value)} /> */}
              {/* </div> */}

              <div className="col-md-4 text-right form-group">
                <button
                  type="button"
                  onClick={this.onRechercheClick}
                  className="btn-blue border_radius top15"
                >
                  Recherche
                </button>
              </div>
            </div>
          </form>
        </div>
        <section id="property" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="uppercase">Resultat de recherhce </h2>
                <p className="heading_space">
                  Nous sommes fiers de vous présenter certaines des meilleures
                  maisons, appartements, bureaux , avec les meilleurs prix.
                  {this.state.filtredList.length > 0 ? (
                    <h2 className="uppercase text-center">
                      {this.state.filtredList.length} item
                      {this.state.filtredList.length > 1 ? "s" : null} found
                    </h2>
                  ) : null}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="row">
                {this.state.showList.length > 0 ? (
                  this.state.showList.map(el => <BienRecherchee item={el} />)
                ) : this.state.searched ? (
                  <div className="alert alert-danger text-center">
                    No item found
                  </div>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center top15">
                <ul className="pager">
                  {this.state.paginationList.map(el => {
                    return (
                      <li>
                        <a onClick={() => this.show(el * 3)}>{el}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filtersReducer
  };
};

export default connect(
  mapStateToProps,
  { getAnnouncementsList, addFilter }
)(RechercheAvancee);

const numbers = [1, 2, 3];
let villes = [
  "Ariana",
  "Beja",
  "Ben Arous",
  "Bizerte",
  "Gabes",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kebili",
  "Kef",
  "Mahdia",
  "Mannouba",
  "Medenine",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Touzeur",
  "Tunis",
  "Zaghouan"
];
