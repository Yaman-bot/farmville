import React, { Component } from 'react';
import tractor from '../assets/tractor2.gif';
class Contact extends Component {
    render() {
        return (
            <> 
                <section className="section bg-dark section-footer-1">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-6">
                                
                                <h1 id="contact-head" className="block mb-3 "><i class="fas fa-phone-square-alt"></i> Contact Us</h1>
                                <img className="m-1 inline-block"src={tractor} />
                                <p className="mx-5  bold-raleway fs-3 text-white">FarmVille</p>
                                <p className="text-muted  mx-5 inline-block">FarmVille makes it easier for farmer as well as user to get the things of their need.</p>
                            </div>

                            <div className="col-md-4 offset-md-2">
                                <h5 className="text-white fs-5 mt-5  mx-5 ">Any Issue?</h5>
                                <ul className="footer-links mx-5  ">
                                    <li><a href="../docs/index.html" target="_blank">Customer Care</a></li>
                                    <li><a target="_blank" href="https://themeforest.net/item/ubold-responsive-web-app-kit/13489470/support">SupportUs</a></li>
                                    <li><a target="_blank" href="../docs/changelog.html">Complaint</a></li>

                                </ul>
                                <p className="text-muted mt-5 mx-5 ">Not found what you are a looking for?<br/>
                                Mail Us at: farmville.support@gmail.com</p>
                            
                            </div>

                        </div>

                        <div className="row mt-5">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <p className="text-muted mb-0">© 2021-FarmVille.Made in India.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Contact;