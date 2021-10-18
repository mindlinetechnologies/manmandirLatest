import React,{useEffect} from 'react';
import Footer from '../assets/Footer';
import Navbar from '../assets/Navbar';
import {useHistory,Link} from 'react-router-dom';

const Wishlist = () => {
  let history = useHistory();
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

        <div className="agileheader-banner">
            <img src="images/images/banner/2.jpg" alt="" />
        </div>
         </div>
            <div className="banner-bootom-w3-agileits">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="page-title-wrapper">
                <h1 className="page-title">
                  <span className="base" data-ui-id="page-title-wrapper">Your Wishlist</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="agileshoppinggrids">
                    <div className="col-md-4 agileshoppinggrid agileshoppinggrid1">
                      <div className="grid">
                        <Link to="/productDetails">
                        <figure className="effect-apollo">
                          <img src="images/images/gowns/1front.JPG" alt="" />
                          <figcaption />
                        </figure>
                        </Link>
                        <div className="item-info-product ">
                          <h4><Link to="/productDetails">Anarkali</Link></h4>
                          <div className="info-product-price">
                            <p>Product details</p>
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
                                <Link to="/cart"><input type="submit" name="submit" defaultValue="Move to cart" value="Move to cart" className="button" /></Link>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 agileshoppinggrid agileshoppinggrid2">
                      <div className="grid">
                        <figure className="effect-apollo">
                          <img src="images/images/gowns/1Back.JPG" alt="" />
                          <figcaption />
                        </figure>
                        <div className="item-info-product ">
                          <h4><a href="Detail-page.html">Anarkali</a></h4>
                          <div className="info-product-price">
                            <p>Product details</p>
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
                                <input type="submit" name="submit" defaultValue="Move to cart" value="Move to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 agileshoppinggrid agileshoppinggrid1">
                      <div className="grid">
                        <figure className="effect-apollo">
                          <img src="images/images/gowns/6-1front.JPG" alt="" />
                          <figcaption />
                        </figure>
                        <div className="item-info-product ">
                          <h4><a href="Detail-page.html">Anarkali</a></h4>
                          <div className="info-product-price">
                            <p>Product details</p>
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
                                <input type="submit" name="submit" defaultValue="Move to cart" value="Move to cart" className="button" />
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
      <Footer />
        </>
    )
}

export default Wishlist
