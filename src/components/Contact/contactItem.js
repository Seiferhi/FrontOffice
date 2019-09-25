import React, { Component } from "react";

class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form action="#" className="callus">
        <div className="col-md-12">
          <div className="single-query form-group">
            <input
              type="text"
              placeholder="Nom & Prénom"
              className="keyword-input"
            />
          </div>
          <div className="single-query form-group">
            <input
              type="text"
              placeholder="Téléphone "
              className="keyword-input"
            />
          </div>
          <div className="single-query form-group">
            <input
              type="text"
              placeholder="Adresse Email"
              className="keyword-input"
            />
          </div>
          <div className="single-query form-group">
            <textarea
              placeholder="Message"
              className="form-control"
              defaultValue={""}
            />
          </div>
          <input type="submit" defaultValue="Envoyer" className="btn-blue" />
        </div>
      </form>
    );
  }
}

export default ContactItem;
