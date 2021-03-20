import React, { Component } from 'react'

class Carousel extends Component {
    render() {
        return (
            <>
                <div style={{ backgroundColor: 'black' }} id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to={2} aria-label="Slide 3" />
                        <button type="button" data-bs-target="#carousel" data-bs-slide-to={3} aria-label="Slide 4" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={5000}>
                            <img src="slide1.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block ">
                                <h1 className="animate__animated animate__fadeInLeftBig">We are <span className="bold-raleway">PROVIDERS...</span>
                                </h1>
                                {/* <p>Some representative placeholder content for the first slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={5000}>
                            <img src="slide2.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="animate__animated animate__zoomIn">We are <span className="bold-raleway">STRONG...</span></h1>
                                {/* <p>Some representative placeholder content for the second slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={5000}>
                            <img src="slide3.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="animate__animated animate__flash">We want to make India <span className="bold-raleway">STRONGER...</span></h1>
                                {/* <p>Some representative placeholder content for the third slide.</p> */}
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={7000}>
                            <img src="slide4.jpg" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h1 className="animate__animated animate__jackInTheBox">We are <span className="bold-raleway">FARMERS...</span></h1>
                                {/* <p>Some representative placeholder content for the third slide.</p> */}
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </>
        )
    }
}

export default Carousel;