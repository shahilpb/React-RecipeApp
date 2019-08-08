import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';

export default class NavBar extends Component {


    render() {
        return (
            <nav className="theme-main-header navbar">
                <a className="logo float-left" href="index.php">  <img src="../images/logo.png" alt="Logo" /></a>
                <div className="float-left">
                    <ul className="button-group float-right">
                        <li className="nav-item"><HLink className="js-anchor-link-1 nav-link" to="/#section1" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })}>Home</HLink></li>
                        <li className="nav-item"><HLink className="js-anchor-link-2 nav-link"  to="/#section2" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>About</HLink></li>
                        <li className="nav-item"><HLink className="js-anchor-link-3 nav-link" to="/#section3" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })}>Features</HLink></li>
                        <li className="nav-item"><Link className="js-anchor-link-4 nav-link" to="/Recipe">Recipes</Link></li>
                        <li className="nav-item"><HLink className="js-anchor-link-5 nav-link" to="/#section5" scroll={el => el.scrollIntoView({ behavior: 'smooth',   block: 'nearest' })}>Contact</HLink></li>

                        {/* <li className="nav-item"><a href="#section5" className="js-anchor-link-5 nav-link">Contact</a></li> */}
                    </ul>
                </div>
            </nav>
            //    <header className="theme-main-header navbar">
            //     <div className="container">
            //        <div className="menu-wrapper clearfix">
            //           <div className="logo float-left"><a href="index.php">
            //               <img src="images/logo.png" alt="Logo"/></a></div>
            //           <ul className="button-group float-right">
            //              <li className="nav-item"><a href="#section1" className="js-anchor-link-1 nav-link">Home</a></li>
            //              <li className="nav-item"><a href="#section2" className="js-anchor-link-2 nav-link">About</a></li>
            //  <li className="nav-item"><a  href="#section3" className="js-anchor-link-3 nav-link">Features</a></li>
            //  <li className="nav-item"><a href="#section4" className="js-anchor-link-4 nav-link">Screenshot</a></li>
            //  <li className="nav-item"><a  href="#section5" className="js-anchor-link-5 nav-link">Contact</a></li>
            //           </ul>



            //        </div>
            //     </div>
            //  </header> 
        )
    }
}
