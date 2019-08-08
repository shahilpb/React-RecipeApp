import React, { Component } from 'react'

export default class FooterBar extends Component {
	
    render() {
		var style = {
			color: "#ffffff"
		  };
        return (
            <footer className="footer">
	    <div className="container">
		<div className="row">
		    <div className="col-md-6">
			<p className="copy">Copyright © 2019 Produce Dash, All rights Reserved. 
            <a href="https://www.peerbits.com/" rel="noopener noreferrer" target="_blank" style={style}>Peerbtis</a></p>
		    </div>
		    <div className="col-md-6 text-right footer-content">
		
			<div className="social-icon">
			    <a href="https://www.facebook.com" className="fa fa-facebook"></a>
			    <a href="javascript:void(0)" className="fa fa-twitter"></a>
			    <a href="javascript:void(0)" className="fa fa-instagram"></a>
			    <a href="javascript:void(0)" className="fa fa-google"></a>
			</div>
		    </div>
		</div>
		
	    </div>
	 </footer>
        )
    }
}
