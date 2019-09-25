

import React, { Component } from "react";
class MinLit extends Component {
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
                    <option className="active">Min Lits</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
    );
  }
}
export default MinLit;
