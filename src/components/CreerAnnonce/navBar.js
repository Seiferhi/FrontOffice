import React, { Component } from 'react';
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="col-md-12 text-center">
      <ul className="f-p-links margin_bottom">
        <li>
          <a href="profile.html">
            <i className="icon-icons230" />
            Profile
          </a>
        </li>
        <li>
          <a href="my_properties.html">
            <i className="icon-icons215" /> Ma Propriété
          </a>
        </li>
        <li>
          <a href="submit_property.html" className="active">
            <i className="icon-icons215" /> Soumettre la propriété
          </a>
        </li>
        <li>
          <a href="favorite_properties.html">
            <i className="icon-icons43" /> Propriétés favorites{" "}
          </a>
        </li>
        <li>
          <a href="login.html">
            <i className="icon-lock-open3" />
            Déconnexion
          </a>
        </li>
      </ul>
    </div>
     );
  }
}
 
export default NavBar;