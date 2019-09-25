import React, { Component } from 'react';


class DetailsLocation extends Component {
  render() {
    return (
      <div className="DetailsLocation">
      {/* Page Banner Start*/}
      <section className="page-banner padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-uppercase">DÉTAILS DE LA PROPRIÉTÉ - 2</h1>
              <p>Serving you since 1999. Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <ol className="breadcrumb text-center">
                <li><a href="#">Acceuil</a></li>
                <li><a href="#">Propriétés</a></li>
                <li className="active">DÉTAILS DE LA PROPRIÉTÉ - 2</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* Page Banner End */}
      {/* Property Detail */}
      <section id="property" className="padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 listing1 property-details">
              <h2 className="text-uppercase">987 Cantebury Drive</h2>
              <p className="bottom30">45 Regent Street, London, UK</p>
              <div id="property-d-1" className="owl-carousel single">
                <div className="item"><img src="images/property-details/property-d-1-1.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-1-1.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-1-1.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-1-1.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-1-1.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-1-1.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-1-1.jpg" alt="image" /></div>
              </div>
              <div id="property-d-1-2" className="owl-carousel single">
                <div className="item"><img src="images/property-details/property-d-s-1-1.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-s-1-2.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-s-1-3.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-s-1-4.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-s-1-5.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-s-1-1.jpg" alt="image" /></div>
                <div className="item"><img src="images/property-details/property-d-s-1-2.jpg" alt="image" /></div>
              </div>
              <div className="property_meta bg-black bottom40">
                <span><i className="icon-select-an-objecto-tool" />Surface</span>
                <span><i className=" icon-microphone" />2 Chambre</span>
                <span><i className="icon-safety-shower" />1 salle de bain</span>
                <span><i className="icon-old-television" />télé</span>
                <span><i className="icon-garage" />1 Garage</span>
              </div>
              <h2 className="text-uppercase"> Déscription de la propriété</h2>
              <p className="bottom30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et dui vestibulum, bibendum purus sit amet, vulputate mauris. Ut adipiscing gravida tincidunt. Duis euismod placerat rhoncus. Phasellus mollis imperdiet placerat. Sed ac turpis nisl. Mauris at ante mauris. Aliquam posuere fermentum lorem, a aliquam mauris rutrum a. Curabitur sit amet pretium lectus, nec consequat orci.</p>
              <p className="bottom30">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis et metus in libero sollicitudin venenatis eu sed enim. Nam felis lorem, suscipit ac nisl ac, iaculis dapibus tellus. Cras ante justo, aliquet quis placerat nec, molestie id turpis. </p>
              <div className="text-it-p bottom40">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum soluta nobis eleifend option congue nihil imperdiet doming Lorem ipsum dolor sit amet. consectetuer elit sed diam power nonummy</p>
              </div>
              <h2 className="text-uppercase bottom20">SOMMAIRE RAPIDE</h2>
              <div className="row property-d-table bottom40">
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <table className="table table-striped table-responsive">
                    <tbody>
                      <tr>
                        <td><b>ID propriété </b></td>
                        <td className="text-right">5456</td>
                      </tr>
                      <tr>
                        <td><b>prix</b></td>
                        <td className="text-right">$8,600 / month</td>
                      </tr>
                      <tr>
                        <td><b>Surface</b></td>
                        <td className="text-right">5,500 ft2</td>
                      </tr>
                      <tr>
                        <td><b>Chambre</b></td>
                        <td className="text-right">5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12">
                  <table className="table table-striped table-responsive">
                    <tbody>
                      <tr>
                        <td><b>Salles de bain</b></td>
                        <td className="text-right">1</td>
                      </tr>
                      <tr>
                        <td><b>Garages </b></td>
                        <td className="text-right">22-04-2017</td>
                      </tr>
                      <tr>
                        <td><b>Etage</b></td>
                        <td className="text-right">1</td>
                      </tr><tr>
                        <td><b>valable a partir de</b></td>
                        <td className="text-right">Carpet - Ceramic Tile</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <h2 className="text-uppercase bottom20">Options</h2>
              <div className="row bottom40">
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="pro-list">
                    <li>
                    Piscine
                    </li>
                    <li>
                    Jardin
                    </li>
                    <li>
                    Interphone
                    </li>
                    <li>
                    Parabole / TV
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="pro-list">
                    <li>
                    Accès internet
                    </li>
                    <li>
                    Vue de mer
                    </li>
                    <li>
                    Terrasses
                    </li>
                    <li>
                    cameras de surveillance
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="pro-list">
                    <li>
                    chauffage 
                    </li>
                    <li>
                    climatisation
                    </li>
                    <li>
                    Balcon
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="text-uppercase bottom20">Vidéo de Présentation</h2>
              <div className="row bottom40">
                <div className="col-md-12 padding-b-20">
                  <div className="pro-video">
                    <figure className="wpf-demo-gallery">
                      <video className="video" controls>
                        <source src="video/video.mp4" type="video/mp4" />
                        <source src="video/video.html" type="video/ogg" />
                      </video>
                    </figure>
                  </div>
                </div>
              </div>
              <h2 className="text-uppercase bottom20">localisation</h2>
              <div className="row bottom40">
                <div className="col-md-12 bottom20">
                  <div className="property-list-map">
                    <div id="property-listing-map" className="multiple-location-map" style={{width: '100%', height: '430px'}} />
                  </div>
                </div>
                <div class="social-networks">
            <div class="social-icons-2">
              <span class="share-it">Share this Property</span>
              <span><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></span>
              <span><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></span>
              <span><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i> Google +</a></span>
            </div>
          </div>
              </div>
              <h2 className="text-uppercase bottom20">Contact Agent</h2>
              <div className="row">
                <div className="col-sm-4 bottom40">
                  <div className="agent_wrap">
                    <div className="image">
                      <img src="images/agent-one.jpg" alt="Agents" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 bottom40">
                  <div className="agent_wrap">
                    <h3>Bohdan Kononets</h3>
                    <p className="bottom30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer adipiscing eleifend option congue nihil imperdiet doming…</p>
                    <table className="agent_contact table">
                      <tbody>
                        <tr className="bottom10">
                          <td><strong>Téléphone:</strong></td>
                          <td className="text-right">(+01) 34 56 7890</td>
                        </tr>
                        <tr>
                          <td><strong>Email Adress:</strong></td>
                          <td className="text-right"><a href="#.">bohdan@castle.com</a></td>
                        </tr>
                        <tr>
                          <td><strong>Skype:</strong></td>
                          <td className="text-right"><a href="#.">bohdan.kononets</a></td>
                        </tr>
                      </tbody>
                    </table>
                    <div style={{borderBottom: '1px solid #d3d8dd'}} className="bottom15" />
                    <ul className="social_share">
                      <li><a href="#." className="facebook"><i className="icon-facebook-1" /></a></li>
                      <li><a href="#." className="twitter"><i className="icon-twitter-1" /></a></li>
                      <li><a href="#." className="google"><i className="icon-google4" /></a></li>
                      <li><a href="#." className="linkden"><i className="fa fa-linkedin" /></a></li>
                      <li><a href="#." className="vimo"><i className="icon-vimeo3" /></a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-4 bottom40">
                  <form className="callus">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Nom" />
                    </div>
                    <div className="form-group">
                      <input type="tel" className="form-control" placeholder="Téléphone" />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" placeholder="Message" defaultValue={""} />
                    </div>
                    <input type="submit" className="btn-blue uppercase border_radius" defaultValue="Envoyer" />
                  </form>
                </div>
                <div className="col-sm-12 text-center">
                  <ul className="pager">
                    <li><a href="#">1</a></li>
                    <li className="active"><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  Property Detail End */}
    </div>
    )}
    }
    
    export default DetailsLocation;