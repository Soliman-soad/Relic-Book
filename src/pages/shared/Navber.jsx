import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ProfileContext } from '../../context/UserContext';
import { GiCardExchange } from "react-icons/gi";
import userImg from "../../utitlity/user.jpg"

const Navber = () => {
    let activeStyle = {
        background: '#0284c7',
        color:'white',
        padding:'6px',
        borderRadius: '8px'
      };
    const NavItem = () => {
        return <ul className="flex flex-col md:items-center sm:gap-2 md:space-x-8 md:flex-row ">
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
            to="/books"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            aria-label="Our product"
            title="Our product"
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Books
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
        {
            user?
            <>
            <li>
          <NavLink
            to="/dashboard"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            aria-label="About us"
            title="About us"
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Dashboard
          </NavLink>
        </li>
            <li className='flex items-center'>
                <div className="relative flex-shrink-0 mr-2">
        <span className="absolute bottom-0 right-0 w-3 h-3  dark:bg-green-600 border rounded-full dark:text-gray-100 "></span>
        <img src={user?.photoURL  ? user.photoURL : userImg} alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700 object-cover" />
    </div>      
          <button
            onClick={signOut}
            className="font-medium tracking-wide text-gray-900 transition-colors duration-200 hover:text-teal-accent-400"
            aria-label="Register"
            title="Register"
          >
            SignOut
          </button>
        
            </li>
            </>            
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
    <div className=" border-b">
      <div className="px-14 py-5 w-full bg-white shadow-lg">
        <div className="relative flex items-center justify-between">
        <div className='flex items-center text-sky-400'>
        <span className='text-2xl rotate-45'><GiCardExchange/></span>
        <h1 className='text-2xl ml-2 font-bold uppercase font-mono'>Relic bookshop</h1>
        </div>
          <div className='hidden lg:block'>
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
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                    <div className='flex items-center text-lg text-sky-400'>
        <span className=' rotate-45'><GiCardExchange/></span>
        <h1 className=' ml-2 font-bold uppercase font-mono'>Relic bookshop</h1>
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