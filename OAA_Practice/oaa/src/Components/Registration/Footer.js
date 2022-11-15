import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import "./RegNavBar.css";
import { FaTwitter,FaFacebook,FaLinkedin,FaHandHoldingMedical } from 'react-icons/fa'

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="bg-footer custom-footer">
                    <div className="pb-4">
                        <div>
                            <Row>
                                    <div className="my-4">
                                        <h5 className="text-white text-center mt-2 pt-1">Get your medicines soon from <span className="logo-color" >HERBAL-MEDICS</span></h5>
                                    </div>
                            </Row>
                        </div>

                        <Row className='justify-content-between'>
                            <Col lg={4}>
                                <div className="text-white ms-4 float-start">
                                    <h6 className="text-uppercase f-16">ABOUT COMPANY</h6>
                                    <p className="mt-3 pt-2 mb-2 ">We focus on Simplifying healthcare & Impacting lives! </p>
                                    <br></br>
                                    <FaHandHoldingMedical className="me-2 logo-color" style={{fontSize: 45}} /> HERBAL-MEDICS
                                </div>
                            </Col>


                            <Col lg={5}>
                                <div className="float-end me-1">
                                    <h6 className="text-white text-uppercase f-16">LOCATE US</h6>
                                    <ul className="list text-white mt-3 pt-2 mb-0">
                                        <li className="list-item">
                                        381,5th block, Srinivas Nagar, Bangalore, India
                                        </li>
                                        <li className="list-item">
                                            herbalmedics@gmail.com
                                        </li>
                                        <li className="list-item">
                                        +91 967 896 2448<br />+91 967 896 2449
                                        </li>
                                        <li className="list-item">
                                            Office Time : 8:00 a.m - 6:00 p.m
                                        </li>
                                    </ul>
                                </div>
                            </Col>

                            <Col lg={3}>
                                <div className="float-end me-5">
                                    <h6 className="text-white text-uppercase f-16">STAY IN TOUCH</h6>
                                    <ul className="list-inline text-white footer-social mb-0"  style={{fontSize: 40}}>
                                    <li className="list-inline-item me-3" >
                                        <Link to ="#" style={{ color: 'white' }}>
                                            <FaLinkedin />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item me-3">
                                        <Link to="#" style={{ color: 'white' }}>
                                            <FaFacebook />
                                        </Link>
                                    </li>
                                    <li className="list-inline-item me-3">
                                        <Link to="#" style={{ color: 'white' }}>
                                            <FaTwitter />
                                        </Link>
                                    </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;