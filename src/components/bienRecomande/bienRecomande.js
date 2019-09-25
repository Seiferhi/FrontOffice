import React, { Component } from "react";
class BienRecommande extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;
    return (
     
        
          <div className="item feature_item">
            <div className="image">
              {" "}
              <img src="images/featured1.jpg" alt="Featured Property" />
              <span className="price default_clr">{item.prix}</span>
            </div>
            <div className="proerty_content">
              <div className="proerty_text">
                <h3 className="bottom15">
                  <a href="property_detail1.html">{item.titre}</a>
                </h3>
                <p>{item.parag}</p>
                <a href="property_detail1.html" className="btn-more">
                  <i>
                    <img src="images/arrowl.png" alt="arrow" />
                  </i>
                  <span>More Details</span>
                  <i>
                    <img src="images/arrowr.png" alt="arrow" />
                  </i>
                </a>
              </div>
              <div className="property_meta">
                {" "}
                <span>
                  <i className="icon-select-an-objecto-tool" />
                  {item.surface}
                </span>{" "}
                <span>
                  <i className="icon-bed" />
                  {item.chambre}
                </span>{" "}
                <span>
                  <i className="icon-safety-shower" />
                  {item.salleDeBain}
                </span>{" "}
              </div>
            </div>
          </div>
       
     
    );
  }
}
export default BienRecommande;
