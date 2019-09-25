import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AchatComponent from "./components/AchatComponent/AchatComponent";
import LocationComponent from "./components/LocationComponent/LocationComponent";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import CreeAnnonce from "./components/CreerAnnonce/CreerAnnonce";
import Favoris from "./components/Favoris/Favoris";
import MesProprietes from "./components/MesProprietes/MesProprietes";
import DetailsAchat from "./components/DetailsAchat/DetailsAchat";
import DetailsLocation from "./components/DetailsLocation/DetailsLocation";
import EtudeProjet from "./components/EtudeProjet/EtudeProjet";
import Conseils from "./components/Conseils/Conseils";
import Autre from "./components/Autre/Autre";
import DetailImmobiler from './components/DetailImmobilier/DetailImmobilier'
import Reclamation from "./components/Reclamation/Reclamation";
import Agents from "./components/Agents/Agents";
import ProfilAgent from "./components/ProfilAgent/ProfilAgent";
import ReactBot from "./components/reactBot/reactBot";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/detailImmobiler" component={DetailImmobiler} />
          <Route path="/achat" component={AchatComponent} />
          <Route path="/location" component={LocationComponent} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/vente" component={CreeAnnonce} />
          <Route path="/favoris" component={Favoris} />
          <Route path="/mesProprietes" component={MesProprietes} />
          <Route path="/detailsAchat" component={DetailsAchat} />
          <Route path="/detailsLocation/:id" component={DetailsLocation} />
          <Route path="/etudeProjet" component={EtudeProjet} />
          <Route path="/conseils" component={Conseils} />
          <Route path="/autre" component={Autre} />
          <Route path="/reclamation" component={Reclamation} />
          <Route path="/agents" component={Agents} />
          <Route path="/profilAgent" component={ProfilAgent} />
          <Route path="/reactBot" component={ReactBot} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
