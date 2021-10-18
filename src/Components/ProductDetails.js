import React, { useRef, useEffect } from 'react'
import Navbar from '../assets/Navbar'
import './../css/productDetails.css'
import './../css/ImageZoom.css'
import {useHistory,Link} from 'react-router-dom'
import Footer from '../assets/Footer'

import $ from 'jquery'


const ProductDetails = () => {
  let history = useHistory()
 
  const productImageChange = (event) => {
      let smallImg = event.target
      let fullImg = document.getElementById("featured");
      $(".zoomImage").prop("href", smallImg.src);
      fullImg.src = smallImg.src
  }
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })

    document.getElementById('img-container').addEventListener('mouseover', function(){
      imageZoom('featured')     
      })
  function imageZoom(imgID){
    let img = document.getElementById(imgID)
    let lens = document.getElementById('lens')
  
    lens.style.backgroundImage = `url( ${img.src} )`
  
    let ratio = 3
  
    lens.style.backgroundSize = (img.width * ratio) + 'px ' + (img.height * ratio) + 'px';
  
    img.addEventListener("mousemove", moveLens)
    lens.addEventListener("mousemove", moveLens)
    img.addEventListener("touchmove", moveLens)
  
    function moveLens(){
     
      let pos = getCursor()
     
      let positionLeft = pos.x - (lens.offsetWidth / 2)
      let positionTop = pos.y - (lens.offsetHeight / 2)
  
    
      if(positionLeft < 0 ){
        positionLeft = 0
      }
  
      if(positionTop < 0 ){
        positionTop = 0
      }
  
      if(positionLeft > img.width - lens.offsetWidth /3 ){
        positionLeft = img.width - lens.offsetWidth /3
      }
  
      if(positionTop > img.height - lens.offsetHeight /3 ){
        positionTop = img.height - lens.offsetHeight /3
      }
  
  
     
      lens.style.left = positionLeft + 'px';
      lens.style.top = positionTop + 'px';
  
     
      lens.style.backgroundPosition = "-" + (pos.x * ratio) + 'px -' +  (pos.y * ratio) + 'px'
    }
  
    function getCursor(){
     
      let e = window.event
      let bounds = img.getBoundingClientRect()
      let x = e.pageX - bounds.left
      let y = e.pageY - bounds.top
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      
      return {'x':x, 'y':y}
    }
  
  }
  
  imageZoom('featured')




    return () => {
      unlisten()
    }
  }, [])
  return (
    <>


          {/* <div id="img-container">
            <div id="lens" />
            <img id="featured" src="images/shoe1.jpg" />
        </div> */}




<div className="agileheader" id="agileitshome">
                {/* Navigation */}
                <Navbar />
        
                    {/* end Navigation */}
                    <div class="agileheader-topbar">
                
                    </div>
                    <div class="agileheader-banner">
			                  <img src="images/images/banner/2.jpg" alt="Groovy Apparel" />
		            </div>
        
            </div>

          
        <div className="" style={{marginTop:20}}>
          <div className="row">
            <div className="col-md-12 col-sm-12">

              {/* display for web */}
              <div className="col-md-1 col-sm-1 detail_page_images" >
                <img src="images/images/gowns/1front.JPG" alt="" style={{cursor:'pointer'}} onClick={productImageChange} />
                <img src="images/images/gowns/1Lside.JPG" alt="" style={{cursor:'pointer'}} onClick={productImageChange} />
                <img src="images/images/gowns/1Rside.JPG" alt="" style={{cursor:'pointer'}} onClick={productImageChange} />
                <img src="images/images/gowns/1back.JPG" alt="" style={{cursor:'pointer'}} onClick={productImageChange} />
              </div>
             
              <div className="col-md-4 col-sm-4 detail_page_images">
                <div className="img-magnifier-container">
                <div id="img-container">
                        <div id="lens" />
                        <img className="cloudzoom" id="featured" src="images/images/gowns/1front.JPG"  />
                  </div>
                  <div id="myresult" className="img-zoom-result" />
                </div>
              </div>
              {/* end display for web */}


                {/* display for mobile  */}

                <div id="myCarousel" className="carousel slide detail_page_images_mobile" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
          <li data-target="#myCarousel" data-slide-to={3} />
        </ol>
        {/* Wrapper for slides */}
        <div className="carousel-inner">
              <div className="item active">
                <img src="images/images/gowns/1front.JPG" alt="Los Angeles" />
                
              </div>
              <div className="item">
                  <img src="images/images/gowns/1Lside.JPG" alt="Chicago" />
                    
              </div>
              <div className="item">
                <img src="images/images/gowns/1Rside.JPG" alt="New York" />
                
              </div>

              <div className="item">
                <img src="images/images/gowns/1back.JPG" alt="New York" />
               
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


                {/* end display for mobile */}


              <div className="col-md-7 col-sm-7">
                <div > 
                  <h4 style={{fontSize:'25px',fontWeight:700,textAlign:'initial'}}>Organic Steel Grey Gown with Net Work</h4>   
                </div>
                <div style={{marginTop:15}}>
                      <strong style={{textAlign:'initial',color: '#7d7d7d',fontSize:15}}>Product Id : <span>79654#1</span></strong>
                </div>
                <div style={{marginTop:15}}>
                  <h6 style={{textAlign:'initial',fontSize:20,fontWeight:'700'}}>Rs.10495/- </h6>
                </div>
                <div className="sizeChart-wrap">
                    <div className="sizeChart">
                      <a className="sizeChart_pp" href="javascript:void(0)">Size Chart</a>
                    </div>
                    <div className="blouseChart">
                    </div>
                </div>
                <div className="rating1" style={{marginBottom:15}}>
                    <span className="starRating">
                      <input id="rating5" type="radio" name="rating" defaultValue={5} />
                      <label htmlFor="rating5">5</label>
                      <input id="rating4" type="radio" name="rating" defaultValue={4} />
                      <label htmlFor="rating4">4</label>
                      <input id="rating3" type="radio" name="rating" defaultValue={3} defaultChecked />
                      <label htmlFor="rating3">3</label>
                      <input id="rating2" type="radio" name="rating" defaultValue={2} />
                      <label htmlFor="rating2">2</label>
                      <input id="rating1" type="radio" name="rating" defaultValue={1} />
                      <label htmlFor="rating1">1</label>
                    </span>
                  </div>
               <div className="row">
                  <div className="col-md-5 col-xs-6">
                      <span style={{color: '#9c9898',fontWeight: 500,fontSize: 17}}>Select Size</span>
                    </div>
                    <div className="col-md-4 col-xs-6">
                        <select name="options[180592]" id="select_180592" className="select product-custom-option admin__control-select" title data-selector="options[180592]" placeholder="Enter neckline length">
                          <option value>-- Please Select --</option>
                          <option value={1813592} price={0}>US 0</option>
                          <option value={1813593} price={0}>US 2</option>
                          <option value={1813594} price={0}>US 4</option>
                          <option value={1813595} price={0}>US 6</option>
                          <option value={1813596} price={0}>US 8</option>
                          <option value={1813597} price={0}>US 10</option>
                          <option value={1813597} price={0}>US 12</option>
                          <option value={1813597} price={0}>US 14</option>
                          <option value={1813597} price={0}>US 16</option>
                          <option value={1813597} price={0}>US 17</option>
                          <option value={1813597} price={0}>US 18</option>
                          <option value={1813597} price={0}>US 19</option>
                          <option value={1813597} price={0}>US 20</option>
                          <option value={1813597} price={0}>US 21</option>
                        </select>
                    </div>
               </div>


               <div className="row" style={{paddingTop:15}}>
                  <div className="col-md-5 col-xs-6">
                      <span style={{color: '#9c9898',fontWeight: 500,fontSize: 17}}>Padding Required ?</span>
                    </div>
                    <div className="col-md-4 col-xs-6">
                      <div style={{display:'flex'}}>
                        <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                              <label className="form-check-label custom_label_style" htmlFor="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                              <label className="form-check-label custom_label_style" htmlFor="inlineRadio2">No</label>
                        </div>
                      </div>
                    </div>
               </div>
                    
              

               <div className="row" style={{paddingTop:15}}>
                  <div className="col-md-5 col-xs-6">
                      <span style={{color: '#9c9898',fontWeight: 500,fontSize: 17}}>Select Your Height (Including heels)</span>
                    </div>
                    <div className="col-md-4 col-xs-6">
                        <select name="options[180592]" id="select_180592" className="select product-custom-option admin__control-select" title data-selector="options[180592]" placeholder="Enter neckline length">
                        <option value="">-- Please Select --</option>
                          <option value="1806728" price="0">4 feet 5 inch  (134 cm)</option>
                          <option value="1806729" price="0">4 feet 6 inch  (137 cm)</option>
                          <option value="1806730" price="0">4 feet 7 inch  (140 cm)</option>
                          <option value="1806731" price="0">4 feet 8 inch  (142 cm)</option>
                          <option value="1806732" price="0">4 feet 9 inch  (145 cm)</option>
                          <option value="1806733" price="0">4 feet 10 inch  (147 cm)</option>
                          <option value="1806734" price="0">4 feet 11 inch  (150 cm)</option>
                          <option value="1806735" price="0">5 feet 0 inch  (152 cm)</option>
                          <option value="1806736" price="0">5 feet 1 inch  (155 cm)</option>
                          <option value="1806737" price="0">5 feet 2 inch  (157 cm)</option>
                          <option value="1806738" price="0">5 feet 3 inch  (160 cm)</option>
                          <option value="1806739" price="0">5 feet 4 inch  (162 cm)</option>
                          <option value="1806740" price="0">5 feet 5 inch  (165 cm)</option>
                          <option value="1806741" price="0">5 feet 6 inch  (168 cm)</option>
                          <option value="1806742" price="0">5 feet 7 inch  (170 cm)</option>
                          <option value="1806743" price="0">5 feet 8 inch  (173 cm)</option>
                          <option value="1806744" price="0">5 feet 9 inch  (175 cm)</option>
                          <option value="1806745" price="0">5 feet 10 inch  (178 cm)</option>
                          <option value="1806746" price="0">5 feet 11 inch  (180 cm)</option>
                          <option value="1806747" price="0">6 feet 0 inch  (183 cm)</option>
                        </select>
                    </div>
               </div>
                

               <div className="row" style={{paddingTop:15}}>
                  <div className="col-md-5 col-xs-6">
                      <span style={{color: '#9c9898',fontWeight: 500,fontSize: 17}}>Select Neckline Length</span>
                    </div>
                    <div className="col-md-4 col-xs-6">
                        <select name="options[180592]" id="select_180592" className="select product-custom-option admin__control-select" title data-selector="options[180592]" placeholder="Enter neckline length">
                        <option value="">-- Please Select --</option>
                          <option value="1806728" price="0">5"</option>
                          <option value="1806729" price="0">6"</option>
                          
                        </select>
                    </div>
               </div>

               <div className="row" style={{paddingTop:15}}>
                  <div className="col-md-5 col-xs-6">
                      <span style={{color: '#9c9898',fontWeight: 500,fontSize: 17}}>Select Sleeve Length</span>
                    </div>
                    <div className="col-md-4 col-xs-6">
                        <select name="options[180592]" id="select_180592" className="select product-custom-option admin__control-select" title data-selector="options[180592]" placeholder="Enter neckline length">
                        <option value="">-- Please Select --</option>
                          <option value="1806728" price="0">Elbow Sleeves</option>
                          <option value="1806729" price="0">Three Fourth Sleeves</option>
                          <option value="1806729" price="0">Full Sleeves</option>
                          
                        </select>
                    </div>
               </div>

               <div className="row" style={{paddingTop:15}}>
                  <div className="col-md-5 col-xs-6">
                      <span style={{color: '#9c9898',fontWeight: 500,fontSize: 17}}>Back Open</span>
                    </div>
                    <div className="col-md-4 col-xs-6">
                      <div style={{display:'flex'}}>
                        <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio1" defaultValue="option1" />
                              <label className="form-check-label custom_label_style" htmlFor="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="inlineRadioOptions2" id="inlineRadio2" defaultValue="option2" />
                              <label className="form-check-label custom_label_style" htmlFor="inlineRadio2">No</label>
                        </div>
                      </div>
                    </div>
               </div>


               <div className="row cart_btn_row">
                  <div className="col-md-4 col-xs-5">
                  <Link to="/cart" ><button type="submit" className="add_to_cart_btn" defaultValue="SEND MESSAGE">Add To Cart</button></Link>
                    </div>
                    <div className="col-md-4 col-xs-5">
                    <Link to="/checkout" > <button type="submit" className="buy_now_btn" defaultValue="SEND MESSAGE" > Buy Now</button></Link>
                    </div>
                    <div className="col-md-4 col-xs-2">
                          <div className="wishlist_icon_div">
                            <a href="#"><i className="fa fa-heart-o wishlish_icon"></i></a>
                          </div>
                    </div>
               </div>
               <hr></hr>

               <div className="row" style={{paddingTop:15,paddingBottom:15}}>
                  <div className="col-md-4 col-xs-6">
                    <div className="row">  
                      <div className="col-md-3 col-xs-2">
                            <img src="images/quality-assurance.png" /> 
                      </div>
                      <div className="col-md-8 col-xs-9">
                          <span style={{color:'#000'}}>Assured Quality</span>
                      </div>
                    </div>
                      
                    </div>
                    <div className="col-md-4 col-xs-6">
                      <div className="row">  
                          <div className="col-md-3 col-xs-2">
                                <img src="images/puzzle.png" /> 
                          </div>
                          <div className="col-md-8 col-xs-9">
                              <span style={{color:'#000'}}>Custom Fitting</span>
                          </div>
                      </div>
                   
                    </div>
                    <div className="col-md-4 col-xs-12 exclusive_collection">
                        <div className="row">  
                          <div className="col-md-3 col-xs-1">
                                <img src="images/exclusive.png" /> 
                          </div>
                          <div className="col-md-9 col-xs-9">
                                <span style={{color:'#000'}}>Exclusive Collection</span>
                          </div>
                        </div>
                   
                   
                    </div>
               </div>
               <hr></hr>

               <div className="row" style={{paddingTop:15}}>
                  <div className="col-md-3 col-xs-4">
                  <span className="delivery_options">Delivery Options</span>
                    </div>
                    <div className="col-md-4 col-xs-5">
                        <input type="number" className="form-control" placeholder="Check e.g 416012" />
                    </div>
                    <div className="col-md-2 col-xs-3">
                        <button type="submit" className="pin_code_check">Check</button>
                    </div>
               </div>


              </div>
              {/* Second half page of product detail page */}
              <div className="clearfix" style={{marginBottom:50}}> </div>			
            </div>
          </div>
        </div>
     


      <div className="container">
            <div className="row">
                  <div className="col-md-12">
                         <ul class="nav nav-tabs"> 
                            <li class="active"><a data-toggle="tab" style={{ padding:14}} href="#home">MORE DETAILS</a></li>
                            <li><a data-toggle="tab" href="#menu1" style={{ padding:14}}>RETURN POLICY</a></li>
                            <li><a data-toggle="tab"  href="#menu2" style={{ padding:14}}>KEY SPECIFICATIONS</a></li>
                            <li><a data-toggle="tab"  href="#menu3" style={{ padding:14}}>FAQ</a></li>
                          </ul>


                            <div class="tab-content">
                                <div id="home" class="tab-pane fade in active">
                                      <div className="row">
                                        <div className="col-md-12">
                                        <ul>
                                            <li>
                                              <p className="more_details">Crafted with illusion neckline and Attached Cape</p>
                                            </li>
                                            <li>
                                              <p className="more_details">It has a side zip closure.</p>
                                            </li>
                                            <li>
                                              <p className="more_details">This piece comes with padding.</p>
                                            </li>
                                            <li>
                                              <p className="more_details">Present neckline length is 6.5” and is boat neck.</p>
                                            </li>
                                            <li>
                                              <p className="more_details">WASH CARE INSTRUCTION: Dry clean only.</p>
                                            </li>
                                            <li>
                                              <p className="more_details">Slight variation in color is possible due to digital
                                                photography.</p>
                                            </li>
                                            <li>
                                              <p className="more_details">Being rewarded as the most trusted brand our customers too
                                                believe we deliver same styles as promised on the website.
                                              </p>
                                            </li>
                                          </ul>
                                        </div>
                                      </div> 
                                 
                                </div>
                                <div id="menu1" class="tab-pane fade">
                                <div className="row" style={{marginTop:10}}>
                                        <div className="col-md-12">
                                              
                                              <p className="faq_para">We are committed to ensure 100% Purchase Protection for customers by offering genuine products, secure payments and easy returns for items</p>
                                        </div>
                                      </div> 
                                      <div className="row" style={{marginTop:10}}>
                                        <div className="col-md-12">
                                             <Link to="/faq" style={{cursor:'pointer'}}><span>Read More</span></Link>
                                        </div>
                                      </div> 
                                
                                </div>
                                <div id="menu2" class="tab-pane fade">
                                  
                                <div className="row">
                                        <div className="col-md-12">
                                        <ul>
                                            <li>
                                              <p className="more_details">Color: Green</p>
                                            </li>

                                            <li>
                                              <p className="more_details">Fabric: Sequins</p>
                                            </li>
                                            <li>
                                              <p className="more_details">Work: Embroidery, Beads, Handwork, Sequins</p>
                                            </li>
                                            <li>
                                              <p className="more_details">Design manufacturing & Packaging under Saurabhakti Goods Pvt ltd</p>
                                            </li>
                                            
                                          </ul>
                                        </div>
                                      </div> 
                                </div>
                                <div id="menu3" class="tab-pane fade">
                                  
                                      <div className="row" style={{marginTop:10}}>
                                        <div className="col-md-12">
                                              <h5 className="faq_heading">Assumenda Est Cliche Reprehenderit?</h5>
                                              <p className="faq_para">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                                        </div>
                                      </div> 
                                      <div className="row" style={{marginTop:10}}>
                                        <div className="col-md-12">
                                             <Link to="/faq" style={{cursor:'pointer'}}><span>Read More</span></Link>
                                        </div>
                                      </div> 

                                </div>
                            </div>
                  </div>
            </div>
            
      </div>



     


<Footer />


        
      

      {/* <div className='container' style={{marginTop:20,marginBottom:20}}>
        <div className='row'>
          <div className='col-md-4'>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
                 
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                    <li data-target="#myCarousel" data-slide-to={3} />
                  </ol>
                 
                  <div className="carousel-inner">
                          <div className="item active">
                            <div id="product-image">

                          <a href="images/images/gowns/2-1BackCloseUp(6).JPG">
                            <img className="cloudzoom" src="images/images/gowns/2-1BackCloseUp(6).JPG" alt="" data-cloudzoom="
                          zoomPosition:'inside',
                          zoomOffsetX:0,
                          zoomFlyOut:false,
                          variableMagnification:false,
                          disableZoom:'auto',
                          touchStartDelay:100,
                          propagateGalleryEvent:true
                        " />
                          </a>
                        </div>
                  </div>
                <div className="item">
                    <div id="product-image">
                    <a href="images/images/gowns/2-1BackCloseUp(4).JPG">
                      <img className="cloudzoom" src="images/images/gowns/2-1BackCloseUp(4).JPG" alt="" data-cloudzoom="
                    zoomPosition:'inside',
                    zoomOffsetX:0,
                    zoomFlyOut:false,
                    variableMagnification:false,
                    disableZoom:'auto',
                    touchStartDelay:100,
                    propagateGalleryEvent:true
                  " />
                    </a>
                  </div>
              </div>
                <div className="item">
                  <div id="product-image">
                    <a href="images/images/gowns/2-1BackCloseUp(3).JPG">
                      <img className="cloudzoom" src="images/images/gowns/2-1BackCloseUp(3).JPG" alt="" data-cloudzoom="
                    zoomPosition:'inside',
                    zoomOffsetX:0,
                    zoomFlyOut:false,
                    variableMagnification:false,
                    disableZoom:'auto',
                    touchStartDelay:100,
                    propagateGalleryEvent:true
                  " />
                    </a>
                  </div>
                </div>


                <div className="item">
                  <div id="product-image">
                    <a href="images/images/gowns/2-1BackCloseUp(2).JPG">
                      <img className="cloudzoom" src="images/images/gowns/2-1BackCloseUp(2).JPG" alt="" data-cloudzoom="
                    zoomPosition:'inside',
                    zoomOffsetX:0,
                    zoomFlyOut:false,
                    variableMagnification:false,
                    disableZoom:'auto',
                    touchStartDelay:100,
                    propagateGalleryEvent:true
                  " />
                    </a>
                  </div>
                </div>
        </div>
                
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>
      </div>

      <div className="row" style={{marginTop:10}}>
        <div className="col-md-12">
                  <div className="col-md-3">
                     <img src="images/images/gowns/2-1BackCloseUp(6).JPG" onClick={sliderImageChange} />
                  </div>
                  <div className="col-md-3">
                  <img src="images/images/gowns/2-1BackCloseUp(4).JPG" onClick={sliderImageChange} />
                  </div>
                  <div className="col-md-3">
                  <img src="images/images/gowns/2-1BackCloseUp(3).JPG" />
                  </div>
                  <div className="col-md-3">
                  <img src="images/images/gowns/2-1BackCloseUp(2).JPG" />
                  </div>
        </div>

      </div>



        </div>
          </div>
        </div> */}


    </>
  )
}

export default ProductDetails
