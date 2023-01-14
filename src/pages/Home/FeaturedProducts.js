import React, { useEffect, useState } from 'react';
import FeaturedProduct from './FeaturedProduct';

const FeaturedProducts = () => {
    const [features,setFeatures] = useState([])
    useEffect(()=>{
        fetch('https://manufacturer-server.onrender.com/feature')
        .then(res=>res.json())
        .then(data => setFeatures(data))
    },[])
    return (
        <div className='mt-12 mb-16'>
             <div>
                <h2 className='text-2xl font-bold'>Featured Product</h2>
                <div style={{width:'50px',height:'2px'}} className='bg-secondary'></div>
            </div>
            <div className='grid lg:grid-cols-4 gap-5 mt-12'>
                {
                    features.map(feature => <FeaturedProduct key={feature._id} feature={feature}></FeaturedProduct>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;