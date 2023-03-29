import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from '../shared/BookCard';

const HomeCategory = () => {
    const [books, setBooks] = useState([])
    const {id} =useParams();
    const [change, setChange] = useState(false);
    useEffect(()=>{
        fetch(`https://relic-book-server-soliman-soad.vercel.app/booksCategory?id=${id}`)
        .then(res=>res.json())
        .then(data => {
            setBooks(data)
            setChange(true)
        })
    },[id])
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
        <div>
            <div className=' text-center'>
            <h1 className='text-3xl font-bold  uppercase'> buy book from here</h1>
            {
                books.length===0 ? <p>No book found</p> : <p>book found : {books.length}</p>
            }
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-5'>
                {
                    books.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
                </div>
        </div>
    );
};

export default HomeCategory;