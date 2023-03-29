import React, { useEffect, useState } from 'react';
import BookCard from '../shared/BookCard';
import { AiOutlineSearch } from "react-icons/ai";

const AllBooks = ({category}) => {
    const [books, setBooks] = useState([]);
    const [change, setChange] = useState(false);
    const [searchedBook, setSearchedBook] = useState([])
    
    useEffect(()=>{
        fetch(`https://relic-book-server-soliman-soad.vercel.app/books?category=${category}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=>res.json())
        .then(data => {
            setBooks(data)
            setChange(true)
            setSearchedBook(data)
        })
    },[category])

    
    
    const searchResult = (event) =>{       
        setSearchedBook(books.filter(err => err.name.toLowerCase().indexOf((event.target.value).toLowerCase()) > -1 ));
     
    }

    if(!change){
        return(
            <div className='md:grid grid-cols-e'>
                
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

                </div>

            </div>
        )
    }

    return (
        <div className='mt-10 bg-white'>
            <div className='max-w-[380px] md:max-w-[500px] mx-auto mb-5'>
                <fieldset className="w-full space-y-1 text-gray-800">
	<div className="flex">
		<span className="flex items-center px-3 pointer-events-none sm:text-sm md:text-lg rounded-l-md bg-gray-300"> <AiOutlineSearch/> </span>
		<input type="text" name="search" onChange={searchResult}  placeholder="Search your book" className="flex flex-1 border md:text-lg sm:text-sm rounded-r-md py-2 px-2  text-gray-800 " />
	</div>
</fieldset>

            </div>
            <div className=' text-center'>
            <h1 className='text-lg lg:text-xl font-bold  uppercase'> Select {category} book:</h1>
            {
                searchedBook.length===0 ? <p>No book found</p> : <p>book found : {searchedBook.length}</p>
            }
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 m-5'>
                {
                    searchedBook.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
                </div>
        </div>
    );
};

export default AllBooks;