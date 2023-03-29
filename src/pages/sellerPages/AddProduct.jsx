import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProfileContext } from '../../context/UserContext';
const AddProduct = () => {
    const {user} = useContext(ProfileContext)
    const [category ,setCategory]= useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('https://relic-book-server-soliman-soad.vercel.app/category')
        .then(res=>res.json())
        .then(data => setCategory(data))
    },[])
    const handleRegister = event =>{
        event.preventDefault();
        const seller = event.target.seller.value;
        const price = event.target.price.value;
        const name = event.target.name.value;
        const img = event.target.img.value;
        const contact = event.target.contact.value;
        const sellingPrice = event.target.sellingPrice.value;
        const location = event.target.location.value;
        const categroies = event.target.categroies.value;
        const time = new Date();
        const usedYear = event.target.used.value
        const condition = event.target.condition.value

        console.log(seller,categroies,contact,sellingPrice,location,price,name,img,time);
        const data = {
            name:name,
            img:img,
            Location:location,
            resellPrice: sellingPrice,
            oldPrice:price,
            posted:time,
            sellerName:seller,
            usedYear:usedYear,
            condition:condition,
            email: user.email,
            category: categroies
        }

        fetch(`https://relic-book-server-soliman-soad.vercel.app/books`,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data) 
        }
        )
        .then(res=>res.json())
        .then(data => {
            toast.success('Product added!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });    
            console.log(data)
            navigate('/books')
        })
            
    }        

    return (
        <div className='md:w-1/2 mx-auto'>
            <h1 className='text-2xl text-center mt-5 mb-3'>Add a book</h1>
            <form onSubmit={handleRegister} className="space-y-6 p-10 shadow-md ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			
			<input type="text" name="name" id="name" required placeholder="Book name" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			
			<input type="text" name="img" id="img" required placeholder="Book Img url" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="text" name="seller" id="seller" required defaultValue={user?.displayName} className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="tel" name="contact" id="contact" required placeholder='Enter your number' className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="text" name="price" id="price" required placeholder="Buying price" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="text" name="sellingPrice" id="sellingPrice" required placeholder="Selling price" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="text" name="location" id="Email" placeholder="location" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
			<input type="text" name="used" id="used" placeholder="Used time" className="w-full px-4 py-3 rounded-md border-gray-700 dark:bg-gray-200 text-gray-900 " />
		</div>
		<div className="space-y-1 text-sm">
        <select name='condition' className="select w-full px-4 py-3 rounded-md dark:bg-gray-200 text-gray-900">
        <option disabled selected>Pick product condition</option>
                <option value='Excellent'>Excellent</option>
                <option value='Good'>Good</option>
                <option value='fair'>fair</option>
              </select>
		</div>
		<div className="space-y-1 text-sm">
        <select name='categroies' required className="select w-full px-4 py-3 rounded-md dark:bg-gray-200 text-gray-900">
                {
                    category.map (e => <option value={e.name} key={e._id}>{e.name}</option>)
                }
                
              </select>
		</div>
		
		<button type='submit' className="block w-full p-3 text-center rounded-sm  bg-sky-600 text-white font-bold">Register</button>
	</form>
    <ToastContainer/>
        </div>
    );
};

export default AddProduct;