import React,{useEffect, useState} from 'react';
import Footer from '../assets/Footer';
import Navbar from '../assets/Navbar';
import './../css/products.css'
import {useHistory,useLocation,Link} from 'react-router-dom';

const ProductPage = (props) => {
  let history = useHistory();
  let location = useLocation()

  console.log(location)

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
},[])

    return (
        <>
            <div className="agileheader" id="agileitshome">
                {/* Navigation */}
                    <Navbar />
        
                {/* end Navigation */}
                <div class="agileheader-topbar">
            
                </div>

                
                
                {/* Header-Slider */}
                    <div className="agileheader-banner">
                        <img src="images/images/banner/b7.jpg" alt="Groovy Apparel" />
                    </div>
                {/* //Header-Slider */}
            </div>


            
      {/* product page start */}
      <div className="banner-bootom-w3-agileits">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="page-title-wrapper">
                <h1 className="page-title">
                  <span className="base" data-ui-id="page-title-wrapper">All Products - Manmandir House</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="col-xl-3 col-md-3 col-sm-12">
                  <div className="row">
                    <h4 className="shop-by">SHOP BY</h4>
                  </div>
                  <div className="row">
                    <ul className="category-list">
                      <li data-toggle="collapse" href="#collapse1">Category<i className="fa fa fa-angle-right" /></li>
                      <div id="collapse1" className="panel-collapse collapse">
                        <ul className="group-list">
                          <li className="list-group-item"><i className="fa fa-caret-right" /> Gowns(10)
                          </li>
                          <li className="list-group-item"><i className="fa fa-caret-right" />
                            Lehengas(20)</li>
                          <li className="list-group-item"><i className="fa fa-caret-right" /> Kurtis(15)
                          </li>
                          <li className="list-group-item"><i className="fa fa-caret-right" /> Punjabi
                            Suits(10)</li>
                          <li className="list-group-item"><i className="fa fa-caret-right" />
                            Indo-Western(20)</li>
                        </ul>
                      </div>
                      <li data-toggle="collapse" href="#collapse2">Price<i class="fa fa fa-angle-right"></i></li>
                      <div id="collapse2" class="panel-collapse collapse">
                                       
                                       <div class="slider-container">
                                           <div class="row">
                                               <div class="col-sm-12">
                                                   <div id="slider-range"></div>
                                               </div>
                                           </div>
                                           <div class="row slider-labels">
                                               <div class="col-xs-6 caption">
                                                   <strong><span id="slider-range-value1"></span></strong>
                                               </div>
                                               <div class="col-xs-6 text-right caption">
                                                   <strong><span id="slider-range-value2"></span></strong>
                                               </div>
                                           </div>
                                           <div class="row">
                                               <div class="col-sm-12">
                                                   <form>
                                                       <input type="hidden" name="min-value" value="" />
                                                       <input type="hidden" name="max-value" value="" />
                                                   </form>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-9 col-md-9 col-sm-12">
                  <div className="agileshoppinggrids">
                    <div className="col-md-4 agileshoppinggrid agileshoppinggrid1">
                      <div className="grid">
                        <Link to="/productDetails" >
                        <figure className="effect-apollo">
                          <img src="images/images/gowns/1front.JPG" alt="" />
                          <figcaption />
                         
                        </figure>
                        </Link>
                        <div className="item-info-product ">
                          <h4><a href="Detail-page.html">Anarkali</a></h4>
                          <div className="info-product-price">
                            <span className="item_price">₹000.00</span>
                            <del>₹000.00</del>
                          </div>
                          <div>
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="Sleeveless Solid Blue Top" />
                                <input type="hidden" name="amount" defaultValue="30.99" />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="rupee" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                               
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 agileshoppinggrid agileshoppinggrid2">
                      <div className="grid">
                      <Link to="/productDetails" >
                        <figure className="effect-apollo">
                          <img src="images/images/gowns/1Back.JPG" alt="Groovy Apparel" />
                          <figcaption />
                        </figure>
                        </Link>
                        <div className="item-info-product ">
                          <h4><a href="Detail-page.html">Anarkali</a></h4>
                          <div className="info-product-price">
                            <span className="item_price">₹000.00</span>
                            <del>₹000.00</del>
                          </div>
                          <div>
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="Sleeveless Solid Blue Top" />
                                <input type="hidden" name="amount" defaultValue="30.99" />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="rupee" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 agileshoppinggrid agileshoppinggrid1">
                      <div className="grid">
                      <Link to="/productDetails" >
                        <figure className="effect-apollo">
                          <img src="images/images/gowns/6-1front.JPG" alt="" />
                          <figcaption />
                        </figure>
                        </Link>
                        <div className="item-info-product ">
                          <h4><a href="Detail-page.html">Anarkali</a></h4>
                          <div className="info-product-price">
                            <span className="item_price">₹000.00</span>
                            <del>₹000.00</del>
                          </div>
                          <div>
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="Sleeveless Solid Blue Top" />
                                <input type="hidden" name="amount" defaultValue="30.99" />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="rupee" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* product page end */}

        <Footer />



        </>
    )
}

export default ProductPage
