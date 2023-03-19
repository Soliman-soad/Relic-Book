import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    const data =[
        {
            company:'Seller',
            Name:'Abdullah',
            title:"Best book selling site.",
            img:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260',
            Describe:"This is one of the best platform to sell book. I can sell book from anywhere."
        },
        {
            company:'Seller',
            Name:'Kevin Smith',
            title:"Best way to buy book",
            img:'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=sph',
            Describe:"Have various types of book found here. As a reader I can say it is a famous site for reader."
        },
        {
            company:'Buyer',
            Name:'Stuart Golledge',
            title:"Get latest book",
            img:'https://img.freepik.com/free-photo/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=sph',
            Describe:"Get books and make community. It has one of big community in our region."
        },
        {
            company:'Seller',
            Name:'Emily MacDonald',
            title:"Awesome platform",
            img:'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph',
            Describe:"Fantastic site with good user interface. User can get there book easily"
        },
        {
            company:'Buyer',
            Name:'Harriet Taylor-Morris',
            title:"Compact Platform",
            img:'https://img.freepik.com/free-photo/portrait-smart-professional-african-american-man-standing-with-hands-crossed-chest-confident-pose_176420-33861.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph',
            Describe:" really appreciate how clear your job adverts are. Keep doing what you’re doing."
        },
        {
            company:'Buyer',
            Name:'Allison button',
            title:"Top site",
            img:'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph',
            Describe:"Thanks for keeping me updated every step of the way. Most recruitment companies don’t do that."
        },

    ]
    const settings1 = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    const settings2 = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div className='overflow-hidden md:max-w-screen-xl mx-auto'>
            <h2 className='text-sm uppercase text-center text-gray-800 font-semibold  -mb-10 text-blue-500 decoration-blue-500'>Testimonials</h2>
        <div className='md:hidden'>
        <Slider {...settings1}>
        {
            data.map((item,i) =>
                <div key={i}>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className=" sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              {item.company}
            </a>{' '}
            <span className="text-gray-600">— 1 Feb 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {
                item.title
            }
          </a>
          <p className="mb-5 text-gray-700">
            {
                item.Describe
            }
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src={item.img}
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <a
                href="/"
                aria-label="Author"
                title="Author"
                className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                {item.Name}
              </a>
              <p className="text-sm font-medium leading-4 text-gray-600">
                {item.passion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
                </div>
                )
        }
        </Slider>
        </div>
        <div className='hidden md:block'>
        <Slider {...settings2}>
        {
            data.map((item,i) =>
                <div key={i}>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className=" sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="p-8 bg-white border rounded shadow-sm">
          <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
            <a
              href="/"
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
              {item.company}
            </a>{' '}
            <span className="text-gray-600">— 1 Feb 2020</span>
          </p>
          <a
            href="/"
            aria-label="Article"
            title="Jingle Bells"
            className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            {
                item.title
            }
          </a>
          <p className="mb-5 text-gray-700">
            {
                item.Describe
            }
          </p>
          <div className="flex items-center">
            <a href="/" aria-label="Author" title="Author" className="mr-3">
              <img
                src={item.img}
                alt="avatar"
                className="object-cover w-10 h-10 rounded-full shadow-sm"
              />
            </a>
            <div>
              <p className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
                {item.Name}
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
                </div>
                )
        }
        </Slider>
        </div>
        </div>
    );
};

export default Testimonial;