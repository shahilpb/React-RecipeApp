import React, { Component } from 'react'

export default class Marketing extends Component {
    render() {
        return (
            <div className="what-we-do download download-section bg-red" id="download">
              
            <div className="container">
           <div className="theme-title-one text-center text-white">                     
              <h2>Our App Available On</h2>
              <p>Writers and stars of Veep have responded incredulously to the news an Australian politician required preinstalled stitches way email client, calendar, mapping program.</p>
           </div>
            <div className="row">
              
              <div className="col-sm-6 text-right download-mobile">
              <img src="images/download-mobile-img.png" alt="mobilephoto"/>
              </div>
              <div className="col-sm-6">
              <div className="content">
                
              
                  <a href="javascript:;" className="tran3s wow fadeInLeft animated button-two" data-wow-delay="0.45s"><i className="zmdi zmdi-apple zmdi-hc-fw" aria-hidden="true"></i>Get It From <span>Appstore</span></a>
                <a href="javascript:;" className="tran3s wow fadeInRight animated button-two" data-wow-delay="0.45s"><i className="zmdi zmdi-google-play zmdi-hc-fw "></i>Get It From <span>Playstore</span></a>
              </div>
              </div>		     
            </div>
            </div>
        </div>
        )
    }
}
