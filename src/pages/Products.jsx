import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AllBooks from './allBooks/AllBooks';

const Products = () => {
    const [books, setBooks] = useState([])
    const [category,setCategory] = useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/category',{
          headers:{
              authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div >
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
    <div className="navbar bg-base-100">
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
    <ul className="menu p-4 w-80  bg-gray-100 font-bold ">
    <h1 className="text-2xl py-5">Books category</h1>
    <div className='my-2 rounded-md hover:text-white font-bold text-lg hover:bg-sky-600 cursor-pointer p-2' onClick={()=> setCategory('')} ><NavLink>All</NavLink></div>
    {
                    books.map(book => <div key={book._id} onClick={()=> setCategory(book.name)} className=' rounded-md my-2 p-2 font-bold text-lg hover:bg-sky-600 hover:text-white cursor-pointer'><NavLink>{book.name}</NavLink></div>)
    } 
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Products;