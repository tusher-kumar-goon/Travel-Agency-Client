import React from 'react';
import { useEffect, useState } from 'react';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Delete confirm')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }
    return (
        <div className='mt-5'>
            <h2>This is manage service</h2>
            {
                services.map(service => <div key={service._id} className="delete-item" >
                    <h4>Delete Service : {service.name}</h4>
                    <button className='btn btn-info' onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;