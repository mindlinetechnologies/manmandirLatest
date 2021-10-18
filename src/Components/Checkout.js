import React,{useEffect} from 'react';
import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';
import './../custom.css';
import './../css/checkout.css'
import {useHistory} from 'react-router-dom';

const Checkout = () => {
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
            <div className="banner-bootom-w3-agileits">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="page-title-wrapper">
                <h1 className="page-title">
                  <span className="base" data-ui-id="page-title-wrapper">Checkout</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="box">
                  <p className="title"><i className="fa fa-user" /> Proceed with account</p>
                  <button type="submit" className="account sign-in">Sign In</button> <button type="submit" className="account sign-up">Sign Up</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-7 col-md-7 col-sm-12">
                <div className="box">
                  <p className="title"><i className="fa fa-user-plus" /> Proceed as a guest</p>
                  <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>First Name <span>*</span></label>
                        <input id="first_nm" type="text" className="form-control" placeholder="Enter first name" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input id="last_nm" type="text" className="form-control" placeholder="Enter last name" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Mobile Number <span>*</span></label>
                        <input id="mobile_no" type="text" className="form-control" placeholder="Enter mobile no." title="For deliver questions" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Country <span>*</span></label>
                        <select className="form-control">
                          <option>--Select Country--</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>State <span>*</span></label>
                        <select className="form-control">
                          <option>--Select State--</option>
                        </select>
                      </div>
                    </div>
                  </div>    
                  <div className="row">
                    <div className="col-xl-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>City/Village <span>*</span></label>
                        <input id="city" type="text" className="form-control" placeholder="Enter city" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label>Pincode <span>*</span></label>
                        <input id="pincode" type="text" className="form-control" placeholder="Enter pincode" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label>Address <span>*</span></label>
                        <input type="text" className="form-control" placeholder="Area" />
                        <input type="text" className="form-control mt" placeholder="Street name" />
                        <input type="text" className="form-control mt" placeholder="Building" />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="form-group">
                    <label>Email address <span>*</span></label>
                    <input type="email" className="form-control" placeholder="Enter email" title="We'll send your order confirmation here." />
                  </div>
                  <hr />
                  <div className="form-group text-right">
                    <button type="submit" className="btn-submit">Submit</button>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-md-5 col-sm-12">
                <div className="box">
                  <p className="title"><i className="far fa-list-alt" /> Order Summary</p>
                  <div className="order-box">
                    <div className="order">
                      <div className="row ml-mr">
                        <table>
                          <tbody><tr>
                              <td><img src="images/pages/anarkali1.jpg" className="order-img-product" /></td>
                              <td>
                                <div className="row">
                                  <p className="order-product-name">Anni Designer Women's Rama Color Banarasi Silk Saree With
                                    Blouse Piece</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Size: US 2</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Price: ₹ 499.00</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Qty: 2</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Total Price: ₹ 499.00</p>
                                </div>
                              </td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                    <div className="order">
                      <div className="row ml-mr">
                        <table>
                          <tbody><tr>
                              <td><img src="images/pages/anarkali2.jpg" className="order-img-product" /></td>
                              <td>
                                <div className="row">
                                  <p className="order-product-name">Navy Blue Kurti Set With Bandhani Foil Printed Chevron Design And Off White Skirt</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Size: US 2</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Price: ₹ 499.00</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Qty: 2</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Total Price: ₹ 499.00</p>
                                </div>
                              </td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                    <div className="order">
                      <div className="row ml-mr">
                        <table>
                          <tbody><tr>
                              <td><img src="images/pages/anarkali3.jpg" className="order-img-product" /></td>
                              <td>
                                <div className="row">
                                  <p className="order-product-name">Maroon Kurti Set With Bandhani Foil Printed Chevron Design And Off White Skirt</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Size: US 2</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Price: ₹ 499.00</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Qty: 2</p>
                                </div>
                                <div className="row">
                                  <p className="order-product-price">Total Price: ₹ 499.00</p>
                                </div>
                              </td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                  </div>
                  <div id="order-details">
                    <div className="d-flex">
                      <h4>Sub Total</h4>
                      <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                    </div>
                    <div className="d-flex">
                      <h4>Discount</h4>
                      <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                    </div>
                    <div className="d-flex">
                      <h4>Coupon Discount</h4>
                      <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                    </div>
                    <div className="d-flex">
                      <h4>GST</h4>
                      <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                    </div>
                    <div className="d-flex">
                      <h4>Shipping Cost</h4>
                      <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                    </div>
                    <div className="mt-mb" />
                    <div className="d-flex gray-effect">
                      <h4 style={{color: '#d33b33', fontWeight: 700}}>Grand Total</h4>
                      <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                    </div>
                    <br />
                    <div className="text-right">
                      <button className="btn-submit">Proceed to buy</button>
                    </div>
                    <hr />
                    <div className="text-center payment">
                      <h4 className="payment-mode">WE ACCEPT</h4>
                      <img src="images/images/payment-logosnew.jpg" />
                    </div>
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

export default Checkout
