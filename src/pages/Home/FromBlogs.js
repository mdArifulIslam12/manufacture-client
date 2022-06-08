import React, { useEffect, useState } from 'react';
import FromBlog from './FromBlog';

const FromBlogs = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('https://still-fjord-45302.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='mt-12 mb-12'>
             <div>
                <h2 className='text-2xl font-bold'>From Blogs</h2>
                <div style={{width:'50px',height:'2px'}} className='bg-secondary'></div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-16'>
                {
                    blogs.map(blog => <FromBlog key={blog._id} blog={blog}></FromBlog>)
                }
            </div>
        </div>
    );
};

export default FromBlogs;