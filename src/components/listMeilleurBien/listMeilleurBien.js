import React, { Component } from "react";
import MeilleurBien from "./../meilleursBien/meilleurBien";

var myList2 = [
  {
    titre: "Unique Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    statut: "For Rent",
    prix: "$8,600 Per Month",
    tv: "Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft",
    nomAgent: "Bohdan Kononets",
    telAgent: "321 233 5566",
    emailAgent: "mailto:besthouse59@gmail.com"
  },
  {
    titre: "Unique Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    statut: "For Rent",
    prix: "$8,600 Per Month",
    tv: "Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft",
    nomAgent: "Bohdan Kononets",
    telAgent: "321 233 5566",
    emailAgent: "mailto:besthouse59@gmail.com"
  }
];
class ListMeilleurBien extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-sm-12">
        <div id="full-slider" className="owl-carousel">
          {myList2.map((el, index) => (
            <MeilleurBien key={index} item={el} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListMeilleurBien;
