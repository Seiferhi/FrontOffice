import React, { Component } from "react";
class ClientsSatisfaits extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <li className="cd-testimonials-item">
        <p>{item.parag}</p>
        <div className="cd-author">
          <img src="images/author.png" alt="Author image" />
          <ul className="cd-author-info">
            <li>{item.nomClient}</li>
            <li>{item.nomSociete}</li>
          </ul>
        </div>
      </li>
    );
  }
}

export default ClientsSatisfaits;
