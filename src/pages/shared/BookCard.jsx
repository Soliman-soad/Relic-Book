import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ProfileContext } from '../../context/UserContext';

const BookCard = ({book}) => {
	const {user} = useContext(ProfileContext)
  const navigate = useNavigate()
  const [owner,setOwner] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/owner`)
    .then(res=> res.json())
    .then(data => setOwner(data))
},[user])
const current = owner.filter(cur => cur?.tick === true)
console.log(current[0])
  const handleCart = (id) =>{
    const add = {
      user : user?.email
    }
    fetch(`http://localhost:5000/addUser/${id}`,{
        method:'PATCH',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(add)
      })
      .then(res => res.json())
      .then(data=>{
      console.log(data)
      toast.success('added to cart')
      navigate('/dashboard/myOrder')
    })
  }
  const handleRegister= (event) =>{
    event.preventDefault();
    handleCart(book?._id)
      navigate('/books')
  }
  console.log(book)
  const handleReport = (id) => {
    const add = {
      reported : true
    }
    fetch(`http://localhost:5000/reportedBooks/${id}`,{
        method:'PATCH',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(add)
      })
      .then(res => res.json())
      .then(data=>{
      console.log(data)
      toast.error('reported')
      navigate('/books')
    })
  }
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={book?.img} alt="Shoes" className='h-72'/></figure>
  <div className="card-body">
    <h2 className="card-title">
      {book?.name}
      <div className="card-actions justify-end">
      <div className="badge badge-outline">{book.category}</div> 
    </div>
    </h2>
    <p><span className='font-bold '>Price: </span> ${book?.resellPrice}</p>
    <p><span className='font-bold '>Buying Price: </span> ${book?.oldPrice}</p>
    <p><span className='font-bold '>Used: </span> {book?.usedYear} months</p>
    <p><span className='font-bold '>Seller name: </span>{book?.sellerName} </p>
    <p className='text-gray-400'>{book?.posted}</p>
    {
      user?.email ?
      <button  className='btn bg-sky-600 border-none mt-2'><label htmlFor={book._id} className="w-full" >Buy now</label></button>  :  
      <button  className='btn bg-sky-600 border-none mt-2'><Link to='/login' className="w-full" >Log in to buy</Link></button>    
    }
  </div>
  <input type="checkbox" id={book._id} className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor={book._id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handleRegister} className="space-y-6 p-10 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label htmlFor='name' className='font-bold'>Name of Book</label>
			<input type="text" name="name" id="name" readOnly defaultValue={book?.name} placeholder="Book name" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
    <label htmlFor='email' className='font-bold'>Your email</label>
			<input type="text" name="email" id="email" readOnly defaultValue={user?.email} placeholder="Book Img url" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
    <label htmlFor='seller' className='font-bold'>Your name</label>
			<input type="text" name="seller" id="seller" required defaultValue={user?.displayName} className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
    <label htmlFor='contact' className='font-bold'>Contact number</label>
			<input type="text" name="contact" id="contact" readOnly  placeholder='Enter your number' className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		
		<div className="space-y-1 text-sm">
    <label htmlFor='sellingPrice' className='font-bold'>Price of Book</label>
			<input type="text" name="sellingPrice" id="sellingPrice" readOnly defaultValue={`Price of the book ${book?.resellPrice}`} className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
    <label htmlFor='location' className='font-bold'>Location</label>
			<input type="text" name="location" id="location"  placeholder='Meeting location' className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<button type='submit' onClick={()=> handleCart(book._id)} className="block w-full p-3 text-center rounded-sm  bg-sky-600 text-white font-bold">Confirm</button>
	</form>
		<button  onClick={()=> handleReport(book._id)} className="btn border-none block w-full p-3 text-center rounded-sm  bg-red-600 text-white font-bold">Report</button>
  </div>
</div>
<ToastContainer/>
</div>
    );
};

export default BookCard;