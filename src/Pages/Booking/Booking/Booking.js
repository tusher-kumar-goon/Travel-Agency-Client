import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})


    useEffect(() => {
        fetch(`https://obscure-wildwood-10356.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="corfirm-order ">
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
            <div>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed provident esse ex rerum harum sapiente earum totam eum iusto delectus explicabo exercitationem inventore dolore cumque et, vero doloremque nesciunt, animi corporis consectetur ullam eligendi. Placeat, atque incidunt ullam ipsam nesciunt cupiditate nobis, ad saepe enim iure minima commodi earum reprehenderit.</h3>
            </div>
        </div>
    );
};

export default Booking;