import React from 'react';
import Products from '../Products';
import Category from '../shared/Category';
import Advertise from './Advertise';
import ExtraSection from './ExtraSection';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Advertise/>
            <Category/>
            <ExtraSection/>
        </div>
    );
};

export default Home;