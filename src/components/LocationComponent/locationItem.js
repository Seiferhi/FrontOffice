import React, { Component } from "react";
import {Link} from"react-router-dom"
class LocationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="cbp-item sale">
        <div className="property_item">
          <div className="image">
            <Link to ={`/detailsLocation/${item.id}`}>
              <img
                src="images/listing1.jpg"
                alt="latest property"
                className="img-responsive"
              />
            </Link>
            <div className="price clearfix">
              <span className="tag pull-right">{item.prix}</span>
            </div>
            <span className="tag_t">{item.statut}</span>
          </div>
          <div className="proerty_content">
            <div className="proerty_text">
              <h3 className="captlize">
                <a href="#.">{item.titre}</a>
              </h3>
              <p>{item.parag}</p>
            </div>
            <div className="property_meta transparent">
              <span>
                <i className="icon-select-an-objecto-tool" />
                {item.surface}
              </span>
              <span>
                <i className="icon-bed" />
                {item.chambre}
              </span>
              <span>
                <i className="icon-safety-shower" />
                {item.salleDeBain}
              </span>
            </div>
            <div className="property_meta transparent bottom30">
              <span>
                <i className="icon-old-television" />
                {item.tv}
              </span>
              <span>
                <i className="icon-garage" />
                {item.garage}
              </span>
              <span />
            </div>
            <div className="favroute clearfix">
              <p>
                <i className="icon-calendar2" />
                &nbsp;{item.date}{" "}
              </p>
              <ul className="pull-right">
                <li>
                  <a href="javascript:void(0)">
                    <i className="icon-like" />
                  </a>
                </li>
                <li>
                  <a
                    href="#seven"
                    className="share_expender"
                    data-toggle="collapse"
                  >
                    <i className="icon-share3" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="toggle_share collapse" id="seven">
              <ul>
                <li>
                  <a href="javascript:void(0)" className="facebook">
                    <i className="icon-facebook-1" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="twitter">
                    <i className="icon-twitter-1" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" className="vimo">
                    <i className="icon-vimeo3" /> Vimeo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationItem;
