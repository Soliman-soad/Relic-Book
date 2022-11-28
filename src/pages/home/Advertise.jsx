import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../shared/BookCard';
// import { useTitle } from '../custom-Hooks/useTitle';

const Advertise = () => {
    // useTitle('Services')
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/advertiseBooks')
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='my-48'>
            <div className=' text-center'>
            <h1 className='text-3xl font-bold  uppercase'> buy book from here</h1>
            </div>
            <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 m-5'>
                {
                    books.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
                </div>
                <Link to='books'><p className='text-center text-xl mt-16 hover:text-sky-600'>See more ...</p></Link>
        </div>
    );
};

export default Advertise;