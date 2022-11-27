import React from 'react';
import { NavLink } from 'react-router-dom';

const BuyerDashboard = () => {
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
  <label htmlFor="my-drawer-2" className="btn btn-sky-600 drawer-button lg:hidden">Open drawer</label>
  </div>
</div>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 bg-gray-100 font-bold ">
    <h1 className="text-2xl py-5">Dashboard</h1> 
      <li><NavLink>My Orders</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default BuyerDashboard;