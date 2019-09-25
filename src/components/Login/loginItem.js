import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";
class LoginItem extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      motDePasse: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const client = {
      email: this.state.email,
      motDePasse: this.state.motDePasse
    };

    axios
      .post("http://localhost:8080/clients/login", client)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="agent-p-form">
      <form action="#" className="callus clearfix"onSubmit={this.onSubmit}>
        <div className="single-query form-group col-sm-12">
          <input
            type="text"
            className="keyword-input"
            placeholder="Adresse Email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
          />
        </div>
        <div className="single-query form-group  col-sm-12">
          <input
            type="text"
            className="keyword-input"
            placeholder="Email Address"
            name="motDePasse"
                         value={this.state.motDePasse}
                        onChange={this.onChange}
          />
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-6">
              <div className="search-form-group white form-group text-left">
                <div className="check-box-2">
                  <i>
                    <input type="checkbox" name="check-box" />
                  </i>
                </div>
                <span>Remember Me</span>
              </div>
            </div>
            <div className="col-sm-6 text-right">
              <a href="#" className="lost-pass">
                Lost your password?
              </a>
            </div>
          </div>
        </div>
        <div className=" col-sm-12">
          <Button
            onSubmit={this.onSubmit}
            className="btn-slide border_radius">
          <Link to="/profile">
          Soumettre
          </Link>
          </Button>
        </div>
      </form>
    </div>
    );
  }
}
export default LoginItem;
