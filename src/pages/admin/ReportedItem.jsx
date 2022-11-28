import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ReportedItem = () => {
    const [books, setBooks] = useState([])
    const[delt, setDelt] =useState(true);
    useEffect(()=>{
        fetch('https://relic-book-server-soliman-soad.vercel.app/reportedBooks',{
          headers:{
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
        })
        .then(res=>res.json())
        .then(data => setBooks(data))
    },[delt])
    console.log(books)
    const deleteBook = (id) => {
        fetch(`https://relic-book-server-soliman-soad.vercel.app/books/${id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      toast.error('Review deleted')
      setDelt(!delt)
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
            <td>
                <button className='btn border-none bg-red-600 text-white mr-3 ' onClick={()=> deleteBook(p._id)}> Delete</button>
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
  <ToastContainer/>
</div>
    );
};

export default ReportedItem;