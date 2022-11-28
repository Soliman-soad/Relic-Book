import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProfileContext } from '../../context/UserContext';

const MyBuyingProduct = () => {
    const {user} = useContext(ProfileContext)
    console.log(user)
    const [books, setBooks] = useState([])
    const[delt, setDelt] =useState(true);
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`https://relic-book-server-soliman-soad.vercel.app/myOrder?user=${user?.email}`)
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
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      { books.length ===0 ?<h1 className='text-center w-full'>No product</h1> :
        books.map((p,index) => <tr key={index}>
            <th>{index+1}</th>
            <td> <div className="avatar">
  <div className="w-16 rounded">
    <img src={p?.img} alt='' />
  </div>
</div> </td>
            <td>{p?.name}</td>
            <td>{p?.category}</td>
            <td>{p?.Price}</td>
            <td>
              {
                p?.payment ==='paid' ? <p>paid</p>
                :
               <Link to={`/dashboard/payment/${p?._id}`}><button className='btn border-none bg-sky-600 text-white mr-3 '> Puy now</button></Link> 
              }
                
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default MyBuyingProduct;