import React, { Component } from "react";
import { connect } from "react-redux";

import "./achatComponent.css";
import MapContainer from "./../google-map/googleMap";

import RechercheAvancee from "../rechercheAvancee/rechercheAvancee";
import { getAnnouncementsList } from "../../Redux/annoncesActions";
import ItemList from "../itemList/itemList";

class AchatComponent extends Component {
  componentDidMount() {
    this.props.getAnnouncementsList({ statut: "A Vendre" });
  }

  render() {
    return (
      <div className="achat-component">
        {/*  {/*Maps*/}
        {/*<section id="banner-map">
          <div className="container-fluid">
          <h3 className="hidden">hiden</h3>
          <div className="row property-list-area property-list-map-area">
          <div className="property-list-map">/*}
          {/* <div id="property-listing-map" className="multiple-location-map" style={{width: '100%', height: '545px'}} /> */}
        {/*    <MapContainer />
              </div>
              </div>
              </div>
            </section>*/}
        {/* Map Ends */}
        {/* Search */}
        <div className="list-container">
          <ItemList liste={this.props.announcementsList} />
        </div>
        <section
          className="property-query-area padding_bottom"
          style={{ marginTop: "219px", background: "#edf3f8" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="uppercase">Recherche Avancée</h2>
                <p className="heading_space">
                  {" "}
                  Nous avons des propriétés dans ces zones. Voir une liste des
                  propriétés.
                </p>
              </div>
            </div>
            <div className="row">
              <RechercheAvancee />
            </div>
            <div className="group-button-search">
              <a href="plus.html" className="more-filter">
                <i className="fa fa-plus" />
                Afficher plus d'options de recherche
              </a>
            </div>
            <div className="search-propertie-filters collapse">
              <div className="container-2">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Search End */}
        {/* Listing Filer */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    announcementsList: state.announcementsReducer.announcements
  };
};

export default connect(
  mapStateToProps,
  { getAnnouncementsList }
)(AchatComponent);
