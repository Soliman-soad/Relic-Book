import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProfileContext } from '../../context/UserContext';

const MyProduct = () => {
    const {user} = useContext(ProfileContext)
    const [books, setBooks] = useState([])
    const[delt, setDelt] =useState(true);
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('https://relic-book-server-soliman-soad.vercel.app/myBooks')
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[delt])
    const deleteBook = (id) => {
      fetch(`https://relic-book-server-soliman-soad.vercel.app/books/${id}`,{
    method:'DELETE'
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    toast.error('item deleted')
    setDelt(!delt)
  })
  }
    console.log(books)
    const product = books.filter(data => data?.email === user?.email)
    console.log(product)
    const handleAdd = (id) =>{
      const add = {
        advertise : true
      }
      fetch(`https://relic-book-server-soliman-soad.vercel.app/books/${id}`,{
          method:'PATCH',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(add)
        })
        .then(res => res.json())
        .then(data=>{
        console.log(data)
        navigate('/')
      })
    }
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>image</th>
        <th>Name</th>
        <th>Category</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      { product.length ===0 ?<h1 className='text-center w-full'>No product</h1> :
        product.map((p,index) => <tr key={index}>
            <th>{index+1}</th>
            <td> <div className="avatar">
  <div className="w-16 rounded">
    <img src={p?.img} alt='' />
  </div>
</div> </td>
            <td>{p?.name}</td>
            <td>{p?.category}</td>
            <td>
                <button className='btn border-none bg-red-600 text-white mr-3 ' onClick={()=> deleteBook(p._id)}> Delete</button>
                <button className='btn border-none bg-orange-500 text-white' onClick={()=> handleAdd(p._id)}> Advertise</button>
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default MyProduct;