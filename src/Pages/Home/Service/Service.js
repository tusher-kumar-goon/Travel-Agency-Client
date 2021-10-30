import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { key, name, img, details, price } = service;
    return (
        <div className='service pb-3'>
            < img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price:{price}</h5>
            <p>{details}</p>
            <Link to={`/booking/${key}`}>
                <button className='btn btn-success'>Book {name}</button>
            </Link>
        </div >
    );
};

export default Service;