import React, { useEffect } from 'react';
import Footer from '../assets/Footer';
import Navbar from '../assets/Navbar';
import { Link,useHistory} from 'react-router-dom';





const Home = () => {
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

        

                  </div>

                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        {/* Wrapper for slides */}
        <div className="carousel-inner">
              <div className="item active">
                <img src="images/images/banner/7.jpg" alt="Los Angeles" />
                <div className="carousel-caption">
                  <h1>Shopping time</h1>
                  <p>Offer on your favorite clothing is always so much fun!</p>
                  <input type="submit" defaultValue="SEND MESSAGE" value="Shop Now" style={{width:'50%'}}/>
                </div>
              </div>
              <div className="item">
                  <img src="images/images/banner/7.jpg" alt="Chicago" />
                    <div className="carousel-caption">
                      <h1>Today's special deal</h1>
                      <p>Only for first 50 customer!</p>
                      <input type="submit" defaultValue="SEND MESSAGE" value="Shop Now" style={{width:'50%'}}/>
                    </div>
              </div>
              <div className="item">
                <img src="images/images/banner/7.jpg" alt="New York" />
                <div className="carousel-caption">
                  <h1>Discount offer</h1>
                  <p>For Wedding season. Buy our best products on over 50% sale. Grab it soon.</p>
                  <input type="submit" defaultValue="SEND MESSAGE" value="Shop Now" style={{width:'50%'}}/>
                </div>
              </div>
        </div>
        {/* Left and right controls */}
        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" />
          <span className="sr-only">Next</span>
        </a>
      </div>

{/* Latest-Arrivals */}
<div className="wthreehome-latest">
        <div className="container">
          <div className="wthreehome-latest-grids"><p>Latest Arrivals</p>
            <div className="col-md-6 wthreehome-latest-grid wthreehome-latest-grid1">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/images/lehangas/tempimg/1.png" alt="Groovy Apparel" />
                  <figcaption />
                </figure>
              </div>
              <h4>Lehengas</h4>
              <h5>Lorem Ipsum Dolor Site Amet</h5>
              <h6><Link to="/products">Shop Now</Link></h6>
            </div>
            <div className="col-md-6 wthreehome-latest-grid wthreehome-latest-grid2">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/images/lehangas/tempimg/2.jpg" alt="Groovy Apparel" />
                  <figcaption />
                </figure>
              </div>
              <h4>JACKET Lehangas</h4>
              <h5>Lorem Ipsum Dolor Site Amet</h5>
              <h6><Link to="/products">Shop Now</Link></h6>
            </div>
            <div className="col-md-6 wthreehome-latest-grid wthreehome-latest-grid3">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/images/lehangas/tempimg/red-dress-women-model-wallpaper-preview.jpg" alt="Groovy Apparel" />
                  <figcaption />
                </figure>
              </div>
              <h4>Indo western Gowns</h4>
              <h5>Lorem Ipsum Dolor Site Amet</h5>
              <h6><Link to="/products">Shop Now</Link></h6>
            </div>
            <div className="col-md-6 wthreehome-latest-grid wthreehome-latest-grid4">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/images/lehangas/tempimg/maganificent-marooon-1920x1080.jpg" alt="Groovy Apparel" />
                  <figcaption />
                </figure>
              </div>
              <h4>Western Bridal Gowns</h4>
              <h5>Lorem Ipsum Dolor Site Amet</h5>
              <h6><Link to="/products">Shop Now</Link></h6>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* //Latest-Arrivals */}

      {/* Winter-Collection */}
     
       
            <div className="wthreewinter-coll">
                <div className="container">
                <h1>New Collection </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                <div className="wthreeshop-a">
                    <a>SHOP NOW</a>
                </div>
                </div>
          </div>
        
      
      {/* //Winter-Collection */}

       {/* Denim-Collection */}
       <div className="wthreedenim-coll">
        <div className="style-grids">
          <div className="col-md-6 style-grid style-grid-1">
            <img src="images/images/lehangas/tempimg/devushka-briunetka-plate-krasnoe-stil.jpg" alt="Groovy Apparel" />
            <div className="style-grid-1-text">
              <h3>Designer Dress</h3>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                Latin words, consectetur.</p>
              {/* <div className="wthreeshop-a">
                <a href="Product-page.html">SHOP DENIM COLLECTION</a>
              </div> */}
            </div>
          </div>
          <div className="col-md-6 style-grid style-grid-2">
            <div className="style-image-1">
              <img src="images/images/lehangas/tempimg/5101939.jpg" alt="Groovy Apparel" />
              <div className="style-grid-2-text">
                <h3>Designer Dress</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                  piece of classical Latin literature from 45 BC.</p>
              </div>
            </div>
            <div className="style-image-2">
              <img src="images/images/lehangas/tempimg/554803.jpg" alt="Groovy Apparel" />
              <div className="style-grid-2-text">
                <h3>STITCHED TO PERFECTION</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                  piece of classical Latin literature from 45 BC.</p>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* //Denim-Collection */}

      {/* Clearance-Sale */}
      <div className="aitsclearance-sales">
        <div className="aitsclearance-sales-text">
          <h2>ALL CLEARANCE ITEMS</h2>
          <h5>50% OFF <small>On selected products<sup>*</sup></small></h5>
          {/* <div className="wthreeshop-a">
            <a href="offer-product.html">SHOP NOW</a>
          </div> */}
        </div>
      </div>
      {/* //Clearance-Sale */}

       {/* Shopping */}
       <div className="agileshopping">
        <div className="container">
          <div className="agileshoppinggrids">
            <div className="col-md-6 agileshoppinggrid agileshoppinggrid1">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/images/lehangas/tempimg/Gown-Designs-The-Crimson-Bride-1.jpg" alt="" />
                  <figcaption />
                </figure>
              </div>
            </div>
            <div className="col-md-6 agileshoppinggrid agileshoppinggrid2">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/images/lehangas/tempimg/Gown-Designs-The-Crimson-Bride-1.jpg" alt="Groovy Apparel" />
                  <figcaption />
                </figure>
              </div>
            </div>
            <div className="clearfix" />
          </div>
          <div className="agileshoppinggrids-bottom">
            <h3>CHOOSE THE BEST FOR YOU</h3>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
            <div className="agileshoppinggrids-bottom-grids">
              <div className="col-md-6 agileshoppinggrids-bottom-grid agileshoppinggrids-bottom-grid1">
                <div className="wthreeshop-a">
                  <a href="mens.html">Shop Gowns</a>
                </div>
              </div>
              <div className="col-md-6 agileshoppinggrids-bottom-grid agileshoppinggrids-bottom-grid2">
                <div className="wthreeshop-a">
                  <a href="womens.html">SHOP Lehengas</a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
      {/* //Shopping */}

      {/* Newsletter */}
      <div className="agileinfonewsl">
        <h3>SIGN UP FOR NEWSLETTER</h3>
        <p>Subscribe to us to get highest-level access to our new styles and trends</p>
        <div className="wthreeshop-a">
          <a className="popup-with-zoom-anim" href="#small-dialog3">SUBSCRIBE</a>
        </div>
        {/* Popup-Box */}
        <div id="popup2">
          <div id="small-dialog3" className="mfp-hide agileinfo">
            <div className="pop_up">
              <h4>SUBSCRIBE</h4>
              <form action="#" method="post">
                <input className="email aitsw3ls" type="email" placeholder="Email" required />
                <input type="submit" className="submit" defaultValue="SUBSCRIBE" />
              </form>
            </div>
          </div>
        </div>
        {/* //Popup-Box */}
      </div>
      {/* //Newsletter */}

        <Footer />

       


        </>
    )
}

export default Home
