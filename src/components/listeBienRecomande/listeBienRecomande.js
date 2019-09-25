import React, { Component } from "react";
import BienRecommande from "./../bienRecomande/bienRecomande";

var myList = [
  {
    titre: "Unique Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",

    prix: "$8,600 Per Month",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    surface: "4800 sq ft"
  },
  {
    titre: "Unique Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",

    prix: "$8,600 Per Month",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    surface: "4800 sq ft"
  },
  {
    titre: "Unique Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",

    prix: "$8,600 Per Month",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    surface: "4800 sq ft"
  },
  {
    titre: "Unique Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",

    prix: "$8,600 Per Month",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    surface: "4800 sq ft"
  },
  {
    titre: "Unique Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",

    prix: "$8,600 Per Month",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    surface: "4800 sq ft"
  },
  {
    titre: "Unique Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",

    prix: "$8,600 Per Month",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    surface: "4800 sq ft"
  }
];
class ListeBienRecomande extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="three-item owl-carousel">
        {myList.map((el, index) => (
          <BienRecommande key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default ListeBienRecomande;
