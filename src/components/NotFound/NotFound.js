import React from 'react';
import './NotFound.css'
import image from '../../images/404notfound.jpg'
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';

const NotFound = () => {
    // const handleBacktoHome = () => {
    //     const history = useHistory();
    //     history.push('/home');
    // }
    return (
        <div className="notFound">
            <div className="imageContainer my-5">
                <img src={image} alt="" />
                <br />
                <Link to='/home'> <Button variant="dark">Go back to Home</Button>{' '}</Link>
            </div>
        </div>
    );
};

export default NotFound;