import React, { Component } from "react";
import FavorisItem from "./favorisItem";

var myList = [
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
  {
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
class FavorisList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {myList.map((el, index) => (
          <FavorisItem key={index} item={el} />
        ))}
      </div>
    );
  }
}

export default FavorisList;
