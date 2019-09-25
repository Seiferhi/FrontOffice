import React, { Component } from "react";

class FormulaireContact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-sm-4 bottom40">
        <form className="callus">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Message"
              defaultValue={""}
            />
          </div>
          <input
            type="submit"
            className="btn-blue uppercase border_radius"
            defaultValue="submit now"
          />
        </form>
      </div>
    );
  }
}

export default FormulaireContact;
