import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../shared/BookCard';
// import { useTitle } from '../custom-Hooks/useTitle';

const Advertise = () => {
    // useTitle('Services')
    const services = useLoaderData();
    return (
        <div>
            <div className='ml-10 mt-5 text-center'>
            <h1 className='text-5xl  uppercase'> Here is our book</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5'>
                {
                    services.map(book => <BookCard key={book._id} service={book}></BookCard>)
                }
                </div>
        </div>
    );
};

export default Advertise;