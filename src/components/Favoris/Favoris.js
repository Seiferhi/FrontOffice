import React, { Component } from "react";
import NavBarItem from "./../Profile/navBarItem";
import FavorisList from "./favorisList";
class Favoris extends Component {
  render() {
    return (
      <div className="Favoris">
        {/* Page Banner Start*/}
        <section className="page-banner padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-uppercase"> PROPRIÉTÉS PRÉFÉRÉES</h1>
                <p>
                  Serving you since 1999. Lorem ipsum dolor sit amet consectetur
                  adipiscing elit.
                </p>
                <ol className="breadcrumb text-center">
                  <li>
                    <a href="#">Acceuil</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                  <li className="active">Favoris</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* Favorite Properties  */}
        <section id="property" className="padding_top listing1">
          <div className="container">
            <div className="row">
              <NavBarItem />

              <h2 className="text-uppercase text-center">
                MES PROPRIÉTÉS PRÉFÉRÉES
              </h2>
              <p className="heading_space text-center">
                Nous avons des propriétés dans ces régions Voir une liste de
                Properties.
              </p>
            </div>
            <div className="row">
              {/* <div className="col-sm-4">
                <div className="property_item heading_space">
                  <div className="image">
                    <a href="#."><img src="images/listing1.jpg" alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix"> 
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span> 
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Historic Town House</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent"> 
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span> 
                      <span><i className="icon-bed" />2 Office Rooms</span> 
                      <span><i className="icon-safety-shower" />1 Bathroom</span>   
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-md-left"><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-like" /></a></li>
                        <li><a href="#one" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="one">
                      <ul>
                        <li><a href="#." className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="#." className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="#." className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="property_item heading_space">
                  <div className="image">
                    <a href="#."><img src="images/listing2.jpg" alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix"> 
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_t">For Sale</span> 
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Historic Town House</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent"> 
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span> 
                      <span><i className="icon-bed" />2 Office Rooms</span> 
                      <span><i className="icon-safety-shower" />1 Bathroom</span>   
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-md-left"><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-like" /></a></li>
                        <li><a href="#two" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="two">
                      <ul>
                        <li><a href="#." className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="#." className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="#." className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="property_item heading_space">
                  <div className="image">
                    <a href="#."><img src="images/listing3.jpg" alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix"> 
                      <span className="solid">Solid Out</span>
                    </div>
                    <span className="tag_t">For Sale</span> 
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Historic Town House</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent"> 
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span> 
                      <span><i className="icon-bed" />2 Office Rooms</span> 
                      <span><i className="icon-safety-shower" />1 Bathroom</span>   
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-md-left"><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-like" /></a></li>
                        <li><a href="#three" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="three">
                      <ul>
                        <li><a href="#." className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="#." className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="#." className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="property_item heading_space">
                  <div className="image">
                    <a href="#."><img src="images/listing4.jpg" alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix"> 
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span> 
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Historic Town House</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent"> 
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span> 
                      <span><i className="icon-bed" />2 Office Rooms</span> 
                      <span><i className="icon-safety-shower" />1 Bathroom</span>   
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-md-left"><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-like" /></a></li>
                        <li><a href="#five" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="five">
                      <ul>
                        <li><a href="#." className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="#." className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="#." className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="property_item heading_space">
                  <div className="image">
                    <a href="#."><img src="images/listing5.jpg" alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix"> 
                      <span className="solid">Solid Out</span>
                    </div>
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span> 
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Historic Town House</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent"> 
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span> 
                      <span><i className="icon-bed" />2 Office Rooms</span> 
                      <span><i className="icon-safety-shower" />1 Bathroom</span>   
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-md-left"><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-like" /></a></li>
                        <li><a href="#six" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="six">
                      <ul>
                        <li><a href="#." className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="#." className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="#." className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="property_item heading_space">
                  <div className="image">
                    <a href="#."><img src="images/listing6.jpg" alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix"> 
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_t">For Sale</span> 
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Historic Town House</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent"> 
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span> 
                      <span><i className="icon-bed" />2 Office Rooms</span> 
                      <span><i className="icon-safety-shower" />1 Bathroom</span>   
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-md-left"><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-like" /></a></li>
                        <li><a href="#seven" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="seven">
                      <ul>
                        <li><a href="#." className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="#." className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="#." className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="property_item heading_space">
                  <div className="image">
                    <a href="#."><img src="images/listing7.jpg" alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix"> 
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span> 
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Historic Town House</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent"> 
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span> 
                      <span><i className="icon-bed" />2 Office Rooms</span> 
                      <span><i className="icon-safety-shower" />1 Bathroom</span>   
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-md-left"><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-like" /></a></li>
                        <li><a href="#eight" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="eight">
                      <ul>
                        <li><a href="#." className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="#." className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="#." className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="property_item heading_space">
                  <div className="image">
                    <a href="#."><img src="images/listing8.jpg" alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix"> 
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span> 
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Historic Town House</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent"> 
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span> 
                      <span><i className="icon-bed" />2 Office Rooms</span> 
                      <span><i className="icon-safety-shower" />1 Bathroom</span>   
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-md-left"><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-like" /></a></li>
                        <li><a href="#nine" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="nine">
                      <ul>
                        <li><a href="#." className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="#." className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="#." className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="property_item heading_space">
                  <div className="image">
                    <a href="#."><img src="images/listing9.jpg" alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix"> 
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_l">Featured</span>
                    <span className="tag_t">For Sale</span> 
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Historic Town House</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent"> 
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span> 
                      <span><i className="icon-bed" />2 Office Rooms</span> 
                      <span><i className="icon-safety-shower" />1 Bathroom</span>   
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p className="pull-md-left"><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="#."><i className="icon-like" /></a></li>
                        <li><a href="#ren" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="ren">
                      <ul>
                        <li><a href="#." className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="#." className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="#." className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> */}
              <FavorisList />
            </div>
            <div className="row">
              <div className="padding_bottom text-center">
                <ul className="pager">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Favorite Properties End */}
      </div>
    );
  }
}

export default Favoris;
