import React, { Component } from "react";
import "./Login.css";
import Register from "./registerItem";
import LoginItem from "./loginItem";

class Login extends Component {
  render() {
    return (
      <div className="Login">
        {/* Login */}
        <section id="login" className="padding">
          <div className="container">
            <h3 className="hidden">hidden</h3>
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="profile-login">
                  {/* Nav tabs */}
                  <ul className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active">
                      <a
                        href="#home"
                        aria-controls="home"
                        role="tab"
                        data-toggle="tab"
                      >
                        Login
                      </a>
                    </li>
                    <li role="presentation">
                      <a
                        href="#profile"
                        aria-controls="profile"
                        role="tab"
                        data-toggle="tab"
                      >
                        Register
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content padding_half">
                    <div
                      role="tabpanel"
                      className="tab-pane fade in active"
                      id="home"
                    >
                      <LoginItem />
                    </div>
                    <div role="tabpanel" className="tab-pane fade" id="profile">
                      <Register />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Login end */}
      </div>
    );
  }
}

export default Login;
