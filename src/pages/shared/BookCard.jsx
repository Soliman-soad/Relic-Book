import React from 'react';

const BookCard = ({book}) => {
	console.log(book)
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={book.img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {book.name}
      <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div> 
    </div>
    </h2>
    <p><span className='font-bold '>Price: </span> ${book.resellPrice}</p>
    <p><span className='font-bold '>Buying Price: </span> ${book.oldPrice}</p>
    <p><span className='font-bold '>Used: </span> {book.usedYear} months</p>
    <p><span className='font-bold '>Seller name: </span>{book.sellerName}</p>
    <p className='text-gray-400'>{book.posted} ago</p>
    <button className='btn bg-sky-600 border-none mt-2'>Buy now</button>    
  </div>
</div>
    );
};

export default BookCard;