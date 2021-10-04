import './Blog.css';

import React from 'react';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <h1 className="page-title my-5">Explore Latest Tech Blogs</h1>
            <div className="d-flex justify-content-around">
                <div className="blogs-container mx-auto w-75">
                    <div>
                        <img className="w-75" className="w-75" src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,g_center,h_275,pg_1,q_60,w_490/ab26f7e3efde60349234ff8d9ee84797.jpg" alt="" />
                        <h4>Twitter’s New Reactions Are Too Friendly for Twitter</h4>
                    </div>
                    <div>
                        <img className="w-75" src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,g_center,h_275,pg_1,q_60,w_490/13c6142034ab8269ad95cb03cf9feb1a.png" alt="" />
                        <h4>The Pixel 6 Might Be Cheaper Than We Thought</h4>
                    </div>
                    <div>
                        <img className="w-75" src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,g_center,h_275,pg_1,q_60,w_490/f76bde3940d2057812f98410735adfff.jpg" alt="" />
                        <h4>iOS 15's Annoying Apple Watch Unlock Bug Is Fixed</h4>
                        <Button className="readMore-btn" variant="link">View All</Button>
                    </div>
                </div>
                <div>
                    <InputGroup className="mt-5">
                        <FormControl
                            placeholder="Search Blogs"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                    <h4 className="my-4 text-start">Category</h4>
                    <hr className="w-50 mb-3" />

                    <h6 className="text-start">Tech News(13)</h6>
                    <h6 className="text-start">Science(21)</h6>
                    <h6 className="text-start">Recent Affairs(09)</h6>
                    <h6 className="text-start">Inspirational(07)</h6>
                    <h6 className="text-start">Academic(19)</h6>
                </div>
            </div>
            <div className="my-5">
                <h1 className="our-story-title display-4 fw-bold mt-5">Our story</h1>
                <hr className="w-25 mx-auto mb-5" />
                <p className="story-brief mx-auto"> SkillReady was founded by Ishtiaq Ahmed Chowdhury and ProgrammingHero in 2021 with a vision of providing life-transforming learning experiences to learners around the world. Today, SkillReady is a global online learning platform that offers anyone, anywhere, access to online courses and degrees from leading universities and companies. </p>
                <p className="story-brief mx-auto">12 million learners, 80+ Fortune 250 companies, and more than 2,000 campuses, businesses, and governments come to SkillReady to access world-class learning—anytime, anywhere.</p>
            </div>


        </div>
    );
};

export default Blog;