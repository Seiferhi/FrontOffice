import React, { Component } from "react";
import AgentContact from "./agentContact";
import FormulaireContact from "./fomulaireContact";
import ListProprieteAgent from "./listProprieteAgent";

class ProfilAgent extends Component {
  render() {
    return (
      <div className="ProfilAgent">
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
                  <li className="active">Agent Profile</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* Agent Profile */}
        <section id="agents" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 bottom40">
                <div className="agent_wrap">
                  <AgentContact />
                  <div
                    style={{ borderBottom: "1px solid #d3d8dd" }}
                    className="bottom15"
                  />
                  <ul className="social_share">
                    <li>
                      <a href="javascript:void(0)" className="facebook">
                        <i className="icon-facebook-1" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="twitter">
                        <i className="icon-twitter-1" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="google">
                        <i className="icon-google4" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="linkden">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="vimo">
                        <i className="icon-vimeo3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-sm-4 bottom40">
                <form className="callus">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
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
              </div> */}
              <FormulaireContact />
              <div className="col-sm-4 bottom40">
                <div className="agent_wrap">
                  <div className="image">
                    <img src="images/agent-one.jpg" alt="Agents" />
                  </div>
                </div>
              </div>
              <div className="col-md-12 bottom30 top20">
                <h2 className="text-uppercase">Bohdan Properites</h2>
                <p>
                  We have Properties in these Areas View a list of Featured
                  Properties.
                </p>
              </div>
              {/* <div className="col-sm-6">
                <div className="listing_full">
                  <div className="image">
                    <img alt="image" src="images/b-d-property.jpg" />
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span>
                  </div>
                  <div className="listing_full_bg">
                    <div className="listing_inner_full">
                      <span>
                        <a href="#">
                          <i className="icon-like" />
                        </a>
                      </span>
                      <a href="#.">
                        <h3>Park Avenue Apartment</h3>
                        <p>Towson London, MR 21501</p>
                      </a>
                      <div className="favroute clearfix">
                        <div className="property_meta">
                          <span>
                            <i className="icon-select-an-objecto-tool" />
                            4800 sq ft
                          </span>
                          <span>
                            <i className=" icon-microphone" />3 Bedrooms
                          </span>
                          <span>
                            <i className="icon-safety-shower" />2 Bedrooms
                          </span>
                          <span className="border-l">$38,600 / pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="listing_full">
                  <div className="image">
                    <img alt="image" src="images/b-d-property2.jpg" />
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span>
                  </div>
                  <div className="listing_full_bg">
                    <div className="listing_inner_full">
                      <span>
                        <a href="#">
                          <i className="icon-like" />
                        </a>
                      </span>
                      <a href="#.">
                        <h3>Park Avenue Apartment</h3>
                        <p>Towson London, MR 21501</p>
                      </a>
                      <div className="favroute clearfix">
                        <div className="property_meta">
                          <span>
                            <i className="icon-select-an-objecto-tool" />
                            4800 sq ft
                          </span>
                          <span>
                            <i className=" icon-microphone" />3 Bedrooms
                          </span>
                          <span>
                            <i className="icon-safety-shower" />2 Bedrooms
                          </span>
                          <span className="border-l">$38,600 / pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="listing_full">
                  <div className="image">
                    <img alt="image" src="images/b-d-property3.jpg" />
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span>
                  </div>
                  <div className="listing_full_bg">
                    <div className="listing_inner_full">
                      <span>
                        <a href="#">
                          <i className="icon-like" />
                        </a>
                      </span>
                      <a href="#.">
                        <h3>Park Avenue Apartment</h3>
                        <p>Towson London, MR 21501</p>
                      </a>
                      <div className="favroute clearfix">
                        <div className="property_meta">
                          <span>
                            <i className="icon-select-an-objecto-tool" />
                            4800 sq ft
                          </span>
                          <span>
                            <i className=" icon-microphone" />3 Bedrooms
                          </span>
                          <span>
                            <i className="icon-safety-shower" />2 Bedrooms
                          </span>
                          <span className="border-l">$38,600 / pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="listing_full">
                  <div className="image">
                    <img alt="image" src="images/b-d-property4.jpg" />
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span>
                  </div>
                  <div className="listing_full_bg">
                    <div className="listing_inner_full">
                      <span>
                        <a href="#">
                          <i className="icon-like" />
                        </a>
                      </span>
                      <a href="#.">
                        <h3>Park Avenue Apartment</h3>
                        <p>Towson London, MR 21501</p>
                      </a>
                      <div className="favroute clearfix">
                        <div className="property_meta">
                          <span>
                            <i className="icon-select-an-objecto-tool" />
                            4800 sq ft
                          </span>
                          <span>
                            <i className=" icon-microphone" />3 Bedrooms
                          </span>
                          <span>
                            <i className="icon-safety-shower" />2 Bedrooms
                          </span>
                          <span className="border-l">$38,600 / pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <ListProprieteAgent />
              <div className="col-sm-12 text-center">
                <ul className="pager">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Agent Profile End */}
      </div>
    );
  }
}
export default ProfilAgent;
