import React from 'react';

const FromBlog = ({blog}) => {
    const {img,date,name,detail} = blog
    return (
        <div className="card lg:max-w-lg shadow-xl">
        <figure className='w-100'><img src={img} alt="Shoes" style={{width:'395px'}} /></figure>
        <div className="card-body">
          <p>{date}</p>
          <h2 className="card-title">{name}</h2>
          <p>{detail}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read More</button>
          </div>
        </div>
      </div>
    );
};

export default FromBlog;