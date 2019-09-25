import React, { Component } from "react";

import "../../css/reality-icon.css";
import "../../css/font-awesome.min.css";
import ItemList from "../itemList/itemList";
import ListMeilleurBien from "../listMeilleurBien/listMeilleurBien";
import ListeBienRecomande from "./../listeBienRecomande/listeBienRecomande";
import ListeClientsSatisfaits from "./../listeClientsSatisfait/listeClientsSatisfait";
import RechercheAvancee from "./../rechercheAvancee/rechercheAvancee";
import Chat from "./../chatbot/chatbot";

var myList = [
  {
    titre: "Unique Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    statut: "For Rent",
    prix: "$8,600 Per Month",
    tv: "Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft"
  },
  {
    titre: "Unique Villa ",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    statut: "For Rent",
    prix: "$8,600 Per Month",
    statut: "For Rent",
    prix: "$8,600 Per Month",
    tv: "Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft"
  },
  {
    titre: "Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    statut: "For Rent",
    prix: "$8,600 Per Month",
    statut: "For Rent",
    prix: "$8,600 Per Month",
    tv: "Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft"
  },
  {
    titre: "Unique Villa With Private Beach",
    parag:
      "orem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam power nonummy nibh tempor cum solutanobis eleifend option congue nihil imperdiet doming…",
    statut: "For Rent",
    prix: "$8,600 Per Month",
    statut: "For Rent",
    prix: "$8,600 Per Month",
    tv: "Tv Lounge",
    salleDeBain: "3 Bedrooms",
    chambre: "2 bathrooms",
    Garage: "1 Garage",
    surface: "4800 sq ft"
  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myListe: myList
    };
  }
  searchkey = key => {
    // this.setState({ keyword: key })
    this.setState(
      {
        myListe: myList.filter(
          el => el.titre.toLowerCase().indexOf(key.toLowerCase()) > -1
        )
      },
      console.log(this.state.myListe)
    );
  };
  render() {
    return (
      <div className="Home">
        <div className="rev_slider_wrapper">
          <div id="rev_slider" className="rev_slider" data-version={5.0}>
            <ul>
              {/* SLIDE  */}
              <li data-transition="fade">
                {/* MAIN IMAGE */}
                <img
                  src="images/banner1.jpg"
                  data-bgposition="center center"
                  data-bgfit="cover"
                />
                <div
                  className="slider-caption tp-caption tp-resizeme"
                  data-x="['left','left','center','center']"
                  data-hoffset="['0','0','0','15']"
                  data-y="['center','center','center','center']"
                  data-voffset="['0','0','0','0']"
                  data-responsive_offset="on"
                  data-visibility="['on','on','off','off']"
                  data-start={1300}
                  data-transition="fade"
                  data-transform_idle="o:1;"
                  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                  data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                >
                  <h4 className="bg_blue default_clr">
                    $8,600 Per Month - Apartment
                  </h4>
                  <div className="bg_white text-left">
                    <h2>Family House in Tunisie</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam <br />
                      power nonummy nibh...
                    </p>
                    <a href="javascript:void(0)" className="btn-more">
                      <i>
                        <img src="images/arrowl.png" alt="arrow" />
                      </i>
                      <span>More Details</span>
                      <i>
                        <img src="images/arrowr.png" alt="arrow" />
                      </i>
                    </a>
                  </div>
                  <div className="property_meta">
                    <span>
                      <i className="icon-select-an-objecto-tool" />
                      4800 sq ft
                    </span>
                    <span>
                      <i className="icon-bed" />3 Bedrooms
                    </span>
                    <span>
                      <i className="icon-old-television" />
                      TV Lounge
                    </span>
                    <span>
                      <i className="icon-garage" />1 Garage
                    </span>
                  </div>
                </div>
              </li>
              <li data-transition="slideleft">
                <img
                  src="images/banner2.jpg"
                  data-bgposition="center center"
                  data-bgfit="cover"
                />
                <div
                  className="slider-caption tp-caption tp-resizeme"
                  data-x="['right','right','center','center']"
                  data-hoffset="['0','0','0','15']"
                  data-y="['center','center','center','center']"
                  data-voffset="['0','0','0','0']"
                  data-responsive_offset="on"
                  data-visibility="['on','on','off','off']"
                  data-start={1300}
                  data-transform_idle="o:1;"
                  data-transform_in="x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                  data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                >
                  <h4 className="bg_blue default_clr pull-right">
                    $8,600 Per Month - Apartment
                  </h4>
                  <div className="clearfix" />
                  <div className="bg_white text-left">
                    <h2>Family House in Tunisie</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam <br />
                      power nonummy nibh...
                    </p>
                    <a href="javascript:void(0)" className="btn-more">
                      <i>
                        <img src="images/arrowl.png" alt="arrow" />
                      </i>
                      <span>More Details</span>
                      <i>
                        <img src="images/arrowr.png" alt="arrow" />
                      </i>
                    </a>
                  </div>
                  <div className="property_meta">
                    <span>
                      <i className="icon-select-an-objecto-tool" />
                      4800 sq ft
                    </span>
                    <span>
                      <i className="icon-bed" />3 Bedrooms
                    </span>
                    <span>
                      <i className="icon-old-television" />
                      TV Lounge
                    </span>
                    <span>
                      <i className="icon-garage" />1 Garage
                    </span>
                  </div>
                </div>
              </li>
              <li
                data-index="rs-106"
                data-transition="fade"
                data-slotamount="default"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-rotate={0}
                data-param1="HTML5 Video"
                data-description
              >
                <img
                  src="video/thumb.jpg"
                  alt="video slide"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  className="rev-slidebg"
                />
                <div
                  className="rs-background-video-layer"
                  data-volume="mute"
                  data-videowidth="100%"
                  data-videoheight="100%"
                  data-videomp4="video/video.mp4"
                  data-videopreload="preload"
                  data-videoloop="loop"
                  data-forcecover={1}
                  data-aspectratio="16:9"
                  data-autoplay="true"
                  data-autoplayonlyfirsttime="true"
                  data-nextslideatend="true"
                ></div>
                <div
                  className="slider-caption tp-caption tp-resizeme"
                  data-x="['left','left','center','center']"
                  data-hoffset="['0','0','0','15']"
                  data-y="['center','center','center','center']"
                  data-voffset="['0','0','0','0']"
                  data-responsive_offset="on"
                  data-visibility="['on','on','off','off']"
                  data-start={1500}
                  data-transform_in="x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                  data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                >
                  <h4 className="bg_blue default_clr">
                    $8,600 Per Month - Apartment
                  </h4>
                  <div className="bg_white text-left">
                    <h2>Family House in Tunisie</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam <br />
                      power nonummy nibh...
                    </p>
                    <a href="javascript:void(0)" className="btn-more">
                      <i>
                        <img src="images/arrowl.png" alt="arrow" />
                      </i>
                      <span>More Details</span>
                      <i>
                        <img src="images/arrowr.png" alt="arrow" />
                      </i>
                    </a>
                  </div>
                  <div className="property_meta">
                    <span>
                      <i className="icon-select-an-objecto-tool" />
                      4800 sq ft
                    </span>
                    <span>
                      <i className="icon-bed" />3 Bedrooms
                    </span>
                    <span>
                      <i className="icon-old-television" />
                      TV Lounge
                    </span>
                    <span>
                      <i className="icon-garage" />1 Garage
                    </span>
                  </div>
                </div>
              </li>
              <li data-transition="slideleft">
                <img
                  src="images/banner3.jpg"
                  data-bgposition="center center"
                  data-bgfit="cover"
                />
                <div
                  className="slider-caption tp-caption tp-resizeme"
                  data-x="['right','right','center','center']"
                  data-hoffset="['0','0','0','15']"
                  data-y="['center','center','center','center']"
                  data-voffset="['0','0','0','0']"
                  data-responsive_offset="on"
                  data-visibility="['on','on','off','off']"
                  data-start={1300}
                  data-transform_idle="o:1;"
                  data-transform_in="x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:1500;e:Power3.easeInOut;"
                  data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;"
                  data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                >
                  <h4 className="bg_blue default_clr pull-right">
                    $8,600 Per Month - Apartment
                  </h4>
                  <div className="clearfix" />
                  <div className="bg_white text-left">
                    <h2>Family House in Tunisie</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam <br />
                      power nonummy nibh...
                    </p>
                    <a href="javascript:void(0)" className="btn-more">
                      <i>
                        <img src="images/arrowl.png" alt="arrow" />
                      </i>
                      <span>More Details</span>
                      <i>
                        <img src="images/arrowr.png" alt="arrow" />
                      </i>
                    </a>
                  </div>
                  <div className="property_meta">
                    <span>
                      <i className="icon-select-an-objecto-tool" />
                      4800 sq ft
                    </span>
                    <span>
                      <i className="icon-bed" />3 Bedrooms
                    </span>
                    <span>
                      <i className="icon-old-television" />
                      TV Lounge
                    </span>
                    <span>
                      <i className="icon-garage" />1 Garage
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/*Advance Search*/}
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="propertydropdown">
                <span className="toggler uppercase default_clr">
                  Recherche Avancée &nbsp; &nbsp;
                  <i className="fa fa-angle-down" />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Property Search area Start */}
        <section
          className="property-query-area bg_light"
          style={{ display: "none" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="uppercase">Recherche Avancée</h2>
                <p className="heading_space">
                  {" "}
                  Nous avons des propriétés dans ces zones. Voir une liste des
                  propriétés.
                </p>
              </div>
            </div>
            <div className="row">
              <RechercheAvancee />
            </div>
            <div className="group-button-search">
              <a href="plus.html" className="more-filter">
                <i className="fa fa-plus" />
                Afficher plus d'options de recherche
              </a>
            </div>
            <div className="search-propertie-filters collapse">
              <div className="container-2">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Air Conditioning</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Balcony</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Gas Heat</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Washer and Dryer</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>TV Cable</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Home Theater</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Swimming Pool</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Property Search End */}
        {/* Latest Property */}
        <section id="property" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h2 className="uppercase">A lA UNE </h2>
                <p className="heading_space">
                  {" "}
                  Nous sommes fiers de vous présenter certaines des meilleures
                  maisons, appartements, bureaux , avec les meilleurs prix.
                </p>
              </div>
            </div>

            <ItemList liste={this.state.myListe} />
            <div className="row">
              <div className="col-md-12 text-center top15">
                <ul className="pager">
                  <li>
                    <a href="#.">1</a>
                  </li>
                  <li className="active">
                    <a href="#.">2</a>
                  </li>
                  <li>
                    <a href="#.">3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/*Latest Property Ends*/}
        {/*Best Deal Properties*/}
        <section id="deals" className="padding bg_light">
          <div className="container">
            <div className="row">
              <div className="col-sm-10">
                <h2 className="uppercase">MEILLEURS PROPRIÉTÉS</h2>
                <p className="heading_space">
                  Nous sommes fiers de vous présenter certaines des meilleures
                  maisons, appartements, bureaux, avec des prix abordables.
                </p>
              </div>
            </div>
            <div className="row">
              <ListMeilleurBien />
            </div>
          </div>
        </section>
        {/*Best Deal Properties Ends*/}
        {/*Featured Property*/}
        <section id="featured_property" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-10">
                <h2 className="uppercase">PROPRIÉTÉS RECOMMANDÉES</h2>
                <p className="heading_space">
                  {" "}
                  Nous sommes fiers de vous présenter certaines des meilleures
                  maisons, appartements, bureaux , avec les meilleurs prix.
                  prices.
                </p>
              </div>
            </div>
            <div className="row">
              <ListeBienRecomande />
            </div>
          </div>
        </section>
        {/*Featured Property Ends*/}
        {/*Testinomials*/}
        <section id="testinomial" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 text-center">
                <h2 className="uppercase">CLIENT SATISFAITS</h2>
                <p className="heading_space">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nec viverra erat Aenean elit tellus.
                </p>
              </div>
              <div className="col-sm-6">
                <div className="testinomial_wrap heading_space clearfix">
                  <div className="testinomial_text border_radius text-center bottom30">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh tempor cum soluta nobis consectetuer
                      adipiscing.
                    </p>
                    <i>
                      <img src="images/quote-left.png" />
                    </i>
                  </div>
                  <div className="col-xs-12 customer">
                    <img src="images/author.png" alt="happy client" />
                    <h4> SAM NICHOLSON</h4>
                    <span>( NorthMarq Capital )</span>
                    <img
                      src="images/stars.png"
                      alt="rating"
                      className="rating pull-xs-right"
                    />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="testinomial_wrap heading_space clearfix">
                  <div className="testinomial_text border_radius text-center bottom30">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh tempor cum soluta nobis consectetuer
                      adipiscing.
                    </p>
                    <i>
                      <img src="images/quote-left.png" />
                    </i>
                  </div>
                  <div className="col-xs-12 customer">
                    <img src="images/author.png" alt="happy client" />
                    <h4> SAM NICHOLSON</h4>
                    <span>( NorthMarq Capital )</span>
                    <img
                      src="images/stars.png"
                      alt="rating"
                      className="rating pull-xs-right"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 text-center">
                <a
                  href="javascript:void(0)"
                  className="cd-see-all btn-white border_radius"
                >
                  <i className="fa fa-th" aria-hidden="true" />
                  view all
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*testinomial collepse*/}
        <div className="cd-testimonials-all">
          <div className="cd-testimonials-all-wrapper">
            <ul>
              <ListeClientsSatisfaits />
            </ul>
            <a href="#0" className="close-btn">
              Close
            </a>
          </div>
        </div>

        {/*Partners*/}
        <section id="logos">
          <div className="container partners padding_top">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="uppercase">NOS PARTENAIRES</h2>
                <p className="heading_space">
                  Aliquam nec viverra erat. Aenean elit tellus mattis quis
                  maximus.
                </p>
              </div>
            </div>
            <div className="row">
              <div id="partner-slider" className="owl-carousel">
                <div className="item">
                  <img src="images/logo1.png" alt="Featured Partner" />
                </div>
                <div className="item">
                  <img src="images/logo2.png" alt="Featured Partner" />
                </div>
                <div className="item">
                  <img src="images/logo3.png" alt="Featured Partner" />
                </div>
                <div className="item">
                  <img src="images/logo4.png" alt="Featured Partner" />
                </div>
                <div className="item">
                  <img src="images/logo5.png" alt="Featured Partner" />
                </div>
                <div className="item">
                  <img src="images/logo1.png" alt="Featured Partner" />
                </div>
                <div className="item">
                  <img src="images/logo2.png" alt="Featured Partner" />
                </div>
                <div className="item">
                  <img src="images/logo3.png" alt="Featured Partner" />
                </div>
                <div className="item">
                  <img src="images/logo4.png" alt="Featured Partner" />
                </div>
                <div className="item">
                  <img src="images/logo5.png" alt="Featured Partner" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Chat />
      </div>
    );
  }
}

export default Home;
