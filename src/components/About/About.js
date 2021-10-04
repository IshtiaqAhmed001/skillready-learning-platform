import React from 'react';
import './About.css';
import globe from '../../images/Globe.svg';
import compass from '../../images/Compass.svg';
import money from '../../images/money.svg';
import certificate from '../../images/Certificate.svg';
import { Button } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1 className="display-3 fw-bold services-title">About Us</h1>
            <hr className="horizontal-line mb-4" />
            <div>
                <h3>Top-Class Online Learning for Anyone, Anywhere </h3>
                <p className="w-75 mx-auto">SkillReady partners with more than 150 leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.</p>
            </div>

            <div className="feature-grid mb-5">
                <div className="feature-item">
                    <div>
                        <img className="w-25" src={globe} alt="" />
                        <h4>World Class</h4>
                    </div>
                    <div>
                        <h6>Learn from experts at 200+ leading universities and companies.</h6>
                        <p>Earn recognized credentials from leading universities and companies to achieve your goals.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div>
                        <img className="w-25" src={compass} alt="" />
                        <h4>Affordable</h4>
                    </div>
                    <div>
                        <h6>Explore hundreds of free courses or get started with a free trial.
                        </h6>
                        <p>Earn a university degree and enjoy high-quality curriculum, affordable pricing, and flexible scheduling.
                        </p>
                    </div>
                </div>
                <div className="feature-item">
                    <div>
                        <img className="w-25" src={money} alt="" />
                        <h4>Flexible</h4>
                    </div>
                    <div>
                        <h6>Get on-demand lectures for desktop and mobile—on your schedule.</h6>
                        <p>Choose from free courses, hands-on projects, certificate programs, and stackable credentials.</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div>
                        <img className="w-25" src={certificate} alt="" />
                        <h4>Job-relevant</h4>
                    </div>
                    <div>
                        <h6>Master essential career skills based on comprehensive skills data.</h6>
                        <p>Build personal and professional skills with applied learning.</p>
                    </div>
                </div>
            </div>
            <div className="more-features">
                <h2 className="display-5 fw-bold services-title">Grow with SkillReady</h2>
                <div className="more-features-grid">
                    <div className="more-features-item">
                        <h2>Learn job skills and industry tools</h2>
                    </div>
                    <div className="more-features-item">
                        <h2>Gain new knowledge with Certificates</h2>
                    </div>
                </div>
            </div>
            <div className="get-preimum mb-5">
                <h2 className="display-6 fw-bold services-title">SkillReady <span className="pro-icon">pro</span></h2>
                <h4 className="mt-4">Get access to unlimited resources</h4>
                <p className="w-75 mx-auto">Save money on learning with a SkillReady Pro subscription! Get unlimited access to 1500+ courses, Guided Projects, Specializations, and Professional Certificates for one all-inclusive price.</p>
                <Button className="premium-btn">Get SkillReady Premium</Button>
            </div>
        </div>
    );
};

export default About;