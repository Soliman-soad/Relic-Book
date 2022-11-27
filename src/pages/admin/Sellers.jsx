import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Sellers = () => {
    const[delt, setDelt] =useState(true);
    const [sellers, setSellers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/sellers')
        .then(res=>res.json())
        .then(data => setSellers(data))
    },[delt])
    const deleteUser = (id) => {
        fetch(`http://localhost:5000/sellers/${id}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      toast.error('Review deleted')
      setDelt(!delt)
    })
}
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
                <button className='btn border-none bg-red-600 text-white' onClick={()=>deleteUser(p._id)}> Delete</button>
            </td>
          </tr>)
      }
      
    </tbody>
  </table>
  <ToastContainer/>
</div>
    );
};

export default Sellers;