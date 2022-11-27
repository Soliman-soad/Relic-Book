import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../context/UserContext';

const Dashboard = () => {
    const {user} = useContext(ProfileContext)
    const [role,setRole] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/user?email=${user?.email}`)
        .then(res=> res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    
    <div className="navbar bg-base-100">
  <div className="flex-1 lg:hidden">
    <h1 className="btn btn-ghost normal-case text-xl">Dashboard</h1>
  </div>
  <div className="flex-none">
  <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div>
</div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-sky-600 font-bold text-white">
    <h1 className="text-2xl py-5">Dashboard</h1> 
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;