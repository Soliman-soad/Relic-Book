import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ProfileContext } from '../../context/UserContext';

const BookCard = ({book}) => {
	const {user} = useContext(ProfileContext)
  const navigate = useNavigate()
  const [owner,setOwner] = useState([])
  useEffect(()=>{
    fetch(`https://relic-book-server-soliman-soad.vercel.app/owner`)
    .then(res=> res.json())
    .then(data => setOwner(data))
},[user])
const current = owner.filter(cur => cur?.tick === true)
console.log(current[0])
  const handleCart = (id) =>{
    const add = {
      user : user?.email
    }
    fetch(`https://relic-book-server-soliman-soad.vercel.app/addUser/${id}`,{
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
    fetch(`https://relic-book-server-soliman-soad.vercel.app/reportedBooks/${id}`,{
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
        <div className="w-[380px] h-[350px] rounded-md border bg-base-100 shadow-xl mx-auto overflow-hidden">
          <div className='h-full grid grid-cols-2 lg:grid-cols-6 hover:grid-cols-2 duration-0 transition-all ease-in duration-[2000ms] group'>
          <div className='h-full group-hover:col-span-1 transition ease-in duration-[2000ms]'>
          <img src={book?.img} className='h-full object-cover ' alt={book?.name}/>
          </div>
          <div className='lg:col-span-5 group-hover:col-span-1 transition ease-in duration-[2000ms]'>          
            <div className="card-body">
            <div className="border rounded-full text-center border-pink-600 text-sm text-pink-600">{book.category}</div> 
              <h2 className="text-lg font-semibold mt-2">
                {book?.name}
              </h2>
              <div className='my-4'>
              <p><span className='font-semibold text-sm '>Price: </span> ${book?.resellPrice}</p>
              <p><span className='font-semibold text-sm '>Buying Price: </span> ${book?.oldPrice}</p>
              <p><span className='font-semibold text-sm '>Before: </span> {book?.usedYear} months ago</p>
              <p><span className='font-semibold text-sm '>Seller name: </span>{book?.sellerName} </p>
              </div>
              <p className='text-gray-400 text-xs'>Posted: {(book?.posted).slice(0,10)}</p>
              {
                user?.email ?
                <button  className='btn bg-sky-600 border-none mt-2'><label htmlFor={book._id} className="w-full" >Buy now</label></button>  :  
                <button  className='btn bg-sky-600 border-none mt-2'><Link to='/login' className="w-full" >Log in to buy</Link></button>    
              }
            </div>
          </div>
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