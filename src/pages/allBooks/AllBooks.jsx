import React, { useEffect, useState } from 'react';
import BookCard from '../shared/BookCard';

const AllBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='my-48'>
            <div className=' text-center'>
            <h1 className='text-3xl font-bold  uppercase'> buy book from here</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-5'>
                {
                    books.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
                </div>
        </div>
    );
};

export default AllBooks;