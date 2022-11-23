import React from 'react';
import Lottie from 'react-lottie';
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
  <div className="hero-content flex-col lg:flex-row-reverse">
  <Lottie options={defaultOptions}
              height={500}
              width={500}
              />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Slider;