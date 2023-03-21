import React from 'react';
import Category from '../shared/Category';
import Advertise from './Advertise';
import Choice from './Choice';
import ExtraSection from './ExtraSection';
import Slider from './Slider';
import { Statistics } from './Statistics';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Advertise/>
            <Category/>
            <Choice/>
            <Statistics/>
            <Testimonial/>
            <ExtraSection/>
        </div>
    );
};

export default Home;