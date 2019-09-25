import React, { Component } from "react";
import BienRecommande from "./../bienRecomande/bienRecomande";
import ClientsSatisfaits from "./../clientsSatisfaits/clientsSatisfaits";

var myList = [
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  },
  {
    nomClient: "SAM NICHOLSON",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    nomSociete: "COE CompanyName"
  }
];
class ListeClientsSatisfaits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <ClientsSatisfaits key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default ListeClientsSatisfaits;
