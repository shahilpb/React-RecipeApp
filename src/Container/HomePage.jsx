import React, { Component } from 'react'
import Banner from '../Componant/Banner';
import About from '../Componant/About';
import Features from '../Componant/Features';
import Contact from '../Componant/Contact';
import Marketing from '../Componant/Marketing';
import FooterBar from '../Componant/FooterBar';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Banner />
                <About />
                <Features />
                <Contact />
                <Marketing />
                <FooterBar />
            </div>
        )
    }
}
