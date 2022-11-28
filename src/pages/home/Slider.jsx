import React from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import slider from '../../utitlity/lottifiles/lf30_editor_jkclqtdb.json'

const Slider = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: slider,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content grid grid-cols-1 lg:grid-cols-2 ">
  <Lottie options={defaultOptions}/>
    <div className='text-center md:text-left'>
      <h1 className="text-5xl font-bold">Buy or sell book</h1>
      <p className="py-6">Discover millions of copies of gently used books for sale from sellers around the world. By choosing to shop for used books, you can save money, be sustainable, support independent booksellers, and have access to an unbeatable selection of literature from the past.</p>
      <Link to='books' className="btn bg-sky-600 border-none">Get your book now</Link>
    </div>
  </div>
</div>
    );
};

export default Slider;