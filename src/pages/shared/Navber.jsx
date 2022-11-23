import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ProfileContext } from '../../context/UserContext';


const Navber = () => {
    let activeStyle = {
        background: 'blue',
        color:'white',
        padding:'6px',
        borderRadius: '8px'
      };
    const NavItem = () => {
        return <ul className="flex flex-col md:items-center sm:gap-2 md:space-x-8 md:flex-row">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            aria-label="Our product"
            title="Our product"
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            aria-label="Our product"
            title="Our product"
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="myReview"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            aria-label="Product pricing"
            title="Product pricing"
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
          >
            My Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            aria-label="About us"
            title="About us"
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            aria-label="About us"
            title="About us"
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/addService"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            aria-label="About us"
            title="About us"
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Add service
          </NavLink>
        </li>
        {
            user?
            <li className='flex items-center'>
                <div className="relative flex-shrink-0">
        <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 "></span>
        <img src={user.photoURL ? user.photoURL : 'https://cdn-icons-png.flaticon.com/512/180/180691.png?w=740&t=st=1667933376~exp=1667933976~hmac=1a461d2424fb0a79589d1208e23741588d5efd0930f0cb299ee072d62c7ca429'} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
    </div>      
          <button
            onClick={signOut}
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide hover:bg-blue-500 hover:text-white text-blue-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            aria-label="Register"
            title="Register"
          >
            SignOut
          </button>
        
            </li>
             :
            <>
            <li>
          <NavLink
            to="/register"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
            aria-label="Register"
            title="Register"
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
            aria-label="Register"
            title="Sign in"
          >
            Sign in
          </NavLink>
        </li>
            </>
        }
      </ul>
    }
    const{user,logOut} = useContext(ProfileContext)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const signOut =()=>{
        logOut()
        .then(()=>{})
        .catch(err=>console.log(err))
    }
  return (
    <div className='sticky top-0'>
      <div className="px-14 py-5 w-full bg-white shadow-lg">
        <div className="relative flex items-center justify-between">
        <div className='flex items-center'>
        <h1 className='text-xl ml-2 font-bold uppercase text-blue-600'>Relic book</h1>
        </div>
          <div className='hidden md:block'>
            <NavItem/>
          </div>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                    <div className='flex items-center'>
        
        <h1 className='text-xl ml-2 font-semibold'>Relic book</h1>
        </div>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <NavItem/>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;