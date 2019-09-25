import React, { Component } from "react";
import RechercheAvancee from "./../rechercheAvancee/rechercheAvancee";
import LocationList from "./locationList";

import PaginationSimple from "./../pagination/pagination";
import MapContainer from "./../google-map/googleMap";

class LocationComponent extends Component {
  render() {
    return (
      <div className="LocationComponent">
        {/*Maps*/}
        <section id="banner-map">
          <div className="container-fluid">
            <h3 className="hidden">hiden</h3>
            <div className="row property-list-area property-list-map-area">
              <div className="property-list-map">
                {/* <div id="property-listing-map" className="multiple-location-map" style={{width: '100%', height: '545px'}} /> */}
                <MapContainer />
              </div>
            </div>
          </div>
        </section>
        {/* Map Ends */}
        {/* Search */}
        <section className="property-query-area padding_bottom" style={{ marginTop: '219px', background: '#edf3f8' }}>
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
        <section id="property" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="uppercase">Photos des Proprietés</h2>
                <p className="heading_space">
                  Nous avons des propriétés dans ces zones Voir une liste des
                  propriétés exceptionnelles.
                </p>
              </div>
            </div>
            <div className="clearfix">
              <div
                id="filters-property"
                className="cbp-l-filters-button text-center"
              >
                <div
                  data-filter=".sale"
                  className="cbp-filter-item-active cbp-filter-item"
                >
                  A LOUER
                </div>
                <div data-filter=".latest" className="cbp-filter-item">
                  A LA UNE
                </div>
              </div>
            </div>
            <div id="property-gallery" className="cbp listing1">
              <LocationList />
            </div>
          </div>
        </section>
        {/* Listing Filer End */}
        <div className="padding_bottom text-center">
          {/* <ul className="pager">
            <li className="active">
              <a href="#">1</a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
          </ul> */}
          <PaginationSimple />
        </div>
      </div >
    );
  }
}

export default LocationComponent;
