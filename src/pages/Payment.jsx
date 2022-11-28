import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from '../dashboard/CheckoutForm ';

const Payment = () => {
    const bookData = useLoaderData();
    const stripePromise = loadStripe('pk_test_51M94yRDAnOYrZ1lg7vj1OtzQoCeRJdA9VHLnBYwZ1o7hlxHa6C6PnGDmyODxUoEDP12zYdrJ4yAqH4lzU5GRR1B900uDJ8Ox3O');
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={bookData[0].img} alt='' className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{bookData[0].name}</h1>
      <p className="py-2">Location: {bookData[0].Location}</p>
      <p className="py-2">Seller Name: {bookData[0].sellerName}</p>
      <p className="py-2">Price: {bookData[0].resellPrice}</p>
      <div className=' py-5 my-5 bg-white px-2'>
      <Elements stripe={stripePromise}>
      <CheckoutForm  bookData={bookData[0]}/>
    </Elements>
      </div>
    </div>
  </div>
</div>
    );
};

export default Payment;