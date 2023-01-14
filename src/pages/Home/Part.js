import React from "react";
import { useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const { img, detail, name, price,available,minimum,_id } = part;
  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card lg:max-w-lg shadow-xl">
      <figure>
        <img src={img} alt="" style={{width:'400px',height:'400px'}} className="p-4" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">Price: ${price}</h2>
        <p className=" font-medium">Minimum order quantity: {minimum}</p>
        <p className=" font-medium">Available quantity: {available}</p>
        <p>{detail}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={()=>handleNavigate(_id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Part;
