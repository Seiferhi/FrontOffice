import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./itemList.css";
import Itembien from "./../itemBien/ItemBien";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let { liste } = this.props;
    console.log("liste : ", liste);
    return (
      <Link to="/detailImmobiler">
        <div>
          {liste.map((el, index) => (
            <Itembien key={index} item={el} />
          ))}
        </div>
      </Link>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     myListe: state.reducerhome
//   };
// };

export default ItemList;
