import React, { useContext, useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ProfileContext } from '../../context/UserContext';
import { BsZoomIn, BsCartPlusFill } from "react-icons/bs";
import { MdOutlineReportProblem } from "react-icons/md";

const BookCard = ({book}) => {
	const {user} = useContext(ProfileContext)
  const navigate = useNavigate()
  const [owner,setOwner] = useState([])
  useEffect(()=>{
    fetch(`https://relic-book-server-soliman-soad.vercel.app/owner`)
    .then(res=> res.json())
    .then(data => setOwner(data))
},[user])

  const handleCart = (id) =>{
    if(user){
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
        toast.done('Added to cart')
        navigate('/dashboard/myOrder')
      })
    }
    else{
      navigate('/login')
    }
  }
  const handleRegister= (event) =>{
    event.preventDefault();
    handleCart(book?._id)
      navigate('/books')
  }
  
  const handleReport = (id) => {
    if(user){
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
        toast.warn('Reported')
        navigate('/books')
      })
    }
    else{
      navigate('/login')
    }
  }
  
    return (
        <div className="w-[380px] h-full md:h-[320px] rounded-md border bg-base-100 shadow-xl mx-auto overflow-hidden">
          <label htmlFor={book._id}>
          <div  className='h-full grid grid-cols-3 group relative '>
            <div className='w-full h-full bg-sky-500 absolute opacity-0 flex justify-center items-center group-hover:opacity-70 transition ease-in-out duration-400'>
              <div className='text-xl bg-sky-800 opacity-100 text-white rounded-full p-3 hover:scale-125 cursor-pointer transition ease-in-out duration-400'>
                <BsZoomIn/>
              </div>
            </div>
          <div className='h-full '>
          <img src={book?.img} className='w-full h-full mx-auto object-cover ' alt={book?.name}/>
          </div>
          <div className='container h-full w-full col-span-2'>          
            <div className="card-body">
          <div className="border px-2 my-3  mx-auto rounded-full text-center border-pink-600 text-sm text-pink-600">{book.category}</div> 
              <h2 className="text-lg font-semibold mt-1 uppercase">
                {book?.name}
              </h2>
              <div className='my-2'>
              <p><span className='font-semibold text-md'>Price: </span> ${book?.resellPrice}</p>
              <p> <span className='font-semibold text-md'>Location: </span> {book?.Location}</p>
              <p><span className='font-semibold text-md '>Condition: </span> {book?.condition}</p>
              </div>
            </div>
          </div>
          </div>          
          </label>
  <input type="checkbox" id={book._id} className="modal-toggle" />
<div className="modal ">
  <div className="bg-white  p-8 relative max-w-8/12 md:max-w-[600px] overflow-x-hidden overflow-y-scroll max-h-screen">
    <label htmlFor={book._id} className="btn btn-sm btn-circle bg-red-500 border-none absolute right-2 top-2">✕</label>
    <form onSubmit={handleRegister} className="space-y-6 mb-4">
      <h1 className='text-center font-semibold text-lg mb-4 uppercase'>Buying information</h1>
		<div className='md:grid grid-cols-2 gap-4'>
      <div>
        <img src={book.img} alt="" className='h-8/12 md:h-full object-cover' />
      </div>
      <div>
        <p className='text-xs font-bold text-sky-400 mb-3'>{(book?.posted).slice(0,10)}</p>
        <h3 className='text-xl uppercase font-bold'>{book?.name}</h3>

    <div className="space-y-1 flex items-center">
    <h2 className='text-lg font-semibold'>Price:</h2>
			<input type="text" name="sellingPrice" id="sellingPrice" readOnly defaultValue={`$${book?.resellPrice}`} className="text-sky-500 font-bold text-lg " />

		</div>

      <p className='mt-4 mb-5'>Please provide your information so that you can receive the book:</p>

		<div className="space-y-1 text-sm hidden">
    <label htmlFor='email' className='font-bold'>Your email</label>
			<input type="text" name="email" id="email" readOnly defaultValue={user?.email} placeholder="Book Img url" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
    <label htmlFor='seller' className='font-bold'>Your name</label>
			<input type="text" name="seller" id="seller" required defaultValue={user?.displayName} className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
    <label htmlFor='contact' className='font-bold'>Contact number</label>
			<input type="tel" name="contact" id="contact" required  placeholder='Enter your number' className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		
		<div className="space-y-1 text-sm">
    <label htmlFor='location' className='font-bold'>Location</label>
			<input type="text" name="location" id="location"  placeholder='Meeting location' className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<button type='submit' onClick={()=> handleCart(book._id)} className=" mt-4 w-full p-3 text-center rounded-sm  bg-sky-600 text-white font-bold flex items-center justify-center"><span className='text-lg' ><BsCartPlusFill/></span> Add to cart</button>
      </div>
    </div>
	</form>
		<button  onClick={()=> handleReport(book._id)} className="btn border-none w-full p-3 text-center rounded-sm  bg-yellow-500 text-white font-bold flex items-center"><span className='text-xl '><MdOutlineReportProblem/></span> Report</button>
  </div>
</div>
<ToastContainer/>
</div>
    );
};

export default BookCard;