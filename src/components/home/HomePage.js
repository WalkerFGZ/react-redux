import { Link } from 'react-router-dom';
import React from 'react';

const HomePage = () => (
    <div className='p-5 mb-4 bg-body-tertiary rounded-3'>
        <h1>Administration</h1>
        <p> React, Redux and React Router</p>
        <Link to="about" className='btn btn-primary btn-lg'>
            Learn More

        </Link>
    </div>
)

export default HomePage