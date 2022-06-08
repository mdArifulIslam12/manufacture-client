import React from "react";
import Ratings from "../Ratings/Ratings";

const ReviewDetail = ({review}) => {
    const{name,_id,img,detail,rating} = review
  return <div className="lg:max-w-lg  shadow-xl p-4 flex rounded-xl">
      <div>
          <img className="rounded-full" src={img} style={{width:'90px',height:'90px'}} alt="" />
      </div>
      <div className="ml-3">
          <h2 className="font-medium">{name}</h2>
          <p>{detail}</p>
          <p>Rating: <Ratings key={_id} rating={rating}></Ratings></p>
      </div>
  </div>;
};

export default ReviewDetail;
