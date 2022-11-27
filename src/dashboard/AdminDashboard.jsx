import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminDashboard = () => {
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
      <li><NavLink>All sellers</NavLink></li>
      <li><NavLink>All buyers </NavLink></li>
      <li><NavLink>Reported items</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default AdminDashboard;