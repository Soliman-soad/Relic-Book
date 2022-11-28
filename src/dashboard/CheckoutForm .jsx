import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckoutForm = ({bookData}) => {
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
 const {resellPrice} = bookData
 const price = parseInt(resellPrice)
 console.log(bookData)
  useEffect(() => {

    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
        },
      body: JSON.stringify({price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resellPrice]);

  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    const {paymentIntent, error: confirmetionError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: bookData.user,
            bookName: bookData.name,
          },
        },
      },
    );
    if(confirmetionError){
      return
    }
    console.log(paymentIntent)
    if(paymentIntent.status ==='succeeded'){
      toast.success('payment completed')
      navigate('/dashboard')
      const add = {
        payment : 'paid' 
      }
      fetch(`http://localhost:5000/paymentData/${bookData._id}`,{
          method:'PATCH',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(add)
        })
        .then(res => res.json())
        .then(data=>{
        console.log(data)
      })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn border-none mt-5 btn-md bg-sky-600 ' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
  );
};
export default CheckoutForm