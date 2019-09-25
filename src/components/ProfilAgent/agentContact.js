import React, { Component } from "react";

class AgentContact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Agentcontact">
        <h3>Bohdan Kononets</h3>
        <p className="bottom30">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh tempor cum soluta nobis consectetuer adipiscing eleifend
          option congue nihil imperdiet doming…
        </p>
        <table className="agent_contact table">
          <tbody>
            <tr className="bottom10">
              <td>
                <strong>Phone:</strong>
              </td>
              <td className="text-right">(+01) 34 56 7890</td>
            </tr>
            <tr className="bottom10">
              <td>
                <strong>Mobile:</strong>
              </td>
              <td className="text-right">(+033) 34 56 7890</td>
            </tr>
            <tr>
              <td>
                <strong>Email Adress:</strong>
              </td>
              <td className="text-right">
                <a href="#.">bohdan@castle.com</a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Skype:</strong>
              </td>
              <td className="text-right">
                <a href="#.">bohdan.kononets</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AgentContact;
