import React, { Component } from "react";
import LocationItem from "./locationItem";

var myList = [
  {id:1,
     titre: "Park avenue apartment",
    parag: "45 Regent Street, London, UK",
    statut: "A LOUER",
    prix: "$8,600 Per Month",
    tv: "1 Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft",
    date: "5 Days ago"
  },
  { id:2,
     titre: "Park avenue apartment",
    parag: "45 Regent Street, London, UK",
    statut: "A LOUER",
    prix: "$8,600 Per Month",
    tv: "1 Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft",
    date: "5 Days ago"
  },
  { id:3,
     titre: "Park avenue apartment",
    parag: "45 Regent Street, London, UK",
    statut: "A LOUER",
    prix: "$8,600 Per Month",
    tv: "1 Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft",
    date: "5 Days ago"
  },
  { id:4,
     titre: "Park avenue apartment",
    parag: "45 Regent Street, London, UK",
    statut: "A LOUER",
    prix: "$8,600 Per Month",
    tv: "1 Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft",
    date: "5 Days ago"
  },
  { id:5,
     titre: "Park avenue apartment",
    parag: "45 Regent Street, London, UK",
    statut: "A LOUER",
    prix: "$8,600 Per Month",
    tv: "1 Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft",
    date: "5 Days ago"
  },
  {id:6,
    titre: "Park avenue apartment",
    parag: "45 Regent Street, London, UK",
    statut: "A LOUER",
    prix: "$8,600 Per Month",
    tv: "1 Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft",
    date: "5 Days ago"
  }
];
class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <LocationItem key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default LocationList;
