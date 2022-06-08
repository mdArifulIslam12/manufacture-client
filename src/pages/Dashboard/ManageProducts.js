import React, { useEffect, useState } from 'react';
import Part from '../Home/Part';

const ManageProducts = () => {
    const [parts,setParts] = useState([])
    useEffect(()=>{
        fetch('https://still-fjord-45302.herokuapp.com/parts')
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div className='mb-12'>
            <h2 className='mt-16 mb-16 text-2xl font-bold text-center'>Manage Product</h2>
            <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1'>
                {
                    parts.map(part=> <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;