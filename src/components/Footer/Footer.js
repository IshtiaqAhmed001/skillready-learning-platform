import React from 'react';
import './Footer.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {

    // button normal style 
    const normalStyle = {
        marginRight: "5px",
        padding: '5px',
        textDecoration: "none",
        color: 'whitesmoke',
        pointer: 'cursor',
        fontWeight: "600",
        fontSize: "1.5em"
    };

    const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} />;
    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitterSquare} />;
    const youtubeIcon = <FontAwesomeIcon icon={faYoutube} />;
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
                            <NavLink style={normalStyle} to="/blabla">{fbIcon}</NavLink>
                            <NavLink style={normalStyle} to="/blabla">{linkedInIcon}</NavLink>
                            <NavLink style={normalStyle} to="/blabla">{twitterIcon}</NavLink>
                            <NavLink style={normalStyle} to="/blabla">{youtubeIcon}</NavLink>
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
                        <h2>Community</h2>
                        <ul>
                            <li >Developers</li>
                            <li>Testers</li>
                            <li>Learners</li>
                            <li>Partners</li>
                        </ul>
                    </div>
                </div>
                <p>?? 2021 SkillReady Inc. All rights reserved.</p>
            </div>


        </div>
    );
};

export default Footer;