import React, { Component } from "react";

class Regions extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="intro">
        <select>
          <option>Toutes Les Régions</option>
          <option>Ariana </option>
          <option>Beja</option>
          <option>Ben Arous</option>
          <option>Bizerte</option>
          <option>Gabes</option>
          <option>Gafsa</option>
          <option>Jendouba</option>
          <option>Kairouan</option>
          <option>Kasserine</option>
          <option>Kebili</option>
          <option>Kef</option>
          <option>Mahdia</option>
          <option>Mannouba</option>
          <option>Medenine</option>
          <option>Monastir</option>
          <option>Nabeul</option>
          <option>Sfax</option>
          <option>Sidi Bouzid</option>
          <option>Siliana</option>
          <option>Sousse</option>
          <option>Tataouine</option>
          <option>Touzeur</option>
          <option>Tunis</option>
          <option>Zaghouan</option>
        </select>
      </div>
    );
  }
}

export default Regions;
