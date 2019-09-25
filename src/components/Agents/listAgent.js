import React, { Component } from "react";
import AgentItem from "./agentItem";

var myList = [
  {
    nom: "Bohdan Kononets",
    parag:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh tempor cum soluta nobis consectetuer.",
    tel: "(+01) 34 56 7890",
    email: "bohdan@castle.com",

    mission: "sales executive"
  },
  {
    nom: "Bohdan Kononets",
    parag:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh tempor cum soluta nobis consectetuer.",
    tel: "(+01) 34 56 7890",
    email: "bohdan@castle.com",

    mission: "sales executive"
  },
  {
    nom: "Bohdan Kononets",
    parag:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh tempor cum soluta nobis consectetuer.",
    tel: "(+01) 34 56 7890",
    email: "bohdan@castle.com",

    mission: "sales executive"
  },
  {
    nom: "Bohdan Kononets",
    parag:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh tempor cum soluta nobis consectetuer.",
    tel: "(+01) 34 56 7890",
    email: "bohdan@castle.com",

    mission: "sales executive"
  },
  {
    nom: "Bohdan Kononets",
    parag:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh tempor cum soluta nobis consectetuer.",
    tel: "(+01) 34 56 7890",
    email: "bohdan@castle.com",

    mission: "sales executive"
  },
  {
    nom: "Bohdan Kononets",
    parag:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, seddiam nonummy nibh tempor cum soluta nobis consectetuer.",
    tel: "(+01) 34 56 7890",
    email: "bohdan@castle.com",
    voirProfile: "Full Profile",
    mission: "sales executive"
  }
];
class ListAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <AgentItem key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default ListAgent;
