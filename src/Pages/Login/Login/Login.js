import React from 'react';
import './Login.css'
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login">
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle} className='btn-info rounded-2'>Google sign In</button>
            <p>or Create Account?</p>
        </div >
    );
};

export default Login;