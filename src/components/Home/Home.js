import React, { useEffect, useState } from 'react';
import './Home.css'
import bannerImg from '../../images/topbanner2.png'
import { Carousel } from 'react-bootstrap';
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
                    <h1 className="text-start mt-5 ">SkillReady <br />
                        <span>Your home for building skills online</span>
                    </h1>
                    <br />
                    <p className="text-start fw-bold">You grow while you learn</p>
                    <p>Build your skills with our latest courses and degrees from top-ranked universities and instructors</p>
                </div>
                <div>
                    <img className="my-5 w-75" src={bannerImg} alt="" />
                </div>
            </div >
            <div className="home-page2">
                <h2>Courses We Offer</h2>
                {
                    featuredCourses.map(course => <h2>{course.name}</h2>)
                }
            </div>
        </div>
    );
};

export default Home;