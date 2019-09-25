import React, { Component } from "react";
import ListAgent from "./listAgent";

class Agents extends Component {
  render() {
    return (
      <div className="Agents">
        {/* Page Banner Start*/}
        <section className="page-banner padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-uppercase">Agent Style 1</h1>
                <p>
                  Serving you since 1999. Lorem ipsum dolor sit amet consectetur
                  adipiscing elit.
                </p>
                <ol className="breadcrumb text-center ">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                  <li>
                    <a href="#">Agent</a>
                  </li>
                  <li className="active">Agent Style - 2</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* Agent Start */}
        <section id="agent-2" className="padding_top padding_bottom_half">
          <div className="container">
            <div className="row">
              {/* <div className="col-sm-4 bottom40">
                <div className="agent_wrap">
                  <div className="image">
                    <img src="images/agent-one.jpg" alt="Agents" />
                    <div className="img-info">
                      <h3>Bohdan Kononets</h3>
                      <span>sales executive</span>
                      <p className="top20 bottom30">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh tempor cum soluta nobis
                        consectetuer.
                      </p>
                      <table className="agent_contact table">
                        <tbody>
                          <tr className="bottom10">
                            <td>
                              <strong>Phone:</strong>
                            </td>
                            <td className="text-right">(+01) 34 56 7890</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Email Adress:</strong>
                            </td>
                            <td className="text-right">
                              <a href="#.">bohdan@castle.com</a>
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
              </div> */}
              {/* <div className="col-sm-4 bottom40">
                <div className="agent_wrap">
                  <div className="image">
                    <img src="images/agent-two.jpg" alt="Agents" />
                    <div className="img-info">
                      <h3>Bohdan Kononets</h3>
                      <span>sales executive</span>
                      <p className="top20 bottom30">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh tempor cum soluta nobis
                        consectetuer.
                      </p>
                      <table className="agent_contact table">
                        <tbody>
                          <tr className="bottom10">
                            <td>
                              <strong>Phone:</strong>
                            </td>
                            <td className="text-right">(+01) 34 56 7890</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Email Adress:</strong>
                            </td>
                            <td className="text-right">
                              <a href="#.">bohdan@castle.com</a>
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
              <div className="col-sm-4 bottom40">
                <div className="agent_wrap">
                  <div className="image">
                    <img src="images/agent-three.jpg" alt="Agents" />
                    <div className="img-info">
                      <h3>Bohdan Kononets</h3>
                      <span>sales executive</span>
                      <p className="top20 bottom30">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh tempor cum soluta nobis
                        consectetuer.
                      </p>
                      <table className="agent_contact table">
                        <tbody>
                          <tr className="bottom10">
                            <td>
                              <strong>Phone:</strong>
                            </td>
                            <td className="text-right">(+01) 34 56 7890</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Email Adress:</strong>
                            </td>
                            <td className="text-right">
                              <a href="#.">bohdan@castle.com</a>
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
              <div className="col-sm-4 bottom40">
                <div className="agent_wrap">
                  <div className="image">
                    <img src="images/agent-four.jpg" alt="Agents" />
                    <div className="img-info">
                      <h3>Bohdan Kononets</h3>
                      <span>sales executive</span>
                      <p className="top20 bottom30">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh tempor cum soluta nobis
                        consectetuer.
                      </p>
                      <table className="agent_contact table">
                        <tbody>
                          <tr className="bottom10">
                            <td>
                              <strong>Phone:</strong>
                            </td>
                            <td className="text-right">(+01) 34 56 7890</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Email Adress:</strong>
                            </td>
                            <td className="text-right">
                              <a href="#.">bohdan@castle.com</a>
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
              <div className="col-sm-4 bottom40">
                <div className="agent_wrap">
                  <div className="image">
                    <img src="images/agent-five.jpg" alt="Agents" />
                    <div className="img-info">
                      <h3>Bohdan Kononets</h3>
                      <span>sales executive</span>
                      <p className="top20 bottom30">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh tempor cum soluta nobis
                        consectetuer.
                      </p>
                      <table className="agent_contact table">
                        <tbody>
                          <tr className="bottom10">
                            <td>
                              <strong>Phone:</strong>
                            </td>
                            <td className="text-right">(+01) 34 56 7890</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Email Adress:</strong>
                            </td>
                            <td className="text-right">
                              <a href="#.">bohdan@castle.com</a>
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
              <div className="col-sm-4 bottom40">
                <div className="agent_wrap">
                  <div className="image">
                    <img src="images/agent-six.jpg" alt="Agents" />
                    <div className="img-info">
                      <h3>Bohdan Kononets</h3>
                      <span>sales executive</span>
                      <p className="top20 bottom30">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh tempor cum soluta nobis
                        consectetuer.
                      </p>
                      <table className="agent_contact table">
                        <tbody>
                          <tr className="bottom10">
                            <td>
                              <strong>Phone:</strong>
                            </td>
                            <td className="text-right">(+01) 34 56 7890</td>
                          </tr>
                          <tr>
                            <td>
                              <strong>Email Adress:</strong>
                            </td>
                            <td className="text-right">
                              <a href="#.">bohdan@castle.com</a>
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
              </div> */}
              <ListAgent />
            </div>
          </div>
        </section>
        {/* Agent End */}
      </div>
    );
  }
}
export default Agents;
