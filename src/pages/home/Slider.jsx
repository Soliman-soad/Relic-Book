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
        <div className=" max-h-screen bg-base-200 px-5 py-3 md:py-2 md:px-1 ">
  <div className=" grid grid-cols-1 lg:grid-cols-2 items-center">
  <div className='w-2/4 lg:w-full mx-auto'>
  <Lottie options={defaultOptions}/>
  </div>
    <div className='text-center md:text-left w-full'>
      <h1 className="text-xl md:text-2xl lg:text-5xl font-bold">Buy or sell book</h1>
      <p className="py-6 text-sm md:text-md">Discover millions of copies of gently used books for sale from sellers around the world. By choosing to shop for used books, you can save money, be sustainable, support independent booksellers, and have access to an unbeatable selection of literature from the past.</p>
      <Link to='books' className="btn bg-sky-600 border-none">Get your book now</Link>
    </div>
  </div>
</div>
    );
};

export default Slider;