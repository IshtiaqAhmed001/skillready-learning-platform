import './Contact.css';

import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Arrow90degDown, EnvelopeFill, House, PhoneFill } from 'react-bootstrap-icons';




const Contact = () => {
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
                    <div className="mx-auto">
                        <div className="details-item">
                            <div className="d-flex align-items-center">
                                <House className="display-5 me-2"></House>
                                <h3>Office</h3>
                            </div>
                            <p className="fw-light ms-2">Baridhara,Dhaka,Bangladesh</p>
                        </div>
                        <div className="details-item">
                            <div className="d-flex align-items-center">
                                <House className="display-6 me-2"></House>
                                <h3>Opening Hours</h3>
                            </div>
                            <p className="fw-light ms-2">Saturday-Thursyday</p>
                            <p className="fw-light ms-2">9:00AM-10:00PM</p>
                        </div>
                        <div className="details-item">
                            <div className="d-flex align-items-center">
                                <EnvelopeFill className="display-6 me-2"></EnvelopeFill>
                                <h3>Email</h3>
                            </div>
                            <p className="fw-light ms-2">ishtiaq.wasi@gmail.com</p>
                        </div>
                        <div className="details-item">
                            <div className="d-flex align-items-center">
                                <PhoneFill className="display-5 me-2"></PhoneFill>
                                <h3>Phone</h3>
                            </div>
                            <p className="fw-light ms-2">+880123456879</p>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;