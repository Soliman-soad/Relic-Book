import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../../context/UserContext';

const MyProduct = () => {
    const {user} = useContext(ProfileContext)
    const [books, setBooks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[])
    console.log(books)
    const product = books.filter(data => data?.email === user?.email)
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>image</th>
        <th>Name</th>
        <th>Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      { product.length ===0 ?<h1 className='text-center w-full'>No product</h1> :
        product.map((p,index) => <tr key={index}>
            <th>{index+1}</th>
            <td>{p?.img}</td>
            <td>{p?.name}</td>
            <td>{p?.time}</td>
            <td>
                <button className='btn border-none bg-red-600 text-white '> Delete</button>
                <button className='btn border-none bg-orange-500 text-white '> Advertise</button>
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default MyProduct;