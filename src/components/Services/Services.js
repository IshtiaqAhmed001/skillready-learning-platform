import React, { useEffect, useState } from 'react';
import Courses from '../Courses/Courses';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return (
        <div className="container">
            <h1 className="display-3 fw-bold services-title">Oure offered courses</h1>
            <hr className="horizontal-line" />
            <div className="course-container">
                {
                    courses.map(course => <Courses course={course}></Courses>)
                }
            </div>
            <div className="more-services">
                <h2 className="display-5 fw-bold services-title">Other Services</h2>
                <div className="more-services-grid mx-auto">
                    <div className="more-services-item">
                        <NavLink className="more-service-link" to="bbb">
                            <h2>Private Tution</h2>
                        </NavLink>

                    </div>
                    <div className="more-services-item">
                        <NavLink className="more-service-link" to="bbb">
                            <h2>Job Training Club</h2>
                        </NavLink>

                    </div>
                    <div className="more-services-item">
                        <NavLink className="more-service-link" to="bbb">
                            <h2>Student Visa Processing</h2>
                        </NavLink>

                    </div>
                    <div className="more-services-item">
                        <NavLink className="more-service-link" to="bbb">
                            <h2>IELTS Crash Course</h2>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="get-preimum mb-5">
                <h2 className="display-6 fw-bold services-title">Register as an Instructor </h2>
                <h4 className="mt-4">
                    Already skilled ?
                    <br />
                    You can teach !
                </h4>
                <p className="w-75 mx-auto">Share your knowledge with the world and <strong>earn</strong> by teaching students from all around the globe</p>
                <Button className="register-btn">Register Now</Button>
            </div>
        </div>
    );
};

export default Services;