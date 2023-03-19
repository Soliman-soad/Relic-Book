import React from 'react';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GiCardExchange } from 'react-icons/gi';

const Footer = () => {
    return (
        <div className="px-4 pt-16 mx-auto md:px-24 lg:px-8 bg-slate-900 text-slate-500">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
           <div className='flex items-center text-slate-300'>
        <span className='text-2xl rotate-45'><GiCardExchange/></span>
        <h1 className='text-2xl ml-2 font-bold uppercase font-mono'>Relic bookshop</h1>
        </div>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm ">
              This is a full-stuck website created by soliman
            </p>
            <p className="mt-4 text-sm ">
              Relic site is online bookshop. here people can buy and sell book
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide ">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 ">Phone:</p>
            <a
              href="+8801515275356"
              aria-label="Our phone"
              title="Our phone"
              className="transition-colors duration-300 "
            >
              01515275356
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Email:</p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              mdsolimansoad@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 ">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
            London, UK
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://github.com/Soliman-soad"
              className="text-gray-500 transition-colors duration-300 hover:text-black text-2xl"
            >
              <AiFillGithub/>
            </a>
            <a
              href="https://www.linkedin.com/in/md-soliman-alam/"
              className="text-gray-500 transition-colors duration-300 hover:text-sky-800 text-2xl"
            >
              <AiFillLinkedin/>
            </a>
            <a
              href="https://www.facebook.com/mdsolimanalam.soad.1/"
              className="text-gray-500 transition-colors duration-300 hover:text-blue-700"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Relic is online platform created by md soliman Alam
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2020 Relic Inc. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default Footer;