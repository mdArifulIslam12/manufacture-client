import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order';

const MyOrders = () => {
    const [orders,setOrders] = useState([])
    const [user]=useAuthState(auth)
   
    useEffect(()=>{
        const email = user.email
        fetch(`https://manufacturer-server.onrender.com/orders?email=${email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[orders])
    return (
        <div className='mx-5 mb-16'>
            <h2 className='text-center mt-16 mb-16 text-2xl font-bold'>My All Orders</h2>
           <div className='mt-5 mb-12 grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
           {
                orders.map(order=> <Order key={order._id} order={order}></Order>)
            }
           </div>
        </div>
    );
};

export default MyOrders;