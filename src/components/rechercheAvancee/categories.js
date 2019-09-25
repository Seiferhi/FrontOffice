import React, { Component } from "react";
class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  } 
  render() {
    return (
<div className="intro">
              <select>
                <option className="active">Toutes les Catégories</option>
                <option>Appartement</option>
                <option>Bureau</option>
                <option>Local Commerciale</option>
                <option>Maison </option>
                <option>Résidence</option>
                <option>Terre/Terrain</option>
              </select>
            </div>
    );
  }
}
export default Categories;