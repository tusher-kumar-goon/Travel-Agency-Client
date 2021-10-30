import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="mt-5 details-card ">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        {service.details}
                    </Card.Text>
                    <Button variant="primary">Confirm</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Booking;