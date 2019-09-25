import React, { Component } from "react";
class FavorisItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="col-sm-4">
        <div className="property_item heading_space">
          <div className="image">
            <a href="#.">
              <img
                src="images/listing1.jpg"
                alt="latest property"
                className="img-responsive"
              />
            </a>
            <div className="price clearfix">
              <span className="tag pull-right">{item.prix}</span>
            </div>
            <span className="tag_l">Featured</span>
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
              <p className="pull-md-left">
                <i className="icon-calendar2" />
                &nbsp;{item.date}
              </p>
              <ul className="pull-right">
                <li>
                  <a href="#.">
                    <i className="icon-like" />
                  </a>
                </li>
                <li>
                  <a
                    href="#one"
                    className="share_expender"
                    data-toggle="collapse"
                  >
                    <i className="icon-share3" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="toggle_share collapse" id="one">
              <ul>
                <li>
                  <a href="#." className="facebook">
                    <i className="icon-facebook-1" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="#." className="twitter">
                    <i className="icon-twitter-1" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#." className="vimo">
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

export default FavorisItem;
