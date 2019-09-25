import React, { Component } from "react";
import PropreiteAgent from "./proprieteAgent";

var myList = [
  {
    statut: "For Sale",
    titre: "Park Avenue Apartment",
    Localisation: "Towson London, MR 21501",
    surface: " 4800 sq ft",
    chambre: "3 Bedrooms",
    salleDeBain: "2 Bedrooms",
    prix: "$38,600 / pm"
  },
  {
    statut: "For Sale",
    titre: "Park Avenue Apartment",
    Localisation: "Towson London, MR 21501",
    surface: " 4800 sq ft",
    chambre: "3 Bedrooms",
    salleDeBain: "2 Bedrooms",
    prix: "$38,600 / pm"
  },
  {
    statut: "For Sale",
    titre: "Park Avenue Apartment",
    Localisation: "Towson London, MR 21501",
    surface: " 4800 sq ft",
    chambre: "3 Bedrooms",
    salleDeBain: "2 Bedrooms",
    prix: "$38,600 / pm"
  },
  {
    statut: "For Sale",
    titre: "Park Avenue Apartment",
    Localisation: "Towson London, MR 21501",
    surface: " 4800 sq ft",
    chambre: "3 Bedrooms",
    salleDeBain: "2 Bedrooms",
    prix: "$38,600 / pm"
  }
];
class ListProprieteAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <PropreiteAgent key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default ListProprieteAgent;
