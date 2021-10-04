import './Courses.css'
import React from 'react';
import { Card, CardGroup, Col, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Courses = (props) => {
    let history = useHistory();
    const handleLearnMoreBtn = () => {
        history.push('/services');
    }
    const { id, name, duration, rating, price, description, img } = props.course;
    return (
        <div className="card-container mb-5">
            <Card className="h-100" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        <h6>Duration: {duration} | Rating: {rating}</h6>
                        <h5>Price: {price}</h5>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={handleLearnMoreBtn} >Learn More</Button>
                </Card.Footer>
            </Card>

        </div >
    );
};

export default Courses;