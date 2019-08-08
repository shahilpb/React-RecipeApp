import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div  className="home-banner-mian home">
                   <div id="section1" className="noneBlock"></div>
      <div className="container">
   <div className="home-banner-innner clearfix">
      <div className="row">
   <div className="col-md-5">
      <div className="home-banner-img">
     <img src="images/banner-shape.png" alt=""/>
      </div>
   </div>
   <div className="col-md-7">
      <div className="home-banner-innner-left">
      <h1 className="wow fadeInUp animated text-white">Farm Fresh produce at<br/> your doorstep</h1>
      <p className="wow fadeInUp animated text-white" >ProduceDash is a mobile app for
       ordering fresh produce<br/> sourced from local farmers</p>
      <a href="javascript:;" className="tran3s wow fadeInLeft animated button-two" data-wow-delay="0.45s">
        <i className="zmdi zmdi-apple zmdi-hc-fw" aria-hidden="true"></i>
        Get It From <span>Appstore</span>
        </a>

      <a href="javascript:;" className="tran3s wow fadeInRight animated button-two" data-wow-delay="0.45s">
        <i className="zmdi zmdi-google-play zmdi-hc-fw "></i>
        Get It From <span>Playstore</span>
        </a>

      </div>   
   </div>			
      </div>
   </div>
   
      </div>
   </div>
        )
    }
}
