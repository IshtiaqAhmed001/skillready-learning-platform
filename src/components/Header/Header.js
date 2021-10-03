import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    // const activeStyle = {
    //     fontWeight: "bold",
    //     color: "red"
    // };
    const normalStyle = {
        marginRight: "10px",
        textDecoration: "none",
        color: 'white',
        pointer: 'cursor',
        fontWeight: "600",
        fontSize: "1.2rem"
    }
    return (
        <div className="header ">
            <div className="d-flex justify-content-between container">
                <div>
                    <h3 className="fw-bold">SkillReady</h3>
                </div>
                <div>
                    <NavLink style={normalStyle} to='/home'>Home</NavLink>
                    <NavLink style={normalStyle} to='/services'>Services</NavLink>
                    <NavLink style={normalStyle} to='/about'>About</NavLink>
                    <NavLink style={normalStyle} to='/blog'>Blog</NavLink>
                    <NavLink style={normalStyle} to='/contact'>Contact</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;