

import React, { Component } from "react";
import {connect} from 'react-redux'
class Statut extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  } 
  render() {
    return (
<div className="intro">
              <select>
                <option > Statut de bien</option>
                <option value=''> Acheter</option>
                <option value=''>Louer </option>
              </select>
            </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      value: state.statusSearchReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onChange: (newTitleFilter) => {
          dispatch({
              type: 'SET_LIEU_FILTER',
             newTitleFilter
          })
      }
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(Statut);
