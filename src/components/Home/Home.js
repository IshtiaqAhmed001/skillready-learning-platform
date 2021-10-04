import React, { useEffect, useState } from 'react';
import './Home.css'
import bannerImg from '../../images/topbanner2.png'
import { Carousel } from 'react-bootstrap';
import Courses from '../Courses/Courses';
const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    // taking three course for displaying on homepage 
    const featuredCourses = courses.slice(0, 3);
    return (
        <div>
            <div className="home-page1  d-flex justify-content-around">
                <div className="mt-5">
                    <h1 className="text-start mt-5 ">
                        <span className="display-4 fw-bold">SkillReady</span>
                        <br />
                        <span>Your home for building skills online</span>
                    </h1>
                    <br />
                    <h5 className="text-start fw-bold">You grow while you learn</h5>
                    <p>Build your skills with our latest courses and degrees from top-ranked universities and instructors</p>
                </div>
                <div>
                    <img className="my-5 w-75" src={bannerImg} alt="" />
                </div>
            </div >
            <div className="home-page2">
                <h1 className="fw-bold my-5">Featured Courses</h1>
                <div className="d-flex justify-content-around">
                    {
                        featuredCourses.map(course => <Courses course={course}></Courses>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;