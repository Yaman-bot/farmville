import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <>
                <div id="below-carousel-container">
                </div>
                <div id="testimonials">
                    <div className=" row row-cols-1 row-cols-md-3 g-3">
                        <div className="col ">
                            <div className="card m-5" style={{ width: '22rem' }}>
                                <img src="farmer-testimonial.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title bold-raleway fs-1 text-center">Mr. Ramesh K.</h5>
                                    <p className="card-text text-center">"FarmVille has not only helped me to raise money but has also freed me from shackles
              of moneylenders."</p>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card m-5" style={{ width: '22rem' }}>
                                <img src="farmer-testimonial3.jpg" className="card-img-top" alt />
                                <div className="card-body">
                                    <h5 className="card-title bold-raleway fs-1 text-center">The Hindu.</h5>
                                    <p className="card-text text-center ">"A great initiative in the field of agriculture coming at times of distress among
                                    farmers.
                                    Great initiative taken by young minds".
            </p>
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="card m-5" style={{ width: '22rem' }}>
                                <img src="farmer-testimonial2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title bold-raleway fs-1 text-center">Mr. Balaji S.</h5>
                                    <p className="card-text text-center">"You people helped me as well as my fellow farmers in my village to fund the initial
                                    expenses of growing crops, also the process is easy and fast, you people are a ignition for the
                                            revolution of farming in India."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Card