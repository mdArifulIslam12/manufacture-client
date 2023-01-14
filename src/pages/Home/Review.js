import React, { useEffect, useState } from 'react';
import ReviewDetail from './ReviewDetail';

const Review = () => {
    const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('https://manufacturer-server.onrender.com/review')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className='mt-16 mb-16'>
            <div>
                <h2 className='text-2xl font-bold'>Review</h2>
                <div style={{width:'50px',height:'2px'}} className='bg-secondary'></div>
            </div>
            <div className='grid lg:grid-cols-3 gap-5 sm:grid-cols-1 mt-16'>
                {
                    reviews.map(review => <ReviewDetail key={review._id} review={review}></ReviewDetail>)
                }
            </div>
        </div>
    );
};

export default Review;