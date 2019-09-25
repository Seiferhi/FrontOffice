import React, { Component } from "react";

class AgentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;

    return (
      <div className="col-sm-4 bottom40">
        <div className="agent_wrap">
          <div className="image">
            <img src="images/agent-one.jpg" alt="Agents" />
            <div className="img-info">
              <h3>{item.nom}</h3>
              <span>{item.mission}</span>
              <p className="top20 bottom30">{item.parag}</p>
              <table className="agent_contact table">
                <tbody>
                  <tr className="bottom10">
                    <td>
                      <strong>Phone:</strong>
                    </td>
                    <td className="text-right">{item.tel}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Email Adress:</strong>
                    </td>
                    <td className="text-right">
                      <a href="#.">{item.email}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr />
              <a className="btn-more" href="/profilAgent">
                <i>
                  <img alt="arrow" src="images/arrow-yellow.png" />
                </i>
                <span>Full Profile</span>
                <i>
                  <img alt="arrow" src="images/arrow-yellow.png" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AgentItem;
