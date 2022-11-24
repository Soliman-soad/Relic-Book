import React, { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProfileContext } from '../../context/UserContext';

const BookCard = ({book}) => {
	const {user} = useContext(ProfileContext)
  const navigate = useNavigate()
  const handleRegister= event =>{
    event.preventDefault();
    toast.success('Product sell!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      navigate('books')
  }
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={book?.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {book?.name}
      <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
    </div>
    </h2>
    <p><span className='font-bold '>Price: </span> ${book?.resellPrice}</p>
    <p><span className='font-bold '>Buying Price: </span> ${book?.oldPrice}</p>
    <p><span className='font-bold '>Used: </span> {book?.usedYear} months</p>
    <p><span className='font-bold '>Seller name: </span>{book?.sellerName}</p>
    <p className='text-gray-400'>{book?.posted}</p>
    <button className='btn bg-sky-600 border-none mt-2'><label htmlFor="my-modal-3" className="w-full" >Buy now</label></button>    
  </div>
  <input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
			<input type="text" name="location" id="location" defaultValue={book?.Location} className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		
		
		<button type='submit' className="block w-full p-3 text-center rounded-sm  bg-sky-600 text-white font-bold">Confirm</button>
	</form>
  </div>
</div>
</div>
    );
};

export default BookCard;