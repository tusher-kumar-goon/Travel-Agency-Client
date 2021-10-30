import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams()
    return (
        <div className="mt-5">
            <h3>This is service
                {serviceId}</h3>
        </div>
    );
};

export default Booking;