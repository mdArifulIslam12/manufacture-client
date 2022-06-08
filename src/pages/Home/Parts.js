import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts,setParts] = useState([])
    useEffect(()=>{
        fetch('https://still-fjord-45302.herokuapp.com/parts')
        .then(res=>res.json())
        .then(data=>setParts(data))
    },[])
    return (
        <div>
            <h2 className='text-center mt-24 text-2xl font-bold mb-16'>Computer Parts</h2>
            <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1'>
                {
                    parts.map(part=> <Part key={part._id} part={part}></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;