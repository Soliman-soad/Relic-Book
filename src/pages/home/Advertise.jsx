import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../shared/BookCard';
import { GrLinkNext } from "react-icons/gr";



const Advertise = () => {
    const [books, setBooks] = useState([])
    const [change, setChange] = useState(false);
    useEffect(()=>{
        fetch('https://relic-book-server-soliman-soad.vercel.app/advertiseBooks')
        .then(res=>res.json())
        .then(data => {
            setBooks(data);
            setChange(true);
        })
    },[])
    if(!change){
        return(
            <div className='md:grid '>
                
                <div className='col-span-3 md:grid grid-cols-3'>
                <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t bg-gray-300"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
		<div className="w-full h-6 rounded bg-gray-300"></div>
		<div className="w-full h-6 rounded bg-gray-300"></div>
		<div className="w-3/4 h-6 rounded bg-gray-300"></div>
	</div>
</div>
                <div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t bg-gray-300"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
		<div className="w-full h-6 rounded bg-gray-300"></div>
		<div className="w-full h-6 rounded bg-gray-300"></div>
		<div className="w-3/4 h-6 rounded bg-gray-300"></div>
	</div>
</div>

<div className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
	<div className="h-48 rounded-t bg-gray-300"></div>
	<div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
		<div className="w-full h-6 rounded bg-gray-300"></div>
		<div className="w-full h-6 rounded bg-gray-300"></div>
		<div className="w-3/4 h-6 rounded bg-gray-300"></div>
	</div>
</div>

                </div>

            </div>
        )
    }
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
                <div className='w-[380px] h-[320px] hidden border bg-base-100 shadow-xl mx-auto md:flex justify-center items-center group hover:bg-sky-400 hover:text-white transition ease-in  duration-200'>
                    <p className='mr-2 hidden group-hover:block text-lg'>See more books...</p>
                    <div className='group-hover:scale-x-150 group-hover:hidden text-2xl text-white'>
                    <GrLinkNext/>
                    </div>
                </div>
                </Link>
                </div>
                <div className="flex justify-center md:hidden mx-auto mt-4">
			<Link to ="books">
            <button type="button" className="px-6 py-3 text-md rounded-md hover:underline bg-gray-50 text-gray-600">Load more books...</button>
            </Link>
		</div>
                
        </div>
    );
};

export default Advertise;