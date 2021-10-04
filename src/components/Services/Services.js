import React, { useEffect, useState } from 'react';
import './Services.css';
import Courses from '../Courses/Courses';

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
        </div>
    );
};

export default Services;