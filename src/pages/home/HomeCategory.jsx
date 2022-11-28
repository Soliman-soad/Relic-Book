import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookCard from '../shared/BookCard';

const HomeCategory = () => {
    const [books, setBooks] = useState([])
    const {id} =useParams();
    useEffect(()=>{
        fetch(`https://relic-book-server-soliman-soad.vercel.app/booksCategory?id=${id}`)
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[id])
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