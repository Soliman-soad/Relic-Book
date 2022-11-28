import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('https://relic-book-server-soliman-soad.vercel.app/category',{
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='my-48'>
            <div className=' text-center'>
            <h1 className='text-3xl font-bold  uppercase'> Book Category</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-5'>

                {
                    books.map(book =><Link to={`category/${book._id}`} key={book._id}><div  className='py-8 rounded-md font-bold text-xl hover:bg-sky-600 cursor-pointer text-white text-center' style={{background:`${book.color}`}}>{book.name}</div></Link>)
                }
                </div>
        </div>
    );
};

export default Category;