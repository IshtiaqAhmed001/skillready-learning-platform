import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faClock, faMailBulk, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';




const Contact = () => {
    // font awesome icons 
    const phone = <FontAwesomeIcon icon={faPhone} />;
    const email = <FontAwesomeIcon icon={faMailBulk} />;
    const clock = <FontAwesomeIcon icon={faClock} />;
    const location = <FontAwesomeIcon icon={faMapMarker} />;
    return (
        <div>
            <div>
                <h1 className="display-4 fw-bold page-title my-5">Contact Us</h1>
                <div className="d-flex justify-content-around">
                    <div className="w-50 mx-auto ">
                        <Form className="border border-2 p-4 m-4">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="your name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="your email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div className="text-start">
                                <Button className="msg-btn" >Send Message </Button>
                            </div>
                        </Form>
                    </div>
                    <div className="side-menu p-2 mx-auto mb-5">
                        <div className="menu-items mb-4">
                            <div className="d-flex">
                                <div>
                                    <h3 className="me-2 icons">{location}</h3>
                                </div>
                                <div>
                                    <h3>Office</h3>
                                </div>
                            </div>
                            <div className="text-start ms-5">
                                <h6>Baridhara,Dhaka</h6>
                                <h6>Bangladesh</h6>
                            </div>
                        </div>
                        <div className="menu-items mb-4">
                            <div className="d-flex">
                                <div>
                                    <h3 className="me-2 icons">{clock}</h3>
                                </div>
                                <div>
                                    <h3>Opening Hours</h3>
                                </div>
                            </div>
                            <div className="text-start ms-5">
                                <h6>Sunday-Thursday</h6>
                                <h6>9:00AM - 10:00PM</h6>
                            </div>
                        </div>
                        <div className="menu-items mb-4">
                            <div className="d-flex">
                                <div>
                                    <h3 className="me-2 icons">{email}</h3>
                                </div>
                                <div>
                                    <h3>Email</h3>
                                </div>
                            </div>
                            <div className="text-start ms-5">
                                <h6>ishtiaq.wasi@gmail.com</h6>
                            </div>
                        </div>
                        <div className="menu-items mb-4">
                            <div className="d-flex">
                                <div>
                                    <h3 className="me-2 icons">{phone}</h3>
                                </div>
                                <div>
                                    <h3>Phone</h3>
                                </div>
                            </div>
                            <div className="text-start ms-5">
                                <h6>+8801234568</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;