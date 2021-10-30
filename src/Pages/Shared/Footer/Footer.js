import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <div>
            <div className='footer-container'>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h6>About</h6>
                                <p className="text-justify">private health Ltd. , a private limited company a trusted name in medical services has started its operation in January, 2016. It is well equipped and is manned by qualified professionals. Our aim is to provide top-notch healthcare services under one roof and bring a revolution in the world of healthcare by providing advance medical services with utmost care and vigilance. </p>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Categories</h6>
                                <ul className="footer-links">
                                    <li><a href="#/">All Packeg</a></li>
                                    <li><a href="#/">Special</a></li>
                                    <li><a href="#/">International</a></li>
                                    <li><a href="#/">Local</a></li>
                                    <li><a href="#/">VIP</a></li>
                                    <li><a href="#/">Simple</a></li>
                                </ul>
                            </div>

                            <div className="col-xs-6 col-md-3">
                                <h6>Quick Links</h6>
                                <ul className="footer-links">
                                    <li><a href="#/">About Us</a></li>
                                    <li><a href="#/">Contact Us</a></li>
                                    <li><a href="#/">Contribute</a></li>
                                    <li><a href="#/">Privacy Policy</a></li>
                                    <li><a href="#/">Sitemap</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                    Tusher Goon Health care
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><i className="fab fa-facebook"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer >
            </div >
        </div>
    );
};

export default Footer;