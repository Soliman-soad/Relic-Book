import React from 'react';
import Lottie from 'react-lottie';
import slider from '../../utitlity/lottifiles/84565-about-us.json'

const ExtraSection = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: slider,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className="hero min-h-screen bg-base-200 mb-10">
  <div className="hero-content flex-col lg:flex-row">
  <Lottie options={defaultOptions}/>
    <div>
      <h1 className="text-5xl font-bold">About us</h1>
      <p className="py-6">We are one of the trusted platform for reseller section. Our user always have fun and enjoy our platform.</p>
    </div>
  </div>
</div>
    );
};

export default ExtraSection;