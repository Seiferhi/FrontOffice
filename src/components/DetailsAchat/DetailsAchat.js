import React, { Component } from 'react';


class DetailsAchat extends Component {
  render() {
    return (
      <div className="DetailsAchat"> 
        {/*Slider*/}
        <section className="banner_six">
          <h3 className="hidden">hidden</h3>
          <div id="property-d-1" className="owl-carousel">
            <div className="item"><img src="images/home6-banner1.jpg" alt="image" /></div>
            <div className="item"><img src="images/home6-banner2.jpg" alt="image" /></div>
            <div className="item"><img src="images/home6-banner3.jpg" alt="image" /></div>
            <div className="item"><img src="images/home6-banner4.jpg" alt="image" /></div>
            <div className="item"><img src="images/home6-banner5.jpg" alt="image" /></div>
          </div>
          <div className="container">
            <div id="property-d-1-2" className="owl-carousel space">
              <div className="item"><img src="images/home6-thumb1.jpg" alt="image" /></div>
              <div className="item"><img src="images/home6-thumb2.jpg" alt="image" /></div>
              <div className="item"><img src="images/home6-thumb3.jpg" alt="image" /></div>
              <div className="item"><img src="images/home6-thumb4.jpg" alt="image" /></div>
              <div className="item"><img src="images/home6-thumb5.jpg" alt="image" /></div>
            </div>
          </div>
        </section>
        {/*Slider ends*/}
        <div className="container">
          <div className="slider-property">
            <h4 className="bg_blue default_clr">$8,600 Per Month - Apartment</h4>
            <div className="bg_white text-left">
              <h2>Family House in Hudson</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br />power nonummy nibh...</p>
              <a href="javascript:void(0)" className="btn-more">
                <i><img src="images/arrowl.png" alt="arrow" /></i>
                <span>More Details</span>
                <i><img src="images/arrowr.png" alt="arrow" /></i>
              </a>
            </div>
            <div className="property_meta">
              <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span>
              <span><i className="icon-bed" />3 Bedrooms</span>
              <span><i className="icon-old-television" />TV Lounge</span>
              <span><i className="icon-garage" />1 Garage</span>
            </div>
          </div>
        </div>
        {/*About Us */}
        <section id="about" className="padding_bottom">
          <div className="container text-center">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="uppercase"> A PROPOS </h2>
                <span className="bottom15">Voici Quelques Détails</span>
                <p className="heading_space">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum soluta nobis eleifend option congue nihil imperdiet doming Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="row number-counters text-center">
              {/* first count item */}
              <div className="col-md-2 col-sm-4 col-xs-6 counters-item heading_space">
                <i className="icon-icons215" />
                <p>Année de construction</p>
                {/* Set Your Number here. i,e. data-to="56" */}
                <strong data-to={1991}>0</strong>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 counters-item heading_space">
                <i className="icon-bed" />
                <p>Nombre des chambres </p>
                <strong data-to={6}>0</strong>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 counters-item heading_space">
                <i className="icon-safety-shower" />
                <p>salle de bains</p>
                <strong data-to={7}>0</strong>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 counters-item heading_space">
                <i className="icon-old-television" />
                <p>télé </p>
                <strong data-to={2}>0</strong>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 counters-item heading_space">
                <i className="icon-garage" />
                <p> Garage</p>
                <strong data-to={1}>0</strong>
              </div>
              <div className="col-md-2 col-sm-4 col-xs-6 counters-item heading_space">
                <i className="icon-select-an-objecto-tool" />
                <p>Surface</p>
                <strong data-to={5456}>0</strong>
              </div>
            </div>
          </div>
        </section>
        {/*About & Counters*/}
        {/*Parallax*/}
        <section id="parallax_two" className="padding text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="uppercase">Facilités </h2>
                <p>We have Properties in these Areas View a list of Featured Properties.</p>
              </div>
              <div className="col-sm-4">
                <div className="parallax_box margin40">
                  <span className="bottom15">1</span>
                  <h3 className="bottom10">Vue fabuleuse</h3>
                  <p>Lorem ipsum dolor sit amet, begurcya syiute ipsum quia dolor sit amet. consectetur adipisci velit consectetur adipisci velit.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="parallax_box margin40">
                  <span className="bottom15">2</span>
                  <h3 className="bottom10">Quartier calme</h3>
                  <p>Lorem ipsum dolor sit amet, begurcya syiute ipsum quia dolor sit amet. consectetur adipisci velit consectetur adipisci velit.</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="parallax_box margin40">
                  <span className="bottom15">3</span>
                  <h3 className="bottom10">Système de sécurité</h3>
                  <p>Lorem ipsum dolor sit amet, begurcya syiute ipsum quia dolor sit amet. consectetur adipisci velit consectetur adipisci velit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Parallax ends*/}
        {/* Latest Property */}
        <section id="property" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="uppercase"> Photos de la Proprieté</h2>
              </div>
            </div>
            <div className="clearfix">
              <div id="filters-gallery" className="cbp-l-filters-button text-center">
                <div data-filter="*" className="cbp-filter-item-active cbp-filter-item border_radius">Tous</div>
                <div data-filter=".bedroom" className="cbp-filter-item border_radius">Chambres </div>
                <div data-filter=".baths" className="cbp-filter-item border_radius">Salles de bain</div>
                <div data-filter=".kitchen" className="cbp-filter-item border_radius">Cuisine</div>
                <div data-filter=".garage" className="cbp-filter-item border_radius">Garage</div>
                <div data-filter=".pool" className="cbp-filter-item border_radius">piscine</div>
              </div>
            </div>
            <div id="photo-gallery" className="cbp">
              <div className="cbp-item bedroom">
                <a href="images/photo1.jpg" className="cbp-lightbox"><img src="images/photo1.jpg" alt /></a>
              </div>
              <div className="cbp-item baths">
                <a href="images/photo2.jpg" className="cbp-lightbox"><img src="images/photo2.jpg" alt /></a>
              </div>
              <div className="cbp-item garage">
                <a href="images/photo3.jpg" className="cbp-lightbox"><img src="images/photo3.jpg" alt /></a>
              </div>
              <div className="cbp-item pool">
                <a href="images/photo4.jpg" className="cbp-lightbox"><img src="images/photo4.jpg" alt /></a>
              </div>
              <div className="cbp-item garage">
                <a href="images/photo5.jpg" className="cbp-lightbox"><img src="images/photo5.jpg" alt /></a>
              </div>
              <div className="cbp-item bedroom">
                <a href="images/photo6.jpg" className="cbp-lightbox"><img src="images/photo6.jpg" alt /></a>
              </div>
              <div className="cbp-item baths">
                <a href="images/photo7.jpg" className="cbp-lightbox"><img src="images/photo7.jpg" alt /></a>
              </div>
              <div className="cbp-item bedroom">
                <a href="images/photo8.jpg" className="cbp-lightbox"><img src="images/photo8.jpg" alt /></a>
              </div>
              <div className="cbp-item kitchen bedroom">
                <a href="images/photo9.jpg" className="cbp-lightbox"><img src="images/photo9.jpg" alt /></a>
              </div>
            </div>
            <div className="col-sm-12 text-center">
              <div id="loadMore-gallery" className="btn-black margin40 border_radius">
                <a href="ajax-lightbox-gallery/loadMore.html" className="cbp-l-loadMore-link" rel="nofollow">
                  <span className="cbp-l-loadMore-defaultText">CHARGER PLUS</span>
                  <span className="cbp-l-loadMore-loadingText">CHARGEMENT...</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*Gallery ends*/}
        {/*Parallax*/}
        <section id="parallax_three" className="padding text-center">
          <div className="container padding_half">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="uppercase">VOULEZ PLUS D'INFORMATIONS?</h2><br />
                <a href="contact .html" className="btn-white uppercase border_radius">Contactez Nous</a>
              </div>
            </div>
          </div>
        </section>
        {/*Parallax ends*/}
        {/*About Owner*/}
        <section id="owner" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="uppercase">A PROPOS DU PROPRIÉTAIRE</h2>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="image margin40"><img src="images/owner1.jpg" alt="owner" /></div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="detail margin40">
                  <h3 className="bottom10">Bohdan Kononets</h3>
                  <p className="bottom30">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer adipiscing eleifend option congue nihil imperdiet doming…</p>
                  <table className="table table-responsive">
                    <tbody>
                      <tr>
                        <td><strong>Téléphone:</strong></td>
                        <td className="text-right">(+01) 34 56 7890</td>
                      </tr>
                      <tr>
                        <td><strong> Adresse Email:</strong></td>
                        <td className="text-right"><a href="#.">bohdan@castle.com</a></td>
                      </tr>
                      <tr>
                        <td><strong>Skype:</strong></td>
                        <td className="text-right">bohdan.kononets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="detail margin40">
                  <form className="callus">
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Nom" />
                    </div>
                    <div className="form-group">
                      <input type="tel" className="form-control" placeholder="Prénom" />
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
              </div>
            </div>
          </div>
        </section>
        {/*About Owner ends*/}
        {/*News*/}
        <section id="news" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="uppercase">A LA UNE</h2>
                <p className="heading_space">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec viverra erat.</p>
              </div>
            </div>
            <div className="row layout_six">
              <div className="three-item owl-carousel">
                <div className="item news_item">
                  <div className="image bottom15">
                    <a href="#."><img src="images/news4.jpg" alt="Featured Property" className="border_radius" /></a>
                  </div>
                  <div className="bottom">
                    <h3 className="bottom10"><a href="#.">Historic Town House</a></h3>
                    <div className="info_comment bottom15">
                      <span>By: <a href="#.">Admin</a></span><span>Date: <a href="#.">Feb 22, 2017</a></span>
                    </div>
                    <p className="bottom15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor
                      cum soluta nobis eleifend...
                    </p>
                    <a href="#." className="btn-more">
                      <i><img src="images/arrowl.png" alt="arrow" /></i>
                      <span>More Details</span>
                      <i><img src="images/arrowr.png" alt="arrow" /></i>
                    </a>
                  </div>
                </div>
                <div className="item news_item">
                  <div className="image bottom15">
                    <a href="#."><img src="images/news5.jpg" alt="Featured Property" className="border_radius" /> </a>
                  </div>
                  <div className="bottom">
                    <h3 className="bottom10"><a href="#.">Historic Town House</a></h3>
                    <div className="info_comment bottom15">
                      <span>By: <a href="#.">Admin</a></span><span>Date: <a href="#.">Feb 22, 2017</a></span>
                    </div>
                    <p className="bottom15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor
                      cum soluta nobis eleifend...
                    </p>
                    <a href="#." className="btn-more">
                      <i><img src="images/arrowl.png" alt="arrow" /></i>
                      <span>More Details</span>
                      <i><img src="images/arrowr.png" alt="arrow" /></i>
                    </a>
                  </div>
                </div>
                <div className="item news_item">
                  <div className="image bottom15">
                    <a href="#."><img src="images/news6.jpg" alt="Featured Property" className="border_radius" /></a>
                  </div>
                  <div className="bottom">
                    <h3 className="bottom10"><a href="#.">Historic Town House</a></h3>
                    <div className="info_comment bottom15">
                      <span>By: <a href="#.">Admin</a></span><span>Date: <a href="#.">Feb 22, 2017</a></span>
                    </div>
                    <p className="bottom15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor
                      cum soluta nobis eleifend...
                    </p>
                    <a href="#." className="btn-more">
                      <i><img src="images/arrowl.png" alt="arrow" /></i>
                      <span>More Details</span>
                      <i><img src="images/arrowr.png" alt="arrow" /></i>
                    </a>
                  </div>
                </div>
                <div className="item news_item">
                  <div className="image bottom15">
                    <a href="#."><img src="images/news5.jpg" alt="Featured Property" className="border_radius" /></a>
                  </div>
                  <div className="bottom">
                    <h3 className="bottom10"><a href="#.">Historic Town House</a></h3>
                    <div className="info_comment bottom15">
                      <span>By: <a href="#.">Admin</a></span><span>Date: <a href="#.">Feb 22, 2017</a></span>
                    </div>
                    <p className="bottom15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor
                      cum soluta nobis eleifend...
                    </p>
                    <a href="#." className="btn-more">
                      <i><img src="images/arrowl.png" alt="arrow" /></i>
                      <span>More Details</span>
                      <i><img src="images/arrowr.png" alt="arrow" /></i>
                    </a>
                  </div>
                </div>
                <div className="item news_item">
                  <div className="image bottom15">
                    <a href="#."><img src="images/news4.jpg" alt="Featured Property" className="border_radius" /></a>
                  </div>
                  <div className="bottom">
                    <h3 className="bottom10"><a href="#.">Historic Town House</a></h3>
                    <div className="info_comment bottom15">
                      <span>By: <a href="#.">Admin</a></span><span>Date: <a href="#.">Feb 22, 2017</a></span>
                    </div>
                    <p className="bottom15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor
                      cum soluta nobis eleifend...
                    </p>
                    <a href="#." className="btn-more">
                      <i><img src="images/arrowl.png" alt="arrow" /></i>
                      <span>More Details</span>
                      <i><img src="images/arrowr.png" alt="arrow" /></i>
                    </a>
                  </div>
                </div>
                <div className="item news_item">
                  <div className="image bottom15">
                    <a href="#."><img src="images/news6.jpg" alt="Featured Property" className="border_radius" /></a>
                  </div>
                  <div className="bottom">
                    <h3 className="bottom10"><a href="#.">Historic Town House</a></h3>
                    <div className="info_comment bottom15">
                      <span>By: <a href="#.">Admin</a></span><span>Date: <a href="#.">Feb 22, 2017</a></span>
                    </div>
                    <p className="bottom15">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor
                      cum soluta nobis eleifend...
                    </p>
                    <a href="#." className="btn-more">
                      <i><img src="images/arrowl.png" alt="arrow" /></i>
                      <span>More Details</span>
                      <i><img src="images/arrowr.png" alt="arrow" /></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*News ends*/}
        {/*Property Location*/}
        <section id="location" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="uppercase">Localisation</h2>
                <p className="heading_space">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec viverra erat.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                {/*Maps*/}
                <section id="banner-map">
                  <h3 className="hidden">hidden</h3>
                  <div className="container">
                    <div className="row property-list-area property-list-map-area">
                      <div className="property-list-map">
                        <div id="property-listing-map" className="multiple-location-map" style={{width: '100%', height: '545px'}} />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>);
  }
}

export default DetailsAchat;