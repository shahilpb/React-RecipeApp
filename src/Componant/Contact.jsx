import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div id="section5" className="what-we-do contact-us contact-us-section">
                 <div  className="noneBlock"></div>
            <div className="container">
       <div className="theme-title-one text-center">                     
         <h2>Contact</h2>
         <p>We love to hear any feedback and suggestions. For any kind of questions, you can write to us and we will get back to you immediately</p>
          </div>
               <div className="row">		     
                  <div className="col-lg-5 col-xs-12 pull-right">
         <div className="location-details">
            <ul className="list-unstyled mb-3">
               <li><i className="zmdi zmdi-map zmdi-hc-fw"></i>Location: <span>Hyderabad,India</span></li>
               <li><i className="zmdi zmdi-phone zmdi-hc-fw"></i>Call: <span><a href="tel:+917569547263">+91 75695 47263</a></span></li>
               <li><i className="zmdi zmdi-email zmdi-hc-fw"></i>Email: <span><a href="mailto:info@producedash.com">info@producedash.com</a></span></li>			   
            </ul>   
         </div>
                     
                  </div>
                  <div className="col-lg-7 col-xs-12">
                     <form action="https://creativegigs.net/html/faster/html/inc/sendemail.php" className="contact-us-form form-validation" auto-complete="off">
            <input type="email" placeholder="Name" name="email"/>
                        <input type="text" placeholder="Email" name="sub"/>
                        <textarea placeholder="Your Message" name="Your Message"></textarea>
                        <div className="theme-button">
                           <span></span>
                           <input type="submit" value="Send Message"/>
                        </div>
                     </form>
                     <div className="alert-wrapper" id="alert-success">
                        <div id="success">
                           <button className="closeAlert"><i className="fa fa-times" aria-hidden="true"></i></button>
                           <div className="wrapper">
                              <p>Your message was sent successfully.</p>
                           </div>
                        </div>
                     </div>
                     <div className="alert-wrapper" id="alert-error">
                        <div id="error">
                           <button className="closeAlert"><i className="fa fa-times" aria-hidden="true"></i></button>
                           <div className="wrapper">
                              <p>Sorry!Something Went Wrong.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        )
    }
}
