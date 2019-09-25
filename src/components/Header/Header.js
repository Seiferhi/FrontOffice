import React, { Component } from "react";
import Logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="layout_default">
          <div className="topbar grey">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <p>Nous sommes les meilleurs.</p>
                </div>
                <div className="col-md-7 text-right">
                  <ul className="breadcrumb_top text-right">
                    <li>
                      <a href="/favoris">
                        <i className="icon-icons43" />
                        Favoris
                      </a>
                    </li>
                    <li>
                      <a href="/vente">
                        <i className="icon-icons215" />
                        Créer une annonce
                      </a>
                    </li>
                    <li>
                      <a href="/mesProprietes">
                        <i className="icon-icons215" />
                        Mes Proprietés
                      </a>
                    </li>
                    <li>
                      <a href="/profile">
                        <i className="icon-icons230" />
                        Profil
                      </a>
                    </li>
                    <li>
                      <a href="/login">
                        <i className="icon-icons179" />
                        Connexion / Inscription
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header-upper">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12">
                  <div className="logo">
                    <a href="/">
                      <img src="images/logo.png" />
                    </a>
                  </div>
                </div>
                {/*Info Box*/}
                <div className="col-md-9 col-sm-12 right">
                  <div className="info-box first">
                    <div className="icons">
                      <i className="icon-telephone114" />
                    </div>
                    <ul>
                      <li>
                        <strong>Teléphone</strong>
                      </li>
                      <li>+1 900 234 567 - 68</li>
                    </ul>
                  </div>
                  <div className="info-box">
                    <div className="icons">
                      <i className="icon-icons74" />
                    </div>
                    <ul>
                      <li>
                        <strong>Tunisia</strong>
                      </li>
                      <li>MeilleurImmo</li>
                    </ul>
                  </div>
                  <div className="info-box">
                    <div className="icons">
                      <i className="icon-icons142" />
                    </div>
                    <ul>
                      <li>
                        <strong>Addresse Email</strong>
                      </li>
                      <li>
                        <a href="javascript:void(0)">info@MeilleurImmo.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-default navbar-sticky bootsnav">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="attr-nav">
                    <ul className="social_share clearfix">
                      <li>
                        <a href="javascript:void(0)" className="facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a className="google" href="javascript:void(0)">
                          <i className="icon-google4" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Start Header Navigation */}
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle"
                      data-toggle="collapse"
                      data-target="#navbar-menu"
                    >
                      <i className="fa fa-bars" />
                    </button>
                    <a className="navbar-brand sticky_logo" href="index2.html">
                      <img src="images/logo-white.png" className="logo" />
                    </a>
                  </div>
                  {/* End Header Navigation */}
                  <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul
                      className="nav navbar-nav"
                      data-in="fadeIn"
                      data-out="fadeOut"
                    >
                      <li className="dropdown">
                        <a
                          href="#."
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Immobilier{" "}
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/achat">Achat</a>
                          </li>
                          <li>
                            <a href="/location">Location</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a
                          href="#."
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Services{" "}
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="/etudeProjet">Etude de projet </a>
                          </li>

                          <li>
                            <a href="/conseils">Conseils</a>
                          </li>
                          <li>
                            <a href="/autre">Autres</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/reclamation">Réclamation</a>
                      </li>
                      <li>
                        <a href="/agents">Nos Agents</a>
                      </li>
                      <li>
                        <a href="/contact">Contactez Nous</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
