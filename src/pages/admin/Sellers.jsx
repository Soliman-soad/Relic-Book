import React, { useEffect, useState } from 'react';

const Sellers = () => {

    const [sellers, setSellers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/sellers')
        .then(res=>res.json())
        .then(data => setSellers(data))
    },[])
    console.log(sellers)
    return (
        <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      
      { sellers.length ===0 ?<h1 className='text-center w-full'>No User</h1> :
        sellers.map((p,index) => <tr key={index}>
            <th>{index+1}</th>            
            <td>{p?.email}</td>
            <td>{p?.role}</td>
            <td>
                <button className='btn border-none bg-red-600 text-white mr-4'> Delete</button>
                <button className='btn border-none bg-orange-500 text-white '> Advertise</button>
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
    );
};

export default Sellers;