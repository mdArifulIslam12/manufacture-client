import React, { useEffect, useState } from 'react';
import Order from './Order';

const MangeOrder = () => {
    const [orders,setOrders] = useState([])
    useEffect(()=>{
        fetch('https://still-fjord-45302.herokuapp.com/order')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[orders])
    return (
        <div>
            <h2 className='text-xl font-bold text-center mt-12 mb-12'>Manege All Order</h2>
            <div className='my-12 mt-5 mb-12 grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
                {
                    orders.map(order => <Order key={order._id} order={order}></Order>)
                }
            </div>
        </div>
    );
};

export default MangeOrder;