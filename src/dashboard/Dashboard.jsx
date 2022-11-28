import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '../context/UserContext';
import AdminDashboard from './AdminDashboard';
import BuyerDashboard from './BuyerDashboard';
import SellerDashboard from './SellerDashboard';

const Dashboard = () => {
    const {user} = useContext(ProfileContext)
    const [role,setRole] = useState([])
    const email = user?.email
    console.log(email)
    useEffect(()=>{
        fetch(`https://relic-book-server-soliman-soad.vercel.app/user?email=${email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=> res.json())
        .then(data => setRole(data))
    },[email, user])
    
    if(role[0]?.role==='admin'){

        return (
            <AdminDashboard/>
        );
    }
    if(role[0]?.role==='seller'){

        return (
            <SellerDashboard/>
        );
    }
    if(role[0]?.role==='buyer'){

        return (
            <BuyerDashboard/>
        );
    }
};

export default Dashboard;