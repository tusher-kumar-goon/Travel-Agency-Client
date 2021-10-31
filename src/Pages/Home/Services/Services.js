import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://obscure-wildwood-10356.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (

        <div id="services">
            <h2 className='text-warning mt-4'>TOP PACKAGES</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    ></Service>)
                }
            </div>
        </div >
    );
};

export default Services;