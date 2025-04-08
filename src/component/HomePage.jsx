import React from 'react';
import "./homepage.css"
import Categor from './Categor';

const HomePage = () => {
    return (
        <div>
            <ul className='ul'>
                <li>Home</li>
                <li>About</li>
                <li>cart</li>
                <li>Blogs</li>
            </ul>



            <Categor> </Categor>
        </div>
    );
};

export default HomePage;