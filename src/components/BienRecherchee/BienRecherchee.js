import React, { Component } from "react";
class BienRecherchee extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="item feature_item col-md-4">
                <div className="image">
                    {" "}
                    <img src="images/featured1.jpg" alt="Featured Property" />
                    <span className="price default_clr">$ {this.props.item.prix}</span>
                </div>
                <div className="proerty_content">
                    <div className="proerty_text">
                        <h3 className="bottom15">
                            <a href="property_detail1.html">{this.props.item.titre}</a>
                        </h3>
                        <h5>{this.props.item.statut}</h5>
                        <p>{this.props.item.description}</p>
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
                            {this.props.item.surface} m2
                        </span>{" "}
                        <span>
                            <i className="icon-bed" />
                            {this.props.item.nombrePiece} Chambres
                        </span>{" "}
                        <span>
                            <i className="icon-safety-shower" />
                            {this.props.item.nombreSalleDeBain}  Bedroom
                        </span>{" "}
                    </div>
                </div>
            </div>


        );
    }
}
export default BienRecherchee;
