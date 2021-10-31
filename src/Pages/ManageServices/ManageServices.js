import React from 'react';
import { useEffect, useState } from 'react';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://obscure-wildwood-10356.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDelete = id => {
        const url = `https://obscure-wildwood-10356.herokuapp.com/services/${id}`;
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

        <div className="mt-5">
            <h2>This is manage service</h2>
            <div className='mt-5 manage-part'>

                {
                    services.map(service => <div key={service._id} className="delete-item" >
                        <h4> {service.name}</h4>
                        <button className='btn btn-info' onClick={() => handleDelete(service._id)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;