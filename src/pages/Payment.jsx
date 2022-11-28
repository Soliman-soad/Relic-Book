import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const bookData = useLoaderData();
    console.log(bookData)

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bookData[0].img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookData[0].name}</h1>
      <p className="py-2">Location: {bookData[0].Location}</p>
      <p className="py-2">Seller Name: {bookData[0].sellerName}</p>
      <p className="py-2">Price: {bookData[0].resellPrice}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Payment;