import React, { Component } from "react";
import ProfilItem from "./profileItem";
import MotDePassItem from "./motDePasseItem";
import ReseauItem from "./reseauItem";
import NavBarItem from "./navBarItem";
class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        {/* Profile Start */}
        <section id="agent-2-peperty" className="profile padding">
          <div className="container">
            <div className="row">
              <NavBarItem />
            </div>
          </div>
          <div className="container-3">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <h2 className="text-uppercase bottom30">mon profil</h2>
                <div className="agent-p-img">
                  <img
                    src="images/profile.jpg"
                    className="img-responsive"
                    alt="image"
                  />
                  <a href="#" className="top10 bottom20">
                    changer votre photo de profil
                  </a>
                  <p className="text-center">
                    Minimum 215px x 215px<span>*</span>
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <div className="profile-form">
                  <ProfilItem />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-6 col-xs-12 profile-form margin40">
                <h3 className="bottom30 margin40">Mon réseau social</h3>
                <ReseauItem />
              </div>
              <div className="col-md-2 hidden-xs" />
              <div className="col-md-5 col-sm-6 col-xs-12 profile-form margin40">
                <h3 className=" bottom30 margin40">
                  Changer Votre Mot DE Passe
                </h3>
                <MotDePassItem />
              </div>
            </div>
          </div>
        </section>
        {/* Profile end */}
      </div>
    );
  }
}

export default Profile;
