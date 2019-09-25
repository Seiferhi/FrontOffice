import React, { Component } from "react";
class MeilleurBien extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <div className="media deal_media proerty_content">
          <div className="media-left">
            <a href="property_detail1.html">
              <img
                className="media-object"
                src="images/best-deal1.jpg"
                alt="..."
              />
            </a>
          </div>
          <div className="media-body">
            <div className="price default_clr">
              <h4>
                {item.prix} - <small>Family Home</small>
              </h4>
            </div>
            <div className="proerty_text">
              <h3 className="bottom15">
                {" "}
                <a href="property_detail1.html">{item.titre}</a>
              </h3>
              <p>{item.prag}</p>
            </div>
            <div className="dealer clearfix">
              <i className="author">
                <img src="images/author.png" alt="author" />
              </i>
              <h4>
                {item.nonAgent} &nbsp; <small>- agent</small>
              </h4>
              <span>
                <i className="icon-phone4" />
                {item.telAgent}
              </span>
              <a href="mailto:besthouse59@gmail.com">
                <i className="icon-mail-envelope-closed3" />
                {item.emailAgent}
              </a>
            </div>
            <div className="favroute clearfix">
              <p className="pull-md-left">Tunisie</p>
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
            <div className="property_meta">
              <span>
                <i className="icon-select-an-objecto-tool" />
                {item.surface}
              </span>
              <span>
                <i className="icon-bed" /> {item.chambre}
              </span>
              <span>
                <i className="icon-safety-shower" /> {item.salleDeBain}
              </span>
              <span>
                <i className="icon-old-television" /> {item.tv}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MeilleurBien;
