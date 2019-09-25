import React, { Component } from "react";
class MesProprietesItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { item } = this.props;

    return (
      <dir className="MesProprietesItem">
        <div className="row bg-hover">
          <div className="my-pro-list">
            <div className="col-md-2 col-sm-2 col-xs-12">
              <img src="images/my-p-list.png" alt="image" />
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="feature-p-text">
                <h4>{item.titre}</h4>
                <p>{item.parag}</p>
                <span>
                  <b>Status:</b> {item.statut}
                </span>
                <br />
                <div className="button-my-pro-list">
                  <a href="#.">{item.prix}</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12">
              <div className="select-pro-list">
                <a href="#">
                  <i className="icon-pen2" />
                </a>
                <a href="#">
                  <i className="icon-cross" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row bg-hover bg-color-gray">
          <div className="my-pro-list">
            <div className="col-md-2 col-sm-2 col-xs-12">
              <img src="images/my-p-list.png" alt="image" />
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="feature-p-text">
                <h4>{item.titre}</h4>
                <p>{item.parag}</p>
                <span>
                  <b>Status:</b> {item.statut}
                </span>
                <br />
                <div className="button-my-pro-list">
                  <a href="#.">{item.prix}</a>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-12">
              <div className="select-pro-list">
                <a href="#">
                  <i className="icon-pen2" />
                </a>
                <a href="#">
                  <i className="icon-cross" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </dir>
    );
  }
}

export default MesProprietesItem;
