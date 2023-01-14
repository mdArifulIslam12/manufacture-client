import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts,setParts] = useState([])
    useEffect(()=>{
        fetch('https://manufacturer-server.onrender.com/parts')
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div>
            <div className='mb-16'>
            <h2 className='text-center mt-24 text-2xl font-bold uppercase relative'>Computer Parts</h2>
            <div style={{width:'120px',height:'3px'}} className='bg-secondary mx-auto rounded-lg'></div>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1'>
                {
                    parts.map(part=> <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;