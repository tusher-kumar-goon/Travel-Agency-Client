import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpeg'

const NotFound = () => {
    return (
        <div>
            <img className="notFound" src={notFound} alt="" />
            <Link to='/'>
                <button>Go to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;