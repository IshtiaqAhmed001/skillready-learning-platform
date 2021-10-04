import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const normalStyle = {
        marginRight: "5px",
        padding: '5px',
        textDecoration: "none",
        color: 'whitesmoke',
        pointer: 'cursor',
        fontWeight: "600",

    };
    return (
        <div className="footer-container">
            <div className="mx-4">
                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <h1 className="text-start">SkillReady</h1>
                        <p className="text-start fw-bold">Your one stop skill acquiring solution.
                        </p>
                        <p className="text-start"><span>Build your skills with our latest courses and</span> <br /> <span>degrees from top-ranked universities and instructors.</span></p>
                        <div className="text-start my-5">
                            <NavLink style={normalStyle} to="/blabla">Facebook</NavLink>
                            <NavLink style={normalStyle} to="/blabla">Youtube</NavLink>
                            <NavLink style={normalStyle} to="/blabla">Instagram</NavLink>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h2>Our Solutions</h2>
                        <ul>
                            <li >Live Courses</li>
                            <li>Recorded Videos</li>
                            <li>24/7 Support Sessions</li>
                            <li>Counselling</li>
                            <li>Individual Tution Opportunity</li>
                        </ul>
                    </div>

                    <div className="mt-4">
                        <h2>Company</h2>
                    </div>
                </div>
                <p>© 2021 SkillReady Inc. All rights reserved.</p>
            </div>


        </div>
    );
};

export default Footer;