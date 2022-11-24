import React from 'react';
import Category from '../shared/Category';
import Advertise from './Advertise';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Advertise/>
            <Category/>
        </div>
    );
};

export default Home;