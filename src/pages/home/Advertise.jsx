import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../shared/BookCard';
import { GrLinkNext } from "react-icons/gr";



const Advertise = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('https://relic-book-server-soliman-soad.vercel.app/advertiseBooks')
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[])
    
    return (
        <div className='my-20'>
            <div className=' text-center'>
            <h1 className='text-sm text-sky-600 font-semibold  uppercase'> Popular books</h1>
            </div>
        
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 m-5'>
                {
                    books.map(book =>  <BookCard key={book._id} book={book}></BookCard> )
                    
                }
                
                <Link to='books'>
                <div className='w-[380px] h-[350px] border bg-base-100 shadow-xl mx-auto flex justify-center items-center group hover:bg-sky-400 hover:text-white transition ease-in  duration-200'>
                    <p className='mr-2 hidden group-hover:block text-lg'>See more books...</p>
                    <div className='group-hover:scale-x-150 group-hover:hidden text-2xl text-white'>
                    <GrLinkNext/>
                    </div>
                </div>
                </Link>
                </div>
                
        </div>
    );
};

export default Advertise;