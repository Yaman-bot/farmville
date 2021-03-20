import React, { Component } from 'react';
import Farmer from '../assets/farmer1.gif'

class App extends Component {
    render() {
        return (
            <>
                <div class="details-container">
                    <h1 className="section-head mt-5 fs-1 text-center"><i class="fas fa-arrow-circle-down"></i> Who We Are</h1>

                    <div className="details-text ml-5">
                        <div className="details item-align-left m-5 " >
                            <h3 className="text-center">India's Only De-centralized WebApp for FARMERS</h3>
                            <p className="desc text-center "> Our platform provides the facility of funding initial costs for producing crops via Crowd-Funding.</p>
                        </div>
                        <img className="timeline-img item-align-right m-5" src={Farmer} />
                    </div>
                </div>
            </>
        );

    }
}

export default App;