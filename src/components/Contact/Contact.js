import React, { Component } from "react";
import "./Contact.css";
import ContactItem from "./contactItem";

class Contact extends Component {
  render() {
    return (
      <div>
        {/*Contact*/}
        <section id="contact-us">
          <div className="contact">
            <div id="map" />
            <div className="container">
              <div className="row">
                <div className="col-md-4 hidden-xs" />
                <div className="col-md-4 hidden-xs" />
                <div className="col-md-4 col-sm-4 col-xs-12  contact-text">
                  <div className="agent-p-contact">
                    <div className="our-agent-box bottom30">
                      <h2>Contactez_nous</h2>
                    </div>
                    <div className="agetn-contact-2 bottom30">
                      <p>
                        <i className="icon-telephone114" /> (+01) 34 56 7890
                      </p>
                      <p>
                        <i className=" icon-icons142" /> info@MeilleurImmo.com
                      </p>
                      <p>
                        <i className="icon-browser2" />
                        www.MeilleurImmo.com
                      </p>
                      <p>
                        <i className="icon-icons74" /> Advisor Melbourne,
                        Merrick Way, FL 12345 Australia
                      </p>
                    </div>
                    <ul className="social_share bottom20">
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
                  <div className="agent-p-form">
                    <div className="our-agent-box bottom30">
                      <h2>Send us a message</h2>
                    </div>
                    <div className="row">
                      <ContactItem />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact End */}
      </div>
    );
  }
}

export default Contact;
