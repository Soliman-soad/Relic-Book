import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const SellerDashboard = () => {
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
        <Outlet/>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80  bg-gray-100 font-bold ">
    <h1 className="text-2xl py-5">Dashboard</h1> 
      <li><NavLink to='' end>Profile</NavLink></li>
      <li><NavLink to='myProduct' >My product</NavLink></li>
      <li><NavLink to='addProduct'>Add a product</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default SellerDashboard;