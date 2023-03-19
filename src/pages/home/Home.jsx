import React from 'react';
import Category from '../shared/Category';
import Advertise from './Advertise';
import ExtraSection from './ExtraSection';
import Slider from './Slider';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Advertise/>
            <Category/>
            <Testimonial/>
            <ExtraSection/>
        </div>
    );
};

export default Home;