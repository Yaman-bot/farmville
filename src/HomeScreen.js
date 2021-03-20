import React, { Component } from 'react'
import Carousel from './components/Carousel'
import Farmer from './components/Farmer'
import Working from './components/howItWorks'
import Contact from './components/Contact'
import Card from './components/Card'

class HomeScreen extends Component {
    render() {
        return (
            <>
                <Carousel />
                <Farmer />
                <Working />
                <Card />
                <Contact />
            </>
        )
    }
}

export default HomeScreen;