import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <div id="section3"  className="what-we-do features bg-red">
                <div  className="noneBlock"></div>
               <div className="container">
                  <div className="theme-title-one text-center text-white">                     
                     <h2>Features</h2>
		     <p>Writers and stars of Veep have responded incredulously to the news an Australian politician required preinstalled stitches way email client, calendar, mapping program.</p>
                  </div>
                  <div className="row">
                     <div className="col-md-4 col-xs-12 wow fadeInUp">
                        <div className="single-block tran3s text-white">
                           <div className="icon-two"><i className="zmdi zmdi-map zmdi-hc-fw"></i></div>
                           <h6>Fresh Produce</h6>
			   <p>The produce is sourced locally from the farmers with no middlemen</p>
                        </div>
                     </div>
                     <div className="col-md-4 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="single-block tran3s text-white">
                           <div className="icon-two"><i className="zmdi zmdi-favorite zmdi-hc-fw"></i></div>
                           <h6>Free Delivery</h6>
                           <p>Delivery is free on delivered on the same day within 4 hours</p>
                        </div>
                     </div>
                     <div className="col-md-4 col-xs-12 wow fadeInUp" data-wow-delay="0.150s">
                        <div className="single-block tran3s text-white">
			   <div className="icon-two"><i className="zmdi zmdi-shopping-cart zmdi-hc-fw"></i></div>
                           <h6>Returns</h6>
                           <p>You can return any produce free of charge with no obligation</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
	    
        )
    }
}
