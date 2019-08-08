import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (

            <div className="what-we-do about padding-top-sm bg">
            <div id="section2" className="noneBlock"></div>
            <div className="container">
               <div className="theme-title-one text-center">                     
                  <h2>About US</h2>
          <p>ProduceDash is a online fresh produce delivery service. We work with local farmers to bring you fresh produce directly from the farms at a reasonable and afforable price.</p>
               </div>
               <div className="row">
                  <div className="col-md-4 col-xs-12 wow fadeInUp">
                     <div className="single-block tran3s">
                        <div className="icon"><i className="zmdi zmdi-phone zmdi-hc-fw"></i></div>
                        <h6>24/7 Support</h6>
            <p>Apps that are not preinstalled are usually available through distribution platforms called app stores.</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-xs-12 wow fadeInUp" data-wow-delay="0.1s">
                     <div className="single-block tran3s">
                        <div className="icon"><i className="zmdi zmdi-lock zmdi-hc-fw"></i></div>
                        <h6>Data Privacy</h6>
                        <p>Apps that are not preinstalled are usually available through distribution platforms called app stores.</p>
                     </div>
                  </div>
                  <div className="col-md-4 col-xs-12 wow fadeInUp" data-wow-delay="0.150s">
                     <div className="single-block tran3s">
            <div className="icon"><i className="zmdi zmdi-download zmdi-hc-fw"></i></div>
                        <h6>Easy Download</h6>
                        <p>Apps that are not preinstalled are usually available through distribution platforms called app stores.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
        )
    }
}

export default About
