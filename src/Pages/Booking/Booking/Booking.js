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
                <h2 className="text-primary mb-5">Booking Information </h2>
                <form>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder='City' />
                    </div>
                    <div className="mb-3 ">
                        <input type="text" className="form-control" placeholder='Country' />
                    </div>
                    <button type="submit" className="btn btn-primary">Confirm Order</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;