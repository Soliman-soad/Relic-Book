import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AllBooks from './allBooks/AllBooks';

const Products = () => {
    const [books, setBooks] = useState([]);
    const [category,setCategory] = useState('');
    const [load, setLoad] = useState(false);
    useEffect(()=>{
        fetch('https://relic-book-server-soliman-soad.vercel.app/category',{
          headers:{
              authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
        .then(res=>res.json())
        .then(data => {
          setBooks(data)
          setLoad(true)
        })
    },[])
    return (
        <div className='min-h-screen'>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
    <div className="navbar bg-base-100 lg:hidden">
  <div className="flex-1 lg:hidden">
    <h1 className="btn btn-ghost normal-case text-xl">Books category</h1>
  </div>
  <div className="flex-none">
  <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</label>
  </div>
</div>
<AllBooks category={category}/>
  </div> 
  
  <div className="drawer-side h-full">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    {
      !load
      ?
      <>
      <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-50">
	<div className="flex p-4 space-x-4 sm:px-8">
		<div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-300"></div>
		<div className="flex-1 py-2 space-y-4">
			<div className="w-full h-3 rounded bg-gray-300"></div>
			<div className="w-5/6 h-3 rounded bg-gray-300"></div>
		</div>
	</div>
	<div className="p-4 space-y-4 sm:px-8">
		<div className="w-full h-4 rounded bg-gray-300"></div>
		<div className="w-full h-4 rounded bg-gray-300"></div>
		<div className="w-3/4 h-4 rounded bg-gray-300"></div>
	</div>
</div>
      </>
      :
      <>
      <ul className="menu p-4 w-80  bg-gray-100 font-bold ">
    <h1 className="text-lg py-5 border-b">Books category</h1>
    <div className='my-2 rounded-md hover:text-white font-semibold text-md hover:bg-sky-600 cursor-pointer p-2' onClick={()=> setCategory('')} ><NavLink>All</NavLink></div>
    {
                    books.map(book => <div key={book._id} onClick={()=> setCategory(book.name)} className=' rounded-md my-2 p-2 font-semibold text-md hover:bg-sky-600 hover:text-white cursor-pointer'><NavLink>{book.name}</NavLink></div>)
    } 
    </ul>
      </>
    }
  
  </div>
</div>
        </div>
    );
};

export default Products;