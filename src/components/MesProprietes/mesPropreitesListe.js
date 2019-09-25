import React, { Component } from "react";
import MesProprietesItem from "./mesProprieteItem";

var myList = [
  {
    titre: "Historic Town House",
    parag: "Action Area I, Newtown, New Town, West Bengal, India",
    statut: "For Sale",
    prix: "$128,600"
  },
  {
    titre: "Historic Town House",
    parag: "Action Area I, Newtown, New Town, West Bengal, India",
    statut: "For Sale",
    prix: "$128,600"
  },
  {
    titre: "Historic Town House",
    parag: "Action Area I, Newtown, New Town, West Bengal, India",
    statut: "For Sale",
    prix: "$128,600"
  },
  {
    titre: "Historic Town House",
    parag: "Action Area I, Newtown, New Town, West Bengal, India",
    statut: "For Sale",
    prix: "$128,600"
  },
  {
    titre: "Historic Town House",
    parag: "Action Area I, Newtown, New Town, West Bengal, India",
    statut: "For Sale",
    prix: "$128,600"
  },
  {
    titre: "Historic Town House",
    parag: "Action Area I, Newtown, New Town, West Bengal, India",
    statut: "For Sale",
    prix: "$128,600"
  }
];
class MesProprietesListe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <MesProprietesItem key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default MesProprietesListe;
